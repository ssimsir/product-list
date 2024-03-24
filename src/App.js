import { useState } from "react";
import ProductList from "./components/product/ProductList";
import SideBar from "./components/sidebar/SideBar";
import "./App.scss"
import Header from "./components/header/Header";

function App() {
  const [selectedCategori, SetSelectedCategori] = useState("all")
  const categoryChange = (kategori) => {
    SetSelectedCategori(kategori)
  }

  return (
    <div className="container">
      <div className="header">
        <Header/>
      </div>
      <div className="main">
        
          <SideBar clickChange={categoryChange} />
   
        
          <ProductList category={selectedCategori} />

      </div>
    </div>
  );
}

export default App;
