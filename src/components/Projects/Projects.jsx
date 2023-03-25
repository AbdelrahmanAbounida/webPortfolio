import { Container,Stack, Typography,Button } from '@mui/material'
import React from 'react'
import {projects as projs} from '../../constants/projects'
import {motion} from 'framer-motion'
import {useState,useEffect} from 'react'
import Projectstyles from './Projects.module.css'
import Divider from '../utils/Divider'
import Title from '../utils/Title'
import ProjectCard from './ProjectCard'

const Projects = () => {

  const [currentFilter, setcurrentFilter] = useState("All");


  const buttonStyle = {
    mr:3,
    my:1,
    px:5,
    border:'1px solid #225a59',
    borderRadius:3,
    fontSize:20,
    color:"#fff",
    backgroundColor: "transparent",
    '&:hover': {
      backgroundColor: "#2a8c8a",
      color:"#000"
   }
    }
    const activeStyle={
     ...buttonStyle,
     color:"#000",
    backgroundColor: "#30a7a5",
    }


  return (
    <Stack className="projects" id="Projects" width="80%" sx={{mx:"auto"}}>
    
    <Title name="Projects"/>
    <Divider/>

        <Stack className="tabs" sx={{mt:5}}>
        <Container sx={{mx:"auto",textAlign:"center",mb:9}}>
          <Button onClick={() => setcurrentFilter("All")}   sx={currentFilter == "All"?activeStyle:buttonStyle}>All Categories</Button>
          <Button onClick={() => setcurrentFilter("React")}    sx={currentFilter == "React"?activeStyle:buttonStyle}>React</Button>
          <Button onClick={() => setcurrentFilter("Django")}   sx={currentFilter == "Django"?activeStyle:buttonStyle}>Django</Button>
          <Button  onClick={() => setcurrentFilter("Flask")}   sx={currentFilter == "Flask"?activeStyle:buttonStyle} >Flask</Button>
        </Container>
        </Stack>
        <Stack 
          component={motion.div}
          layout
          className="proj_cards" 
          direction={"row"}
          flexWrap="wrap" 
          gap={9}
          mx={"auto"}
          sx={{
            alignItems:"center" ,
            justifyContent:"center",
            mx:"auto",
            mt:1,
          }} 
          >

          {projs.filter((project,i)=>(
            currentFilter == "All" || project.id.includes(currentFilter)
          )).map((project,i)=>(
            <ProjectCard project={project} key={i}/>
          ))}

        </Stack>
    </Stack>
  )
}

export default Projects