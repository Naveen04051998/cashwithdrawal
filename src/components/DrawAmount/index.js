
import "./index.css"


const DrawAmount=props=>{
    const {onChangeAmount}=props

    const ChangeAmount=()=>{
        console.log(amount)
        onChangeAmount(amount)
    }

    const {AmountDrawDetails}=props 
    // eslint-disable-next-line 
    const{amount}=AmountDrawDetails 
    return (
        <li className="user-card-container">
            <div className="">
            <button className="button" onClick={ChangeAmount}>{amount}</button>
            </div>
        </li>
    )
}
export default DrawAmount