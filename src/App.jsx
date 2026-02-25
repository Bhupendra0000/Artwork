import { motion } from "framer-motion";
import "./App.css";

import artwork from "./assets/artwork.png";
import room from "./assets/room.png";
import truck from "./assets/truck1.png";
import home from "./assets/home.png";
import installed from "./assets/installed.png";
import status from "./assets/status.png";

const sectionVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

function App() {
  return (
    <div>

      <motion.section
        className="section"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1>Premium Artwork</h1>
        <motion.img
          src={artwork}
          alt="Artwork"
          whileHover={{ scale: 1.05 }}
        />
      </motion.section>

      <motion.section
        className="section"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Placed Inside Room</h2>
        <motion.img
          src={room}
          alt="Room"
          whileHover={{ scale: 1.05 }}
        />
      </motion.section>

      <motion.section
        className="section"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Buy Now</h2>
        <motion.button
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Congratulations! 🎉
        </motion.button>
      </motion.section>

      <motion.section
        className="section"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Packing Your Order</h2>
        <motion.img
          src={status}
          alt="Packing"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.section>

      <motion.section
        className="section"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Shipping</h2>
        <motion.img
          src={truck}
          alt="Truck"
          animate={{ x: [-200, 200] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
      </motion.section>

      <motion.section
        className="section"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Arriving at Home</h2>
        <motion.img
          src={home}
          alt="Home"
          whileHover={{ scale: 1.05 }}
        />
      </motion.section>

      <motion.section
        className="section"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Installed in Room</h2>
        <motion.img
          src={installed}
          alt="Installed"
          whileHover={{ scale: 1.05 }}
        />
      </motion.section>

    </div>
  );
}

export default App;