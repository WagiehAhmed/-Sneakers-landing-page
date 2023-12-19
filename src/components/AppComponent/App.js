import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Box,Toolbar  } from "@mui/material";

import AppBarComponent from "../AppBarComponent/AppBarComponent";
import HomeSection from "../HomeSection/HomeSection";

function App() {
  return (
    <Box>
      <AppBarComponent
        navItems={["home", "featured", "woman", "new", "sale"]}
      />
      <Toolbar />
      <HomeSection />
    </Box>
  );
}

export default App;
