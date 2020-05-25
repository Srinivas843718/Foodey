import React, {useContext} from 'react';
import { CartContext } from './ContextApi';

const Noodles = () => {
    const { state: { noodles}, handleUpdate } = useContext(CartContext)
    return (
        <div className="row mt-4 ">
            
            {noodles.map(({ img, name, type, rates, price },index) => (
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
                            <button onClick={(e)=>handleUpdate(e,index)} id="noodles" className="btn btn-warning btn-center"><i className="fa fa-shopping-cart"></i>Order</button>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Noodles;