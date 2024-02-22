import React from "react";
function F1(){
    return(
        <>
        <F2 name="raja"></F2></>
    );
}
function F2(props){
    const n=props.name;
    return(
        <>
        <F3 name={n}></F3>
        </>
    );
}
function F3(props){
    const mystl={
        background:"yellow"
    }
    return(
        <>
        <h1 style={mystl}>This is F3{props.name}</h1>
        </>
    );
}
export default F1;