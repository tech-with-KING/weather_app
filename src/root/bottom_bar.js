import React from 'react';
import './bottom_bar.css'
import cosmic from "../img/logo.svg"

const DownBar=()=>{
    return(
        <div className='downcomponent'>
            <div className='extra_contents'><button>take a step forward join us now</button></div>
            <div className='menue_bottom'>
                <ul className='menue_options' >
                    <li>home</li>
                    <li> Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <img className='logo' src={cosmic} alt='logo'/>
            </div>
            <div className='our_socials'>
                <button>find me:</button>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
            <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </div>
                
        </div>
    )
       
}
export default DownBar;