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

    addTask(task) {
        //make a copy of our list and push elements into the copy
        let array = this.state.totalList;
        array.push(task);
        
        //reset the state of totalList
        this.setState({
            totalList: array
        })
    }

    render() {
        return (
            <div>
                <input 
                name="task" 
                type="text" 
                onChange={(event) => this.handleInputChange(event.target.value)} 
                value={this.state.task}/>
                <button onClick = {() => this.addTask(this.state.task)}>add task</button>
                
                {/*use map function in-replacement of for-loop to print out all values in totalList */}
                <ul>
                    {this.state.totalList.map((value) => <li>{value}</li>)}
                </ul>
            </div>
        );
    }
}