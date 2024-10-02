import type { LinksFunction} from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import  mainCss  from "~/styles/main.css";

export const links: LinksFunction = () => {
  return [
      { rel: "stylesheet", href: mainCss },
      { rel: "shortcut icon", href: "/LogoAprovaQuiz.png", type: "image/x-icon" },
  ];
};

/* Por algum motivo o Cloudflare explode com o Import CSS na linha 4 e o export const na linha 6*/
/* Ainda vou ver como resolver, mas p enquanto isso ai ta quebrando o cloudflare, mas funciona normalmente Local*/

export default function Index() {
  return (
    <main>
      <Header />
      
      <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold ">
            Welcome to
          </h1>
          <div className="h-[144px] w-[434px]">
            <img
              src="/LogoAprovaQuiz.png"
              alt="AprovaQuiz"
              className="block w-full"
            />
          </div>
        </header>
        
      </div>
    </div>

      <Footer />
    </main>

  );
}