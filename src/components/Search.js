import React, {useState} from "react";

function Search({handleSearch}) {
  const [currentSearch, setCurrenSearch]= useState("")
  function handleSumbit(e){
    e.preventDefault();
    handleSearch(currentSearch)
  }


  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={currentSearch}
        onChange={(e) => setCurrenSearch(e.target.value)}
      />
      <i className="circular search link icon" onSubmit={handleSumbit}></i>
    </div>
  );
}

export default Search;

/*
import React, {useState} from "react";

function Search({handleSearch}) {
  const [currentSearch, setCurrenSearch]= useState("")
  function handleSumbit(e){
    e.preventDefault();
    handleSearch(currentSearch)
  }


  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={currentSearch}
        onChange={(e) => setCurrenSearch(e.target.value)}
      />
      <i className="circular search link icon" onSubmit={handleSumbit}></i>
    </div>
  );
}

export default Search;
*/
