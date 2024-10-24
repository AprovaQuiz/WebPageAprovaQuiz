import { MetaFunction } from "@remix-run/cloudflare";
import { Header } from "~/components/HeaderSimples";
import '../../styles/auth.css';

export const meta: MetaFunction = () => {
  return [{ title: "Login" }];
};

export default function Login() {
  return (
    <main>
      <Header />
      <div className="auth-container">
        <div className="auth-left">
          <h1>Bem-vindo de volta</h1>
          <p>ao AprovaQuiz!</p>
          <p>
            Se você ainda não tiver uma conta, pode se <a href="/Registrar">registrar aqui!</a>
          </p>
        </div>
        <div className="auth-right">
          <h2>Entrar</h2>
          <form>
            <input type="text" placeholder="Insira seu email ou username" />
            <input type="password" placeholder="Senha" />
            <a href="/forgot-password" className="forgot-password">Esqueceu a senha?</a>
            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
    </main>
  );
}
