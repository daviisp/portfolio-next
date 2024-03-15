import Head from "next/head";
import AboutMe from "@/components/Home/AboutMe";
import { Projects } from "@/components/Home/Projects";
import { AboutMeInterface, ProjectInterface } from "@/types/Home";
import { GetStaticProps } from "next";
import Footer from "@/components/Home/Footer";

interface HomeProps {
  home: {
    aboutMe: AboutMeInterface;
    projects: ProjectInterface[];
  };
}

const Home = ({ home }: HomeProps) => {
  const { aboutMe, projects } = home;
  return (
    <>
      <Head>
        <title>Sobre mim | Davi Silva</title>
        <meta
          name="description"
          content="Meu nome é Davi Silva, sou um desenvolvedor Full Stack apaixonado pela programação, sempre buscando a evolução."
        />
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
        <AboutMe aboutMe={aboutMe} />
        <Projects projects={projects} />
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const res = await fetch(
    "https://gist.githubusercontent.com/daviisp/826a42cd1ad7e95d4e9f31bac7f81dbf/raw/94fcdf7574558e976af99b7e088a8584dff8c84b/gistfile1.txt"
  );
  const home = await res.json();

  return {
    props: { home },
  };
};

export default Home;
