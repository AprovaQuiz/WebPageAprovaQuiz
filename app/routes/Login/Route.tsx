import { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { FormEvent } from "react";
import { Header } from "~/components/HeaderSimples";
import auth from '~/styles/auth.css?url';
import Swal from "sweetalert2";
import { axiosAprovaApi } from "~/configs/auth";
import { Link, useNavigate } from "@remix-run/react";
import { HandleHistoric } from "../Questoes.$questaoIndex/Questao";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: auth }
  ];
};

export const meta: MetaFunction = () => {
  return [{ title: "Login" }];
};

export default function Login() {
  const navigate = useNavigate();

  async function handleForm(e: FormEvent) {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    Swal.fire({
      title: "Realizando Login",
      timer: 1000,
      timerProgressBar: true,
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading(null);

      },
    }).then(async (result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        await axiosAprovaApi.post("/users/login", {
          email: data.email,
          senha: data.senha,
        })
          .then(r => {
            Swal.fire({
              title: "Logado",
              allowEscapeKey: false,
              allowOutsideClick: false,
              icon: "success"
            }).then(() => {
              localStorage.setItem("access-token", r.data.accessToken)

              if (localStorage.getItem("RespMarcadas"))
                return HandleHistoric(false)

              return navigate("/")
            })

          })
          .catch(e => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${e.code == 401 ? e.response?.data.message : e.message}`
            })
          })

      }
    });


  }


  return (
    <main>
      <Header />
      <div className="auth-container">
        <div className="auth-left">
          <h1>Bem-vindo de volta</h1>
          <p>ao AprovaQuiz!</p>
          <p>
            Se você ainda não tiver uma conta, pode se <Link to="/Registrar">registrar aqui!</Link>
          </p>
        </div>
        <div className="auth-right">
          <h2>Entrar</h2>
          <form onSubmit={handleForm}>
            <input type="text" placeholder="Insira seu email" name="email" />
            <input type="password" placeholder="Senha" name="senha" />
            <a href="/forgot-password" className="forgot-password">Esqueceu a senha?</a>
            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
    </main>
  );
}
