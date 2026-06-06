import "./ItemPage.css";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Invatory from "../../utils/Invintory.js";

function ItemPage() {
    const { id } = useParams();
    const [storedItems, setStoredItems] = useState(() => {
        return JSON.parse(localStorage.getItem("invatoryItems")) ?? Invatory;
      });
    const item = storedItems.find((item) => item.id === Number(id));
    const [isEditing, setIsEditing] = useState(false);
    const [editItem, setEditItem] = useState(item ?? {});



    function openEditItemForm() {
        setEditItem(item);
        setIsEditing(true);
      }
    
      function closeEditItemForm() {
        setIsEditing(false);
      }
    
      function handleEditItemChange(event) {
        const { name, value } = event.target;
    
        setEditItem((currentItem) => ({
          ...currentItem,
          [name]: value,
        }));
      }
    
      function handleEditItemSubmit(event) {
        event.preventDefault();
    
        const updatedItems = storedItems.map((currentItem) => {
          if (currentItem.id !== item.id) {
            return currentItem;
          }
    
          return {
            ...currentItem,
            ...editItem,
          };
        });
    
        setStoredItems(updatedItems);
        localStorage.setItem("invatoryItems", JSON.stringify(updatedItems));
        setIsEditing(false);
      }

    if (!item) {
        return (
          <div className="itemPage">
              <div className="itemPage__top">
            <h1 className="itemPage__title">Item Not Found</h1>
    
              </div>
    
          </div>
        );
      }

  return (
    <div className="itemPage">
        <Link className="itemPage__back-link" to="/invatory">Back to Invatory</Link>
        <div className="itemPage__top">
      <h1 className="itemPage__title">{item.name}</h1>
        <button className="itemPage__edit-btn" onClick={openEditItemForm}>  Edit Item</button>
        </div>
        {isEditing && (
            <div className="itemPage__editForm">
                <h2>Edit Item</h2>
                <form onSubmit={handleEditItemSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={editItem.name} onChange={handleEditItemChange} required />
                    </label>
                    <label>
                        Category:
                        <select name="category" value={editItem.category} onChange={handleEditItemChange} required>
                            <option value="">Select a category</option>
                            <option value="board">Boards</option>
                            <option value="components">Components</option>
                            <option value="accessories">Accessories</option>
                        </select>
                    </label>
                    <label>
                        Quantity:
                        <input type="number" name="quantity" value={editItem.quantity} onChange={handleEditItemChange} required />
                    </label>
                    <label>
                        Description:
                        <textarea name="description" value={editItem.description} onChange={handleEditItemChange} required />
                    </label>
                    <button type="submit">Save Changes</button>
                    <button type="button" onClick={closeEditItemForm}>Cancel</button>
                </form>
            </div>
        )}
        <div className="itemPage__content">
            <p className="itemPage__meta"><strong>Category:</strong> {item.category}</p>
            <p className="itemPage__meta"><strong>Quantity:</strong> {item.quantity}</p>
            <div className="itemPage__description">
                <h2>Description</h2>
                <p>{item.description}</p>
            </div>
        </div>

    </div>
  );
}

export default ItemPage;
