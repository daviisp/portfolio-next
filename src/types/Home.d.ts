export interface Image {
  url: string;
  alt: string;
}

export interface Tech {
  tech: string;
  color: string;
  bgcolor: string;
  link: string;
}

export interface AboutMeInterface {
  title: {
    default: string;
    bold: string;
  };
  description: string;
  contact: {
    link: string;
    label: sting;
  };
  techs: Tech[];
}

export interface ProjectInterface {
  slug: string;
  name: string;
  image: Image;
}
