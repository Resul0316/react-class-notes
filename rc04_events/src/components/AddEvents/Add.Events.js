import React from "react";


/* const AddEvents = ()=>{
    function shoot(){
        alert("Great shot")
    } */

const AddEvents = ()=>{
    function shoot(e, name){
        alert(`Hello ${name}`)
    }
    

    return(
        <div>
            {/* <button onClick={shoot}>Take the Shoot</button> */}
           {/*  <button onClick={() => shoot()}>Take the Shoot</button> */}
            <button onClick={(e) => shoot(e, "Jane")}>Take the Shoot</button>
        </div>
    );
}

export default AddEvents;