import { Button, SwipeableDrawer } from "@mui/material";
import React from "react";
import { APPHEADERDATA } from "../app-header-data";
import { CollapseableMenuItem } from "./collapseable-menu-item/collapseable-menu-item";
import { ReactComponent as Menu } from "../../../assets/svg/logo/menu.svg";
export const ResponsiveHeader = () => {
  const [state, setState] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };
  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <Menu />
      </Button>
      <SwipeableDrawer
        anchor={"right"}
        PaperProps={{
          sx: { width: "250px" },
        }}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {APPHEADERDATA.map((item, index) => (
          <CollapseableMenuItem
            onClose={toggleDrawer(false)}
            key={index}
            menu={item}
          />
        ))}
      </SwipeableDrawer>
    </>
  );
};
