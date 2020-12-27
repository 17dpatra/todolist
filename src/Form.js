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
    
    handleInputChange(e) {
        
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