import Header from "../../componates/Header/Header";
import AddItemModal from "../../componates/AddItemmModal/AddItemModal.jsx";
import { useState, useEffect } from "react";
import Invatory from "../../utils/Invintory.js"
import ItemCard from "../../componates/ItemCard/ItemCard.jsx";
import "./InvatoryPage.css";

function InvatoryPage() {
const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
const [invatoryItems, setInvatoryItems] = useState(() => {
  const storedItems = JSON.parse(localStorage.getItem("invatoryItems"));
  return storedItems || Invatory;
});

useEffect(() => {
  localStorage.setItem("invatoryItems", JSON.stringify(invatoryItems));
}, [invatoryItems]);



function openAddItemModal() {
  setIsAddItemModalOpen(true);
}

function closeAddItemModal() {
  setIsAddItemModalOpen(false);
}

function addItem(newItem) {
  setInvatoryItems((prevItems) => [newItem, ...prevItems]);
  closeAddItemModal();
}


  return (
    <div className="invatoryPage">
        <div className="invatoryPage__top">
        <Header />
        <h1>Inventory Page</h1>
        <button className="invatoryPage__add-btn" onClick={openAddItemModal}>
          Add Item
        </button>
        </div>
        <div className="invatoryPage__content">
        <div className="invatoryPageList">
          {/* map all invatory items and have them displayed */}
          {invatoryItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
        {isAddItemModalOpen && <AddItemModal onClose={closeAddItemModal} onAddItem={addItem} />}
        </div>
    </div>

  );
}

export default InvatoryPage;