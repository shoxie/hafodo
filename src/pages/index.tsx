import { Box } from "@chakra-ui/react";
import { MdFacebook } from "react-icons/md";
import { RiInstagramLine } from "react-icons/ri";
import { LuPhone, LuFacebook } from "react-icons/lu";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative bg-black w-full h-screen top-0 left-0 z-10 overflow-hidden">
      <div className="absolute -top-40 right-0 rounded-full bg-[#5B6CFF] w-[500px] h-[500px] blur-3xl bg-opacity-30"></div>
      <div className="absolute -top-80 right-[30%] rounded-full bg-[#F4EB97] w-[600px] h-[600px] blur-3xl bg-opacity-30"></div>
      <div className="absolute top-[10%] -right-[10%] rounded-full bg-[#FF5D20] w-[700px] h-[700px] blur-3xl bg-opacity-30"></div>
      <div className="flex flex-col space-y-20 items-center justify-center h-full w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.1 }} className="flex flex-row">
          <span className="text-xl text-[#FFB000]">I&apos;m</span>
          <span className="text-6xl uppercase mt-2.5">Đỗ Nhật Hào</span>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.4 }} className="flex flex-row space-x-3 uppercase text-xl italic">
          <span>Photographer</span>
          <span>/</span>
          <span>Editor</span>
          <span>/</span>
          <span>Colorist</span>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.7 }}>
          <span className="text-6xl uppercase">Portfolio</span>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <div className="flex flex-row space-x-32 items-center justify-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="p-1.5 bg-white rounded-full"
          >
            <LuFacebook className="text-3xl text-black" />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="p-1.5 bg-white rounded-full"
          >
            <RiInstagramLine className="text-3xl text-black" />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="p-1.5 bg-white rounded-full"
          >
            <LuPhone className="text-3xl text-black" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;