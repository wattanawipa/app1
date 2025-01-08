import React,{Component} from "react";

export default class Button extends Component{
    showAlert(msg){
        alert(msg)
    }

    onClickButton=()=>{
        this.showAlert('Hello')
    }

    render(){
        return <button onClick={this.onClickButton}>OK</button>
    }
}
