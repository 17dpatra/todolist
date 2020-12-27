import React, {Component} from "react";

//keeps track of our todo state through a form
export default class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            task:"",
            totalList: []
        }
    }
    
    //whenever user types, this function helps to record
    handleInputChange(e) {
        //always use setState to change the state of an element
        this.setState({
            task: e //setting the task the user enters to e for recording
        })
    }

    render() {
        return (
            <form>
                <input 
                name="task" 
                type="text" 
                onChange={(event) => this.handleInputChange(event.target.value)} 
                value={this.state.task}/>
                <button />
            </form>
        );
    }
}