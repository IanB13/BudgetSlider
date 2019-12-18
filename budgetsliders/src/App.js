import React,{useState} from 'react';
import './App.css';
const dummylist =[
  {
    id: 0,
    total: 1000,
    cost: 50,
    quantity: 20,
    checked: false
  },{
    id: 1,
    total: 1000,
    cost: 50,
    quantity: 20,
    checked: false
  },{
    id: 2,
    total: 1000,
    cost: 50,
    quantity: 20,
    checked: false
  }
]

const App = () => {
  return (
    <SliderContainer />
  );
}

const SliderContainer =() =>{
  const [budget,changeBudget] =useState(3000)
  const [sliders, changeSliders] =useState(dummylist)
  
  return (
    <div className ="App">
        <BudgetInput budget = {budget} changeBudget = {changeBudget}/>
        <AddRemoveSlider sliders = {sliders} changeSliders = {changeSliders} t/>
        <Sliders sliders = {sliders} changesliders = {changeSliders} totalBudget={budget}/>
    </div>
  );
}
const BudgetInput =({budget,changeBudget}) =>{


  const budgetUpdate = (event)=>{
    changeBudget(event.target.value)
  }

  return(
    <h3>
      Budget:
        <input onChange = {budgetUpdate} value ={budget} />
      Total:{}
      Remainder:{}
    </h3>
  )

}

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

export default App;
