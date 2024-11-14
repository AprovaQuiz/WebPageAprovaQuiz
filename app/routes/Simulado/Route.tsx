import { MetaFunction } from "@remix-run/cloudflare";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";


export const meta: MetaFunction = () => {
  return [
    { title: "Simulado" },
  ];
}

export default function Simulado() {
  return (
    <main>
      <Header />
      
      

      <Footer />
    </main>

  );
}