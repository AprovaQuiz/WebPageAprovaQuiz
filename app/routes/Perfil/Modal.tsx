import { Modal, Button, Form } from 'react-bootstrap';

function ChangePasswordModal({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-center w-100">Criar nova senha</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formCurrentPassword">
            <Form.Label>Senha atual</Form.Label>
            <div className="input-group">
              <Form.Control type="password" placeholder="Senha atual" />
              <span className="input-group-text">
                <i className="bi bi-eye-slash"></i>
              </span>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNewPassword">
            <Form.Label>Crie a nova senha</Form.Label>
            <div className="input-group">
              <Form.Control type="password" placeholder="Nova senha" />
              <span className="input-group-text">
                <i className="bi bi-eye-slash"></i>
              </span>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirme a nova senha</Form.Label>
            <div className="input-group">
              <Form.Control type="password" placeholder="Confirme a nova senha" />
              <span className="input-group-text">
                <i className="bi bi-eye-slash"></i>
              </span>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="primary" onClick={onClose}>
          Salvar nova senha
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ChangePasswordModal;
