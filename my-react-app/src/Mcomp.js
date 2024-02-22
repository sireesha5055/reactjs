import React from "react";
function Mcomp(props)
{
    const mystle={
        border:'1px solid yellow',
        background:'pink',
        width:'40%',
        align:'right',
    }
    return(
        <>
        <body>
            <table style={mystle}>
                <tr><th>Elements</th></tr>
                <tr><td>{props.b}</td></tr>
        
        </table>
        </body>
        </>
    
    );
}
export default Mcomp;