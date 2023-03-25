import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import Divider from '../utils/Divider'
import Title from '../utils/Title'
import {Box,Stack,Typography,Icon} from '@mui/material'
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
    maxWidth:400,
    maxHeight:410,
    display:"flex",
    flexDirection:"column",
    mx:"auto",
    textAlign:"center",
    px:"auto",
    // justifyContent:"center",
    pb:4,
  }
  const iconStyles = {
    backgroundColor:"#225a59",
    fontSize:70,
    width:110,
    height:110,
    display:"flex",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20,
    mx:"auto",
  }

  return (
    <Stack className="Services" id="Services" direction={"column"} sx={{mt:7,mb:11,width:"100%",textAlign:"center",zIndex:11,backgroundColor:"#121b2d",py:2}}>
      <Title name="Services"/>
      <Divider />
     
      <Stack direction="row"  gap={3} sx={stackStyles}>
        <Box sx={boxStyles}>
          <Icon sx={iconStyles}><MdLaptopWindows /></Icon>
          <Typography variant='h4' sx={{fontSize:35,py:2}}>Software Design</Typography>
          <Typography variant="body3" color="gray">
          I have a quite considerable experience in software design development using different libraries and tools.
          </Typography>
        </Box>
        <Box sx={boxStyles} mt={3}>
          <Icon sx={iconStyles}><HiOutlineChartBar /></Icon>
          <Typography variant='h4' sx={{fontSize:35,py:2}}>Data Analysis</Typography>
          <Typography variant="body3" color="gray">
          Data analysis can be considered as my interesting part in programming specially when dealing with a huge dataset. I use many different tools depending on the situation.
          </Typography>
        </Box>
        <Box sx={boxStyles} mt={3}>
          <Icon sx={iconStyles}><RiCodeSSlashFill /></Icon>
          <Typography variant='h4' sx={{fontSize:35,py:2}}>Web Development</Typography>
          <Typography variant="body3" color="gray">
          I am a fullstack developer. My interests range from back-side, front-end, system management. I offere responsive design, well structured code and rest API development.
          </Typography>
        </Box>
      </Stack>

    </Stack>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  background-color: #000;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
