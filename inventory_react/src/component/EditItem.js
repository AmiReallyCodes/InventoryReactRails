import React, { useEffect } from "react";
import { useState } from "react";
import { Form as FinalForm } from "react-final-form";
import { useLocation, Link } from "react-router-dom";
import classes from "./AddNewItem.module.css";

const EditItem = (props) => {
  let location = useLocation();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [unitofmeasurement, setUnitofmeasure] = useState("");
  const [quantity, setQuantity] = useState("");

  console.log(location.state.item);
  useEffect(() => {
    setId(location.state.item.id);
    setName(location.state.item.name);
    setCategory(location.state.item.category);
    setUnitofmeasure(location.state.item.unitofmeasurement);
    setQuantity(location.state.item.quantity);
  }, []);


  const onSubmit = () => {
    console.log("Hello from onSubmit");
    if (name === "" || quantity === "") {
      alert("All the fields are mandatory!");
      return;
    }
   props.editItemHandler({
      id: id,
      name: name,
      category: category,
      unitofmeasurement: unitofmeasurement,
      quantity: quantity,
    });
  };
  return (
    <div className={classes.background}>
      <FinalForm onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form className={classes.formAddNewItem} onSubmit={handleSubmit}>
            <h3>Edit Item here!</h3>
            <div>
              <label>Name</label>
              <span>
                {" "}
                <input
                  type="string"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </span>
            </div>
            <div>
              <label>Category</label>
              <select
                id="category"
                name="category"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
                required
                value={unitofmeasurement}
                onChange={(e) => setUnitofmeasure(e.target.value)}
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
                  required
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value.replace(/\D/,''))}
                />
              </span>
              <label/>
              <span>
              <text style={{color:"red", size:"10px", fontWeight:"lighter", fontStyle:"italic"}}>*Only numeric value</text>
              </span>
            </div>
            <button className={classes.buttonAdd}>Add</button>
            <Link to="/">
            <button className={classes.buttonCancel}>Cancel</button>
            </Link>
          </form>
        )}
      </FinalForm>
    </div>
  );
};

export default EditItem;
