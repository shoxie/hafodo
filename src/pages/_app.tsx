import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { extendTheme } from '@chakra-ui/react'

// fonts
import '@fontsource/ibm-plex-mono/100.css';
import '@fontsource/ibm-plex-mono/200.css';
import '@fontsource/ibm-plex-mono/300.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import '@fontsource/ibm-plex-mono/600.css';
import '@fontsource/ibm-plex-mono/700.css';
import '@fontsource/ibm-plex-sans/100.css';
import '@fontsource/ibm-plex-sans/200.css';
import '@fontsource/ibm-plex-sans/300.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/ibm-plex-sans/700.css';
import Layout from "@/components/layout";
import { AnimatePresence } from "framer-motion";

const theme = extendTheme({
  fonts: {
    "ibm-plex-mono": [
      "IBM Plex Mono",
      "monospace",
    ],
    body: '"IBM Plex Sans", sans-serif',
  },
  default: {
    body: {
      bg: "black",
    },
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence mode="popLayout">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </ChakraProvider>
  );
}
