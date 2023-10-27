import { Box, Menu, MenuItem, Slide } from "@mui/material";
import { ReactComponent as ArrowDown } from "../../../assets/svg/arrow-down.svg";
import React from "react";
import { ListPaperSX } from "../app-header-data";
import { Link, NavLink } from "react-router-dom";

export const LinkDropdown = ({ menu }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          "&:hover": { fontWeight: 500, color: "#292D32" },
          fontWeight: Boolean(anchorEl) ? 600 : 400,
          transition: "all .1s ease",
          color: Boolean(anchorEl) ? "#292D32" : "#6B7280",
        }}
        className="cursor-pointer flex align-center"
        aria-controls={`${menu.name}-menu`}
        aria-haspopup="true"
        onClick={menu.menuItems ? handleClick : menu.onClick}
      >
        {menu.menuItems ? (
          <>
            <div className="padding-right-0 position-relative">
              {menu.name}
              {Boolean(anchorEl) && (
                <svg
                  className="position-absolute"
                  style={{ bottom: -10, left: 0 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="9"
                  viewBox="0 0 28 9"
                  fill="none"
                >
                  <path
                    d="M2 2C5.5 5.5 15.3 10.4 26.5 2"
                    stroke="#FF6838"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              )}
            </div>
            {menu.menuItems && (
              <Box pt="2px" className="flex align-center">
                <ArrowDown
                  style={{
                    transition: "rotate .1s linear",
                    rotate: Boolean(anchorEl) ? "180deg" : "0deg",
                  }}
                />
              </Box>
            )}
          </>
        ) : (
          <div className="padding-right-0 position-relative">
            <NavLink to={menu.href}>{menu.name}</NavLink>
          </div>
        )}
      </Box>
      {menu.menuItems && (
        <Menu
          id={`${menu.name}-menu`}
          anchorEl={anchorEl}
          sx={{
            ".MuiPaper-root": {
              boxShadow: "0px 8px 40px 0px rgba(0, 0, 0, 0.02)",
            },
            mt: "20px",
          }}
          MenuListProps={ListPaperSX}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem disabled className="font-family-work">
            <Slide
              easing={{ enter: "true", exit: "true" }}
              in={Boolean(anchorEl)}
              direction="down"
              mountOnEnter
              unmountOnExit
            >
              <div className="tertiary-title secondary-color font-family-work font-weight-600">
                {menu.name}
              </div>
            </Slide>
          </MenuItem>
          {menu.menuItems.map((item) => (
            <MenuItem
              to={item.href}
              onClick={handleClose}
              key={item.name}
              component={Link}
            >
              {item.name}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};
