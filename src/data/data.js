import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

// Features Data
export const featuresData = [
  // {
  //   id: 1,
  //   title: "Business Stratagy",
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  // },
  {
    id: 1,
    icon: <AiFillAppstore />,
    title: "Application Development",
    des: <p>Developed dynamic, scalable, and SEO-friendly web applications using React.js and Next.js, leveraging component-based architecture to ensure efficient state management and seamless user experiences</p>,
  },
  // {
  //   id: 3,
  //   icon: <SiProgress />,
  //   title: "SEO Optimisation",
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  // },
  {
    id: 2,
    icon: <FaMobile />,
    title: "Mobile App Development",
    des: <p>Designed and developed cross-platform mobile applications for iOS and Android using React Native, ensuring seamless performance and native-like user experiences.</p>,
  },
  {
    id: 3,
    icon: <SiAntdesign />,
    title: "UX Design",
    des: 
      <p>Developed modern, responsive UIs using Tailwind CSS, employing utility-first classes for rapid and efficient styling</p>
    ,
  },
  // {
  //   id: 6,
  //   icon: <FaGlobe />,
  //   title: "Hosting Websites",
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  // },
];
