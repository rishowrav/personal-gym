import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";

export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Trainer",
    link: "#",
  },
  {
    id: 3,
    title: "Program",
    link: "#",
  },
  {
    id: 4,
    title: "Blogs",
    link: "#",
  },
  {
    id: 5,
    title: "Pricing",
    link: "#",
  },
];

export const EquipmentData = [
  {
    id: 1,
    title: "Yoga Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: GrYoga,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Muscles Equipments",
    desc: "It is a long established fact that a reader readable.",
    link: "/",
    icon: FaDumbbell,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fitness Equipments",
    desc: "It is a long established fact that a reader readable.",
    link: "/",
    icon: GiGymBag,
    delay: 0.9,
  },
];
