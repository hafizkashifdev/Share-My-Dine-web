import { Box, Container, Grid, Typography } from "@mui/material";
import bgImage1 from '../../assets/images/policy/1.png'
import bgImage2 from '../../assets/images/policy/2.png'

export default function Cookie() {
    return (
        <Container sx={{maxWidth: '1696px !important',zIndex:10,
        position:'relative',}}>

        <Grid container sx={{
            
            width: '100%',
            height: 'auto',
            margin: '72px auto 150px auto',
            background: `
            url(${bgImage1}) left top no-repeat,
            url(${bgImage2}) right top no-repeat`,
            backgroundSize: '40%',
            backgroundRepeat: 'no-repeat',

        }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{}}>
                <Typography style={{
                    color: '#1E293B',
                    fontFamily: 'Work Sans',
                    fontWeight: 700,
                    fontSize: '64px',
                    lineHeight: '76.8px',
                    justifyContent: 'center',
                    display: 'flex',
                }}>
                    Cookie Policy
                </Typography>

                <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', marginTop: '36px' }}>
                    <Typography style={{
                        fontFamily: 'Work Sans',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '32px',
                        color: '#6B7280',
                    }}>
                        This cookie policy ("Policy") describes the use of cookies on the Share My Dine website ("Site").
                        By using the Site, you consent to the use of cookies in accordance with this Policy.
                        What are cookies?  Cookies are small text files that are stored on your computer or
                        mobile device when you visit a website. They are widely used to make websites work,
                        or work more efficiently, as well as to provide information to the owners of the site.
                        What cookies do we use? We use both session cookies and persistent cookies on our Site.
                    </Typography>
                </Box>

                <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '10px', marginTop: '36px' }}>

                    <Typography style={{
                        fontFamily: 'Work Sans',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '32px',
                        color: '#6B7280',
                    }}>
                        <ul>
                            <li>
                                Session cookies are temporary cookies that are erased when you close your browser.
                                They are used to keep track of your progress during a single browsing session and do not collect any personal information.
                            </li>
                            <li style={{ marginTop: '10px' }}>
                                Persistent cookies are stored on your computer or mobile device until they expire or are deleted.
                                They help us remember your preferences and settings for future visits to our Site,
                                and also allow us to analyse user behaviour and improve our Site's performance.
                            </li>
                        </ul>
                    </Typography>

                </Box>

                <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', marginTop: '36px' }}>
                    <Typography style={{
                        fontFamily: 'Work Sans',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '32px',
                        color: '#6B7280',
                    }}>
                        We also use third-party cookies, which are set by other websites that we partner with
                        to provide certain features or services on our Site, such as social media sharing buttons or analytics tools.
                        These cookies may collect information
                        about your browsing habits and are subject to those websites'
                        own privacy policies.  How do we use cookies? We use cookies to:
                    </Typography>

                </Box>

                <Box sx={{lineHeight:'32px', maxWidth: '100%', width: '100%', height: 'auto', gap: '10px', marginTop: '36px' }}>

                    <Typography style={{
                        fontFamily: 'Work Sans',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '32px',
                        color: '#6B7280',
                    }}>
                        <ul>
                            <li>
                                Remember your preferences and settings for future visits.
                            </li >
                            <li style={{ marginTop: '10px' }}>
                                Provide personalized content and advertising.
                            </li>
                            <li style={{ marginTop: '10px' }}>
                                Analyse user behaviour and improve our Site's performance.
                            </li>
                            <li style={{ marginTop: '10px' }}>
                                Share data with third-party partners to provide certain features or services on our Site.
                            </li>
                        </ul>
                    </Typography>
                </Box>

                <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', marginTop: '36px' }}>
                    <Typography style={{
                        fontFamily: 'Work Sans',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '32px',
                        color: '#6B7280',
                    }}>
                        How can you control cookies? You can control the use of cookies on
                        our Site by adjusting your browser settings.
                        Most browsers automatically accept cookies, but you can usually modify
                        your settings to decline cookies or notify you when a cookie is being
                        placed on your device. Please note that if you disable cookies, some
                        features of our Site may not function properly.  Changes to this Policy  We may
                        update this Policy from time to time to reflect changes in our cookie practices.
                        We encourage you to review this Policy regularly for any updates or changes.
                        Contact us  If you have any questions or concerns about our use of cookies
                        or this Policy, please contact us at [insert contact information].
                    </Typography>

                </Box>

            </Grid>
        </Grid>
        </Container>
    )
}