import { motion } from "framer-motion";

export default function HomeScreen() {
  return (
    <div
      id="home"
      className="grid w-full h-screen place-items-center md:py-64 py-[50%] svg-bg"
    >
      <div className="w-2/3 2xl:pl-40 h-full">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="leading-none text-4xl md:text-5xl font-light"
        >
          <span className="font-medium">Hello,</span> I&apos;m
          <br />
          <span className="font-light">Joosep Arrak</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="leading-none mt-[52px] text-3xl md:text-4xl font-medium"
        >
          Frontend
          <br />
          Software Engineer.
        </motion.h2>
      </div>
    </div>
  );
}
