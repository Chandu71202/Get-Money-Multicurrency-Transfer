import React from 'react'
import "../../styles/Dashboard/YourAccount.css"

export default function YourAccount({account}) {
  return (
    <div>
      <p>GBP BALANCE : {account.balanceGBP}</p>
      <p>USD BALANCE : {account.balanceUSD}</p>
      <p>EUR BALANCE : {account.balanceEUR}</p>
    </div>
  )
}
