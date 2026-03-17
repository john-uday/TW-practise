import React,{useReducer} from "react";
function reduce(state,action){
    if(action.type==="inc"){
        return {count:state.count+1}
    }
    if(action.type==="dec"){
        return {count:state.count-1}
    }
}
function Counter(){
    var [state,dispatch]=useReducer(reduce,{count:0})
    
    return(
        <div>
            <h1>counter:{state.count}</h1>
            <button onClick={()=>
                {
                    dispatch({type:"inc"})
                }}>
                Increment
            </button>
            <button onClick={()=>
                {
                    dispatch({type:"dec"})
                }}>
                decrement
            </button>
        </div>
    )
}
export default Counter;