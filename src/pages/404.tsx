import Head from "next/head";
import Link from "next/link";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 | Davi Silva</title>
      </Head>
      <div className="flex flex-col items-center gap-1 text-center mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
        <h1 className="text-5xl md:text-7xl font-bold">404</h1>
        <p className="flex flex-col space-y-8 md:space-y-4 md:text-xl">
          <span>Ops, não conseguimos encontrar essa página!</span>
          <span>
            Clique no botão abaixo para ser redirecionado para a página inicial
          </span>
        </p>

        <Link
          href="/"
          className={`${roboto.className} text-center bg-d-blue-500 rounded-xl text-black font-bold mt-5 md:mt-12 p-4 w-fit md:text-lg`}
        >
          Ir para a página Inicial
        </Link>
      </div>
    </>
  );
};
export default NotFound;
