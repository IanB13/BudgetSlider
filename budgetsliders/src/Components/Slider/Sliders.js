import React from 'react'

const Sliders =(props) =>{
    const sliderArray = props.sliders;
    const changesliders =props.changesliders; 
    const totalBudget =props.totalBudget;
      return(
        <div>
          {sliderArray.map(slider => { 
            return( <Slider 
              sliderBudget ={slider.total} 
              sliderId={slider.id} 
              key = {slider.id}
              changesliders = {changesliders} 
              sliderArray = {props.sliders} 
              totalBudget ={totalBudget}/>)
            }) }
        </div>
      )
    }
    


//Creates the individual sliders, 
const Slider =(props) =>{
    const changesliders = props.changesliders;
    const sliderArray = props.sliderArray;
    const sliderId = props.sliderId;
    const totalBudget = props.totalBudget;
    
      const handleTotalChange = (event) => {
    
        //function that changes values based on the array
        
        //get average
        //TODO: add lock functonality
        // add lock + figure out functions
        const newAmount = (totalBudget-event.target.value)/(sliderArray.length-1)
        const newArray = sliderArray.map(slider =>{
          if(sliderId === slider.id){
            const changedSlider = {
              id: slider.id,
              total: event.target.value
            };
            return changedSlider
          }
          else{
            const changedSlider = {
              id: slider.id,
              total: newAmount
            };
            return changedSlider
          }
        } )
        changesliders(newArray)
      }
      
      return(
        <div>
          <input value = {sliderArray[sliderId].quantity} 
          //need to add inputs
          /> quantity *
          <input value = {sliderArray[sliderId].cost} 
          
          />cost = 
        <input value = {sliderArray[sliderId].total}
          id = {sliderId}
          onChange ={handleTotalChange} />
          total
          <input type="checkbox" 
          //onChange={}
          />
      </div>
      )
    }

export default Sliders;