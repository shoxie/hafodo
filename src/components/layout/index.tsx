import { Box } from "@chakra-ui/react";
import Header from "./header";
import { motion } from "framer-motion";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      as={motion.div}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 2,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 1,
        },
      }}
    >
      <div className="z-20 bg-black">
        <Header />
      </div>

      <main className="z-10 bg-black">{children}</main>
    </Box>
  );
};

export default Layout;