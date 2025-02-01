import Drawer from "@mui/material/Drawer";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { navLinks } from "../Features/Constants/navLinks";

function Navbar() {
  return (
    <Drawer open={true} variant="permanent" anchor="left">
      <Box
        position={"fixed"}
        bgcolor={"lightblue"}
        width={"15vw"}
        justifyItems={"center"}
      >
        <List>
          {navLinks.map((navItem) => (
            <ListItem disablePadding key={navItem.id}>
              <ListItemButton>
                <ListItemText primary={navItem.navTitle} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Navbar;
