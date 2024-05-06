import React, { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {
  const [open, setOpen] = useState(false);
  const varients = {
    visible: {
      opacity: 1,
      x: 100,
      transition:{staggerChildren:0.2, type: "spring", stiffness: 1000, damping: 10}
    //   transition: { },
    },
    hidden: { opacity: 0 },
  };

  const items = ["item1", "item2", "item3", "item4"];
  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={varients}>
        {items.map((item) => (
          <motion.li variants={varients}>{item}</motion.li>
        ))}
      </motion.ul>
      {/* <button onClick={() => setOpen((prev) => !prev)}>Click <button> */}
    </div>
  );
};

export default Test;
// variants={varients}
// animate={open ? "visible": "hidden"}
//     animate={{opacity:1,scale:1,x:260}}
//   transition={{type:"spring",duration:2}}
