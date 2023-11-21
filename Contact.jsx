import React from "react";
import "./Contact.css"
function Contact(){
    function Order(){
        prompt(" ORDER PLACED ask anything")
    }
    return(
        <>
        <div className="contact">
           <div className="menu">
        
            <h2><b>FOOD <br></br>DELIVERY</b></h2>
            <label>Contact no:</label>
            <input type="text" placeholder="contact number"/><br></br>
            <label>Address no:</label>
            <input type="adress" placeholder="home adress"/><br></br>
            <label>Food Code:</label>
            <input type="code" placeholder="write your select food"/><br></br>
            <button className="place" onClick={Order}>Place Order</button>
            </div> 


        </div>

        </>
    )
}
export default Contact;