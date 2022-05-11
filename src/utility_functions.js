let i =0
const new_background_value =()=>{
  if(i<=8){
    return(i++)
  }
  else{
    return(i=0)
  }
  
}

export {new_background_value}