import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  isRouteErrorResponse,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";

import main from "./styles/main.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: main },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" },
  { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.5.0/font/bootstrap-icons.min.css" },
  { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css", integrity: "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN", crossOrigin: "anonymous" },
  { rel: "icon", href: "/LogoAprovaQuiz.png", type: "image/png" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {/* <LiveReload /> */}
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}


export const meta: MetaFunction = ({ error }) => {

  const typedError = error as { status: string }

  return [{ title: error ? `Error Status "${typedError.status}"` : "" }];
};

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div>
      <div id='oopss'>
        <div id="error-text">
          <ErrorHandle />
          <p className='hmpg'>
            <Link to='/' className="back">Voltar para Home</Link>
          </p>
        </div>
      </div>
    </div>
  )
  function ErrorHandle() {
    if (isRouteErrorResponse(error)) {
      return (
        <>
          <span> {error.status} </span>
          <p>
            {error.statusText}
          </p>
          <p>{error.data}</p>
        </>
      );
    } else if (error instanceof Error) {
      console.log(error)
      return (
        <>
          <span>Error</span>
          <p>{error.message}</p>
        </>
      );
    } else {
      return <p>Unknown Error</p>;
    }
  }
}