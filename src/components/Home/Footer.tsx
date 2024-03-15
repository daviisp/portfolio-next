import { TfiEmail } from "react-icons/tfi";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t-2 border-t-d-gray-500  border-solid">
      <div className="mt-6">
        <div className="flex flex-col items-center gap-3 md:flex-row md:items-start md:justify-between">
          <span className="font-bold text-xl lg:text-2xl">DAVI</span>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/daviisp/" target="blank">
              <FaLinkedin className="h-7 w-7 lg:w-8 lg:h-10 hover:cursor-pointer hover:scale-110" />
            </a>
            <a href="https://github.com/daviisp" target="blank">
              <VscGithub className="h-7 w-7 lg:w-8 lg:h-10 hover:cursor-pointer hover:scale-110" />
            </a>
            <a href="mailto:davi.pimenta8@gmail.com">
              <TfiEmail className="h-7 w-7 lg:w-8 lg:h-10 hover:cursor-pointer hover:scale-110" />
            </a>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center md:items-start md:flex-row gap-3">
          <div className="flex items-center gap-3 md:flex md:flex-row md:items-center md:gap-3">
            <a href="mailto:davi.pimenta8@gmail.com">
              <TfiEmail className="h-7 w-7 lg:w-8 lg:h-10 hover:cursor-pointer hover:scale-110" />
            </a>
            <a
              href="mailto:davidev.contato@gmail.com"
              className="text-md md:text-lg"
            >
              davidev.contato@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
