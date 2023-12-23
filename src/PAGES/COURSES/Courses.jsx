import { Box, Typography, Button } from "@mui/material";
import GlassBox from "../../COMPONENTS/BOXES/GlassBox";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SchoolIcon from '@mui/icons-material/School';
import { MilitaryTech } from "@mui/icons-material";
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';

export default function Courses() {
   return (
    <Box>
        <Box className='header'>

        </Box>
        
        <Box className='courses' sx={{padding:'20px'}}>
            <GlassBox>
                <Box sx={{display:'flex', gap:'20px'}}>
                    <Box sx={{height:'100%'}}>
                        <img src='/history.png' alt='history-course' height='200px' width='200px'/>
                    </Box>
                    
                    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                        <Typography variant="h5">Történelem</Typography>
                        <Box>
                            <Typography variant="body2">Merülj bele a történelem fonalába és tudd meg ki volt Julius Cézár, III. Alexandros vagy Éppen Napóleon.</Typography>
                        </Box>
                        <Box sx={{display:'flex', gap:'10px'}}>
                            <Button startIcon={<EqualizerIcon/>}>Könnyű</Button>
                            <Button startIcon={<SchoolIcon/>}>Általános iskola</Button>
                            <Button startIcon={<MilitaryTech/>}>mérföldkövek</Button>
                        </Box>
                    </Box>

                    <Box sx={{display:'flex', alignContent:'center'}}>
                        <Button><SmartDisplayIcon sx={{fontSize:'150px'}}/></Button>
                    </Box>
                </Box>
            </GlassBox>
        </Box>
    </Box>
   ) 
}