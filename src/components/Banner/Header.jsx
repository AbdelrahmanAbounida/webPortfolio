import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Stack,Container,Box,Button,Drawer} from '@mui/material';
import { DiCssdeck } from 'react-icons/di';
import {Link} from 'react-router-dom'
import {SiUpwork} from'react-icons/si'
import { AiFillGithub } from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa'
import {Link as MuiLink} from '@mui/material';
import {useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const pages = ["Home","Services","Projects","Skills","Testimonials"]


  const toggleDrawer = (event,currentIsDrawerOpen)=>{
      if (
        event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      // setisDrawerOpen(currentIsDrawerOpen);
  }

  const socialIconStyle = {
    mt:1,
    display: { xs:"none",sm:"none" ,md: 'none', lg: 'flex' },
  }
  const socialIcons = [<FaLinkedinIn
                        style={{fontSize:30,color:"#fff"}} key={1}/> ,
                      <AiFillGithub 
                      style={{fontSize:33,color:"#fff"}} key={2}
                      /> ,
                      <SiUpwork 
                      style={{fontSize:33,transition:"0.1s ease",color:"#fff"}} key={3}
                      /> ]
  const socialLinks = ["https://www.linkedin.com/in/abdelrahman-yousef-32464a175/",
                        "https://github.com/AbdelrahmanAbounida?tab=repositories",
                        "https://www.upwork.com/freelancers/~0116c9456260b794ca?viewMode=1"]


  return (
    <Stack sx={{color:"white",mt:5}}>
     <Container maxWidth="xl" style={{ zIndex: 11 }}>
          {/* Main navbar Here */}
          <Stack direction="row" sx={{justifyItems:"space-between", alignItems:"center",mx:{md:1,lg:5,sm:0}}}>
            {/* Logo Section */}
            <Box 
              sx={{px:0,display:"flex"}}
              className='logo-items' 
              >
              <IconButton
                    color="inherit"
                    aria-label="menu"
                    sx={{pb:2.5,px:0,color:"#1d716e"}}
                  >
                    <DiCssdeck  size ="2.9rem"/>
              </IconButton>

                <MuiLink
                    href="/"
                    variant="body3"
                    component="button"
                    sx={{
                      // display: { xs: 'none', md: 'flex' },
                      fontSize:35,
                      fontWeight: 700,
                      color:"white",
                      textDecoration:"none",
                      pb:1,
                    }}
                  >
                    Abounida
                </MuiLink>  
            </Box>


            {/* Tabs Section */}
            <Container>
            <Stack 
                direction="row"  
                gap={6} sx={{
                        ml:{xl:20,lg:9},
                        fontSize:21,
                        fontWeight:600,
                        textTransform:"capitalize",
                        display:{lg:'flex',md:"none",sm:"none",xs:"none"},
                        
                        }}>
                {pages.map((page,i)=>(
                      <MuiLink sx={{color:"#fff",fontSize:22 , '&:hover':{color:"#2aa8a6 !important",textDecoration:'none'}}} key={i} href={page === 'Home' ? '#' : `#${page}`} >{page}</MuiLink>
                )
                )}

              </Stack>
            </Container>


            {/* social Icons section */}
              <Stack direction="row" gap={3} sx={socialIconStyle}>
                  {
                    
                    socialIcons.map((icon,i)=>{
                      return (
                        <IconButton
                        key={i}
                        size="large"
                        color="#fff"
                        aria-label="menu"
                        sx={{
                          pt:i == 2 ? 1.8 : 1,
                          '&:hover': {
                            transform: "translateY(2.1px)",
                            color:"#2aa8a6 !important"
                          }
                        }}
                    >  
                      <a href={socialLinks[i]} target="_blank" width="inherit" rel="noreferrer" >
                        {icon}  
                      </a>  
                    </IconButton>
                      )
                      
                    })
                  }

              </Stack>

            {/* Menu Icon section */}
            <Box >
                <IconButton
                  size="large"
                  color="inherit"
                  aria-label="menu"
                  onClick={()=>{setisDrawerOpen(!isDrawerOpen)}}
                      >
                        {!isDrawerOpen ? 
                        <MenuIcon 
                        sx={{
                          fontSize:40,
                          display: { md: 'flex', lg: 'none' },
                          
                          }}/> 
                          : <CloseIcon 
                          sx={{
                            fontSize:40,
                            color:"#182338",
                            display: { md: 'flex', lg: 'none' },
                            
                            }}/>}
                </IconButton>
            </Box>

          </Stack>
     </Container>
        <Drawer 
            style={{ zIndex: 1 }}
              anchor='top'   
              open={isDrawerOpen}
              onClose={()=> setisDrawerOpen(false)}
            >
            <Stack sx={{alignItems:"center",justifyContent:"center",mt:13,display:"flex",flexDirection:"row",gap:5,color:"#fff",backgroundColor:"#182338",height:"100%"}}>
                {pages.map((page,i)=>(
                        <MuiLink sx={{ color:"#fff",fontSize:22 , '&:hover':{color:"#fff !important",textDecoration:'none'}}} key={i} href={page === 'Home' ? '#' : `#${page}`} onClick= {()=> setisDrawerOpen(false)}>{page}</MuiLink>
                    )
                    )}
            </Stack>
          </Drawer>

    </Stack>
  );
}

export default Header;