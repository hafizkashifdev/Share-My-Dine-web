import { Box, Typography, Grid } from "@mui/material";
import ChefTitle from "../../../explore-our-chef/chefsCard/chefTitle";
import Badge from "../../../blog/blogBadge";

export default function ChefBadge({ badge }) {
    return (
        <Grid container sx={{
            maxWidth: '628px',
            width: '100%',
            height: 'auto',
            gap: '62px',
    
        }}>
            <Grid items sx={{
                maxWidth: '100%',
                width: '100%',
                height: '100%',
            }} >
                <Box sx={{
                    maxWidth: 'auto',
                    width: '100%',
                    height: 'auto',
                    marginRight: 'auto'

                }}>
                    <ChefTitle card={badge} singleChef={true} />
                </Box>

                <Box sx={{
                    maxWidth: '100%',
                    width: '100%',
                    height: 'auto',
                    marginTop: '62px',
                    marginBottom: '62px',

                }}>
                    <Typography sx={{
                        maxWidth: '100%',
                        width: '100%',
                        height: 'auto',
                        fontFamily: 'Work Sans',
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '32px',
                        marginBottom: '25px'
                    }}>
                        Dietaries
                    </Typography>
                    <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', display: 'flex', flexWrap: 'wrap' }}>
                        {badge.Dietaries.map((e) => (
                            <Badge blog={e} />
                        ))}
                    </Box>

                </Box>

                <Box sx={{
                    maxWidth: '100%',
                    width: '100%',
                    height: 'auto',

                }}>
                    <Typography sx={{
                        maxWidth: '100%',
                        width: '100%',
                        height: 'auto',
                        fontFamily: 'Work Sans',
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '32px',
                        marginBottom: '25px'
                    }}>
                        Cuisines
                    </Typography>
                    <Box sx={{ maxWidth: '100%', width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap' }}>
                        {badge.cuisines.map((e) => (
                            <Badge blog={e} />
                        ))}
                    </Box>

                </Box>
            </Grid>
        </Grid>
    )
}