import React from 'react';
import { BrowserRouter as Router,Link,Route } from "react-router-dom";
const Head = () => {
    return (
        <>
        <div className="row bg-light">
            <div className="col-4 ml-5"><Link to="/home"><img src="http://fooddy.ancorathemes.com/wp-content/uploads/2016/12/logo-7.png" height="50" width="100"></img></Link></div>
            <div className="col"><Link to="/home"><h5 className="mt-3">Home</h5></Link></div>
            <div className="col"><Link to="/menu"><h5 className="mt-3">Menu</h5></Link></div>
            <div className="col"><Link to="/Blog"><h5 className="mt-3">Blog</h5></Link></div>
            <div className="col"><Link to="/Contact"><h5 className="mt-3">Contact us</h5></Link></div>
            
        </div>
</>
    )

}
export default Head