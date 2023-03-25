import React from 'react'
import styled from 'styled-components'
import {IoIosQuote} from "react-icons/io";
import {AiOutlineStar} from "react-icons/ai";

const ClientSlider = (props) => {
    const {name, position, img_url, stars, disc} = props.item;
  return (
    <Container id="Testimonials">
        <Header>
            <span className='quote'><IoIosQuote/></span>
            <div>
                {Array(stars).fill().map((_, i) => (
                    <span className='star' key={i}>
                        <AiOutlineStar/>
                    </span>
                ))}
            </div>
        </Header>
        <Body>
            {disc}
        </Body>
        <Footer>
            <div className="details">
                <h1>{name}</h1>
            </div>
        </Footer>
    </Container>
  )
}

export default ClientSlider

const Container = styled.div`
    background: #0b1019;
    height: 200px;
    padding: 0.9rem 3rem;
    width: 411px;
    margin: 0 1rem;
    border-radius:15px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .quote{
        font-size: 3rem;
        color: #01be96;
        opacity: 0.7;
    }

    .star{
        color: #ffcd3c;
        font-size: 1.3rem;
    }
`
const Body = styled.p`
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
`
const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;


    h1{
        font-size: 1.2rem;
        font-weight: 700;
        @media(max-width: 580px){
            font-size: 1rem;
        }
        @media(max-width: 538px){
            font-size: 0.9rem;
        }
    }

    p{
        font-size: 0.8rem;
        color: rgba(255,255,255,0.500);
        @media(max-width: 538px){
            font-size: 0.6rem;
        }
    }
`