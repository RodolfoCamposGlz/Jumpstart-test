import React, {useState} from 'react'
import {typeScale} from '../../utils'
import styled from 'styled-components';
import { Button, Menu, MenuItem, ListItemIcon} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Kebab from '../../assets/illustrations/kebab.svg'
import Download from '../../assets/illustrations/download.svg'
import Print from '../../assets/illustrations/Print.svg';
import Delete from '../../assets/illustrations/Delete.svg'

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Avenir'
      ].join(','),
    }
  });

export const MenuCard = ()=>{
    const [isOpen, setIsOpen] = useState(null)
    const [anchorEl, setAnchorEl] = useState()

    const recordButtonPosition = (event) => {
        setAnchorEl(event.currentTarget);
        setIsOpen(true);
    }
    return(
        <ThemeProvider theme={theme}>
        <MenuContainer onClick={(event)=>recordButtonPosition(event)}>
            <img src={Kebab}/>
        </MenuContainer>
        <Menu
        style={{top:'-35px',left:'60px',fontFamily:'Avenir'}}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(isOpen)}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
         onClose={()=>setIsOpen(!isOpen)}
        >
            <MenuItem
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#B05EFD';
                e.target.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) =>{
                e.target.style.backgroundColor = '#ffffff';
                e.target.style.color = '#000000';
                }}>
                <img style={{marginRight:"20px"}} src={Download}/>
                Download
            </MenuItem>

            <MenuItem
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#B05EFD';
                e.target.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#ffffff'
                e.target.style.color = '#000000';
            }}>
                <img style={{marginRight:"17px"}} src={Print}/>
                Print
            </MenuItem>

            <MenuItem
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#B05EFD';
                e.target.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#ffffff'
                e.target.style.color = '#EB5757';
            }}>
                <img style={{marginRight:"20px"}} src={Delete}/>
                Delete
            </MenuItem>

        </Menu>
        </ThemeProvider>
    )
}

export const MenuContainer = styled.button`
    position:absolute;
    left:260px;
    top:15px;
    width:34px;
    height:34px;
    background-color:#FFFFFF;
    border-radius:5px;
    border: 1px solid #F1F4F6;
    display:flex;
    align-items:center;
    justify-content:center;
`;
