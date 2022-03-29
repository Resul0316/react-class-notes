import react from "react";

const AddEvents2 = () =>{
    function shoot (e, name) {
        alert(`Hello ${name}`)
    }

    return(
        <div>
            {/* <button onClick={shoot}>Take the shoot</button> */}
            <button onClick={(e)=> shoot(e, "Jane")}>Take the shoot</button> 
        </div>
    )
}

export default AddEvents2;



