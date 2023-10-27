import { Box, Collapse, MenuItem, Slide } from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as ArrowDown } from "../../../../assets/svg/arrow-down.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { pageRoutes } from "../../../../routeList";

export const CollapseableMenuItem = ({ menu, onClose }) => {
  const [expand, setExpand] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          p: "20px 10px",
          "&:hover": { fontWeight: 500, color: "#292D32" },
          fontWeight: expand ? 600 : 400,
          transition: "all .1s ease",
          color: expand ? "#292D32" : "#6B7280",
        }}
        className="cursor-pointer flex align-center justify-space-between"
        aria-controls={`${menu.name}-menu`}
        aria-haspopup="true"
        onClick={
          menu.menuItems
            ? () => setExpand(!expand)
            : () => {
                setExpand(false);
                onClose();
                navigate(menu.href);
              }
        }
      >
        {menu.menuItems ? (
          <>
            <div className="padding-right-0 position-relative">
              {menu.name}
              {expand && (
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
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </div>
          </>
        ) : (
          <div className="padding-right-0 position-relative">
            <NavLink to={menu.href}>{menu.name}</NavLink>
          </div>
        )}

        {menu.menuItems && (
          <Box pt="2px" className="flex align-center">
            <ArrowDown
              style={{
                transition: "rotate .1s linear",
                rotate: expand ? "180deg" : "0deg",
              }}
            />
          </Box>
        )}
      </Box>
      <Collapse in={expand}>
        {menu.menuItems?.map((item) => (
          <MenuItem
            key={item.name}
            onClick={() => {
              setExpand(false);
              onClose();
            }}
            to={item.href}
            component={Link}
          >
            <Slide in={expand} direction="down" mountOnEnter unmountOnExit>
              <div>{item.name}</div>
            </Slide>
          </MenuItem>
        ))}
      </Collapse>
    </>
  );
};
