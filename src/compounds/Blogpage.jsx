import React from 'react'
import { useParams } from 'react-router-dom';

export default function Blogpage() {
  const {id}=useParams();
  return (
    <div>
        <h1>HII:{id}</h1>
    </div>
  )
}
