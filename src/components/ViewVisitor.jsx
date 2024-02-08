import React, { useEffect, useState } from 'react'
import ClgNav from './ClgNav'
import axios from 'axios'

const ViewVisitor = () => {
    const [data,setData] = new useState([])
    const getData = ()=>{
        axios.get("http://localhost:3002/api/visitors/view").then(
            (response)=> {setData(response.data)}
        )
    }
    useEffect(()=>{getData()},[])
    
  return (
    <div>


        <ClgNav/>

        <table class="table table-bordered">
  <thead>
    <tr>
      
      <th scope="col">Visitor Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Purpose of Visit</th>
      <th scope="col">Aadhar Number</th>
      <th scope="col">Place</th>
      
    </tr>
  </thead>
  <tbody>
    {
        data.map(
            (value,index)=>{
                return <tr>

                
                <td>{value.vistorName}</td>
                <td>{value.vistorPhone}</td>
                <td>{value.PurposeOfVisit}</td>
                <td>{value.vistorAadhar}</td>
                <td>{value.vistorPlace}</td>
              </tr>
            }
        )
    }
    
  </tbody>
</table>

    </div>
  )
}

export default ViewVisitor