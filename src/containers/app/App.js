import React from "react";
import Popup from "../../components/models/Popup";
import './App.css';
import InputText from '../../components/inputText/InputText';
import Button from '../../components/button/Button';
import Login from "../../containers/login/login";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      item: [],
      itemName: "",
      isEdit: false,
      position: "",
      showPopup: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }
  handleChange(e) {
    const value = e.target.value;
    this.setState({ itemName: value });

    //this.setState()
  }

  handleAdd(e) {
    const { item, itemName } = this.state;
    item.push(itemName);
    this.setState({ item, itemName: "" });
  }
  removeItem() {
    const { item, position } = this.state;
    item.splice(position, 1);
    this.setState({ item });
    this.togglePopup();
  }
  togglePopup(index = "") {
    this.setState({ showPopup: !this.state.showPopup, position: index });
  }
  editItem(index) {
    const item = this.state.item;
    this.setState({ itemName: item[index], isEdit: true, position: index });
  }
  handleUpdate() {
    const { item, position, itemName } = this.state;
    item.splice(position, 1, itemName);
    this.setState({ item, position: "", itemName: "", isEdit: false });
  }
  render() {
    const buttonName = this.state.isEdit ? "Update" : "Add";
    const handleMethod = this.state.isEdit ? this.handleUpdate : this.handleAdd;
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <label>Item Name </label>
        <InputText
          type="text"
          value={this.state.itemName}
          name="items"
          onChange={this.handleChange}
        />

        <Button onClick={handleMethod} label={buttonName}/>
        {this.state.item.length > 0 &&
          this.state.item.map((item, index) => (
            <li
              className={`${this.state.position === index && "listDisable"}`}
              key={index}
            >
              {item}
              <Button onClick={() => this.togglePopup(index)} label="x" />
              <Button onClick={() => this.editItem(index)} label="Edit" />
            </li>
          ))}
        <Popup
          showPopup={this.state.showPopup}
          togglePopup={this.togglePopup}
          removeItem={this.removeItem}
        />
        <Login/>
      </div>
    );
  }
}
