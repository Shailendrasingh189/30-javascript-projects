import React, { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@emotion/react";

const Navbar = ({ darkMode, toggleTheme }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Shailendra Singh Panwar
      </Typography>

      <IconButton checked={darkMode} onClick={toggleTheme}>
        {darkMode ? <WbSunnyIcon /> : <DarkModeIcon />}
      </IconButton>

      {isMobile ? (
        <>
          <IconButton
            edge="start"
            color="inherit"
            arial-label="menu"
            sx={{ m: 2 }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>Projects</MenuItem>
            <MenuItem onClick={handleMenuClose}>About</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
          </Menu>
        </>
      ) : (
        <Box>
          <Button color="inherit"  sx={{ ml: 2 }}>Home</Button>
          <Button color="inherit"  sx={{ ml: 2 }}>Projects</Button>
          <Button color="inherit"  sx={{ ml: 2 }}>About</Button>
          <Button color="inherit"  sx={{ ml: 2 }}>Contact</Button>
        </Box>
      )}

    </Toolbar>
  );
};

export default Navbar;
