import "./ItemCard.css";
import { Link } from "react-router-dom";

function ItemCard({ item }) {
    return (
        <Link className="itemCard" to={`/items/${item.id}`}>
            <h2 className="itemCard__title">{item.name}</h2>
            <div className="itemCard__details">
                <p className="itemCard__quantity">Quantity: {item.quantity}</p>
                <p className="itemCard__category">Category: {item.category}</p>
            </div>
            <p className="itemCard__description">{item.description}</p>
        </Link>
    )
}

export default ItemCard;
