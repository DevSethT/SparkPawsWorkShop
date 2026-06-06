import "./AddItemModal.css";


function AddItemModal({ onClose, onAddItem }) {

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newItem = {
            id: Date.now(),
            name: formData.get("itemName"),
            category: formData.get("itemCategory"),
            quantity: formData.get("itemQuantity"),
            images: [] // You can add logic to handle image uploads if needed
        };
        onAddItem(newItem);
    }


    return (
        <div className="addItemModal">
            <div className="addItemModal__content">
                <button className="addItemModal__cancelBtn" type="button" onClick={onClose}>
                    Cancel
                </button>
                <h2>Add New Item</h2>
                <form className="addItemModal__form" onSubmit={handleSubmit}>
                    <label>
                        Item Name:
                        <input type="text" name="itemName" required placeholder="Enter item name" />
                    </label>
                    <label>
                        Category:
                        <select required name="itemCategory" required>
                            <option value="">Select a category</option>
                            <option value="board">Boards</option>
                            <option value="components">Components</option>
                            <option value="accessories">Accessories</option>
                        </select>
                    </label>
                    <label>
                        Quantity:
                        <input type="number" name="itemQuantity" placeholder="Enter quantity" required />
                    </label>
                    <button type="submit">Add Item</button>
                </form>
            </div>
        </div>
    );
}

export default AddItemModal;