import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import AppBarComponent from '../AppBarComponent/AppBarComponent';
import { Box } from '@mui/material';

function App() {
  return (
    <Box>
      <AppBarComponent navItems={['home','featured','woman','new','sale']}/>
    </Box>
  );
}

export default App;
