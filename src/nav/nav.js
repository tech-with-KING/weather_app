import React, { Component } from 'react';
import boo from '../weatherwalpar/wallpaper1.jpg'
import boo1 from '../weatherwalpar/wallpaper2.jpg'
import boo2 from '../weatherwalpar/wallpaper3.jpg'
import boo3 from '../weatherwalpar/wallpaper4.jpg'
import boo4 from '../weatherwalpar/wallpaper5.jpg'
import boo5 from '../weatherwalpar/wallpaper6.jpg'
import boo6 from '../weatherwalpar/wallpaper7.jpg'

import boo8 from '../weatherwalpar/wallpaper1.jpg'

import { new_background_value } from '../utility_functions';
import Menue_Bar from './menue';
import './nav.css'

class Navber extends Component {
    
   
    state={
        num :0
     }
    componentDidMount(){
       const inteval= setInterval(() => {
           if (this.state.num<7) {
            this.setState((prevState)=>{
                return{num:prevState.num+1};
            });
           }
            else{
                this.setState(()=>{
                    return{num:0};
                });
            }


        },10000);
    }
//    componentDidUpdate(prev)
    render() { 
        let {num}=this.state        
        var imgpath=[boo,boo1,boo2,boo3,boo4,boo5,boo6]
    
        return (
            <div className='navbar' style={{backgroundImage:`url(${imgpath[num]})`}}>
                
                <Menue_Bar/>
            </div>
        );
    }

    
}
 
export default Navber;