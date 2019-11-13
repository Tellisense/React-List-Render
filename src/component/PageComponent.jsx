import React, { Component } from 'react';
import TableComponent from './TableComponent';
import axios from 'axios';

let apiStart = 0;
export class PageComponent extends Component {
  state = {
    todos: []
  }

  async componentDidMount() {
    const { data: todos } = await axios.get(this.getApiEndpoint())
    this.setState({ todos })
  }

  getApiEndpoint = (apiStart) => {
    return `https://jsonplaceholder.typicode.com/todos?_start=${apiStart}&_limit=5`
  }

  handleCheckbox = (todoId) => (e) => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        id: { todoId },
        completed: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    console.log(this.body)
      .then(response => response.json())
      .then(json => console.log(json))
    this.setState({ completed: e.target.completed })

  }


  handleClick = async e => {
    e.preventDefault();
    apiStart += 5;
    const { data: todos } = await axios.get(this.getApiEndpoint(apiStart))
    var joined = this.state.todos.concat(todos);
    this.setState({ todos: joined })
    console.log(this.state.todos)
  }



  render() {
    return (
      <>
        <TableComponent handleCheckbox={this.handleCheckbox} handleClick={this.handleClick} todos={this.state.todos}></TableComponent>
      </>
    )
  }
}

export default PageComponent
