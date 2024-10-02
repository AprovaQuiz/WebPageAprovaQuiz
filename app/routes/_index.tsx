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

export default function Index() {
  return (
    <main>
      <Header />
      
      <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to <span className="sr-only">Remix</span>
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