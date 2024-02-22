import React from 'react';
class Modify extends React.Component{
    constructor(props)
            {
                super(props);
                this.state={
                    eid:"101",
                    ename:"siri",
                    esal:21000,
                }
            }
            mystl={
                border: '1px solid Blue ',
                background: 'green',
                margin:'2px'
            }
            updateEname=()=>{
                this.setState({ename:"sireesha"});
            }
    render(){
        return(
            <div>
                <h1 style={this.mystl}>Actual Details</h1>
                <p>Eid:::{this.state.eid}<br></br>
                Ename:::{this.state.ename}<br></br>
                Esal:::{this.state.esal}</p><hr>
                </hr>
                <button type='button' onClick={this.updateEname}>Click me </button>
                <h1 style={this.mystl}>UpdateDetails</h1>
                <p>Eid:::{this.state.eid}<br></br>
                Ename:::{this.state.ename}<br></br>
                Esal:::{this.state.esal}</p>
            
            </div>

        );
    }
}
export default Modify;