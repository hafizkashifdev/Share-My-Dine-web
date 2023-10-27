import { Box, Container, Grid, Typography } from "@mui/material";
import bgImage1 from '../../assets/images/policy/1.png';
import bgImage2 from '../../assets/images/policy/2.png';
import bgImage3 from '../../assets/images/policy/3.png';

export default function TermsAndConditions() {
    return (
        <>
        <Container sx={{maxWidth: '1696px !important'}}>

            <Grid container sx={{
                maxWidth: '1150px',
                height: 'auto',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '72px auto 206px auto',
                background: `url(${bgImage1}) left no-repeat`,
                backgroundSize: '30%',
            }}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography sx={{
                        fontFamily: 'Work Sans',
                        fontWeight: 700,
                        fontSize: '64px',
                        lineHeight: '76.8px',
                        color: '#1E293B',
                        textAlign: 'center',
                        opacity: '96%',
                        marginBottom: '36px'
                    }}>
                        Terms & Conditions
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Work Sans',
                        fontWeight: 400,
                        fontSize: '20px',
                        lineHeight: '32px',
                        color: '#6B7280',
                        textAlign: 'center',
                        '@media screen and (max-width: 500px)': {
                            fontWeight: 400,
                            fontSize: '15px',
                            lineHeight: '25px',
                        }
                    }}>
                        Share My Dine(hereafter referred to as “Company”,
                        "ShareMyDine", "Service", “we”, "us" or "our")
                        an online social platform available at
                        (https://master.dxykpmm54ipu4.amplifyapp.com) which offers a
                        community marketplace for hosts and guests to have food events together.
                        Share My Dine connects hosts who offer their hosting skills, food and
                        facilities to guests seeking to participate in such food events/meals.
                        Each of Share My Dine's users, whether hosts or guests (“User” or “you”),
                        is invited to use and enjoy Share My Dine in accordance
                        with the terms and conditions hereunder.
                    </Typography>
                </Grid>
            </Grid>

            <Grid container sx={{
                
                height: 'auto',
                width: '100%',
                gap: '78px',
        
                margin: '0px auto 200px auto',
                
                // background: `
                // url(${bgImage2}) left top ,
                // url(${bgImage2}) right top `,
                // backgroundRepeat: 'repeat-y',
                // backgroundSize: 'auto',

            }}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div style={{
                        background: `url(${bgImage2}) right  no-repeat`,
                        backgroundSize: 'auto',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '16' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                                marginBottom: '12px'
                            }}>
                                1. Acceptance of the Terms
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '24px',
                                color: '#6B7280',
                                '@media screen and (max-width: 490px)': {
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '22px',
                                },
                                '@media screen and (max-width: 430px)': {
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                },
                                '@media screen and (max-width: 370px)': {
                                    fontWeight: 400,
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                }
                            }}>
                                "By accessing or using Share My Dine (or any portion of it), you acknowledge
                                that you have read and understood the following Terms of Use including
                                the Privacy Policy terms (collectively, the "Terms") and you agree to be
                                bound by them and to adhere to all applicable laws and regulations
                                regarding your conduct on Share My Dine. IF YOU DO NOT AGREE TO ANY OF
                                THE TERMS, DO NOT CONNECT TO, ACCESS OR USE SHARE MY DINE IN ANY MANNER.
                                Share My Dine reserves the right, at its sole discretion, to modify the
                                Site or Service, or these Terms from time to time, with or without any
                                advance notice. We will also update the "Last Updated Date" which appears
                                at the top of these Terms. By continuing to access or use the Site or
                                Service in any way after we have posted a modification, you are indicating
                                that you agree to be bound by the updated Terms. You can review the most
                                current version of the Terms at any time at:
                                <span style={{ color: '#FF611D' }}>
                                    https://master.dxykpmm54ipu4.amplifyapp.com/terms-and-conditions/
                                </span>
                                By accessing or using Share My Dine, you acknowledge that the Terms constitute
                                a binding and enforceable legal contract between the Share My Dine and
                                the person connecting to, accessing or using Share My Dine.

                            </Typography>

                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '16', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 500,
                                fontSize: '24px',
                                lineHeight: '32px',
                                color: '#1F2937',
                                textAlign: 'center'
                            }}>
                                Key Terms
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '32px',
                                color: '#6B7280',
                                '@media screen and (max-width: 490px)': {
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '22px',
                                },
                                '@media screen and (max-width: 430px)': {
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                },
                                '@media screen and (max-width: 370px)': {
                                    fontWeight: 400,
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                }
                            }}>
                                <ul>
                                    <li>
                                        <span style={{ color: '#1F2937', fontWeight: 500 }}>
                                            Site:
                                        </span>
                                        The website
                                        <span style={{ color: '#FF611D' }}>
                                            https://master.dxykpmm54ipu4.amplifyapp.com/
                                        </span>
                                        or any other platform through which Share My Dine makes its services available.
                                    </li>

                                    <li style={{ marginTop: '16px' }}>
                                        <span style={{ color: '#1F2937', fontWeight: 500 }}>
                                            Host:
                                        </span>
                                        A Share My Dine user who creates a food event that is available for reservations.
                                    </li>

                                    <li style={{ marginTop: '16px' }}>
                                        <span style={{ color: '#1F2937', fontWeight: 500 }}>
                                            Guest:
                                        </span>
                                        A Share My Dine member who reserves and attends these food events.
                                    </li>

                                    <li style={{ marginTop: '16px' }}>
                                        <span style={{ color: '#1F2937', fontWeight: 500 }}>
                                            Food Event:
                                        </span>
                                        An event hosted by the Share My Dine host, that encompasses a unique food experience together.
                                        A food event may include, but is not limited to, home meals, personal chef cook services, dinner parties.
                                    </li>

                                    <li style={{ marginTop: '16px' }}>
                                        <span style={{ color: '#1F2937', fontWeight: 500 }}>
                                            Reservation:
                                        </span>
                                        Any user who makes an online reservation for a food event with any Host.
                                    </li>

                                    <li style={{ marginTop: '16px' }}>
                                        <span style={{ color: '#1F2937', fontWeight: 500 }}>
                                            User:
                                        </span>
                                        Any person who registers for and creates a Share My Dine profile.
                                    </li>

                                    <li style={{ marginTop: '16px' }}>
                                        <span style={{ color: '#1F2937', fontWeight: 500 }}>
                                            User content:
                                        </span>
                                        content that a Share My Dine user posts, uploads, publishes, submits
                                        or transmits to be made available through the Site or Services.
                                        YOU ACKNOWLEDGE AND AGREE THAT, BY ACCESSING OR USING THE SITE, APPLICATION OR
                                        SERVICES OR BY DOWNLOADING OR POSTING ANY CONTENT FROM OR ON THE SITE OR THROUGH
                                        THE SERVICES, YOU ARE INDICATING THAT YOU HAVE READ, AND THAT YOU UNDERSTAND AND
                                        AGREE TO BE BOUND BY THESE TERMS, WHETHER OR NOT YOU HAVE REGISTERED WITH THE SITE
                                        AND APPLICATION. IF YOU DO NOT AGREE TO THESE TERMS, THEN YOU HAVE NO RIGHT TO
                                        ACCESS OR USE THE SITE OR SERVICE.
                                        If you accept or agree to these Terms on behalf of a company or other legal entity,
                                        you represent and warrant that you have the authority to bind that company or other
                                        legal entity to these Terms and, in such event, “you” and “your” will
                                        refer and apply to that company or other legal entity.
                                    </li>
                                </ul>
                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '12', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937'
                            }}>
                                2. What is Share My Dine?
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                <div>
                                    Share My Dine is an online platform which facilitates to bridge a
                                    connection between the host and guest. Here the host runs a restaurant
                                    business from the comfort of their home where they invite guests to
                                    dine or share a meal together. Share My Dine is designed to enable
                                    Hosts to offer their hospitality, food and home facilities and allowing
                                    other Guests to participate in food events they create and list on the Site.
                                    At Share My Dine, we take great measures to provide you with the best
                                    experience you can have while using the Service; However, Share My Dine
                                    has no control over the conduct of any Hosts, Guests or any other User
                                    and disclaims all liability in this regard. Hosts and Guests are advised
                                    to thoroughly examine and check all necessary details related to their
                                    Food Event and/or Reservation with their respective Guests and Hosts
                                    prior to any engagement.
                                </div>
                                <div style={{ marginTop: '12px' }}>
                                    Share My Dine is an online platform which facilitates to bridge a
                                    connection between the host and guest. Here the host runs a
                                    restaurant business from the comfort of their home where they
                                    invite guests to dine or share a meal together. Share My Dine is
                                    designed to enable Hosts to offer their hospitality, food and home
                                    facilities and allowing other Guests to participate in food events
                                    they create and list on the Site.At Share My Dine, we take great
                                    measures to provide you with the best experience you can have while
                                    using the Service; However, Share My Dine has no control over the
                                    conduct of any Hosts, Guests or any other User and disclaims all
                                    liability in this regard. Hosts and Guests are advised to thoroughly
                                    examine and check all necessary details related to their Food Event
                                    and/or Reservation with their respective Guests and
                                    Hosts prior to any engagement.
                                </div>

                            </Typography>
                        </Box>
                    </div>

                    <div style={{
                        background: `url(${bgImage3}) left top no-repeat`,
                        backgroundSize: 'auto',
                    }}>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937'
                            }}>
                                3. Registration on Share My Dine and Personal Profile
                            </Typography>

                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                marginTop: '12px',
                                color: '#6B7280'
                            }}>
                                The Site and Service are intended solely for persons who are 18 years of age
                                or older. By registering to Share My Dine, you confirm and warrant that you
                                are 18 years of age or older and that you accept the Terms. If you are under
                                18 years of age, you are expressly prohibited
                                from using the Service on behalf of yourself or any other person or entity,
                                and you must not provide Share My Dine with any of your personal details.
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '24px',
                                lineHeight: '32px',
                                color: '#1F2937',
                                marginTop: '24px',
                            }}>
                                Hosts
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px',
                            }}>
                                To register on Share My Dine and enjoy the Service as a Host, all you
                                need to do is to enter the Host registration segment on the Service
                                and fill out your profile page. You will receive a confirmation for
                                joining our Service via email to the email address you provided us
                                upon registration.
                                You may also join and connect to the Site using a third party account
                                (e.g. Facebook). By registering to the Service with a third-party account
                                (e.g., Facebook), you hereby grant us permission to access and use your
                                information through that service, as permitted by that third party service,
                                and to store your log-in credentials for that service to enable the Service.
                                If you do not use a third party account, you may become a registered User of
                                Share My Dine by providing us with several details about yourself. The details
                                we need in order to enroll you, consist of, among others, your real name, active
                                email address, your valid phone number and country of residence. At the end of the
                                registration process you will be asked to choose a password, which must be kept in
                                confidence at all times. You agree to not disclose your username and password to any
                                third party. The details you voluntarily provide us shall be maintained according to our Privacy Policy.
                                To register on Share My Dine you are committed to provide complete,
                                accurate and honest information and to keep it permanently up-dated.
                                Note that either as a Host or as a Guest, you will be able to edit your
                                personal profile information at any point, adding or removing any
                                information as you see fit. Information included in your profile which is
                                marked as public shall be available to other Users on Share My Dine and to all Internet users.
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '24px',
                                lineHeight: '32px',
                                color: '#1F2937',
                                marginTop: '24px',
                            }}>
                                Guests
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px',
                            }}>
                                To become a registered Guest on Share My Dine, you may either
                                join using a third party account (e.g. Facebook) or open a
                                User account directly on the Service. By registering to the Service
                                with a third-party account (e.g., Facebook), you hereby grant us
                                permission to access and use your information through that service,
                                as permitted by that third party service, and to store your log-in
                                credentials for that service to enable the Service. If you do not
                                use a third party account, you may become a registered User of the
                                Service by providing us with several details about yourself. The details
                                we need in order to enroll you, consist of, among others, your real name,
                                active email address, your valid phone number and country of residence.
                                In the end of the registration process you will be asked to choose a password,
                                which must be kept in confidence at all times. The details you
                                voluntarily provide us shall be maintained according to our
                                Privacy Policy. You agree to not disclose your username and password to any third party.
                                To register on Share My Dine you are committed to provide complete, accurate and honest
                                information and to keep it permanently up dated.
                                Note that either as a Guest or as a Host, you will be able to edit your
                                personal profile information at any point, adding or removing any information
                                as you see fit. Information included in your profile which is marked as public
                                shall be available to other Users on Share My Dine and all Internet users.
                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                4. Reservation and Billing Arrangements
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                <div>
                                    As a registered User, you are welcome to make an online reservation with
                                    any Host offering his services on Share My Dine("Reservation").
                                    As a Guest, you may pay for your Reservation by using the PayPal service.
                                    As part of the Reservation process you will be required to fill in some
                                    details regarding your Reservation (for example, any food preferences or
                                    allergies you may have) ("Contact Form"). The Contact Form will be
                                    automatically delivered to your respective Host. You will then wait
                                    to receive a confirmation from the Host you made a certain Reservation with.
                                </div>
                                <div style={{ marginTop: '12px' }}>
                                    Once your Reservation is confirmed, the Company will notify you
                                    by email that your Reservation is confirmed ("Reservation Confirmation")
                                    and then will charge you for the full service amount, which includes a Service
                                    Fee of 15% of the total amount ("Reservation Amount"). The Reservation
                                    Amount charged from you will be held by Share My Dine, in compliance with
                                    any applicable law, and will only be transferred to the respective Host
                                    24 hours following your arrival to your Reserved Food Event and provided
                                    that no cancellation notification was made by you before that day
                                    (please see our Cancelation Policy (Section 6)).
                                </div>

                            </Typography>

                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                5. Fees and Payments
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                <div>
                                    As a Guest, in order to make an online Reservation on Share My Dine,
                                    you will be requested to provide the Company with additional
                                    personal information, such as home address, phone number, etc. Note
                                    that we will not disclose any of your personal information to others,
                                    except for your name, contact details and the Contact Form you filled
                                    in, in order to place your Reservation with the respective Host and to
                                    provide you with the Service.
                                </div>
                                <div style={{ marginTop: '12px' }}>
                                    Hosts are required to post prices including all applicable taxes on their
                                    Food Event listings on Share My Dine. Reservations for Food Events may be
                                    subject to taxation, as required or ordered by the applicable tax law in
                                    the country in which respective Hosts reside.<br />
                                    It is the responsibility of the Hosts to determine the
                                    applicable taxes and are hereby comply with the applicable
                                    tax law and pay any taxes levied in connection with Reservations
                                    made of their respective Food Events via Share My Dine or the
                                    payment thereof they represent and warrant that they will pay
                                    such taxes in time and in compliance with the applicable tax law.
                                    Note that failing to pay such taxes, as ordered by applicable tax
                                    law or to comply with any provisions the applicable tax law may
                                    prevent such Hosts from continuing publishing their Food Events
                                    on Share My Dine.<br />
                                    The Reservation Amount charged from Guests will be held by
                                    Share My Dine and in compliance with any applicable law,
                                    and will only be transferred to the respective Host 24 hours
                                    following Guest arrival to Host's Reserved Food Event and
                                    provided that no cancellation notification was made before
                                    that day by either the Guest or the Host
                                    (please see our Cancelation Policy (Section 6).<br />
                                    As a guest, you represent and warrant that you will
                                    pay to your Host all fees and taxes incurred with your
                                    Reservation in a timely manner and in compliance with
                                    Share My Dine's fee schedule. Failing to settle your
                                    payments including any taxes incurred with your Reservation,
                                    will prevent you from executing your Reservation with Share
                                    My Dine and from further using Share My Dine. Notwithstanding
                                    the above, Company shall reserve the right, but have no
                                    obligation, to withhold any applicable taxes and obtain
                                    any other remedies available by law.<br />
                                    Share My Dinemay, at any time and at its sole discretion,
                                    convert a free of charge service to a fee-based service,
                                    and change rates and payment terms. Share My Dine may deduct
                                    foreign currency processing costs from any payment. Any changes
                                    in Share My Dine's fees will take effect immediately after being
                                    posted on Share My Dine.<br />
                                    Share My Dine may allow the Reservation amounts to be seen in
                                    different currencies. Although this information is believed to
                                    be accurate, we do not guarantee such accuracy. You hereby agree
                                    and acknowledge that these views of the Reservation amounts are
                                    for your convenience and informational purposes only, and that the
                                    applicable exchange rate used for currency conversion processing may
                                    not be identical to the applicable market rate in effect at the
                                    specific time of such processing.
                                </div>

                            </Typography>

                        </Box>
                    </div>

                    <div style={{
                        background: `url(${bgImage2}) right top no-repeat`,
                        backgroundSize: 'auto',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                6. Cancellation of Reservation
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                <div>
                                    All Reservations are subject to Share My Dine's cancellation policy, as stated below:
                                </div>
                                <div style={{ marginTop: '12px' }}>
                                    If a Reservation is cancelled by a Guest at least 48 hours prior to
                                    the applicable Food Event date, the Host shall not be paid any of
                                    the Reservation Amount and the Guest shall be reimbursed the full
                                    Reservation Amount net any Service Fee and fees paid by Share
                                    My Dine(e.g – PayPal fees).<br />
                                    If a Reservation is cancelled by a Guest between 24 and 48
                                    hours prior to the applicable Food Event date, the Host shall
                                    be paid 50% of the Reseration Amount and the remainder shall
                                    be returned to the Guest net any commissions and fees paid by
                                    Share My Dine.<br />
                                    If a Reservation is cancelled by a Guest less than
                                    24 hours before the applicable Food Event, the the Guest
                                    shall not be entitled to any return, credit or reimbursement.<br />
                                    Your Reservation shall be deemed canceled only upon
                                    receipt of Share My Dine confirmation of your cancellation.<br />
                                    The Company reserves the right to cancel a Reservation
                                    at any time upon returning full refund of Reservation
                                    Amount to the Guest.<br />
                                    In case a Host cancels Guest’s Reservation, Share My Dine
                                    will credit Guest with the full Reservation Amount that the
                                    Guest has paid to Share My Dine. Share My Dine reserves the
                                    right to charge the canceling Host with the Service Fees collected.<br />
                                    Share My Dine shall not bear any liability for any cost,
                                    expense, loss or damage that you may suffer or incur as a
                                    result of Host’s or Guest’s cancelation of a Reservation
                                    of Food Event.<br />
                                    Additionally, Share My Dinereserves the right to charge
                                    back from Hosts the Reservation Amount they received for
                                    organizing certain Food Event if upon the receipt of a
                                    complaint by a Guest with respect to such Food Event,
                                    it believes, at its sole discretion, that such Food Event
                                    was not compatible with Share My Dine standards of service
                                    or in case of any misconduct of the Host.
                                </div>
                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                7. Privacy Policy
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                We respect your privacy and are committed to protect the information
                                you share with us. We believe that you have a right to know
                                our practices regarding the information we collect when you connect
                                to, access or use Share My Dine. Our policy and practices and the type
                                of information collected are described in details in our Privacy Policy.
                                If you intend to connect to, access or use Share My Dine you must first
                                read and agree to the Privacy Policy.
                            </Typography>

                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                8. Minors
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                To enjoy Share My Dine Service you must be over the age of eighteen (18).
                                We reserve the right to request proof of age at any stage so that we can
                                verify that minors under the age of eighteen (18) are not using Share My
                                Dine. In the event that it comes to our knowledge that a person under the
                                age of eighteen (18) is using Share My Dine, we will prohibit and block such
                                User from accessing Share My Dine and will make all efforts to promptly delete
                                any Personal Information (as such term is defined in our Privacy Policy)
                                with regard to such User.
                            </Typography>

                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                9. Use Restrictions
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                There are certain conducts which are strictly prohibited on Share My Dine.
                                Please read the following restrictions carefully. Your failure to comply
                                with the provisions set forth herein may result in the termination of your
                                access to Share My Dine and may also expose you to civil and/or criminal
                                liability.<br />
                                You may not, whether by yourself or anyone on your behalf:<br />
                                Use Share My Dine for any illegal, unlawful or unauthorized purposes;<br />
                                Use Share My Dine in any form of spam, unsolicited mail or similar conduct.<br />
                                Allow access to your account to anyone other than yourself, including,
                                without limitation, any persons who are under the age of 18. You accept
                                full responsibility for any unauthorized use of the Service on your
                                behalf, including by minors;<br />
                                Use Share My Dine for non-personal or commercial purposes other
                                than as a Host without Company’s express prior written consent;<br />
                                Interfere with or violate other Users' rights to privacy and
                                other rights, or harvest or collect data and information about
                                other Users without their express consent, whether manually or
                                automatically with the use of any robot, spider, crawler, any
                                search or retrieval application, or use other automatic device,
                                process or method to access Share My Dine and retrieve, index
                                and/or data-mine any information;<br />
                                Interfere with or disrupt the operation of Share My Dine or
                                the servers or networks that host Share My Dine, or disobey
                                any laws or regulations or requirements, procedures, policies,
                                or regulations of such servers or networks.<br />
                                Post, publish, or otherwise make available through Share My Dine
                                any content, text or information that is abusive, harassing,
                                threatening, obscene, defamatory, libelous, or racially,
                                sexually, religiously, or otherwise objectionable or offensive;<br />
                                Impersonate any person or entity or provide false information
                                on Share My Dine, whether directly or indirectly;<br />
                                Falsely state or otherwise misrepresent your affiliation with
                                any person or entity, or express or imply that the Company or
                                any third party endorses you, your website, your business, or
                                any statement you make, or present false or inaccurate
                                information about Share My Dine;<br />
                                As a Host, provide falsely or inaccurate information with
                                respect to the service you offer through Share My Dine for
                                Guests, including, but not limited to any representation you
                                make with respect to your Food Events, including the hosting
                                place and the food you offer on Share My Dine.<br />
                                Transmit, distribute, display or otherwise make available
                                through or in connection with Share My Dineany content,
                                including User Generated Content, which may infringe third
                                party rights, including Intellectual Property rights and privacy
                                rights, or which may contain any unlawful content;<br />
                                Take any action that imposes, or may impose, in our sole discretion,
                                an unreasonable or disproportionately large load on our platform infrastructure;<br />
                                Bypass any measures we may use to prevent or restrict access to Share My Dine;<br />
                                Copy, modify, alter, adapt, make available, translate, port, reverse
                                engineer, decompile, or disassemble any portion of Share My Dine in any way;<br />
                                Create a browser, frame, border environment or GUI around Share My Dine;<br />
                                Link, including in-line linking, to elements on Share My Dine, such
                                as images and videos, independently from the web pages of Share My
                                Dine on which they originally appear;<br />
                                Bypass Share My Dine by forwarding your personal and contact
                                details (as emails, phone numbers or sites address) to other
                                Users of Share My Dine, whether you are a Guest or a Host, to
                                avoid paying Service Fee to us or for other purposes.
                            </Typography>

                        </Box>
                    </div>

                    <div style={{
                        background: `url(${bgImage3}) left top no-repeat`,
                        backgroundSize: 'auto',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                10. Intellectual Property Rights
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                Share My Dine and the Intellectual Property rights pertaining thereto
                                (other than User Generated Content), including, but not limited to,
                                inventions, patents and patent applications, trademarks, trade names,
                                logos, copyrightable materials, graphics, text, images, designs
                                (including the "look and feel" of Share My Dine), specifications, methods,
                                procedures, algorithms, data, technical data, interactive features, source and object code,
                                files, interface, GUI and trade secrets, whether or not registered (collectively, "Intellectual Property"),
                                are owned and/or licensed to the Company and subject to copyright and other applicable intellectual
                                property rights under applicable laws and international conventions. Unless expressly permitted in
                                the Terms, you may not copy, distribute, display, execute publicly, make available to the public,
                                reduce to human readable form, decompile, disassemble, adapt, sublicense, make any commercial use,
                                sell, rent, lend, process, compile, reverse engineer, combine with other software, translate, modify
                                or create derivative works of any material that is subject to Share My Dine's proprietary rights, including
                                the Service's Intellectual Property, either by yourself or by anyone on your behalf, in any way or by any means.<br />
                                You are hereby prohibited from removing or deleting any and all copyright notices,
                                restrictions and signs indicating proprietary rights of Share My Dine, including copyright
                                mark [©] or trademark [® or ™] contained in or accompanying the content included in the Service,
                                and you represent and warrant that you will abide by all applicable laws in this respect. You are
                                further prohibited from using, diluting or staining any name, mark or logo that is identical, or
                                confusingly similar to any of Share My Dine's marks and logos, whether registered or not.
                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                11. User Generated Content
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '24px'
                            }}>
                                <div style={{ display: 'flex', marginTop: '24px' }}>
                                    <div style={{
                                        color: '#1F2937',
                                        marginRight: '12px',
                                        fontWeight: '500',
                                        fontSize: '24px',
                                        lineHeight: '32px',
                                    }}>
                                        11.1
                                    </div>
                                    <div>
                                        Share My Dine allows you to upload, post, publish and make available through it,
                                        your own copyrightable materials such as literary works, text, images, photos,
                                        videos, strips and any other proprietary materials, including without limitation
                                        Hosts' posts on their pages and/or any part thereof and links to copyrightable
                                        materials (the "User Generated Content").
                                    </div>
                                </div>

                                <div style={{ display: 'flex', marginTop: '24px' }}>
                                    <div style={{
                                        color: '#1F2937',
                                        marginRight: '12px',
                                        fontWeight: '500',
                                        fontSize: '24px',
                                        lineHeight: '32px',
                                    }}>
                                        11.2
                                    </div>
                                    <div>
                                        As long as your User Generated Content is subject to the applicable copyright
                                        law, such User Generated Content shall remain at all times,
                                        and to the extent permitted by law, your sole and exclusive property.
                                    </div>
                                </div>

                                <div style={{ display: 'flex', marginTop: '24px' }}>
                                    <div style={{
                                        color: '#1F2937',
                                        marginRight: '12px',
                                        fontWeight: '500',
                                        fontSize: '24px',
                                        lineHeight: '32px',
                                    }}>
                                        11.3
                                    </div>
                                    <div>
                                        You understand and agree that you are solely responsible for
                                        your User Generated Content and the consequences of posting or
                                        publishing such material, on Share My Dine, in any way.
                                    </div>
                                </div>

                                <div style={{ display: 'flex', marginTop: '24px' }}>
                                    <div style={{
                                        color: '#1F2937',
                                        marginRight: '12px',
                                        fontWeight: '500',
                                        fontSize: '24px',
                                        lineHeight: '32px',
                                    }}>
                                        11.4
                                    </div>
                                    <div>
                                        You represent and warrant that you are the rightful owner of the
                                        User Generated Content you upload to Share My Dine or that you have
                                        (and will continue to have) all the necessary licenses, rights, consents,
                                        and permissions from the rightful owners of such User Generated Content,
                                        which are required to use and to enable Share My Dine to use the User Generated
                                        Content you upload to Share My Dine and that such User Generated Content
                                        does not infringe any third party's copyright or other rights.
                                    </div>
                                </div>

                                <div style={{ display: 'flex', marginTop: '24px' }}>
                                    <div style={{
                                        color: '#1F2937',
                                        marginRight: '12px',
                                        fontWeight: '500',
                                        fontSize: '24px',
                                        lineHeight: '32px',
                                    }}>
                                        11.5
                                    </div>
                                    <div>
                                        You agree that you will not post or upload any User Generated Content
                                        containing content which is unlawful for you to possess, post or
                                        upload in the country in which you are resident, or which it would
                                        be unlawful for the Company to use or possess in connection with Share
                                        My Dine. Company explicitly reserves the right to remove the User Generated
                                        Content without giving any prior notice, at its sole discretion.
                                    </div>
                                </div>

                                <div style={{ display: 'flex', marginTop: '24px' }}>
                                    <div style={{
                                        color: '#1F2937',
                                        marginRight: '12px',
                                        fontWeight: '500',
                                        fontSize: '24px',
                                        lineHeight: '32px',
                                    }}>
                                        11.6
                                    </div>
                                    <div>
                                        When you upload, post, publish or make available any User Generated
                                        Content on Share My Dine or use such User Generated Content via Share My Dine,
                                        you grant to the Company an irrevocable, perpetual, non-exclusive, royalty-free,
                                        transferable, assignable, sub-licensable and worldwide license,
                                        to use, reproduce, distribute, transmit, make derivative works of,
                                        display, copy, make available to the public and perform that User Generated
                                        Content, along with your name, details, trade-marks, service-marks and logos,
                                        in connection with Share My Dine, whether through the Internet, any mobile device
                                        or otherwise, in any media formats and through any media channels known today and
                                        developed in the future.
                                    </div>
                                </div>

                                <div style={{ display: 'flex', marginTop: '24px' }}>
                                    <div style={{
                                        color: '#1F2937',
                                        marginRight: '12px',
                                        fontWeight: '500',
                                        fontSize: '24px',
                                        lineHeight: '32px',
                                    }}>
                                        11.7
                                    </div>
                                    <div>
                                        You agree that the Company may remove at any time any User Generated
                                        Content you have uploaded to Share My Dine in its sole discretion with or without any reason.
                                    </div>
                                </div>

                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                12. User Generated Content
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '24px'
                            }}>
                                <div style={{ display: 'flex', marginTop: '24px' }}>
                                    <div style={{
                                        color: '#1F2937',
                                        marginRight: '12px',
                                        fontWeight: '500',
                                        fontSize: '24px',
                                        lineHeight: '32px',
                                    }}>
                                        12.1
                                    </div>
                                    <div>
                                        As a condition for your use of Share My Dine, you hereby represent and warrant that:<br />
                                        You will not infringe or violate any of the Terms;<br />
                                        You possess the legal authority to enter into these Terms and to form a binding
                                        agreement under any applicable law, to use Share My Dine in accordance with
                                        these Terms, and to fully perform your obligations hereunder;<br />
                                        The execution of the Terms does not and will not violate any other agreement
                                        to which you are bound or any law, rule, regulation, order or judgment to which you are subject;<br />
                                        Host herby appoints Share My Dine as the Host's limited agent solely for
                                        the purpose of collecting payment made by Guests on behalf of Host.<br />
                                        It is the responsibility of the Host to assure that a Food Event is conducted
                                        in compliance with all applicable laws, rules and regulations, including with
                                        respect to any tax obligations relating to the Food Events. Share My Dine, its
                                        officers, directors, employees, agents and independent contractors make no
                                        representation, warranty or assurance to you with respect to the existence,
                                        scope and/or compliance as required or ordered by any applicable laws, rules
                                        and regulations with respect to such Food Events and Share My Dine expressly
                                        disclaims any such representations and warranties, express or implied in this regard.
                                    </div>
                                </div>

                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                13. Trademarks and Trade names
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                "Share My Dine", Share My Dine™, Company's marks and logo and all other proprietary
                                identifiers used by the Company in connection with Share My Dine(“Company Trademarks”)
                                are all trademarks and/or trade names of the Company, whether or not registered.
                                All other trademarks, service marks, trade names and logos which may appear on Share
                                My Dine belong to their respective owners (“Third Party Marks”). No right, license, or
                                interest to the Company Trademarks and/or to the Third Party Marks is granted hereunder,
                                and you agree that no such right, license, or interest shall be asserted by you with respect to
                                the Company Trademarks or the Third Party Marks and therefore you will avoid using any of those marks.
                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                14. Links to Third Party Websites
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                Share My Dine may contain links to third party websites (“Third Party Sites”),
                                whether such links have been suggested by the Company or shared by any. You hereby
                                acknowledge that the Company has no control over such Third Party Sites, and you
                                further acknowledge and agree that the Company is not responsible for the availability
                                of Third Party Sites, and does not endorse and is not responsible or liable for any
                                services, content, advertisements, products, or any materials available on such
                                Third Party Sites. You further acknowledge and agree that the Company shall not
                                be responsible or liable, directly or indirectly, for any damage or loss whatsoever
                                caused, or alleged to be caused, by or in connection with use of or reliance on any
                                services, content, products or other materials available on or through any Third Party
                                Sites. Most Third Party Sites provide legal documents, including terms of use and
                                privacy policy, governing the use of such sites. It is always a good idea to read
                                such documents carefully before using those sites.
                            </Typography>
                        </Box>
                    </div >

                    <div style={{
                        background: `url(${bgImage2}) right top no-repeat`,
                        backgroundSize: 'auto',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                15. Advertisements
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                The Company may integrate commercials, advertisements and/or sponsored links, whether within or beside Share My Dine. By clicking the advertisements you may be transferred to a website of an advertiser or receive any other messages, information or offers from the advertiser and from others. All the information contained in such commercials and advertisements belongs solely to the advertisers and the Company makes no warranties or representations as to such advertisements, whether or not the Company has control over such advertisements. The Company, advertisers and/or third-parties related thereto may be entitled to certain shares of the earnings for such commercials. You agree, acknowledge and consent that no right, title or interest is or shall be granted to you in any way with respect to any revenue share whatsoever in relation thereto, whether as a paying User or not.
                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                16. Availability
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                Share My Dine's availability and functionality depends on various factors, such as communication networks, software, hardware and the Company's services' providers and contractors. The Company does not warrant or guarantee that Share My Dine will operate at all times without disruption or interruption, or that it will be immune from unauthorized access or error-free.
                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                17. Changes to Share My Dine
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                The Company may change Share My Dine's layout and design from time to time, and the availability of the content and services included therein, without giving any prior notice on Share My Dine. You hereby agree and acknowledge that the Company is not responsible for any errors or malfunctions that may occur in connection with the performing of such changes.
                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                18. Profile Changes and Cancellation of User Profile
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                At any time, you may change, edit, correct or delete any and all information included in your personal profile. For the cancellation and removal of your account from Share My Dine and on any matters that extend the usual management of your account, you may contact the Company at: support@Share My Dine.com with such specific request. Company shall terminate your account and remove any information pertaining to you from the Service within reasonable time upon receiving your request for account cancellation. We will attempt to comply with any request to the best of our capabilities.
                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                19. Refund, Disclaimer and Warranties
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                IN THE EVENT OF MISLEADING REPRESENTATION OR MISCONDUCT ON SHARE MY DINE OR IN THE FRAMEWORK OF FOOD EVENTS HELD BY HOSTS THROUGH SHARE MY DINE, COMPANY MAY DECIDE, IN ITS SOLE DESECRATION, TO CREDIT YOU WITH A REFUND FOR THE RESERVATION AMOUNT PAID OR PART THEREOF AND CHARGE THE HOST WITH THIS AMOUNT. NO ACTION OF THE COMPANY MAY BE CONSTRUED AS ACCEPTING ANY LIABILITY OTHER THAN AS MENTIONED HEREIN.<br />
                                NOTWITHSTANDING THE FOREGOING, SHARE MY DINE, INCLUDING WITHOUT LIMITATION ANY CONTENT, DATA AND ANY INFORMATION RELATED THERETO, IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF TITLE OR NON-INFRINGEMENT OR IMPLIED WARRANTIES OF USE, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE OR USE.<br />
                                THE COMPANY DOES NOT WARRANT THAT SHARE MY DINE WILL BE UNINTERRUPTED OR ERROR-FREE. THE COMPANY MAY CORRECT, MODIFY, AMEND, ENHANCE, IMPROVE AND MAKE ANY OTHER CHANGES TO SHARE MY DINE AT ANY TIME OR TO DISCONTINUE DISPLAYING OR PROVIDING ANY CONTENT OR FEATURES WITHOUT A NOTICE TO YOU.<br />
                                THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES AND CONDITIONS WITH REGARD TO THE USE OF SHARE MY DINE, INCLUDING BUT NOT LIMITED TO THE AVAILABILITY, RELIABILITY, OR QUALITY OF SHARE MY DINE AND/OR THE FOOD EVENTS DISTRIBUTED THROUGH SHARE MY DINE, INCLUDING THE NATURE AND QUALITY OF THE FOOD SERVED IN SUCH EVENTS, AND IS NOT AND SHALL NOT BE RESPONSIBLE FOR ANY ERROR, FAULT OR MISTAKE OF ANY AND ALL CONTENT AND INFORMATION RECEIVED THROUGH SHARE MY DINE, INCLUDING BY HOSTS OR GUESTS. THE COMPANY DOES NOT ENDORSE ANY ENTITY, PRODUCT OR SERVICE MENTIONED IN ANY USER GENERATED CONTENT AVAILABLE ON SHARE MY DINE.<br />
                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                20. Limitation of Liability
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                THE USE OF SHARE MY DINE AND PARTICIPATION IN ANY FOOD EVENT IS SOLELY AT YOUR OWN RISK.
                                EXCEPT AS PROVIDED HEREIN, IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY DAMAGES WHATSOEVER
                                INCLUDING, BUT NOT LIMITED TO, INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES OF ANY KIND,
                                WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTIONS RESULTING FROM OR ARISING OUT
                                OF SHARE MY DINE OR ANY FOOD EVENT, OR THE USE OR INABILITY TO USE SHARE MY DINE, REGARDLESS
                                OF WHETHER THE COMPANY OR AN AUTHORIZED REPRESENTATIVE OF THE COMPANY HAS BEEN ADVISED OF
                                THE POSSIBILITY OF SUCH DAMAGES. EXCEPT WHERE LIABILITY IS MANDATORY, IN WHICH EVENT
                                LIABILITY FOR DAMAGES SHALL BE LIMITED TO YOUR RESERVATION FEES.
                            </Typography>
                        </Box>
                    </div>

                    <div style={{
                        background: `url(${bgImage3}) left top no-repeat`,
                        backgroundSize: 'auto',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                21. Indemnification
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                THYou agree to defend, indemnify and hold harmless the Company, its officers,
                                directors, employees and agents, from and against any and all claims, damages,
                                obligations, losses, liabilities, costs, debts, and expenses (including but not limited to attorney's fees)
                                arising from: (i) your use of Share My Dine; (ii) your violation of any term of these Terms; (iii) your violation
                                of any third party rights, including without limitation any intellectual property
                                rights or privacy right of such third party; and (iv) any damage of any sort, whether
                                direct, indirect, special or consequential, you may cause to any third party with
                                relation to Share My Dine. It is hereby clarified that this defense and indemnification obligation will survive these Terms.
                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                22. Misconduct and Copyright Agent
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                We care for your safety. If you believe a User acted inappropriately including (but not limited to) offensive, violent or sexually inappropriate behavior, please report immediately such person to the appropriate authorities and to Us; provided your report will not incur any liability on the Company's address for reporting any misconduct is specified below.<br />
                                Full Address:<br />
                                Share My Dine, NUS Enterprise Incubator PGP5 5 Prince George's Park Singapore 118404. Singapore.<br />
                                Email: support@Share My Dine.com<br />
                                The Company respects the intellectual property rights of others. If you believe that your work
                                has been copied or otherwise used in a way that constitutes copyright infringement, please provide
                                the following information in writing to the Company's Copyright Agent: (i) the contact
                                details of the person authorized to act on behalf of the owner of the copyright; (ii) a
                                description of the copyrighted work that you claim has been infringed; (iii) a description
                                of the material that you claim to be infringing or to be the subject of infringing activity
                                and that is to be removed or access to which is to be disabled, and information sufficient
                                to permit the Company to locate the material (including URL address); (iv) a statement that
                                you have a good faith belief that use of the material in the manner complained of is not
                                authorized by the copyright owner, its agent, or the law; and (v) a statement that the
                                information in the notification is accurate and, under penalty of perjury, that you are
                                the copyright owner or are authorized to act on behalf of the owner of a copyright that
                                is allegedly infringed. The Company's Copyright Agent can be reached through the address specified above.
                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                23. Amendments to the Terms
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                The Company may change the Terms from time to time, including the Privacy Policy or any other policies incorporated thereto. Substantial changes will be first notified at Share My Dine's homepage. In the event that the Terms should be amended to comply with any legal requirements, the amendments may take effect even immediately, or as required by the law and without any prior notice. You hereby agree and acknowledge to accept any and to be bound by any of the changes made in the Terms and the accompanying policies. Should you continue to use Share My Dine after the changes were made, it will indicate your acceptance to the new Terms. You are recommended to review the Terms from time to time, as they may change every once in a while.
                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                24. Account and Service Termination
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '12px'
                            }}>
                                At any time, the Company may block your access to Share My Dine and/or temporarily or permanently limit, suspend, or terminate your personal profile, for any reason, at its sole discretion, in addition to any other remedies that may be available to the Company under any applicable law. Such actions by the Company may be taken if the Company deems that you have breached any of these Terms in any manner.<br />
                                Additionally, the Company may at any times, at its sole discretion, cease the operation of Share My Dine or the Service or any part thereof, temporarily or permanently, without giving any prior notice. You agree and acknowledge that the Company does not assume any responsibility with respect to, or in connection with the termination of Share My Dine's operation and loss of any data, including User Generated Content, as a result, as long as your pending reservation is handled properly.
                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: '100%', width: '100%', height: 'auto', gap: '24', marginTop: '78px' }}>
                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 600,
                                fontSize: '32px',
                                lineHeight: '38.4px',
                                letterSpacing: '-0.68px',
                                color: '#1F2937',
                            }}>
                                25. General
                            </Typography>

                            <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#6B7280',
                                marginTop: '24px'
                            }}>
                                <div style={{ display: 'flex', marginTop: '24px' }}>
                                    <div style={{
                                        color: '#1F2937',
                                        marginRight: '12px',
                                        fontWeight: '500',
                                        fontSize: '24px',
                                        lineHeight: '32px',
                                    }}>
                                        25.1
                                    </div>
                                    <div>
                                        These Terms do not, and shall not be construed to create any relationship, partnership, joint venture, employer-employee, agency, or franchisor-franchisee relationship between the parties here to.
                                    </div>
                                </div>

                                <div style={{ display: 'flex', marginTop: '24px' }}>
                                    <div style={{
                                        color: '#1F2937',
                                        marginRight: '12px',
                                        fontWeight: '500',
                                        fontSize: '24px',
                                        lineHeight: '32px',
                                    }}>
                                        25.2
                                    </div>
                                    <div>
                                        If any provision of this Terms is found to be unlawful, void, or for any reason unenforceable, then that provision will be deemed severable from this Terms and will not affect the validity and enforceability of any remaining provisions.
                                    </div>
                                </div>

                                <div style={{ display: 'flex', marginTop: '24px' }}>
                                    <div style={{
                                        color: '#1F2937',
                                        marginRight: '12px',
                                        fontWeight: '500',
                                        fontSize: '24px',
                                        lineHeight: '32px',
                                    }}>
                                        25.3
                                    </div>
                                    <div>
                                        No waiver by either party of any breach or default hereunder will be deemed to be a waiver of any preceding or subsequent breach or default. Any heading, caption or section title contained herein is inserted only as a matter of convenience, and in no way defines or explains any section or provision hereof.
                                    </div>
                                </div>

                                <div style={{ display: 'flex', marginTop: '24px' }}>
                                    <div style={{
                                        color: '#1F2937',
                                        marginRight: '12px',
                                        fontWeight: '500',
                                        fontSize: '24px',
                                        lineHeight: '32px',
                                    }}>
                                        25.4
                                    </div>
                                    <div>
                                        These Terms constitutes the entire terms and conditions between you and the Company relating to the subject matter herein and supersedes any and all prior or contemporaneous written or oral agreements or understandings between you and the Company.
                                    </div>
                                </div>

                                <div style={{ display: 'flex', marginTop: '24px' }}>
                                    <div >
                                        For information, questions or notification of errors, please contact us at:
                                    </div>
                                    <div style={{ fontWeight: '600' }}>
                                        support@Share My Dine.com.
                                    </div>
                                </div>

                            </Typography>
                        </Box>
                    </div>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}