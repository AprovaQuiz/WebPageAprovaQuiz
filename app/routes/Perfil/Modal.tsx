import { FormEvent } from 'react';
import { Modal, Button, Form, ModalProps } from 'react-bootstrap';
import { axiosAprovaApi } from '~/configs/auth';
import { UserInterface } from './Route';
import Swal from 'sweetalert2';

interface ChangePasswordModalProps {
  modal: ModalProps,
  updateData: (user: UserInterface | undefined) => void
}

function ChangePasswordModal(props: ChangePasswordModalProps) {

  async function ChangePassword(e: FormEvent) {
    e.preventDefault()

    const formData = new FormData(e?.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    if (data.password != data.confirmPassword) {
      return Swal.fire({
        icon: "error",
        text: "Senhas Diferentes",
      });

    }

    return await axiosAprovaApi.post('/users/verifyPassword', { senha: data.actualPassword })
      .then(() => {

        const newDataUser: UserInterface | undefined = {
          senha: String(data.password),
        }

        props.updateData(newDataUser)

        if (props.modal.onHide)
          props.modal.onHide()

      })
      .catch((e) => {
        console.log(e)
        if (e.response?.data.message == "Senha inválida")
          Swal.fire({
            icon: "error",
            text: e.response?.data.message,
          });
      })

  }

  return (

    <Modal {...props.modal} centered>
      <form onSubmit={(e: FormEvent) => ChangePassword(e)}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100">Criar nova senha</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form.Group className="mb-3" controlId="formCurrentPassword">
            <Form.Label>Senha atual</Form.Label>
            <div className="input-group">
              <Form.Control type="password" placeholder="Senha atual" name='actualPassword' />
              <span className="input-group-text">
                <i className="bi bi-eye-slash"></i>
              </span>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNewPassword">
            <Form.Label>Crie a nova senha</Form.Label>
            <div className="input-group">
              <Form.Control type="password" placeholder="Nova senha" name='password' />
              <span className="input-group-text">
                <i className="bi bi-eye-slash"></i>
              </span>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirme a nova senha</Form.Label>
            <div className="input-group">
              <Form.Control type="password" placeholder="Confirme a nova senha" name='confirmPassword' />
              <span className="input-group-text">
                <i className="bi bi-eye-slash"></i>
              </span>
            </div>
          </Form.Group>

        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="primary" type="submit" >
            Salvar nova senha
          </Button>
        </Modal.Footer>

      </form>
    </Modal>


  )
}

export default ChangePasswordModal;
