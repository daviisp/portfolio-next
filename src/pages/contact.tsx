import CopyButton from "@/components/commons/CopyButton";
import Head from "next/head";

const contatos = () => {
  return (
    <>
      <Head>
        <title>Contatos | Davi Silva</title>
      </Head>
      <div className="mt-12 md:mt-24 space-y-8 md:space-y-12 px-6 md:px-32">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1>
        <ul className="table mx-auto space-y-6 md:space-y-12">
          <li className="md:text-xl">
            <span className="font-bold">E-mail</span>
            <div className="flex gap-1 md:gap-3 items-center">
              <a
                target="blank"
                href="mailto:davi.pimenta8@gmail.com"
                className="text-sm md:text-lg text-slate-300 truncate"
              >
                davi.pimenta8@gmail.com
              </a>
              <CopyButton textToCopy="davi.pimenta8@gmail.com" />
            </div>
          </li>
          <li className="md:text-xl">
            <span className="font-bold">Linkedin</span>
            <div>
              <a
                target="blank"
                href="https://www.linkedin.com/in/davi-silva-6235412a6/"
                className="text-sm md:text-lg text-slate-300 truncate"
              >
                www.linkedin.com/in/daviisp
              </a>
            </div>
          </li>
          <li className="md:text-xl">
            <span className="font-bold">GitHub</span>
            <div>
              <a
                target="blank"
                href="https://github.com/daviisp"
                className="text-sm md:text-lg text-slate-300 truncate"
              >
                https://github.com/daviisp
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default contatos;
