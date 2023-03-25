import React from 'react'
import {Stack, Typography,Box} from '@mui/material'
import Title from '../utils/Title'
import {motion} from 'framer-motion'
import {webSkills,AITools,LibrariesAndTools} from '../../constants/skills'
import BoxInformation from '../utils/BoxInformation'
import Divider from '../utils/Divider'
import styles from './Skills.module.css'
import { Slide } from "react-awesome-reveal";

const Skills = () => {

  return (
    <Box>
      <Stack className="Skills" id="Skills" direction={"column"} sx={{mt:5,width:"100%",backgroundColor:"",alignItems:"center",justifyContent:"center",pt:4}}>
      <Title name="Skills"/>
      <Divider />
      <Stack className="Boxes_container" 
          direction="row" 
          component={motion.div} 
          layout
          gap={3}
            sx={{
              flexWrap:"wrap" ,
              alignItems:"center" ,
              justifyContent:"space-around",
              mx:"auto",
              pt:11,
              width:"100%",
            }}
            >
              <Slide direction="left">
                <BoxInformation  title="Web Development" skills={webSkills}/>
              </Slide>

              <Slide direction="fixed">
                <BoxInformation  title="AI Platforms and API" skills={AITools}/>
              </Slide>

                <Slide direction="right">
                    <BoxInformation  title="Other Libraries and Tools" skills={LibrariesAndTools}/>
                </Slide>
      </Stack>
      
    </Stack>
{/*     
      <Box className={styles.container}>
          <svg className={styles.svg} viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
            <path d="M0,40 C200,140 350,0 600,50 L500,00 L0,0 Z" style={{stroke:'none',fill:'#0F1624'}}></path>
          </svg>
      </Box> */}
    </Box>
    
  )
}

export default Skills