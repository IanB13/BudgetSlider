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
      locked: false
    },{
      id: 1,
      total: 1000,
      cost: 50,
      quantity: 20,
      locked: false
    },{
      id: 2,
      total: 1000,
      cost: 50,
      quantity: 20,
      locked: false
    }
  ]




const SliderContainer =() =>{
    const [budget,changeBudget] =useState(3000) // should initalize state with cookies
    const [sliders, changeSliders] =useState(dummylist) //
    const[locknum,changeLocknum] = useState(0)

    return (
      <div className ="App">
          <BudgetInput budget = {budget} changeBudget = {changeBudget}/>
          <AddRemoveSlider sliders = {sliders} changeSliders = {changeSliders} />
          <Sliders sliders = {sliders} changesliders = {changeSliders} totalBudget={budget} locknum = {locknum} changeLocknum ={changeLocknum}/>
      </div>
    );
  }

export default SliderContainer;