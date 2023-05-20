import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import { About } from '../dashboard/About';
import { Contact } from '../dashboard/Contact';
import { Education } from '../dashboard/Education';
import { Experience } from '../dashboard/Experience';
import Home from '../dashboard/Home';
import { Work } from '../dashboard/RecentWork';
import { Skills } from '../dashboard/Skills';
import DrawerList from './Drawer';
import CssBaseline from '@mui/material/CssBaseline';

const drawerWidth = 300;

export default function Layout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{ width: 50, display: { sm: 'none' }, height: 50, borderRadius: '50%', margin: '10px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, marginLeft: '12px' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </div>

      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <DrawerList setMobileOpen={setMobileOpen} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <DrawerList setMobileOpen={setMobileOpen} />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Home />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Work />
        <Contact />
      </Box>
    </Box>
  );
}
