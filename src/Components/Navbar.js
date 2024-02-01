import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Blog",
      icon: <FaBlog />,
      path: "/",
    },
    {
      text: "About",
      icon: <InfoIcon />,
      path: "/about",
    },
    {
      text: "Testamonials",
      icon: <CommentRoundedIcon />,
      path: "/contact",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      path: "/contact",
    },
    {
      text: "X-Twitter",
      icon: <FaXTwitter />,
      path: "/https://twitter.com/lornhillaker",
    },
    {
      text: "Facebook",
      icon: <FaFacebook />,
      path: "https://www.facebook.com/people/Lorn-Hillaker/61556220563593/",
    },
    {
      text: "Instagram",
      icon: <FaInstagram />,
      path: "https://www.instagram.com/lornhillaker/",
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <h2>LORN HILLAKER</h2>
      </div>
      <div className="navbar-links-container">
        <a href="#">
          <FaBlog />
        </a>
        <a href="#">About</a>
        <a href="#">Testamonials</a>
        <a href="#">Contact</a>
        <a href="https://twitter.com/lornhillaker">
          <FaXTwitter />
        </a>
        <a href="https://www.facebook.com/people/Lorn-Hillaker/61556220563593/">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/lornhillaker/">
          <FaInstagram />
        </a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer
        anchor="right"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        className="drawer"
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((option) => (
              <ListItem key={option.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{option.icon}</ListItemIcon>
                  <ListItemText primary={option.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
