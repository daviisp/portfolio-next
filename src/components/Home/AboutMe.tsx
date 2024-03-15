import Link from "next/link";
import Image from "next/image";
import AboutPhoto from "../../../public/me-about.png";
import { Roboto } from "next/font/google";
import { AboutMeInterface } from "@/types/Home";

// Icons
import { TfiEmail } from "react-icons/tfi";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

interface AboutMeProps {
  aboutMe: AboutMeInterface;
}
const AboutMe = ({ aboutMe }: AboutMeProps) => {
  const { title, description, contact, techs } = aboutMe;

  return (
    <main className="flex flex-wrap-reverse justify-center items-center py-8 gap-10 md:gap-32 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between">
      <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-[30rem]">
        <div>
          <h1 className="text-3xl leading-[5rem] xl:text-7xl">
            {title.default}&nbsp;
            <strong>{title.bold}</strong>
          </h1>
        </div>
        <div className="mb-12">
          <h2 className={`${roboto.className} mb-10`}>{description}</h2>
          <div className="flex mb-10 gap-6 justify-center xl:justify-start">
            <div>
              <a href="https://www.linkedin.com/in/daviisp/" target="blank">
                <FaLinkedin className="h-8 w-8 lg:w-8 lg:h-10" />
              </a>
            </div>
            <div>
              <a href="https://github.com/daviisp" target="blank">
                <VscGithub className="h-8 w-8 lg:w-8 lg:h-10" />
              </a>
            </div>
            <div>
              <a href="mailto:davi.pimenta8@gmail.com">
                <TfiEmail className="h-8 w-8 lg:w-8 lg:h-10" />
              </a>
            </div>
          </div>
          <Link
            href={contact.link}
            className="p-3 bg-d-gray-500 w-fit text-xl rounded-lg transition-all hover:opacity-80"
          >
            {contact.label}
          </Link>
        </div>
        <div>
          <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-3 text-xl">
            {techs.map(({ tech, bgcolor, color, link }, index) => (
              <Link href="" key={tech + index}>
                <li
                  style={{ backgroundColor: bgcolor, color: color }}
                  className="p-2 rounded-lg justify-center flex"
                >
                  {tech}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Image
          src={AboutPhoto.src}
          width={500}
          height={500}
          alt="Foto pessoal do portfolio"
          className="rounded-xl"
          unoptimized
        ></Image>
      </div>
    </main>
  );
};
export default AboutMe;
