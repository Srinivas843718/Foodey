  
import React, {useContext} from 'react';
import { CartContext } from './ContextApi';


function Cart() {
    const { state: { cart}, removeUpdate } = useContext(CartContext)
  
    return (
       
        <div>
           <div className="row mt-4 ">
               
            {cart.map(({ img, name, type, rates, price },index) => (
                 <div className="col-4 mb-3">
                 <div className="card">
                     <img className="card-img-top" src={img} height="250" width="150" />
                     <div className="card-body">
                         <h5>{name}</h5>
                         <div>{type}</div>
                         <hr />
                         <div className="d-flex justify-content-between">
                             <div >
                                 <kbd className="bg-success"><i className="fa fa-star"></i>{rates.rating}</kbd>
                             </div>
                             <div >{rates.review}</div>
                         </div>
                         <hr />
                         <div className="d-flex justify-content-between">
                             <div>{price}</div>
                             <button onClick={()=>removeUpdate(index)} id="pasta" className="btn btn-warning btn-center">Remove</button>
                         </div>
                     </div>
                 </div>
             </div>
            ))}
        </div>
        </div>
    )
}

export default Cart