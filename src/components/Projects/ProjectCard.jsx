import * as React from 'react';
import Card from '@mui/material/Card';
import {motion}  from "framer-motion"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Link,Typography,Box} from '@mui/material';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import {styles} from '../../styles/styles'

import FishImage from '../../constants/proj_images/fish.png'
import MovieImage from '../../constants/proj_images/movieLand.png'
import YoutubeImage from '../../constants/proj_images/youtube.png'
import SauceImage from '../../constants/proj_images/hotsauce.png'
import ScrapyImage from '../../constants/proj_images/sports.png'
import RobotImage from '../../constants/proj_images/manualControl.png'
import ExcelModel from '../../constants/proj_images/ExcelModelDash.png'
import YoutubeExplainer from '../../constants/proj_images/YoutubeExplainer.png'
import pin from '../../constants/proj_images/pin.jpg'
import dice from '../../constants/proj_images/dice2.png'
import blog from '../../constants/proj_images/blog.png'
import csvDash from '../../constants/proj_images/csv_dashboard.png'
import productManagement from '../../constants/proj_images/pms.png'
import chatApp from '../../constants/proj_images/chat.png'



const ProjectCard = (props) => {
  const project = props.project;
  const btnStyle = styles.TextStyles;
  const buttonHover1 = {
          scale: 1.08,
          borderColor:"#fff",
          transition: { duration: 0.2 }
        }
  const buttonHover2 = {
          scale: 1.08,
          backgroundColor:"#fff",
          transition: { duration: 0.2 }
        }
  const getImage = (imgName)=>{
      switch(imgName){
        case 'youtube':return YoutubeImage;break;
        case 'fish':return FishImage;break;
        case 'sauce':return SauceImage;break;
        case 'movie':return MovieImage;break;
        case 'scrapy':return ScrapyImage;break;
        case 'robot': return RobotImage;break;
        case 'excelModel': return ExcelModel;break;
        case 'tubeExplainer': return YoutubeExplainer;break;
        case 'pin': return pin;break;
        case 'dice': return dice;break;
        case 'blog': return blog;break;
        case 'csvDash': return csvDash;break;
        case 'productManagement': return productManagement;break;
        case 'chat': return chatApp;break;
        default: return ;break;
      }
  }
    
  return (

    <Card 
        component={motion.div} 
        layout
        whileHover={{
          scale: 1.03,
          cursor:"pointer",
          transition: { duration: 0.3 }
        }}
        sx={{ 
          maxWidth: 330,
          borderRadius:3,
          height:490, 
          backgroundColor:"#182338",
          position:"relative",
          border:2,
          borderColor:"#1f2c43",
          boxShadow:'7px 4px  #182338',
          }}>

            <LazyLoadImage
                alt="card-img"
                effect="blur"
                src={getImage(project.imgName)}
                width="100%"
                style={{ minHeight: '13rem' }}
            />


      <CardContent >

        <Typography  variant="h5" component="div" 
        sx={{
          color:"#FDDC",
          fontWeight:700,
          fontSize:28,
          fontFamily: "Source Sans",
          width:"100%",
          // textAlign:"center"
          }}>
          {project.title}
        </Typography>

          <Box 
            sx={{
              display:"flex",
              width:"100%",
              position:"absolute",
              bottom:80,
              color:"#FFF",
              justifyContent:"flex-end"
            }}
              >
          </Box>
          <Box
              sx={{
                display:"flex",
                mt:1,
                position:"absolute",
                // bottom:80,
                color:"#FFF",
                // justifyContent:"flex-start"
              }}
              >
              <>
              <span style={{fontSize:17}}>[  </span>
              {project.tools.map((tool,i)=>(
              <Typography 
                  variant="body1" 
                  key={i}
                  color="#ddd"
                  sx={{mr:project.tools.length-1 == i ? 0.5 : 1,
                       ml:i==0 ? 0.5 : 0,
                       fontSize:17}}
                  >
                  {i == project.tools.length-1 ? `${tool}` : `${tool},`}
              </Typography>
                ))}
              <span style={{fontSize:17}}>] </span>
              </>
              
      </Box>

      </CardContent>

      <Box sx={{mt:3,ml:2,color:"gray"}}>
      <Typography variant='body2'>
                {project.details}
              </Typography>
      </Box>

      <CardActions sx={{display:"flex",width:"100%",justifyContent:"space-around",mt:2,position:"absolute",bottom:18}}>
          <Button disabled={!project.github_enabled} component={motion.button} whileHover={buttonHover1}   variant="outlined" className="movie" sx={{border:1.7,fontSize:17,px:3,color:"#fff"}}><Link href={project.github_url} target="_blank">Github</Link></Button>
          <Button disabled={!project.live_enabled}  component={motion.button} whileHover={buttonHover2}  variant="contained"  sx={{fontSize:17,px:3,color:"#000",backgroundColor:"white"}}><Link href={project.live_url} target="_blank">Live Demo</Link></Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;