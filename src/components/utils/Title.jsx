import React from 'react'
import {Container,Stack,Typography} from '@mui/material'
import {styles} from '../../styles/styles'

const Title = (props) => {
    const titleStyle = styles.titleStyles
    titleStyle.fontSize={xs:48,md:77}
    titleStyle.mt = 0
  return (
    <Container sx={{justifyItems:"center",mt:1}}>
        <Container sx={{mx:{lg:"auto",md:"auto"},color:""}}><Typography variant='h2' sx={titleStyle} >{props.name}</Typography></Container>
    </Container>
  )
}

export default Title