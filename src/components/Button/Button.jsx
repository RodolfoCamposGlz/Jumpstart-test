import React from 'react'
import {typeScale} from '../../utils'
import styled from 'styled-components';

export const PrimaryButton = styled.button`
    width:243px;
    height:32px;
    background-color:#FFFFFF;
    border-radius:5px;
    font-size: ${typeScale.paragraph};
    color: ${props => props.theme.textColorOnPrimary};
    border: 1px solid ${props=>props.theme.primaryColor};
    margin-top:54px;
    margin-bottom:32px;
    font-family:'Avenir';
    font-size:10px;
`;
