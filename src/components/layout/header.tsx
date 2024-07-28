import { Box, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <motion.header
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.8 }}
      className="z-20 fixed w-full"
    >
      <div className="bg-white bg-opacity-[17%] shadow-sm py-5 rounded-b-3xl max-w-screen-2xl mx-auto">
        <HStack justify="space-between" align="center" px={20}>
          {NAV_ITEMS.map((item) => (
            <Box
              as={motion.span}
              className="text-gray-200 font-medium px-4 py-2 rounded-full bg-opacity-20 uppercase"
              whileHover={{ y: -10 }}
              key={item.name}
              animate={{
                background: router.pathname === item.href ? "bg-gray-900" : "none"
              }}
            >
              <Link href={item.href}>
                {item.name}
              </Link>
            </Box>
          ))}
        </HStack>
      </div>
    </motion.header>
  );
};

export default Header;