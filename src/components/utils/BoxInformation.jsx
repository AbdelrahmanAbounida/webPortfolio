import React from 'react'
import {Box,Stack,Typography,Icon} from '@mui/material'
import {TiTick} from'react-icons/ti'
import {DiFirebase} from'react-icons/di'
import {FaReact,FaLaptopCode} from 'react-icons/fa'
import { motion } from 'framer-motion'


const BoxInformation = (props) => {

    const boxStyle = {
        border:1,
        borderColor:'#1f2c43',
        borderRadius:11,
        height:380,
        display:"flex",
        p:2,
        width:470,
        flexDirection:"column",
        textAlign:"center",
        backgroundColor:"#182338 !important",
        boxShadow:9,
        mb:2
      }
      const typoStyle = {
        fontWeight:700,
        fontSize:27,
        pl:2,
        mt:0.2,
      }
  return (
    <Box whileHover={{backgroundColor:"#182338",scale:1.03,cursor:"pointer"}} sx={boxStyle} component={motion.div} layout>
    <Stack direction={"row"} sx={{justifyContent:"center"}}>
      {
      props.title == "FrontEnd Development" ? <FaReact  style={{fontSize:30,transition:"0.1s ease",color:"#00DBD8"}} /> :
      props.title == "Backend Development" ? <DiFirebase  style={{fontSize:35,transition:"0.1s ease",color:"#00DBD8"}} /> :
      <FaLaptopCode  style={{fontSize:30,transition:"0.1s ease",color:"#00DBD8"}} />
      }
      
      <Typography variant="h5" sx={typoStyle}> {props.title}</Typography></Stack>

    <Stack direction={"row"} flexWrap="wrap" gap={4} sx={{mt:4,mx:"auto"}} >

              {
                Object.entries(props.skills).map((skill,i)=>(

                  <Stack 
                    direction={"row"}
                    flexWrap="wrap"
                    className='logo-items' 
                    key={i}
                    gap={1}
                    >
                    <TiTick style={{fontSize:30,transition:"0.1s ease",color:"#185352"}} />
                    <Box>
                      <Typography sx={{fontSize:24,fontFamily:"Source Sans Pro, sans-serif",}}>{skill[0]}</Typography>
                      <Typography variant="body2" sx={{fontSize:13,mb:1,color:"gray"}}>{skill[1]}</Typography>
                    </Box>

                  </Stack>
                  ))
              }

    </Stack>
  </Box>
  )
}

export default BoxInformation