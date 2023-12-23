import { Paper } from "@mui/material";

export default function GlassBox({children, width, height}) {
    return (
        <Paper elevation={20} className='paper' sx={{
            position:'relative',
            padding:'20px',
            backgroundColor:'rgba(0,0,0,0.7)',
            clipPath: `polygon(
              26% 0,
              31% 5%,
              61% 5%,
              66% 0,
              92% 0,
              100% 8%,
              100% 89%,
              91% 100%,
              7% 100%,
              0 92%,
              0 0
            )`,
            width:width,
            height:height}}>
            {children}
        </Paper>
    )
}