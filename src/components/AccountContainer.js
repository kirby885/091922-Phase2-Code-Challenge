import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([])
  const [newTransaction, setNewTransaction]= useState("")
  const [search, setSearch]= useState("")

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
    .then(response => response.json())
    .then(data => setTransactions(data))
  },[])
  console.log(transactions)

  function handleNewData(){

  }

  function handleSearch(newSearch){
    setSearch(newSearch)
  }

  return (
    <div>
      <Search handleSearch={handleSearch}/>
      <AddTransactionForm />
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
