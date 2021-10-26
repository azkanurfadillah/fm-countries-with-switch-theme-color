import React from 'react';
import { ChakraProvider, extendTheme, ThemeConfig, ColorModeScript } from "@chakra-ui/react"

import './App.css';

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <div className="App">

      </div>
    </ChakraProvider>
  );
}

export default App;
