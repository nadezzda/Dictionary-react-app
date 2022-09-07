import React, {useState} from "react";
import "./Search.css";

export default function SearchEngine() {
    let [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    
    return(
       <div className="Engine">
        <form onSubmit={search}>
            <input className="search-form" type="search" placeholder="Enter a word..." onChange={handleKeywordChange}/>
            <button className="btn">Search</button>
        </form>
       </div> 
    );
}