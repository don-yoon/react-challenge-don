import React, { Component } from 'react'

class ColorBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colorName: "white",
            colorArray: ["green", "blue", "yellow", "red", "purple", "orange"],
        }
        
    }

    reset = () => {
        this.setState({colorName: "white"})
    }
    
  
    colorChange = () => {
        let newColor = this.state.colorArray[Math.floor(Math.random()*6)]
        this.setState({colorName: newColor})
    }


    render() {
      
        let {colorName} = this.state
        const mystyle = {
            color: "black",
            backgroundColor: colorName,
            width: "200px",
            height: "100px",
            fontFamily: "Arial"
          };

        return(
            <>
           
            <button style={mystyle} onClick = {this.colorChange}>
            {colorName}
            </button>
            <button onClick = {this.reset}> RESET </button>         
            </>
        )
    }
}

export default ColorBox