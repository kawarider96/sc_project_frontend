import { Paper, Typography, Box, Button } from "@mui/material"
import VideoBackground from "../../BACKGROUNDS/VideoBackground"
import GlassBox from "../../BOXES/GlassBox"
import { IntroText } from "../../INTRO/text/IntroText"
import { useNavigate } from "react-router-dom"

export function LandingHeader() {
    let navigate = useNavigate();

    const navigateCourses = () => {
        navigate('/courses');
    }
    return (
            <VideoBackground src={'/earth.mp4'}>
                <Box sx={{width:'100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                    <IntroText/>
                    <GlassBox width='30%'>
                        <Typography variant="button" color='#99e2b4' sx={{fontSize:'150%'}}>Tudtad?</Typography>
                        <Typography color='#99e2b4'>A Nemzetközi Űrállomás 28.000 km/órás sebességgel repül. Ez azt jelenti, hogy az űrhajósok átlagosan 90 percenként gyönyörködhetnek egy napkeltében vagy naplementében.</Typography>
                    </GlassBox>
                    <Box sx={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Button variant="contained" onClick={navigateCourses}>fedezd fel a benned rejlő tudást</Button>
                    </Box>
                </Box>
            </VideoBackground>
    )
}