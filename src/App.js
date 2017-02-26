import React from 'react';
import './App.js';
import './App.css';
import TodoList from './todoList'

const items = [
    {
        fname:'sachin',
        lname:'tendulkar',
        age:45
    },
    {
        fname: 'dravid',
        lname: 'Rahul',
        age: 43
    }
];

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items
        }
    }

        render(){
        return (
            <div>
                <h1>Sample Todo App</h1>
                <TodoList items={this.state.items}/>
            </div>
        )

        }


}
export default App;