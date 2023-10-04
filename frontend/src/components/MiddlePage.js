import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export default function MiddlePage() {
    let navigate = useNavigate();

    useEffect(() => {
        navigate('/dashboard');
    },[])

  return (
    <div>Loading</div>
  )
}
