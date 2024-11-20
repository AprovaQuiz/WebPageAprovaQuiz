import { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { Link, useNavigate } from "@remix-run/react";
import { FormEvent, useState } from "react";
import Swal from "sweetalert2";
import { axiosAprovaApi } from "~/configs/auth";
import auth from '~/styles/auth.css?url';

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: auth }
  ];
};

export const meta: MetaFunction = () => {
  return [{ title: "Registrar" }];
};

export default function Register() {

  const navigate = useNavigate();
  const [errorValidate, setErrorValidate] = useState(false);

  // email
  const [carregandoEmailMenssagem, setCarregandoEmailMessagem] = useState(false);

  // username
  const [carregandoUsernameMenssagem, setCarregandoUsernameMessagem] = useState(false);

  // senha
  const [senha, setSenha] = useState("")
  const [confirmaSenha, setConfirmaSenha] = useState("")
  const [carregandoConfirmaSenhaMenssagem, setCarregandoConfirmaSenhaMessagem] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito

    // Aplica a máscara de celular no padrão (XX) XXXXX-XXXX
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{5})(\d{0,4})$/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else {
      value = value.replace(/^(\d*)/, '($1');
    }

    setPhoneNumber(value);
  };

  async function handleForm(e: FormEvent) {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    if (data.senha != data.confirmarsenha)
      setErrorValidate(true)
    else {
      await axiosAprovaApi.post("/users",
        {
          nome: data.fullName,
          userName: data.username,
          dataNasc: data.dateOfBirth,
          numCelular: data.phoneNumber,
          email: data.email,
          senha: data.password,
          role: "normal"
        })
        .then(() => {
          Swal.fire({
            title: "Cadastrando",
            timer: 1000,
            timerProgressBar: true,
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading(null);

            },
          }).then(async (result) => {
            if (result.dismiss === Swal.DismissReason.timer)
              Swal.fire({
                title: "Cadastrado",
                allowEscapeKey: false,
                allowOutsideClick: false,
                icon: "success"
              }).then(() => {

                navigate("/login")
              })
          })

        })
        .catch((e) => {
          if (e.response?.data.message == "Email já cadastrado")
            setCarregandoEmailMessagem(true)
          else
            setCarregandoEmailMessagem(false)

          if (e.response?.data.message == "Username já em uso")
            setCarregandoUsernameMessagem(true)
          else
            setCarregandoUsernameMessagem(false)

        })
    }
  }

  function validaSenha() {
    setCarregandoConfirmaSenhaMessagem(false)

    if (senha != confirmaSenha) {
      setCarregandoConfirmaSenhaMessagem(true)
      return false
    }

    return true
  }
  return (
    <main>
      <div className="auth-container">
        <div className="auth-left">
          <h1>Bem-vindo!</h1>
          <p>Adoramos ter você aqui!</p>
          <p>
            Se você já tiver uma conta, pode fazer o <Link to="/Login">login aqui!</Link>
          </p>
        </div>
        <div className="auth-right">
          <h2>Registrar-se</h2>
          <form onSubmit={handleForm}>
            <input type="text" placeholder="Nome Completo" name="fullName" />
            <input type="date" placeholder="Data de nascimento" name="dateOfBirth" />
            <input type="tel" placeholder="Número de celular" name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <input type="text" placeholder="Crie um nome de usuário" name="username" />
            {carregandoUsernameMenssagem && (
              <p className='text-danger'>Nome de usuário em uso</p>
            )}
            <input type="email" placeholder="Email" name="email" />
            {carregandoEmailMenssagem && (
              <p className='text-danger'>E-mail em uso</p>
            )}
            <input type="password" placeholder="Senha" name="password" onChange={(e) => setSenha(e.target.value)} />
            {carregandoConfirmaSenhaMenssagem && (
              <p className='text-danger'>As senhas precisam ser iguais</p>
            )}
            <input type="password" placeholder="Confirme a senha" name="confirmPassword"
              onChange={(e) => setConfirmaSenha(e.target.value)}
              onBlur={validaSenha}

            />
            {errorValidate && (
              <p className='text-danger text-end'>Senha não conferem</p>
            )
            }
            <button type="submit">Registrar</button>
          </form>
        </div>
      </div>
    </main>
  );
}
