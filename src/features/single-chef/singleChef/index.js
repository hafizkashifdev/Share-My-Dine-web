import { Box, Container, Grid, Typography } from "@mui/material";
import { ChefCardData } from '../../explore-our-chef/chefsCard/cardData/index';
import ChefBadge from "./chefBadge";
import ChefAlbum from "./chefAlbum";
import ThemeButton from "../../../components/theme-button/theme-button";
// import MessageChefs from "../chefs/messageChefs";
import bg from '../../../assets/images/chef/chefCard/BG.png'

export default function SingleChefCard({ card }) {
    return (
        <>
            <Container sx={{ maxWidth: '1390px !important' }}>
                <Grid container sx={{
                    width: '100%',
                    height: '896px',
                    borderRadius: '12px',
                    border: 'solid 1px #C4C4C47A',
                    display: 'flex',
                    margin: 'auto',
                    position: 'relative',
                    '@media screen and (max-width: 1380px)': {
                        height: 'auto',
                    },
                }}>
                    <Box sx={{
                        position: 'absolute',
                        right: 0,
                        marginRight: '-70px',
                        marginTop: '-63px',
                        zIndex: -1,
                        '@media screen and (max-width: 1390px)': {
                            display: 'none'
                        },
                    }}>
                        <img src={bg} alt="Log" />
                    </Box>
                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5} >
                        <Box sx={{
                            maxWidth: '516px',
                            width: '100%',
                            height: '712px',
                            marginTop: '26px',
                            marginLeft: '26px',
                            '@media screen and (max-width: 1000px)': {
                                maxWidth: '90%',
                                width: '100%',
                                height: '600px',
                                marginTop: '26px',
                                marginLeft: '26px',
                            },
                            '@media screen and (max-width: 900px)': {
                                maxWidth: '60%',
                                width: '100%',
                                height: '400px',
                                margin: 'auto',
                            },
                        }}>
                            <img src={card.profileimage} alt="Log" style={{
                                maxWidth: '100%',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'top'
                            }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7} xl={7} >
                        <Box sx={{
                            maxWidth: '349px',
                            width: '100%',
                            height: '70px',
                            borderRadius: '0 12px 0 12px',
                            backgroundColor: '#D2FF3A',
                            display: 'flex',
                            marginLeft: 'auto',
                            '@media screen and (max-width: 900px)': {
                                marginTop: '10px',
                            },
                        }}>
                            <Typography sx={{
                                maxWidth: '100%',
                                width: '100%',
                                height: '100%',
                                fontFamily: 'Work Sans',
                                fontWeight: 500,
                                fontSize: '16px',
                                lineHeight: '32px',
                                textAlign: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                {card.price}
                            </Typography>
                        </Box>
                        <Box sx={{
                            marginLeft: '30px',
                            '@media screen and (max-width: 900px)': {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: '10px',
                                marginTop: '50px',
                            },
                        }}>
                            <ChefBadge badge={card} />
                        </Box>
                        <Box sx={{
                            marginTop: '62px',
                            marginLeft: '30px',
                            marginRight: '30px',
                            '@media screen and (max-width: 900px)': {
                                paddingLeft: '25px',
                                paddingRight: '25px',
                            },
                        }}>
                            <ThemeButton
                                title="Message Chef"
                                sx={{maxWidth: "100%"}}
                            />
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '50px',
                            marginLeft: '-400px',

                            '@media screen and (max-width: 1380px)': {
                                marginBottom: '10px',
                                marginTop: '50px',
                                marginLeft: '0px',
                                flexWrap: 'wrap',
                            },
                        }}>
                            {card?.album?.map((e) => (
                                <ChefAlbum image={e} />
                            ))}
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </>
    )
}