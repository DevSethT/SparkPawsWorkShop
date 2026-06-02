import Header from "../../componates/Header/Header";
import "./InvatoryPage.css";

function InvatoryPage() {
  return (
    <div className="invatoryPage">
        <Header />
        <h1>Invatory Page</h1>
        <button className="invatoryPage__add-btn">Add Item</button>
        <div className="invatoryPageList">
          {/* map all invatory items and have them displayed */}
        </div>
    </div>
  );
}

export default InvatoryPage;