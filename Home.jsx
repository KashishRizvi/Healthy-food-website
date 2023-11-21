import React from "react";
import "./Home.css"

function Home(){
    function Cart(){
        prompt(" ADD TO CART")
    }
    return(
        <>
 <div className="container">
 <h1 className="dive">Dive Into <br></br>Good Health!</h1>
 </div>
 <div className="card">
    <div className="case">
        <img src="data:image/jpeg;base64,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" alt=""/>
        <h4 className="fruit">Fruits</h4>
        <h6> 200pkr per KG</h6>
        <button onClick={Cart}>Add to cart</button>
    </div>
    <div className="case">
    <img src="https://th.bing.com/th/id/OIP.t00medfodjRBdoroXvIzNgHaLN?w=122&h=184&c=7&r=0&o=5&pid=1.7" alt=""/>
    <h4 className="fruit">Vegetables</h4>
        <h6> 300pkr per KG</h6>
        <button onClick={Cart}>Add to cart</button>
    </div>
    <div className="case">
    <img src="https://th.bing.com/th/id/OIP.RE425TIz8V51z9_AywT4_AHaNL?w=115&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
    <h4 className="fruit">Eggs</h4>
        <h6> 200pkr per Dozen</h6>
        <button onClick={Cart}>Add to cart</button>
    </div>
 </div>
        </>
    )
    
}
export default Home;