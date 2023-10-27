import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Names = [
  "Calories",
  "Total Fat",
  "Carbs",
  "Sugars",
  "Protein",
  "Sodium",
  "Fiber",
];

const cal = [
  "230.13kl",
  "10.78g",
  "6.29g",
  "2.2g",
  "26.78g",
  "249.67g",
  "1.78g",
];

const Percentage = [
  "15%",
  "02%",
  "15%",
  "02%",
  "02%.",
  "12%",
  "06%",
];

const EatCard2 = () => {
  return (
    <Container>
      <Box
        sx={{
          background: "#D2FF3A",
          py: "10px",
          borderRadius:'8px 8px  0 0'
        }}
      >
        <Typography
          className="font-weight-500 font-family-Work"
          sx={{ fontSize: {md:"18px", xs:'16px'}, textAlign: "center" }}
        >
          Nutrition per serving
        </Typography>
      </Box>
      <Box sx={{
        border:'1px solid rgba(131, 164, 249, 0.15)',
        borderRadius:'0 0 8px 8px',
        p:{md:'10px', xs:'5px'},
      }}>
      <Grid container spacing={{sm:15, xs:5}}>
        <Grid item xl={4.3} md={3.5} xs={4} sm={4.6} sx={{ml:'10px'}}>
          {Names.map((name, index) => (
            <Typography
              key={index}
              className="font-weight-400 font-family-Work"
              sx={{pb:'5px'}}
            >
              {name}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={4}>
          {cal.map((value, index) => (
            <Typography
              key={index}
              className="font-weight-400 font-family-Work"
              sx={{pb:'5px'}}
            >
              {value}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={3}>
          {Percentage.map((value, index) => (
            <Typography
              key={index}
              className="font-weight-400 font-family-Work"
              sx={{pb:'5px'}}
            >
              {value}
            </Typography>
          ))}
        </Grid>
      </Grid>
      </Box>
      <Box sx={{
        border:'1px solid rgba(131, 164, 249, 0.15)',
        borderRadius:'8px',
        p:'10px',
        mt:'10px'
      }}>
      <Grid container>
        <Grid item xl={5.5} md={3.5} sm={3} xs={4.5}>
            <Typography
              className="font-weight-400 font-family-Work"
              sx={{mb:'20px'}}
            >
                Glycemic Index
            </Typography>
            <Typography
              className="font-weight-400 font-family-Work"
            >
                Glycemic Load
            </Typography>
        </Grid>
        <Grid item xl={4.5} md={6} sm={7} xs={3.5} sx={{mt:{md:'0', xs:'15px'},pl:{md:'0', xs:'10px'}}} >
            <Typography
              className="font-weight-400 font-family-Work"
              sx={{background: "#D2FF3A",borderRadius:'5px', textAlign:'center', mb:{sm:'10px',xs:'20px'},width:'44px', p:'5px'}}
            >
              49
            </Typography>
            <Typography
              className="font-weight-400 font-family-Work"
              sx={{ background: "#D2FF3A",borderRadius:'5px',textAlign:'center',width:'44px', p:'5px'}}
            >
              10
            </Typography>
        </Grid>
        <Grid item xl={1} md={1.5} xs={1} sx={{pl:'15px',mt:{sm:'0', xs:'20px'}}}>
            <Typography
              className="font-weight-400 font-family-Work"
              sx={{mb:'30px', color:'#F24E1E',}}
            >
              Low
            </Typography>
            <Typography
              className="font-weight-400 font-family-Work"
              sx={{pb:'5px', color:'#FFA412', }}
            >
              Moderate
            </Typography>
        </Grid>
        <Grid item xs={12} sx={{borderBottom: "1px solid rgba(131, 164, 249, 0.15)", mt:'20px'}}></Grid>
      </Grid>
      <Grid container justifyContent={'space-between'} sx={{pt:'30px'}}>
        <Grid item xs={6}>
            <Typography
              className="font-weight-400 font-family-Work"
              sx={{mb:'15px'}}
            >
                Health Score
            </Typography>
        </Grid>
        <Grid item xs={6} sx={{display:'flex', justifyContent:'flex-end'}}>
            <Typography
              className="font-weight-400 font-family-Work"
              sx={{pb:'5px', color:'#F24E1E', mb:'15px'}}
            >
              9.1/10
            </Typography>
            </Grid>
      </Grid>
      </Box>
    </Container>
  );
};

export default EatCard2;
