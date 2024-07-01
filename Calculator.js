import React from 'react';
import './calculator.css';
class Calculator extends React.Component{
    constructor()
    {
        super()
        this.state={
            val:'',
        }
        this.common=this.common.bind(this)
    }
    common(e)
    {
        this.setState({
            val:this.state.val+e.target.value
        })
    }
    render(){
        return(
            <div class="container">
            <input value={this.state.val} style={{width:282, height:50,marginLeft:5,fontSize:20}}  type="text"/>
            <button onClick={(e)=>this.setState({val:''})} style={{width:208}} class="commonbutton">AC</button>
            <button onClick={this.common} id="/" value="/" class="commonbutton">/</button><br/>
    
            <button value="7" class="commonbutton" onClick={this.common}>7</button>
            <button value="8" class="commonbutton" onClick={this.common}>8</button>
            <button value="9" class="commonbutton" onClick={this.common}>9</button>
            <button value="+" class="commonbutton" onClick={this.common}>+</button><br/>            

            <button value="4" class="commonbutton" onClick={this.common}>4</button>
            <button value="5" class="commonbutton" onClick={this.common}>5</button>
            <button value="6" class="commonbutton" onClick={this.common}>6</button>
            <button value="-" class="commonbutton" onClick={this.common}>-</button><br/>
    
            <button value="1" class="commonbutton" onClick={this.common}>1</button>
            <button value="2" class="commonbutton" onClick={this.common}>2</button>
            <button value="3" class="commonbutton" onClick={this.common}>3</button>
            <button value="*" class="commonbutton" onClick={this.common}>*</button><br/>
    
            <button value="0" style={{width:135}} onClick={this.common} class="commonbutton">0</button>
            <button value="." class="commonbutton"onClick={this.common}>.</button>
            <button onClick={(e)=>this.setState({val:eval(this.state.val)})} class="commonbutton">=</button>
            
        </div>
        )
    }
}
export default Calculator;