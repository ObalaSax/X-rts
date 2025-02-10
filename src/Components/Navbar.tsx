import { ArrowBack, Face2 } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { navLinks } from "../Features/Constants/navLinks";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const handleOpenNav = () => {
    setOpenNav(true);
  };
  const handleCloseNav = () => {
    setOpenNav(false);
  };
  return (
    <Box>
      <AppBar position="fixed" color="primary">
        {/*-----MY NAVBAR------*/}
        <Toolbar>
          <Box>
            <IconButton
              onClick={handleOpenNav}
              sx={{ color: "white", background: "green" }}
            >
              <Face2 />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={openNav} anchor={"left"} onClose={handleCloseNav}>
        <Box>
          <IconButton onClick={handleCloseNav}>
            <ArrowBack />
          </IconButton>
          <List>
            {navLinks.map((navLinks) => (
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>{navLinks.navIcon}</ListItemIcon>
                  <ListItemText primary={navLinks.navTitle} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem>
              <ListItemButton>Noma</ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;
