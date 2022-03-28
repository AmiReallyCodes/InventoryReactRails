import React from "react";
import { FiEdit } from "react-icons/fi";

import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const ItemStructure = (props) => {
  const { id, name, category, unitofmeasurement, quantity } = props.item;

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{category}</td>
      <td>{unitofmeasurement}</td>
      <td>{quantity}</td>
      <td class="item-image">
        <Link to="/edititem" state={{ item: props.item }}>
          <FiEdit style={{ color: "blue",fontSize: "22px"}} />
        </Link>
      </td>
      <td class="item-image">
        <RiDeleteBin6Line
          style={{ color: "red", fontSize: "22px" }}
          onClick={() => props.deleteclickHandler(id)}
        />
      </td>
    </tr>
  );
};

export default ItemStructure;
