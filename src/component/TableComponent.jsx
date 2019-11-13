import React, { Component } from 'react';
import Checkbox from '../component/CheckBox'
import { Table, Button } from 'react-bootstrap'

class TableComponent extends Component {
  render() {
    return (
      <div className="mt-5 container">
        <Button onClick={this.props.handleClick} variant="success">More tasks</Button>
        <Table className='mt-3' responsive striped bordered hover size="sm">
          <thead>
            <tr>
              <th>id</th>
              <th>tasks</th>
              <th>completed</th>
            </tr>
          </thead>
          <tbody>
            {this.props.todos.map(todo => {
              return (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.title} </td>
                  {/* <td>{todo.completed ?
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" />
                    </Form.Group> : <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" />
                    </Form.Group>}</td> */}
                  <td>
                    <div style={{ fontFamily: 'system-ui' }}>
                      <label>
                        <Checkbox
                          checked={todo.completed}
                          onChange={() => this.props.handleCheckbox(todo.id)}
                        />
                        <span style={{ marginLeft: 8 }}>completed</span>
                      </label>
                    </div>
                  </td>



                  {/* <td><Checkbox
                    checked={todo.completed}
                    onChange={this.props.handleCheckboxChange}
                  /></td> */}
                </tr>
              )
            })}
          </tbody>
        </Table>

      </div >
    )
  }
}
export default TableComponent
