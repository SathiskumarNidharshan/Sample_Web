import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";

import DashboardIcon from "@material-ui/icons/Dashboard";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyles";

export default function SidenavData({ handleDrawerClose }) {
  const classes = useStyles();
  const listItemData = [
    { label: "Dashobard", link: "/", icon: <DashboardIcon /> },
    { label: "Services", link: "/blog", icon: <MedicalServicesIcon /> },
    { label: "Contact Us", link: "/link", icon: <ContactPhoneIcon /> },
    {
      label: "Notification",
      link: "/notification",
      icon: <NotificationsActiveIcon />,
    },
    { label: "Logout", link: "/logout", icon: <ExitToAppIcon /> },
  ];
  return (
    <List>
      {listItemData.map((item, i) => (
        <Button
          size='small'
          className={classes.navButton}
          onClick={() => handleDrawerClose()}
          key={i}>
          <ListItem
            exact
            component={NavLink}
            to={item.link}
            className={classes.navlinks}
            activeClassName={classes.activeNavlinks}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
    </List>
  );
}
