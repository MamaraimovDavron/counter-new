import React from "react";
import { Component } from "react";
import './App.css';

class App extends Component{

    state = {
        count: 0,
    }

    addOne = () =>{
        this.setState({
            count: this.state.count + 1,
        })
    }

    reset = () => {
        this.setState({
            count: 0,
        })
    }

    deleteOne = () => {
        this.setState({
            count: this.state.count - 1,
        })
    }

    render(){
        return(
            <div className="main">  
                <div className="card">
                    <div className="card-header">
                        <h1>Best Tasbeh!</h1>
                    </div>
                    <div className="card-body">
                        {this.state.count}
                    </div>
                    <div className="card-footer">
                        <button className="add" onClick={this.addOne}>+</button>
                        <button className="reset" onClick={this.reset}>Reset</button>
                        <button className="delete" onClick={this.deleteOne}>-</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;