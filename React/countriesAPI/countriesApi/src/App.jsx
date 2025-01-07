import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import CountriesList from "./components/CountriesList";

function App() {
  const [query, setQuery] = useState('');

  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar  setQuery = {setQuery}/>
          <SelectMenu />
        </div>
        <CountriesList query = {query}/>
      </main>
    </>
  );
}

export default App;
