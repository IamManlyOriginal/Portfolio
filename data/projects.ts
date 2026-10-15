export type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Гладкая Ты",
    description: "Салон эпиляции",
    link: "https://гладкая-ты.рф/",
    image: "images/project-1.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "CRYSTAL",
    description: "Клининг помещений",
    link: "https://клининг-кристал.рф/",
    image: "/images/project-2.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "КавПроект",
    description: "Печать чертежей.\nСайт времменно отсутвует",
    link: "https://example.com",
    image: "/images/project-3.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];