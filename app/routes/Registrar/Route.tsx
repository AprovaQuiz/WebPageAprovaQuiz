import { MetaFunction } from "@remix-run/cloudflare";
import { Header } from "~/components/HeaderSimples";
import '~/styles/auth.css?url';

export const meta: MetaFunction = () => {
  return [{ title: "Registrar" }];
};

export default function Register() {
  return (
    <main>
      <Header />
      <div className="auth-container">
        <div className="auth-left">
          <h1>Bem-vindo!</h1>
          <p>Adoramos ter você aqui!</p>
          <p>
            Se você já tiver uma conta, pode fazer o <a href="/Login">login aqui!</a>
          </p>
        </div>
        <div className="auth-right">
          <h2>Registrar-se</h2>
          <form>
            <input type="text" placeholder="Nome Completo" />
            <input type="date" placeholder="Data de nascimento" />
            <input type="tel" placeholder="Número de celular" />
            <input type="text" placeholder="Crie um nome de usuário" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirme a senha" />
            <button type="submit">Registrar</button>
          </form>
        </div>
      </div>
    </main>
  );
}
