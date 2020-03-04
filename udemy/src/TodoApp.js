import React from 'react';
//import logo from './logo.svg';
import './Todo.css';


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      items: [],
      text: ""
    };
    
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.markItemCompleted = this.markItemCompleted.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleEdit=this.handleEdit.bind(this);
  }
  handleEdit(itemId)
  {

  }
  handleTextChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  handleAddItem(event) {
    event.preventDefault();
    
    var newItem = {
      id: Date.now(),
      text: this.state.text,
      done: false
    };
    
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ""
    }));
  }
  markItemCompleted(itemId) {
    var updatedItems = this.state.items.map(item => {
      if (itemId === item.id)
        item.done = !item.done;
      
      return item;
    });
    
    // State Updates are Merged
    this.setState({
      items: [].concat(updatedItems)
    });
  }
  handleDeleteItem(itemId) {
    var updatedItems = this.state.items.filter(item => {
      return item.id !== itemId;
    });
    
    this.setState({
      items: [].concat(updatedItems)
    });
  }
  render() {
    return (
      <div className="main">
        <h3 className="apptitle">TO DO LIST</h3>
        <form className="row">
          <div className="col-md-3">
            <input type="text" className="form-control" onChange={this.handleTextChange} value={this.state.text} /><button className="btn btn-primary" onClick={this.handleAddItem} disabled={!this.state.text}>Add</button>
          </div>
        
        </form>
        <div className="row">
          <div className="col-md-3">
            <TodoList items={this.state.items} onItemCompleted={this.markItemCompleted} onEdit={this.handleEdit} onDeleteItem={this.handleDeleteItem} />
          </div>
        </div>
        
      </div>
    );
  }
}

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={edit:false,change:this.props.text}
    this.markCompleted = this.markCompleted.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.editDone = this.editDone.bind(this);
    this.editChange = this.editChange.bind(this);
  }
  markCompleted(event) {
    this.props.onItemCompleted(this.props.id);
  }

  editChange(event){
    var changetext=event.target.value;
    this.setState({change:changetext})
  }
  editDone(event)
  {
    if(event.keyCode===13)
    {
      this.setState({edit:false})
    }
  }
  editItem(event) {
   this.setState( {edit:true,change:this.props.text})
    this.props.onEdit(this.props.id);
  }

  deleteItem(event) {
    this.props.onDeleteItem(this.props.id);
  }
  // Highlight newly added item for several seconds.
  componentDidMount() {
    if (this._listItem) {
      // 1. Add highlight class.
      this._listItem.classList.add("highlight");

      // 2. Set timeout.
      setTimeout((listItem) => {
        // 3. Remove highlight class.
        listItem.classList.remove("highlight");
      }, 500, this._listItem);
    }
  }
  render() {
    var viewStyle={};
    var editStyle={};
    if(this.state.edit)
    {viewStyle.display='none'}else{editStyle.display='none'}
    var itemClass = "form-check todoitem " + (this.props.completed ? "done" : "undone");
    return (
      <li id="nag" className={itemClass} ref={li => this._listItem = li }>
        
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" onChange={this.markCompleted} /><p style={viewStyle}> {this.state.change}</p><input style={editStyle}type="text"  onChange={this.editChange} onKeyDown={this.editDone} value={this.state.change}/>
        </label>
        <button type="button" className="edit" onClick={this.editItem}>Edit</button>
        <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteItem}>x</button><hr/>
        
      </li>
    );
  }
}

class TodoList extends React.Component {
  
  render() {
    return (
      <ul className="todolist">
        {this.props.items.map(item => (
          <TodoItem key={item.id} id={item.id} text={item.text} completed={item.done} onItemCompleted={this.props.onItemCompleted} onEdit={this.props.onEdit} onDeleteItem={this.props.onDeleteItem} />
        ))}
      </ul>
    );
  }
}

export default TodoApp;

