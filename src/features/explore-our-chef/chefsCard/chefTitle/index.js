import { Box, Typography } from "@mui/material";

export default function ChefTitle({card,singleChef}){
    return(
        <Box sx={{
            maxWidth: '196.44',
            width: '100%',
            height: 'auto'
        }}>
            <Typography  style={{
                maxWidth: '100%',
                width: '100%',
                height: 'auto',
                fontFamily: 'Work Sans',
                color: '#292D32',
                fontWeight: (singleChef === true) ? 700 : 500,
                fontSize: (singleChef === true) ? '28px' : '20.95px',
                lineHeight: (singleChef === true) ? '33.6px' : '25.14px',
                textAlign: (singleChef === true) ? 'left' : 'center',
                
            }}>
                {card.title}
            </Typography>

            <Typography  style={{
                maxWidth: '100%',
                width: '100%',
                height: 'auto',
                fontFamily: 'Work Sans',
                color: '#FF611D',
                marginTop: (singleChef === true) ? '12px' : '0.32px',
                fontWeight: (singleChef === true) ? 500 : 300,
                fontSize: (singleChef === true) ? '24px' : '13.95px',
                lineHeight: (singleChef === true) ? '20.95px' : '20.95px',
                textAlign: (singleChef === true) ? 'left' : 'center',
            }}>
                <span style={{ color: '#292D32' }}>From </span>
                {card.subTitle}
            </Typography>

        </Box>
    )
}