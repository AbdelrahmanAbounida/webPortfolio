import React from "react";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import Divider from '../utils/Divider'
import Title from '../utils/Title'
import {Stack,Box,Typography,Icon} from '@mui/material'


import {MdLaptopWindows} from 'react-icons/md'
import {HiOutlineChartBar} from 'react-icons/hi'
import {RiCodeSSlashFill} from 'react-icons/ri'

const Services = () => {

  const stackStyles = {
    width:"100%",
    alignItems:"center",
    textAlign:"center",
    mx:"auto",
    justifyContent:"center",
    flexWrap:"wrap" ,
    mt:5,
    
    // borderRadius:13,
  }
  const boxStyles = {
    maxWidth:550,
    maxHeight:450,
    display:"flex",
    flexDirection:"column",
    mx:"auto",
    textAlign:"center",
    px:"auto",
    pb:4,
    border:1,
    boxShadow:3,
    borderColor:"#151d2f",
    borderRadius:13,
  }
  const iconStyles = {
    backgroundColor:"#2a8c8a",
    fontSize:70,
    width:110,
    height:110,
    display:"flex",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20,
    mx:"auto",
    mt:3
  }

  return (
    <Stack className="Services" id="Services" direction={"column"} sx={{mt:7,mb:15,width:"100%",height:"750px", textAlign:"center",zIndex:11,backgroundColor:"#172134",py:4}}>
      <Title name="Services"/>
      <Divider />

      
      <Cards>

        <Slide direction="left">
          <Box sx={boxStyles} >
            <Icon sx={iconStyles}><FiCodesandbox /></Icon>
            <Typography variant='h4' sx={{fontSize:40,py:2,fontWeight:"bold"}}>Artificial Intelligence</Typography>
            <Typography variant="body4" color="#8a8c8d" sx={{px:2}}>
            I have a quite considerable experience in AI development especially in Computer vision and NLP. I used many DL models, platforms, and API like Yolo, chatgpt, huggingFace, Langchain, and openAI.
            </Typography>
        </Box>
        </Slide>


        <Slide direction="up">
          <Box sx={boxStyles} >
            <Icon sx={iconStyles}><HiOutlineChartBar /></Icon>
            <Typography variant='h4' sx={{fontSize:40,py:2,fontWeight:"bold"}}>Data Analysis</Typography>
            <Typography variant="body3" color="gray">
            Data analysis is one of the interesting tasks I prefer. I built many relative apps like dashbaords, excel model web view, time series analysis , and initial experience in using ML algorithms.
            </Typography>
          </Box>
        </Slide>

        
        <Slide direction="right">
          <Box sx={boxStyles} >
            <Icon sx={iconStyles}><CgWebsite /></Icon>
            <Typography variant='h4' sx={{fontSize:40,py:2,fontWeight:"bold",textTransform:"capitalize"}}>Web Development</Typography>
            <Typography variant="body3" color="gray" sx={{px:1}}>
              I have more than 1.5 years of experience developing web applications using python (flask, django), (Bootstrap and React) I build also APIs using (DRF, flask_restful).
            </Typography>
          </Box>
        </Slide>
      </Cards>


    </Stack>
  );
};

export default Services;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
