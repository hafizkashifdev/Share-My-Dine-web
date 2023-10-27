import { Box, Container, Grid, Typography } from "@mui/material";
import bgImage1 from '../../assets/images/policy/1.png'
import bgImage2 from '../../assets/images/policy/2.png'

export default function Privacy() {
    return (
  
        <Container sx={{maxWidth: '1696px !important'}}>

        <Grid container sx={{
          
            width: '100%',
            height: 'auto',
            margin: '72px auto 150px auto',

        }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

            <div style={{
                        background: `url(${bgImage1}) left no-repeat`,
                        backgroundSize: '40%',
                        backgroundRepeat: 'no-repeat',
                    }}>

                    <Typography style={{
                        color: '#1E293B',
                        fontFamily: 'Work Sans',
                        fontWeight: 700,
                        fontSize: '64px',
                        lineHeight: '76.8px',
                        justifyContent: 'center',
                        display: 'flex',
                    }}>
                        Privacy Policy
                    </Typography>

                    <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '12px', marginTop: '36px' }}>
                        <Typography style={{
                            fontFamily: 'Work Sans',
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '32px',
                            color: '#6B7280',
                        }}>
                            Effective date: [Insert Date]<br />
                            At Share My Dine, we respect your privacy and are committed to protecting your personal information.
                            This privacy policy explains how we collect, use, disclose,
                            and protect your personal information when you use our website and services.
                            Information we collect We may collect the following types of personal information:
                            <ul style={{ marginTop: '12px' }}>
                                <li>
                                    Contact information, such as your name, email address, and phone number.
                                </li>
                                <li style={{ marginTop: '10px' }}>
                                    Profile information, such as your username, password, and preferences
                                </li>
                                <li style={{ marginTop: '10px' }}>
                                    Transaction information, such as details about your orders, payments, and delivery
                                </li>
                                <li style={{ marginTop: '10px' }}>
                                    Usage information, such as your browsing history, IP address, and device information
                                </li>
                                <li style={{ marginTop: '10px' }}>
                                    Feedback and communication, such as your reviews, comments, and support requests
                                </li>
                            </ul>
                        </Typography>
                    </Box>
                    </div>
                    <div style={{
                        background: `url(${bgImage2}) right top no-repeat`,
                        backgroundSize: '45%',
                    }}>
                    <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '12px', marginTop: '36px' }}>

                        <Typography style={{
                            fontFamily: 'Work Sans',
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '32px',
                            color: '#6B7280',
                        }}>
                            How we use your information We may use your personal information for the following purposes:
                            <ul style={{ marginTop: '12px' }}>
                                <li>
                                    To provide and improve our services, including processing orders, payments, and deliveries.
                                </li>
                                <li style={{ marginTop: '10px' }}>
                                    To personalize your experience and preferences, including recommendations and promotions
                                </li>
                                <li style={{ marginTop: '10px' }}>
                                    To communicate with you, including responding to your inquiries and feedback
                                </li>
                                <li style={{ marginTop: '10px' }}>
                                    To comply with legal and regulatory requirements, including fraud prevention and investigation
                                </li>
                                <li style={{ marginTop: '10px' }}>
                                    To analyse and monitor usage trends and patterns, including for marketing and advertising purposes
                                </li>
                            </ul>
                        </Typography>

                    </Box>
                    
                    <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '12px', marginTop: '36px' }}>

                        <Typography style={{
                            fontFamily: 'Work Sans',
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '32px',
                            color: '#6B7280',
                        }}>
                            How we share your information We may share your personal information with the following categories of third parties:
                            <ul style={{ marginTop: '12px' }}>
                                <li>
                                    Service providers, such as payment processors, delivery couriers, and hosting providers
                                </li>
                                <li style={{ marginTop: '10px' }}>
                                    Business partners, such as restaurants and food suppliers
                                </li>
                                <li style={{ marginTop: '10px' }}>
                                    To communicate with you, including responding to your inquiries and feedback
                                </li>
                                <li style={{ marginTop: '10px' }}>
                                    Regulatory authorities, such as law enforcement and government agencies
                                </li>
                                <li style={{ marginTop: '10px' }}>
                                    Affiliates and successors, such as in the event of a merger or acquisition
                                </li>
                            </ul>
                        </Typography>

                    </Box>

                    <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '12px', marginTop: '36px' }}>

                        <Typography style={{
                            fontFamily: 'Work Sans',
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '32px',
                            color: '#6B7280',
                        }}>
                            With your consent, such as for marketing or advertising purposes<br />
                            How we protect your information We take reasonable and appropriate
                            measures to protect your personal information fromunauthorized access, use,
                            disclosure, alteration, or destruction. These measures include physical, technical,
                            and administrative safeguards,such as encryption, firewalls, and access controls.
                            However, no method of transmission over the internet or electronic storage is 100% secure.
                            Your rights and choices You have certain rights and choices regarding your personal information, including:
                            <ul style={{ marginTop: '12px' }}>
                                <li>
                                    Access, update, or delete your personal information by logging into your account or contacting us.
                                </li >
                                <li style={{ marginTop: '10px' }}>
                                    Object to or restrict our processing of your personal information, subject to legal and contractual requirements.
                                </li>
                                <li style={{ marginTop: '10px' }}>
                                    Withdraw your consent for our processing of your personal information, if applicable
                                </li>
                                <li style={{ marginTop: '10px' }}>
                                    Lodge a complaint with a supervisory authority, such as the Information Commissioner's Office Cookies and other tracking technologies
                                </li>
                            </ul>
                        </Typography>
                    </Box>

                    <Typography style={{
                        fontFamily: 'Work Sans',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '32px',
                        color: '#6B7280',
                        marginTop: '36px',
                    }}>
                        We use cookies and other tracking technologies to enhance your user experience and analyse usage trends and patterns.
                        These technologies may collect information such as your browser type, device type, and operating system, as well
                        as your preferences and behaviour on our website. You can disable or delete cookies in your browser settings,
                        but this may affect certain features or functionality of our website.  Changes to this policy
                        We may update this privacy policy from time to time to reflect changes in our business practices,
                        legal requirements, or other reasons. We will notify you of any material changes by posting the updated
                        policy on our website or by other means of communication. Your continued use of our website and services
                        after the effective date of the updated policy constitutes your acceptance of the revised policy.
                        Contact us If you have any questions, comments, or concerns about this privacy policy or
                        our privacy practices, please contact us at [Insert Contact Information].

                    </Typography>
                    </div>
            </Grid>
        </Grid>
        </Container>
        
    )
}