import React from 'react'
import TodoListHeader from './todoListHeader'

class TodoList extends React.Component {
    displayItems(){
        console.log(this.props.items)
    }
    render(){
        return (
            <table className="table table-bordered">
                <TodoListHeader/>

                <tbody>
                {this.displayItems()}

                </tbody>

            </table>
        )
    }
}
export default TodoList;