import React,{useReducer} from "react";
function reduce(state,action){
    if(action.type=="addtodo"){
        return {todos:[...state.todos,action.payload]}
    }
}
function Todolist1(){
    const [state,dispatch]=useReducer(reduce,{todos:["fsdfxg","sdgb","sdg","sdg"]});
    const [ipd,setipd]=React.useState("");
    function getipd(ev){
        setipd(ev.target.value);
    }
    return(<div>
    
        <input type="text" onChange={(ev)=>{getipd(ev)}}/>
        <button onClick={()=>{dispatch({type:"addtodo",payload:ipd})}}>Add Todo</button>
       <ul> {
        state.todos.map(todo=><li>{todo}</li>)
        }</ul>
    </div>)
}
export default Todolist1;