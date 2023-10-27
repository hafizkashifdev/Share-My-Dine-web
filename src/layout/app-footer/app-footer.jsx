import { Box, Container, Divider, Grid } from "@mui/material";
import { ReactComponent as SMDLogo } from "../../assets/svg/footer/footer-logo.svg";
import SMDTextLogo from "../../assets/images/common/footer-logo.png";
import { FooterLinks } from "./footer-links/footer-links";
import {
  addressData,
  bookADineData,
  helpCenterData,
  socialIcons,
  workWithUsData,
} from "./footer-links/footer-links-data";
import { Link } from "react-router-dom";

export const AppFooter = () => {
  return (
    <>
      <Box
        className="smd-footer position-relative"
        sx={{
          bgcolor: "#FF611D",
          p: { xs: "50px 12px", lg: "50px 0" },
          m: "20px",
          borderRadius: "16px",
        }}
        textAlign={{ xs: "center", lg: "left" }}
      >
        <Container>
          <Box className="position-absolute" bottom="0" right="0%" zIndex={1}>
            <SMDLogo width="313px" height="285px" opacity={0.1} />
          </Box>

          <Grid
            container
            className="white-color"
            zIndex={2}
            position={"relative"}
          >
            <Grid item xs={12}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6} xl={3}>
                  <div className="smd-logo">
                    <SMDLogo width="84px" height="76px" />
                    <img src={SMDTextLogo} alt="logo" />
                  </div>
                  <div className=" secondary-title margin-top-3 white-color">
                    SHARE MY DINE (Orcalo Limited) is a company registered in
                    England and Wales with registered company number 12125945.
                  </div>
                  <Box
                    className="social-media-links flex margin-top-2"
                    justifyContent={{ xs: "center", lg: "flex-start" }}
                  >
                    {socialIcons.map((item) => (
                      <Box
                        key={item.id}
                        className="social-media-link margin-right-1 cursor-pointer"
                      >
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.icon}
                        </a>
                      </Box>
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <FooterLinks name="Address" linksData={addressData} />
                </Grid>
                <Grid item xs={12} md={6} xl={2}>
                  <FooterLinks name="Book A Dine" linksData={bookADineData} />
                </Grid>
                <Grid item xs={12} md={6} xl={2}>
                  <FooterLinks name="Work with us" linksData={workWithUsData} />
                </Grid>
                <Grid item xs={12} md={6} xl={2}>
                  <FooterLinks name="Help Center" linksData={helpCenterData} />
                </Grid>
              </Grid>
            </Grid>
            <Grid mt={{ xs: "30px", md: "90px" }} item xs={12}>
              <Grid
                container
                className="footer-end  flex justify-space-around align-center"
              >
                <Grid item xs={12} md={12} lg={6} className="text white-color">
                  © 2023 Share My Dine- All rights reserved
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  lg={6}
                  className="links flex "
                  marginTop={{ xs: "20px", lg: "0" }}
                  flexWrap={{ xs: "wrap", lg: "nowrap" }}
                  justifyContent={{ xs: "center", lg: "flex-start" }}
                >
                  <Link
                    to="/terms-and-condition"
                    className="secondary-title white-color"
                  >
                    Terms & Conditions
                  </Link>
                  <Link to="/privacy-policy">
                    <Box
                      sx={{
                        px: "9px",
                        mx: "9px",
                        borderLeft: "1px solid #FFFFFF",
                        borderRight: "1px solid #FFFFFF",
                      }}
                      className="secondary-title white-color"
                    >
                      Privacy Policy
                    </Box>
                  </Link>
                  <Link
                    to="/cookies-policies"
                    className="secondary-title white-color"
                  >
                    Cookies Policies
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
