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

import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const blogUrl = "https://lornhillaker.com/blog";
  const facebookUrl =
    "https://www.facebook.com/people/Lorn-Hillaker/61556220563593/";
  const instagramUrl = "https://www.instagram.com/lornhillaker/";
  const twitterUrl = "https://twitter.com/lornhillaker";
  const menuOptions = [
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
      text: "Blog",
      icon: <FaBlog />,
      path: blogUrl,
    },
    {
      text: "X-Twitter",
      icon: <FaXTwitter />,
      path: twitterUrl,
    },
    {
      text: "Facebook",
      icon: <FaFacebookF />,
      path: facebookUrl,
    },
    {
      text: "Instagram",
      icon: <FaInstagram />,
      path: instagramUrl,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <h2>LORN HILLAKER</h2>
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((option) => {
          if (
            option.text === "About" ||
            option.text === "Testamonials" ||
            option.text === "Contact"
          ) {
            return (
              <a
                key={option.text}
                href={option.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                {option.text}
              </a>
            );
          }
          return (
            <a
              key={option.text}
              href={option.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              {option.icon}
            </a>
          );
        })}
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
                <ListItemButton
                  href={option.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
