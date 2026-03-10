import React from "react";
function Recipes(){
    const [recipe,setrecipe]=React.useState([]);
    React.useEffect(()=>{
        fetch("https://dummyjson.com/recipes")
        .then((res)=>res.json())
        .then((data)=>{
            setrecipe([...data.recipes])
        });
    },[]);
    return(
        <div>{
                recipe.map((r)=>{
                   return <li>{r.name}</li>
                })
            }</div>
    )
}
export default Recipes;