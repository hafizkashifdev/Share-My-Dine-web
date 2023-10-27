import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import cloudImg from '../../../assets/images/work/feather_upload-cloud.png'
import ThemeButton from '../../../components/theme-button/theme-button'
import '../application-form/applicationform.scss'

function ApplicationForm() {
    return (
        <Container sx={{ maxWidth: '1696px !important', }} className='applicationfield'>
            <Container sx={{
                borderRadius: '8px',
                width: '100%',
                height: 'auto',
                border: '2px solid #6B728017'
            }}>
                <Grid container sx={{
                    maxWidth: '1578px',
                    width: '100%',
                    height: 'auto',
                    margin: 'auto',
                    //gap: '32px',
                    padding: '50px',
                    "@media screen and (max-width: 900px)": {
                        padding: '20px',
                    }
                }}>
                    <Grid item sx={{ width: '100%' }}>
                        <Box>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                color: '#273142',
                                marginBottom: '2rem',
                                '@media screen and (max-width: 381px)': {
                                    fontWeight: 600,
                                    fontSize: '28px',
                                    lineHeight: '28px',
                                }
                            }}>
                                Application Form
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "24px",
                                width: "100%",
                                flexWrap: { xs: "wrap", lg: "nowrap" },
                                marginBottom: '24px'
                            }}>
                            <Box sx={{ width: "100%" }}>
                                <label style={{
                                    fontWeight: 500,
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    color: '#4B5563',
                                }}>
                                    First Name<span style={{ color: '#FF0F0FD4' }}> *</span>
                                </label>
                                <TextField fullWidth placeholder="write here" sx={{marginTop: '4px'}} />
                            </Box>
                            <Box sx={{ width: "100%" }}>
                                <label style={{
                                    fontWeight: 500,
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    color: '#4B5563'
                                }}>
                                    Last Name<span style={{ color: '#FF0F0FD4' }}> *</span>
                                </label>
                                <TextField fullWidth placeholder="write here" sx={{marginTop: '4px'}} />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "24px",
                                width: "100%",
                                flexWrap: { xs: "wrap", lg: "nowrap" },
                                marginBottom: '24px'
                            }}>
                            <Box sx={{ width: "100%" }}>
                                <label style={{
                                    fontWeight: 500,
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    color: '#4B5563'
                                }}>
                                    Email<span style={{ color: '#FF0F0FD4' }}> *</span>
                                </label>
                                <TextField fullWidth placeholder="write here" sx={{marginTop: '4px'}} />
                            </Box>
                            <Box sx={{ width: "100%" }}>
                                <label style={{
                                    fontWeight: 500,
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    color: '#4B5563'
                                }}>
                                    Phone No<span style={{ color: '#FF0F0FD4' }}> *</span>
                                </label>
                                <TextField fullWidth placeholder="+ 44 -" sx={{marginTop: '4px'}} />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "24px",
                                width: "100%",
                                flexWrap: { xs: "wrap", lg: "nowrap" },
                                marginBottom: '24px'
                            }}>
                            <Box sx={{ width: "100%" }}>
                                <label style={{
                                    fontWeight: 500,
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    color: '#4B5563'
                                }}>
                                    House Number<span style={{ color: '#FF0F0FD4' }}> *</span>
                                </label>
                                <TextField fullWidth placeholder="A-5593" sx={{marginTop: '4px'}} />
                            </Box>
                            <Box sx={{ width: "100%" }}>
                                <label style={{
                                    fontWeight: 500,
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    color: '#4B5563'
                                }}>
                                    Address<span style={{ color: '#FF0F0FD4' }}> *</span>
                                </label>
                                <TextField fullWidth placeholder="5593 Annelise Drive" sx={{marginTop: '4px'}} />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                // gap: "24px",
                                width: "100%",
                                flexWrap: { xs: "wrap", lg: "nowrap" },
                                marginBottom: '24px'
                            }}>
                            <Box sx={{ width: "100%" }}>
                                <label style={{
                                    fontWeight: 500,
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    color: '#4B5563'
                                }}>
                                    Postcode<span style={{ color: '#FF0F0FD4' }}> *</span>
                                </label>
                                <TextField fullWidth placeholder="PA15 3DG" sx={{marginTop: '4px'}} />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                //gap: "24px",
                                width: "100%",
                                flexWrap: { xs: "wrap", lg: "nowrap" },
                                marginBottom: '24px',

                            }}>
                            <Box fullWidth sx={{ width: "100%", height: 'auto' }}>
                                <label style={{
                                    fontWeight: 500,
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    color: '#4B5563'
                                }}>Resume</label>
                                <Box sx={{
                                    border: `1px dashed #00000040`,
                                    height: '100%',
                                    marginTop: '4px',
                                    paddingLeft: '10px',
                                    paddingRight: '10px',
                                    "@media screen and (min-width: 600px)": {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    },
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        "@media screen and (max-width: 600px)": {
                                            marginTop: '15px'
                                        },
                                    }}>
                                        <img src={cloudImg} alt="Logo" style={{ width: "48px", height: "48px " }} />
                                    </Box>
                                    <Box sx={{
                                        margin: '15px 0px 25px 60px',
                                        paddingRight: '10px',
                                        "@media screen and (min-width: 600px)": {
                                            margin: '0px 56px 0px 24px',
                                        },
                                    }}>
                                        <Typography sx={{
                                            fontFamily: ' Work Sans',
                                            fontWeight: 400,
                                            fontSize: '13px',
                                            lineHeight: '15.25px',
                                            color: '#273142'
                                        }}>
                                            Select a file or drag and drop here
                                        </Typography>
                                        <Typography sx={{
                                            fontFamily: ' Work Sans',
                                            fontWeight: 400,
                                            fontSize: '12px',
                                            lineHeight: '14.08px',
                                            color: '#00000066'
                                        }}>
                                            JPG, PNG or PDF, file size no more than 10MB
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button sx={{
                                            fontFamily: ' Work Sans',
                                            fontWeight: 400,
                                            fontSize: '14px',
                                            lineHeight: '16.42px',
                                            color: '#FF611D',
                                            border: '1px solid'
                                        }}>
                                            Select file
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{
                                height: 'auto',
                                backgroundColor: '#FBFBFB',
                                padding: '16px',
                                borderRadius: '8px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Typography sx={{
                                    fontFamily: ' Work Sans',
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '28px',
                                    color: '#6B7280',
                                }}>
                                    In order to assess your cooking skills, we need to see
                                    images of food/dishes you have cooked.
                                    Applications without images in your CV are less likely to be considered.
                                    Alternatively (or in addition to), you can include a link to a social
                                    media account or website showing your food in your CV
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '24px' }}>
                                <ThemeButton
                                    title="Submit Application"
                                    sx={{ maxWidth: "373px" }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default ApplicationForm



