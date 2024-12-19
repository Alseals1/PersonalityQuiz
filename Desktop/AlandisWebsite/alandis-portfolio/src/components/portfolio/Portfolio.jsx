import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/29757832/pexels-photo-29757832/free-photo-of-bosporus-bridge-view-from-istanbul-street.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumlibero enim nisi aliquam consectetur expedita magni eius ex corrupti! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores",
  },
  {
    id: 2,
    title: "Portfolio Website",
    img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1200",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumlibero enim nisi aliquam consectetur expedita magni eius ex corrupti! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores",
  },
  {
    id: 3,
    title: "Fitness App",
    img: "https://images.pexels.com/photos/9199849/pexels-photo-9199849.jpeg?auto=compress&cs=tinysrgb&w=1200",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumlibero enim nisi aliquam consectetur expedita magni eius ex corrupti! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores",
  },
  {
    id: 4,
    title: "Movement Website",
    img: "https://images.pexels.com/photos/7148908/pexels-photo-7148908.jpeg?auto=compress&cs=tinysrgb&w=1200",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumlibero enim nisi aliquam consectetur expedita magni eius ex corrupti! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores",
  },
];
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
