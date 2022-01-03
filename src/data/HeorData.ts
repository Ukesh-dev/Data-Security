export interface HeroTypes {
  reverse: boolean;
  inverse: string | boolean;
  topLine: {
    text: string;
  };
  headline: string;
  description: string;
  buttonLabel: string;
  imgStart: string;
  linkTo?: string;
  img: string;
  alt: string;
  primary?: string;
  start: string;
}

export const heroOne: HeroTypes = {
  reverse: true,
  inverse: "true",
  topLine: {
    text: "Founded in 2012",
  },
  headline: "We've been in business for 9 years",
  description:
    "We have designed and implemented the best cloud security solutions",
  buttonLabel: "Find More",
  imgStart: "start",
  img: "./assets/svg/Deal.svg",
  start: "true",
  alt: "Deal",
};

export const heroTwo: HeroTypes = {
  reverse: false,
  inverse: "",
  topLine: {
    text: "Designed & Developed",
  },
  headline: "The best practices",
  description: "Our clients have had the best experience working with us",
  buttonLabel: "View Project",
  alt: "Connection",
  linkTo: "/more",
  imgStart: "start",
  img: "./assets/svg/Connection.svg",
  start: "true",
};

export const heroThree: HeroTypes = {
  reverse: true,
  inverse: "true",
  topLine: {
    text: "Highly reputed brand",
  },
  headline: "Why us? ",
  description:
    "Our 9 year experience have allowed us to use the most innovative technologies and methodologies",
  buttonLabel: "View Project",
  alt: "chartup",
  linkTo: "/download",
  imgStart: "",
  img: "./assets/svg/ChartUp.svg",
  start: "true",
};
