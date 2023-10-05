import React, { useState } from 'react'
import "../../styles/Dashboard/TransactionHistory.css"


export default function TransactionHistory({ account }) {
  const transactions = account.transactionHistory;

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const paginate = (data) => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  let sortedData = [...transactions];
  if (sortConfig.key !== null) {
    sortedData.sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    });
  }
  sortedData.reverse();

  return (
    <div>
      {account.transactionHistory.length === 0 ? (
        <>
        <div className='NoTransactionYet'>
          <h2>
            No Transactions Yet! Make your First transaction from the Inter-Account Transfer menu.
          </h2>
        </div>
        </>
      ) : (
        <>
          <div className='table-container'>
            <table>
              <thead>
                <tr>
                  <th onClick={() => handleSort(0)}>Transaction Id</th>
                  <th onClick={() => handleSort(1)}>Debited Amount</th>
                  <th onClick={() => handleSort(2)}>Sender Currency</th>
                  <th onClick={() => handleSort(3)}>Receiver Currency</th>
                  <th onClick={() => handleSort(5)}>Current Balance</th>
                  <th onClick={() => handleSort(6)}>Date Of Transaction</th>
                </tr>
              </thead>
              <tbody>
                {paginate(sortedData).map((row, index) => (
                  <tr key={index}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                    <td>{row[5]}</td>
                    <td>{row[6]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
          <div className='pagination-buttons'>
            <button className='individual-button' disabled={currentPage === 1} onClick={prevPage}>Previous</button>
            <button className='individual-button' disabled={sortedData.length <= currentPage * rowsPerPage} onClick={nextPage}>Next</button>
          </div>
        </>
      )}
    </div>
  )
}
