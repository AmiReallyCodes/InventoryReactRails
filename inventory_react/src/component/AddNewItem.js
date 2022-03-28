import React from "react";
import { Link } from "react-router-dom";
import classes from "./AddNewItem.module.css";

var autoidCounter = 100;
class AddNewItem extends React.Component {
  state = {
    name: "",
    category: "Bakery",
    unitofmeasurement: "Fluid Ounce",
    quantity: "",
  };

  add(e) {
    e.preventDefault();
    if (this.state.name === "" || this.state.quantity === "") {
      alert("All the fields are mandatory!");
      return;
    }
    ++autoidCounter;
    this.props.addItemHandler({
      id: this.state.id,
      name: this.state.name,
      category: this.state.category,
      unitofmeasurement: this.state.unitofmeasurement,
      quantity: this.state.quantity,
    });
    //send item in required/speified structure
    //after adding it to items clear the data in ui fields.
    this.setState({
      id: autoidCounter,
      name: "",
      category: "Bakery",
      unitofmeasurement: "Fluid Ounce",
      quantity: "",
    });
  }

  
  render() {
    return (
      <div className={classes.background}>
        <form className={classes.formAddNewItem} onSubmit={this.add.bind(this)}>
          <h3>Add New Item here!</h3>
          <div>
            <label>Name</label>
            <span>
              {" "}
              <input
                type="string"
                name="name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </span>
          </div>
          <div>
            <label>Category</label>
            <select
              id="category"
              name="category"
              onChange={(e) => this.setState({ category: e.target.value })}
            >
              <option value="Bakery">Bakery</option>
              <option value="Dairy">Dairy</option>
              <option value="Oils">Oils</option>
              <option value="Fruit">Fruit</option>
              <option value="Meat">Meat</option>
              <option value="Pulses">Pulses</option>
            </select>
          </div>
          <div>
            <label>Unit of Measure</label>
            <select
              id="unitofmeasurement"
              name="unitofmeasurement"
              onChange={(e) =>
                this.setState({ unitofmeasurement: e.target.value })
              }
            >
              <option value="Fluid Ounce">Fluid Ounce</option>
              <option value="Gallon">Gallon</option>
              <option value="Ounce">Ounce</option>
              <option value="Pound">Pound</option>
              <option value="Quarter">Quarter</option>
            </select>
          </div>
          <div>
            <label>Qunatity</label>
            <span>
              {" "}
              <input
                type="integer"
                name="qunatity"
                value={this.state.quantity}
                onChange={(e) => this.setState({quantity: e.target.value.replace(/\D/,'')})}
              />
            </span>
            <label/>
              <span>
              <text style={{color:"red", size:"10px", fontWeight:"light"}}>*Only numeric value</text>
              </span>
          </div>
          <button className={classes.buttonAdd}>Add</button>
          <Link to="/">
            <button className={classes.buttonCancel}>Cancel</button>
          </Link>
        </form>
      </div>
    );
  }
}
export default AddNewItem;
