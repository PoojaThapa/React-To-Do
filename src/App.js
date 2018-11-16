import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AddItem } from './Color/Color.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {
          taskname: 'Test',
          checkedFlag: false
        },
        {
          taskname: 'Test2',
          checkedFlag: false
        }
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    let currentItem = this.state.lists;
    let newItem = this.textInput.value;
    if (newItem) {
      currentItem.push(
        {
          taskname: newItem,
          checkedFlag: false
        });
      this.setState({ item: currentItem });
      this.textInput.value = '';
    }
  }
  handleCheck = (index, event) => {
    let tempItem = [...this.state.lists];
    tempItem[index].checkedFlag = event.target.checked === true ? true : false;
    this.setState({ tempItem });

  }
  handleEdit = (i) => {
    alert('Edit' + i);
  }
  handleDelete = (i) => {
    alert('Delete' + i);
  }

  searchFunc = (e) => {
    let updatedList = this.state.lists;
    let searchValue = this.searchItem.value.toLowerCase();
    updatedList = updatedList.filter(function (item) {
      return item.taskname.toLowerCase().search(
        searchValue) !== -1;
    });
    this.setState({ lists: updatedList });
    //this.searchItem.value = '';
  }


  render() {
    let newItems = '';
    newItems = this.state.lists.map((map, index) => {
      return <table className="table table-bordered" key={index}><tbody>
        <tr style={{ backgroundColor: map.checkedFlag === true ? 'green' : 'yellow' }}>
          <td> {map.taskname} </td>
          <td><button className="btn btn-xs" onClick={this.handleEdit.bind(this, index)}>Edit</button> </td>
          <td><button className="btn btn-xs" onClick={this.handleDelete.bind(this, index)}>Delete</button></td>
          <td><input type="checkbox" onChange={this.handleCheck.bind(this, index)} /></td>
        </tr>
      </tbody>
      </table>;
    })




    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="form-group">
            <label>
              <h4 className="App-CustomHeader">To Do Lists: </h4>
            </label> <input type="text" name="search" placeholder="Search.. for item" ref={(input) => this.searchItem = input} /> {' '}
            <button type="submit" className="btn btn-primary" onClick={this.searchFunc.bind(this)}><i className="fa fa-search" aria-hidden="true"></i>Search</button><br />
            <label>
              <input type="text" placeholder="Enter item to add" className="form-control" ref={(input) => this.textInput = input} />
            </label>
            {' '}
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Add</button>

            <ul>{newItems} </ul>
            <AddItem />
          </div>

        </header>
      </div >
    );
  }
}

export default App;
