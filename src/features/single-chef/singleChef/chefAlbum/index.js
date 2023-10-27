import { Box } from "@mui/material";

export default function ChefAlbum({image}) {
    return (
        <Box sx={{
            maxWidth: '169.26px',
            width: '100%',
            height: '169.26',
            borderRadius:'8px',
            marginLeft:'18px',
            marginBottom:'18px',

        }}>
            <img src={image.albumImage} alt="Lg" style={{maxWidth: '100%', width: '100%', height: '100%' }} />
        </Box>
    )
}