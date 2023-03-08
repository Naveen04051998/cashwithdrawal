import DrawAmount from './components/DrawAmount'
import {Component} from 'react' 

import "./App.css"


const initialAmountList=[
  {id:1,
  amount:50},
  {id:2,
  amount:100},
  {
    id:3,
    amount:200
  },
  {
  id:4,
  amount:500
}
]

class WithDrawalItem extends Component{
    state={amount:2000,
  AmountList:initialAmountList}

 
  onChangeAmount=()=>{
  

    this.setState((prevState) => ({ amount: prevState.amount -50 }))
  }

render(){

    const {AmountList}=this.state
    const{amount}=this.state
    return(
        <div className='container'>
          <div className='heading-container'>
            <h1 className='heading'>{amount}</h1>
            </div>
            <div>
               <ul>
                {AmountList.map((eachItem)=>(
          <DrawAmount AmountDrawDetails={eachItem} key={eachItem.id} onChangeAmount={this.onChangeAmount} />
        ))}
      </ul>
            </div>
        </div>
    )
     }
}
export default WithDrawalItem
