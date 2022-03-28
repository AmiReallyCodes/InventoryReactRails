import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaBattleNet } from "react-icons/fa";
import Items from "./component/Items";
import AddNewItem from "./component/AddNewItem";
import EditItem from "./component/EditItem";

const API_URL = "http://localhost:3000/api/v1/items";
function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  let navigate = useNavigate();

  const searchHandler = (searchText) => {
    setSearchText(searchText);
    if (searchText !== "") {
      const newItems = items.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
      setSearchResults(newItems);
    } else {
      setSearchResults(items);
    }
  };

  const addItemHandler = async (item) => {
    if (item) {
      navigate("/", { replace: true });
      alert("Item Added!");
      await axios.post(API_URL, item);
      setItems([...items, item]);
    } else {
      cancelDialog();
    }
  };

  const cancelDialog = () => {
    navigate("/", { replace: true });
    //on cancel
  };

  const editItemHandler = async (item) => {
    if (item) {
      const response = await axios.put(`${API_URL}/${item.id}`, item);
      setItems(
        items.map((data) => {
          return data.id === item.id ? { ...response.data } : data;
        })
      );
      navigate("/", { replace: true });
      alert("Item Edited Successfully!");
    } else {
      cancelDialog();
    }
  };

  const deleteItemHandler = async (id) => {
    if (id) {
      await axios.delete(`http://localhost:3000/api/v1/items/${id}`);
      setItems(items.filter((item) => item.id !== id));
      alert(id + " is successfully deleted!");
    }
  };

  useEffect(() => {
    let mounted = true;
    getAPIData().then((data) => {
      if (mounted) {
        setItems(data);
      }
    });
    return () => (mounted = false);
  }, []);

  useEffect(
    (data) => {
      console.log("Updated Items");
    },
    [items]
  );

  return (
    <div class="font-link">
      <div class="body1">
        <header class="header" style={{ display: "inline" }}>
          <div class="leftheader">
            <div class="logo">
              <div class="icon">
                <FaBattleNet style={{ fontSize: 50, color: "#fb4570" }} />
              </div>
              <div class="text" style={{ fontSize: 50, color: "#fb4570" }}>
                Manage Engine
              </div>
            </div>
          </div>
          <div class="navMenuHorizontal">
            <ul class="ulhorizontal">
              <Link to="/">
                <li class="lihorizontal">Home</li>
              </Link>
              <Link to="/addNewItem">
                <li class="lihorizontal">Add New Item</li>
              </Link>
            </ul>
          </div>
        </header>
        <article class="article">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Items
                  updatedItemList={searchText.length < 1 ? items : searchResults}
                  deleteItemid={deleteItemHandler}
                  text={searchText}
                  searchKeyword={searchHandler}
                />
              }
            />
            <Route
              path="/addNewItem"
              exact
              element={<AddNewItem addItemHandler={addItemHandler} />}
            />
            <Route
              path="/editItem"
              exact
              element={<EditItem editItemHandler={editItemHandler} />}
            />
          </Routes>
        </article>
        <div class="ads"></div>
        <footer class="footer"></footer>
      </div>
    </div>
  );
}

export default App;

