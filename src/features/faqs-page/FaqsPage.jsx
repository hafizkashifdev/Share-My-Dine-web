import { Container, Grid } from "@mui/material";
import React from "react";
import { SearchBar } from "./SearchBar";
import { AccordionItem } from "../../components/accordion-item/accordion-item";
import {FAQSDATA} from './FaqsData'

const FaqsPage = () => {
  return (
    <>
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item md={4} xs={10}>
            <SearchBar />
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Grid item md={8} xs={10} sx={{my:'50px'}}>
            {FAQSDATA.map((item) => (
              <AccordionItem
                key={item.id}
                description={item.description}
                title={item.title}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FaqsPage;
