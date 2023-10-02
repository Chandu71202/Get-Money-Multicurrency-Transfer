import React from 'react'
import "../../styles/Dashboard/TransactionHistory.css"

export default function TransactionHistory({account}) {
  return (
    <div>
    {account.transactionHistory.map(transactions => (  
          <li>  
            {transactions}  
          </li>  
        ))}  
    </div>
  )
}
