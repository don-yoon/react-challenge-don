import React, { Component } from 'react'
import ColorBox from './ColorBox'

class AddRemove extends Component{
    constructor(props){
        super(props)
        this.state = {
            boxCount: 1,
            bArray: [<tr><ColorBox/></tr>]
            
            
        }
        

    }
    addClick = () => {
        
        this.setState({boxCount: this.state.boxCount + 1})
        this.state.bArray.push(<tr><ColorBox/></tr>)
        
    }

    minusClick = () => {
        
        if (this.state.boxCount > 1) {
            this.setState({boxCount: this.state.boxCount - 1})
            this.state.bArray.pop()
            
           
        } else {
            this.setState({boxCount: 1})
                          
            }
    }
        
    render() {
        let {boxCount} = this.state
        
        return(
        <>
        <h2>Number of Boxes: {boxCount}</h2>
        <button onClick = {this.addClick}>add</button>
        <button onClick = {this.minusClick}>minus</button>

        <table style={{margin: "auto"}}>
        {this.state.bArray}
        </table>
        </>
        )
    }
}

export default AddRemove