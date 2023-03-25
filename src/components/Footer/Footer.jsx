import React from 'react'
import { Box, Typography,Link } from '@mui/material'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box sx={{backgroundColor:"#0b1019"}}>

        <Box sx={{display:'flex', justifyContent:'space-between',mx:5,pb:1,mb:1,borderBottom:1,borderColor:"gray"}}>
          <Box >
            <Typography sx={{fontSize:23}}>Get connected with me</Typography>
          </Box>
  
          <Box sx={{display:'flex',justifyContent:'space-between',width:100}}>
            <a href="https://www.linkedin.com/in/abdelrahman-yousef-32464a175/" target="blank">
              <AiFillLinkedin size={30} />
            </a>
            <a href="https://github.com/AbdelrahmanAbounida" target="blank" class="me-4 text-white mx-3">
              <AiFillGithub size={30} />
            </a>
          </Box>

        </Box>


        <Box sx={{display:"flex",justifyContent:"space-between",mx:5,height:200}}>

              <Box sx={{display:"flex",flexDirection:"column",gap:2,mt:2}}>
                  <Typography variant='h5'>Abdelrahman Abounida</Typography>

                  <Typography variant='body2' sx={{color:"#ffe"}}>
                    Here are some links that you may find useful.
                  </Typography>
              </Box>
  
              <Box sx={{display:"flex",flexDirection:"column",gap:3,mt:2}}>
                <Typography variant='h5'>
                  Useful links
                </Typography>
                  <Link
                    href="#!"
                    sx={{textDecoration: 'underline !important'}}
                    >Skills
                    </Link>
                  <Link
                    href="#!"
                    sx={{textDecoration: 'underline !important'}}
                    >Projects
                    </Link>
                  <Link
                    href="#!"
                    sx={{textDecoration: 'underline !important'}}
                    >Services</Link>
                  </Box>
               
                  <Box sx={{display:"flex",flexDirection:"column",gap:3}}>
                      <Typography variant='h6' href="#!" sx={{textDecoration: 'underline'}}>Contact</Typography>
                      <Typography><i class="fas fa-home me-3"></i> Hamburg, Am Centrumhaus 2, 21073, DE</Typography>
                      <Typography><i class="fas fa-envelope me-3"></i>abdelrahmanaboneda@gmail.com</Typography>
                      <Typography><i class="fas fa-phone me-3"></i> +49-15156610400</Typography>
                  </Box>
        </Box>
  
        <Box
          sx={{justifyContent:"center",pb:2,pt:1,textAlign:"center"}}
        >
          © 2023 Copyright:
          <a
            class="text-reset fw-bold"
            href="#"
            style={{color: 'rgb(16, 205, 16) !important'}}
            >AbdelrahmanAbounida</a
          >
        </Box>

  
       
    </Box>
  )
}

export default Footer