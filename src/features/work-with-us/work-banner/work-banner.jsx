import React from 'react'
import bgImg1 from '../../../assets/images/work/1.png'
import bgImg2 from '../../../assets/images/work/4.png'
import Img from '../../../assets/images/work/2.png'
import { Box, Container, Grid, Typography } from '@mui/material'

function WorkBanner() {
    return (
        <Container sx={{ maxWidth: '1526px !important' }}>
            <Grid container sx={{ width: '100%', height: '100%'}}>
            {/* , margin: 'auto' */}
                <Grid item sx={{
                    width: '100%',
                    height: '100%',
                     
                }}>
                    <Box sx={{
                        width: '100%',
                        height: '100%',
                        minHeight: '532px',
                        borderRadius: '30px',
                        background: `url(${bgImg1})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',
                        "@media screen and (max-width: 900px)": {
                            background: `url(${bgImg2})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        },
                    }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            left: '50%',
                            transform: 'translate(-50%, 0)',
                            top: '-70px'
                        }}>
                            <img src={Img} alt="Logo" style={{ width: "181px", height: "181px" }} />
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px',
                        }}>
                            <Typography sx={{
                                maxWidth: '1020px',
                                width: '100%',
                                height: 'auto',
                                fontFamily: 'Work Sans',
                                fontSize: '24px',
                                fontWeight: 400,
                                lineHeight: '44px',
                                color: '#FFFFFF',
                                marginTop:'120px'
                            }}>
                                <span style={{ fontWeight: 600, color: '#FFA412' }}>Share My Dine's</span> model provides a low-risk option
                                to increase household income without high startup costs.
                                Compared to the average UK startup cost of <span style={{ fontWeight: 600, color: '#CBDF46' }}>£5,000 </span>
                                and <span style={{ fontWeight: 600, color: '#CBDF46' }}>£22,756 </span>
                                spent in the first year, Share My Dine's model has close
                                to no startup costs. Business enterprises founded in the UK
                                in 2020 had a one-year survival
                                rate of <span style={{ fontWeight: 600, color: '#46D6DF' }}>92.9%</span>, and Share My Dine offers a growing community
                                that values economic empowerment and the joy of sharing good food.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default WorkBanner