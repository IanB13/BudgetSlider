import React,{useState} from 'react';
import './App.css';
const dummylist =[
  {
    id: 0,
    budget: 1000,
    cost: 50,
    quantity: 20
  },{
    id: 1,
    budget: 1000,
    cost: 50,
    quantity: 20
  },{
    id: 2,
    budget: 1000,
    cost: 50,
    quantity: 20
  }
]


const App = () => {

  
  return (
    <SliderContainer />
  );
}

const SliderContainer =(props) =>{
  // eslint-disable-next-line 
  const [budget,changebudget] =useState(3000)
  const [sliders, changesliders] =useState(dummylist)
  
  return (
    <div className ="App">
        <h1>{budget} </h1>
        <div>Add + remove </div>
        <Sliders sliders = {sliders} changesliders = {changesliders} totalBudget={budget}/>
    </div>
  );
}

const Sliders =(props) =>{
const sliderArray = props.sliders;
const changesliders =props.changesliders; 
const totalBudget =props.totalBudget;
  return(
    <div>
      {sliderArray.map(slider => { 
        return( <Slider 
          sliderBudget ={slider.budget} 
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

  const handleSliderChange = (event) => {

    //function that changes values based on the array
    
    //get average
    //TODO: add lock functonality

    const newAmount = (totalBudget-event.target.value)/(sliderArray.length-1)
    const newArray = sliderArray.map(slider =>{
     // console.log(`${sliderId} == ${slider.id}`)
      if(sliderId === slider.id){
        const changedSlider = {
          id: slider.id,
          budget: event.target.value
        };
        return changedSlider
      }
      else{
        const changedSlider = {
          id: slider.id,
          budget: newAmount
        };
        return changedSlider
      }
    } )
    changesliders(newArray)
  }
  
  return(
    <div>
    <input value = {sliderArray[sliderId].budget} 
      id = {sliderId}
      onChange ={handleSliderChange} />
  </div>
  )
}





export default App;
