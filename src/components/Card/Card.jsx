import React from 'react'
import {typeScale} from '../../utils'
import {PrimaryButton} from '../Button/Button'
import styled from 'styled-components';
import BookIcon from '../../assets/illustrations/book.svg'
import {MenuCard} from '../Menu/Menu'
export const Card = ({title, description, header, menu})=>{
    return(
        <div style={{marginLeft:'38px'}}>
        <HeaderTitle>{header}</HeaderTitle>
        <CardContainer>
                <ImageContainer>
                    <img src={BookIcon} alt=""/>
                </ImageContainer>
                {menu && <MenuCard/>}

            <CardHeader>{title}</CardHeader>
            <CardText>{description}</CardText>
            <PrimaryButton>View document</PrimaryButton>
        </CardContainer>
        </div>
        
    )
}

const CardContainer = styled.div`
position:relative;
display:flex;
align-items:center;
flex-direction:column;
width:305px;
height:300px;
background-color:#FFFFFF;
border-bottom: 4px solid ${props=>props.theme.primaryBorderColor};
`

const CardHeader = styled.h3`
font-size:${typeScale.header3};
text-align:center;
margin-bottom:0px;
margin-top:10px;
`
const CardText = styled.p`
font-size:${typeScale.paragraph};
text-align:center;
line-height:18px;
margin: 10px 31px 0px 31px;
`

const ImageContainer = styled.div`
    background-color:${props=>props.theme.secondaryColor};
    border-radius:50%;
    height:44px;
    align-items:center;
    width:44px;
    display:flex;
    justify-content:center;
    margin-top:25px;
`
const HeaderTitle = styled.h1`
font-size:${typeScale.header1};

`