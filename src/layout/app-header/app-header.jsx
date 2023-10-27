import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { ReactComponent as SMDLogo } from "../../assets/svg/logo/smd-logo.svg";
import { ReactComponent as Profile } from "../../assets/svg/profile.svg";
import { ReactComponent as ArrowDown } from "../../assets/svg/arrow-down.svg";
import { LinkDropdown } from "./link-dropdown/link-dropdown";
import { APPHEADERDATA, ListPaperSX, MenuSX } from "./app-header-data";
import { useState } from "react";
import { ResponsiveHeader } from "./responsive-header/responsive-header";
import useScreenResolution from "../../hooks/useScreenResolution";
import { Link, NavLink } from "react-router-dom";
import { pageRoutes } from "../../routeList";

export const AppHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { width } = useScreenResolution();
  const isMobile = width > 1200;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box className="smd-header">
      <AppBar
        position="relative"
        elevation={0}
        sx={{ bgcolor: "transparent", my: "12px", zIndex: 5 }}
      >
        <Container>
          <Grid container alignItems="center" justifyContent={"space-between"}>
            <Grid item xl={3} lg={2} md={1}>
              <NavLink to={pageRoutes.home}>
                <SMDLogo />
              </NavLink>
            </Grid>
            {isMobile ? (
              <>
                <Grid
                  className="links flex align-center justify-space-between d-none"
                  sx={{
                    borderRadius: "42px",
                    bgcolor: "rgba(229, 226, 224, 0.45)",
                    height: "48px",
                    p: "16px 28px",
                  }}
                  item
                  xl={6}
                  lg={8}
                  md={10}
                >
                  {APPHEADERDATA.map((item, index) => (
                    <LinkDropdown key={index} menu={item} />
                  ))}
                </Grid>
                <Grid
                  item
                  className="links flex align-center justify-end d-none"
                  xl={3}
                  lg={2}
                  md={1}
                >
                  <Button
                    onClick={handleClick}
                    disableElevation
                    className="primary-bg-color flex"
                    sx={{ p: "12px 24px", borderRadius: "15px 4px 15px 4px" }}
                    variant="contained"
                  >
                    <Profile />
                    <ArrowDown
                      style={{
                        marginLeft: "6px",
                        filter:
                          "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(566%) hue-rotate(151deg) brightness(105%) contrast(101%)",
                      }}
                    />
                  </Button>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    onClose={handleClose}
                    sx={MenuSX({
                      border: "1px solid rgba(107, 114, 128, 0.19)",
                      borderRadius: "12px",
                      background: "#FFF",
                      mt: "-15px",
                    })}
                    MenuListProps={ListPaperSX}
                  >
                    <MenuItem
                      className="flex justify-space-between align-center"
                      onClick={handleClose}
                      component={Link}
                      to={`${pageRoutes.login}`}
                    >
                      Login{" "}
                      <ArrowDown
                        style={{ rotate: "270deg", marginLeft: "6px" }}
                      />
                    </MenuItem>
                    <MenuItem
                      className="flex justify-space-between align-center"
                      onClick={handleClose}
                      component={Link}
                      to={`${pageRoutes.signup}?id=2`}
                    >
                      Guest{" "}
                      <ArrowDown
                        style={{ rotate: "270deg", marginLeft: "6px" }}
                      />
                    </MenuItem>
                    <MenuItem
                      className="flex justify-space-between align-center"
                      onClick={handleClose}
                      component={Link}
                      to={`${pageRoutes.signup}?id=1`}
                    >
                      Host{" "}
                      <ArrowDown
                        style={{ rotate: "270deg", marginLeft: "6px" }}
                      />
                    </MenuItem>
                    <MenuItem
                      className="flex justify-space-between align-center"
                      onClick={handleClose}
                      component={Link}
                      to={`${pageRoutes.signup}?id=3`}
                    >
                      Delegate
                      <ArrowDown
                        style={{ rotate: "270deg", marginLeft: "6px" }}
                      />
                    </MenuItem>
                  </Menu>
                </Grid>
              </>
            ) : (
              <>
                <ResponsiveHeader />
              </>
            )}
          </Grid>
        </Container>
      </AppBar>
    </Box>
  );
};
