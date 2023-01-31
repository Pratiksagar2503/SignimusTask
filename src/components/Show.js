import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const Show = () => {

const [data,setData] = useState([]);

function getData(){
  axios.get("https://63c6465adcdc478e15be236f.mockapi.io/SignimusTask")
  .then((res)=>setData(res.data))
}

function handleDelete(id) {
  axios
    .delete(`https://63c6465adcdc478e15be236f.mockapi.io/SignimusTask/${id}`)
    .then(() => {
      getData();
    });
}


useEffect(()=>{
  getData()
},[])

  return (
    <>
      <div className="container bg-light pt-2" style={{ height: "100vh" }}>
        <div className="d-flex justify-content-between align-items-center my-3">
          <Link to="/input">
            <button className="btn btn-secondary"> Create Shift</button>
          </Link>
          <h1 align="center" className="mb-1">
            Shift Table
          </h1>
        </div>
        <Table bordered>
          <thead>
            <tr key={Math.random()}>
              <th>#</th>
              <th>Start Date</th>
              <th>Repeat</th>
              <th>Shift</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Day</th>
              <th>Weekdays</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
{
  data.map((item,index)=>{
    return(
      <>
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.date}</td>
        <td>{item.repeat}</td>
        <td>{item.shift}</td>
        <td>{item.start}</td>
        <td>{item.end}</td>
        <td>{item.day}</td>
        <td>{item.weekdays}</td>
        <td><span class="material-symbols-outlined dlt_btn" onClick={()=>handleDelete(item.id)}>
delete
</span></td>
      </tr>
      </>
    )
  })
}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Show;
