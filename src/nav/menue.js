import React from 'react';
import './menue.css'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import cosmic from "../img/tile.svg"
import {CloudCircleOutlined,Search,SearchOffRounded,ThumbDown, ThumbUp } from '@mui/icons-material';

const Menue_Bar=(props)=>{
    const [toggle,settoggle]=useState(false)   
    const [dark,setdark]=useState(false)   
    const darkmode = () =>{
        if (dark) {
            setdark(false)
        } else {
            setdark(true)
        }
    }
    const coloring={
      darkbg:'black',
      lightbg:'white',
      darkcl:'black',
      lightcl:'white',
      darkbd:'',
      lightbd:''
  }
  

    return(
        <>
         
           <div className='menuebar' style={ toggle?{width:'60%'}:{width:'0',paddingLeft:'0'}}  >
                          <div onClick={()=>{toggle ?settoggle(false) :settoggle(true)}}>
                              <ClearTwoToneIcon  style={{position:'absolute',top:'0',margin:'5px', fontSize:'30px', fontWeight:'bold'}}/>
                            </div>
                            <a className='li' to={'/'}> <HomeIcon style={{marginRight:'5px'}}/>Home</a>   
                            <a className='li' href='https://drive.google.com/drive/folders/1q9ahRAe-SFAogpu43f0JeCTfNumFIcnN?usp=sharing' ><MenuBookTwoToneIcon style={{marginRight:'5px'}}/> Materials</a>
                            <a className='li' to={'/solutions'}> <CreditScoreIcon style={{marginRight:'5px'}}/> My Scores</a>
                            <a className='li' href='' ><LibraryBooksIcon style={{marginRight:'5px'}}/>Course Outline</a>
                            <a to={""} className='li' ><InfoTwoToneIcon style={{marginRight:'5px'}} />About</a>   
                </div>
        <div className='header'>
        <div className='top_bar' >
                <div onClick={()=>{toggle ?settoggle(false) :settoggle(true)}} >
                    <MenuIcon style={{fontSize:'30px',fontWeight:'bold',transition:"0.5s ease-in"}} />
                </div>
                <div className='search_tab'><input onChange={(event)=>{console.log(event.target.value)}} type={'email'} placeholder="Search local weather around the globe"></input><Search/></div>
           </div>
        
        
                    <div className='storymode' >
                        <div className='date'>
                        <div className='day'><h4>Monday june 2022</h4></div>
                        <div className='country'><h4>Nigeria</h4></div>
                            <ul className='description'>
                                <li>Temperature : </li>
                                <li>Latitude : Longitude: </li>
                                <li>Humidity : </li>
                                <li>Pressure: </li>
                                <li>city :Lagos </li>
    
                            </ul>
                        </div>
                        <div className='about'>
                            <div className='weather'>
                                <div></div>
                                <CloudCircleOutlined style={{margin:'5px', fontSize:'70px',color:'black', fontWeight:'lighter'}}/>
                                <p>Temperature: 100c</p>
                                <p>Condition :sunny <img src='http://openweathermap.org/img/wn/10d@2x.png' alt='lop'></img></p>
                                <div className='votecount'><p>upvotesz<ThumbDown style={{color:'black'}}/> :0</p><p>Downvotes <ThumbUp style={{color:'black'}}></ThumbUp>:o</p></div>
                            </div>
                            {/* <div className='circle'>{'<'}</div>kkkkj 
                            <div className='circle1'>{'>'}</div> */}
                        </div>
                      
                    </div>              
        </div>    
        </>
    )
}
export default Menue_Bar;