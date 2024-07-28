import Background from "@/components/background";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LuFacebook, LuPhone } from "react-icons/lu";
import { RiInstagramLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="min-h-[100vh] max-h-screen overflow-hidden relative flex items-center justify-center">
      <Background />

        <div className="w-full bg-[#5F5F5F] bg-opacity-[37%] rounded-2xl max-w-fit p-10">

          <div>
          <Image src="/images/contact-me.png" alt="contact" />
          </div>

          <div className="flex flex-row space-x-32 items-center justify-center pb-10">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="p-1.5 bg-white rounded-full"
            >
              <a href="https://www.facebook.com/profile.php?id=100089124546789" target="_blank">
                <LuFacebook className="text-3xl text-black" />
              </a>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="p-1.5 bg-white rounded-full"
            >
              <a href="https://www.instagram.com/hafodo" target="_blank">
                <RiInstagramLine className="text-3xl text-black" />
              </a>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="p-1.5 bg-white rounded-full"
            >
              <a href="tel:+84879556264">
                <LuPhone className="text-3xl text-black" />
              </a>
            </motion.div>
          </div>
        </div>
    </div>
  );
};

export default Contact;
