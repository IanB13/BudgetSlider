import React from 'react'

const Sliders =(props) =>{
    const sliderArray = props.sliders;
    const changesliders =props.changesliders; 
    const totalBudget =props.totalBudget;
    const locknum = props.locknum;
    const changeLockednum = props.changeLockednum;

    console.log(`locknum is ${locknum}`)
    const sliderLocknum = sliderArray.reduce( (acc, cur) => { 
      //console.log(acc)
      //console.log(cur)
      if(cur.Locked){
        return 1
      }
      return 0}  ,0)
      console.log(sliderLocknum)

      return(
        <div>
          {sliderArray.map(slider => { 
            return( <Slider 
              sliderBudget ={slider.total} 
              sliderId={slider.id} 
              key = {slider.id} // does not create a prop, needed for react rendering
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
    const totalBudget = props.totalBudget; // total Budget
      const handleTotalChange = (event) => {

        //function that changes values based on the array
        //get average
        //TODO: add lock functonality
        // add lock + figure out functions

        const newAmount = (totalBudget-event.target.value)/(sliderArray.length-1)
        const newArray = sliderArray.map(slider =>{
          if(sliderId === slider.id){
            const changedSlider = {
              ...slider,
              total: event.target.value,
              quantity: event.target.value/slider.cost
            };
            return changedSlider
          }
          else{
            const changedSlider = {
              ...slider,
              total: newAmount,
              quantity: newAmount/slider.cost
            };
            return changedSlider
          }
        } )
        changesliders(newArray)
      }

      const handleQuantityChange = (event)=>{}

      const handleCostChange = (event)=>{}


      const toggleLock =(event) =>{
          const id = event.target.id
          const lockArray = sliderArray.map(slider =>{
            console.log(`id;${id} ${slider.id}`)
            if(+id === +slider.id){
              console.log("heello")
              return( {...slider, locked: !slider.locked})
            }else{
              return({...slider})
            }
          }
          )
          changesliders(lockArray)
      }

      
      return(
        <div>
          <input value = {sliderArray[sliderId].quantity} 
            onChange = {handleCostChange}
            id = {sliderId}
          /> quantity *
          <input value = {sliderArray[sliderId].cost} 
            onChange ={handleQuantityChange}
            id = {sliderId}
          />cost = 
        <input value = {sliderArray[sliderId].total}
          id = {sliderId}
          onChange ={handleTotalChange} />
          total
          <input type="checkbox" 
          onChange={toggleLock}
          id = {sliderId}
          />
      </div>
      )
    }

export default Sliders;