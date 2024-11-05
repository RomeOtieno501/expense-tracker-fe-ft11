const TransactionRow = ({id, date, description, type, amount, transactions, setTransaction}) => {
  const handleDelete = () => {
    const NewTransactions = transactions.filter((transaction)=> transaction.id !== id);
    setTransaction(NewTransactions);
  }

  

  return (
    <tr>
      <td>{date || "Null"}</td>
      <td>{description}</td>
      <td>{type}</td>
      <td>{amount}</td>
      <td>
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};
export default TransactionRow;

