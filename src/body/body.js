import React from 'react';
import './body.css'
import { useState } from 'react';


const Body=(props)=>{
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
        <div className='body'>

            <div className='article' >
                
            </div>
            
           

              
        </div>    
    )
}
export default Body;