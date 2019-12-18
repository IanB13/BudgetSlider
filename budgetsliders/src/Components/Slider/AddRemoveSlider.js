import React from 'react'

const AddRemoveSlider = ({sliders,changeSliders}) =>{

    const AddSlider =()=>{
      console.log("add")
      const id = sliders.length
      const addedSliderArray = [...sliders,{
        id,
        total: 0,
        cost: 0,
        quantity: 0,
        checked: false
      }]
      console.log(addedSliderArray)
      changeSliders(addedSliderArray)
      //TODO: Update function
    }
    const RemoveSlider =()=>{
      console.log("remove")
      const removedSliderArray = sliders.slice(0,-1)
     changeSliders(removedSliderArray)
     //TODO: Update function
  
    }
  return(
    <div>
      <button onClick ={AddSlider}>Add </button>
      <button onClick ={RemoveSlider}>Remove</button>
    </div>
  
  )
  }

export default AddRemoveSlider;