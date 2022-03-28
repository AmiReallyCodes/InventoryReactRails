import React, { useRef } from "react";
import { MdManageSearch } from "react-icons/md";
import classes from "./Items.module.css";
import ItemStructure from "./ItemStructure";

function Items(props) {
  const inputTextref = useRef("");

  const getSearchText = () => {
    props.searchKeyword(inputTextref.current.value);
  };

  const delete_clickHandler = (id) => {
    const confirmBox = window.confirm(
      "Do you really want to delete this Item?"
    );
    if (confirmBox === true) props.deleteItemid(id);
    else props.deleteItemid();
  };

  const renderItemList = props.updatedItemList?.map((item) => {
    return (
      <ItemStructure
        item={item}
        deleteclickHandler={delete_clickHandler}
      />
    );
  });

  return (
    <div className={classes.articleDiv}>
      <div className={classes.searchDiv}>
        <form className={classes.searchForm}>
          <input
            ref={inputTextref}
            className={classes.searchbar}
            placeholder="Search here"
            value={props.text}
            onChange={getSearchText}
          />
          <button className={classes.searchbtn}>
            <MdManageSearch
              style={{ fontSize: "43px", paddingLeft: "0px", color: "red" }}
            />
          </button>
        </form>
      </div>
      <div className={classes.wrapper}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Catogary</th>
              <th>Unit of Measure</th>
              <th>Quantity</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{renderItemList}</tbody>
        </table>
      </div>
    </div>
  );
}
export default Items;
