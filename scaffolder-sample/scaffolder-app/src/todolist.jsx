import React from 'react';
function Todolist(){
            const [ipd,setipd]=React.useState("");
            const [todos,settodo]=React.useState([]);
              
            function getipd(ev){
              setipd(ev.target.value);     
            }
            function addtodo(){
                settodo([...todos,ipd]);
            }
            function deletetodo(deleteindex){
                var newtodo= todos.filter((t,i)=>{
                   return deleteindex!=i
                })
               // console.log(deleteindex)
               // console.log(newtodo);
                settodo([...newtodo])
            }
            return(<div>
                    <input type="text" onKeyUp={getipd}/>
                    <h1>{ipd}</h1>
                    <button onClick={addtodo}>add</button>
                    <ul>{
                        todos.map((todo,i)=>{
                         return (<li key={i}>{todo} <button onClick={()=>deletetodo(i)}>delete</button></li> )  
                            
                        })
                    }</ul>
                    </div>);
            
        }
        export default Todolist;