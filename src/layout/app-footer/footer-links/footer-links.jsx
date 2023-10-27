import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const FooterLinks = ({ name, linksData }) => {
  return (
    <>
      <div className="footer-links-parent">
        <div className="heading sub-heading font-weight-500 white-color">
          {name}
        </div>
        <Box className="links">
          {linksData?.map((item) => (
            <Box
              key={item.id}
              component={Link}
              to={item.link}
              className="link-parent flex margin-top-0-8"
              justifyContent={{ xs: "center", lg: "flex-start" }}
            >
              {item.icon && (
                <div className="icon margin-right-0">
                  <item.icon style={{ maxWidth: "20px" }} />
                </div>
              )}
              <div className="link white-color secondary-title">
                {item.text}
              </div>
            </Box>
          ))}
        </Box>
      </div>
    </>
  );
};
