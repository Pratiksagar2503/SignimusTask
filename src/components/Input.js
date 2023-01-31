import axios from "axios";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Input() {
  const [date, setDate] = useState("");
  const [repeat, setRepeat] = useState("");
  const [shift, setShift] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [day,setDay]= useState([])
const [weekdays ,setWeekdays] = useState('')
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://63c6465adcdc478e15be236f.mockapi.io/SignimusTask", {
        date: date,
        repeat: repeat,
        shift: shift,
        start: start,
        end: end,
        day: day,
        weekdays:weekdays
      })
      .then(() => {
        navigate("/");
      });
  }
  function handleChange(){
    setWeekdays('"Mon", "Tue", "Wed", "Thu", "Fri"')
  }

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="container mt-4">
      <div className="box">
        <h2 align="center" className="mb-3">
          {" "}
          Add Shift
        </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Select Start Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="name@example.com"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Select Repeat Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={repeat}
              onChange={(e) => setRepeat(e.target.value)}
            >
              <option value="none">None</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Select Shift</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={shift}
              onChange={(e) => setShift(e.target.value)}
            >
              <option value="none">None</option>
              <option value="Morning Shift - 5am to 9am">
                Morning Shift - 5am to 9am
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Start Time</Form.Label>
            <Form.Control
              type="time"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>End Time</Form.Label>
            <Form.Control
              type="time"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              placeholder="name@example.com"
            />
          </Form.Group>
          <p className="fw-bold mb-0">Please select the day of the week</p>
          <div className="d-flex justify-content-evenly align-items-start  mb-3">
            {/* Day section start */}
            {days.map((day, index) => {
              return (
                <Form.Group key={index}>
                  <Form.Label>{day}</Form.Label>
                  <Form.Check
                    reverse
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    type="radio"
                    name="group1"
                  />
                </Form.Group>
              );
            })}
          </div>
          <Form.Group className="d-inline-block mx-2">
            <Form.Label>Weekdays Only</Form.Label>
            <Form.Check value={'checked'?weekdays:null} aria-label="option 1" onChange={handleChange} />
          </Form.Group>
          
          
          <button className="btn btn-primary rounded-pill addbtn px-3 py-2 fw-bold" disabled ={((date && start && repeat && shift  && end)==='')}  >
            +Add
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Input;
