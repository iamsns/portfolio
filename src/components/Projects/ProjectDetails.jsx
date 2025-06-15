import { Row, Col, Button } from 'react-bootstrap';
import { AnimatePresence, motion } from 'framer-motion';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.6 },
};

const ProjectDetails = ({ show, handleClose, project }) => {
  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            className="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 1 }}
            onClick={handleClose}
          />

          <motion.div
            className="custom-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Row className="">
              <Col md={6}>
                <img
                  src={project?.image}
                  alt="Project"
                  className="img-fluid w-100 h-100 object-fit-cover"
                  style={{ borderRadius: "3px" }}
                />
              </Col>
              <Col md={6} className="p-4 bg-white">
                <div className="d-flex justify-content-between align-items-start">
                  <h5 className="fw-bold">{project?.title}</h5>
                  <Button variant="light" onClick={handleClose} className="btn-close" />
                </div>
                <hr />
                {project?.description?.map((para, index) => {
                  return <p key={index} className="text-muted">
                    {para}
                  </p>
                }
                )}
                <table className="table text-white table-borderless mt-3">
                  <tbody>
                    {project?.client && (
                      <tr>
                        <th scope="row">Client:</th>
                        <td>{project.client}</td>
                      </tr>
                    )}
                    {project?.domain && (
                      <tr>
                        <th scope="row">Domain:</th>
                        <td>{project.domain}</td>
                      </tr>
                    )}
                    <tr>
                      <th scope="row">Languages:</th>
                      <td>{project?.languages}</td>
                    </tr>
                    <tr>
                      <th scope="row">Tech Stack:</th>
                      <td>{project?.techStack}</td>
                    </tr>
                    <tr>
                      <th scope="row">Role:</th>
                      <td>{project?.role}</td>
                    </tr>
                    <tr>
                      <th scope="row">Live URL:</th>
                      <td>
                        <a href={project?.link} target="_blank" rel="noreferrer" className="text-break">
                          {project?.link}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>

              </Col>
            </Row>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails;
