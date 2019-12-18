import React,{useState} from 'react'
import AddRemoveSlider from './AddRemoveSlider'
import BudgetInput from './BudgetInput'
import Sliders from './Sliders'

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

export default SliderContainer;