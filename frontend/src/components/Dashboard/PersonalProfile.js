import React from 'react'
import "../../styles/Dashboard/PersonalProfile.css"

export default function PersonalProfile({account,user}) {
  return (
    <div>
      DOB: {account.dateOfBirth}
      NAME : {user.name}
    </div>
  )
}
