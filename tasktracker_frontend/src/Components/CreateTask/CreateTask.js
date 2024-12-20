import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import api from '../../api/api';
import { useParams,useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Footer from '../Footer/Footer';




function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}




function CreateTask({onTaskCreated}) {
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [status,setStatus]=useState("Pending");
  const [due_date,setDuedate]=useState("");
  const navigate=useNavigate();
  
 
//create new task
  const createItem=async(task)=>{
    try{
      const csrfToken = getCookie('csrftoken');

      const response=await api.post('/tasks/',task,{
        headers: {
          'X-CSRFToken': csrfToken,
        },
      });
      console.log("Task created",response.data);
      onTaskCreated(response.data);
      navigate('/tasklist/')
    }catch(error){
      console.error("Error creating task",error);
    }
      };

//Update a task
      const handleSubmit=(e)=>{
        e.preventDefault();
        const newTask={title,description,status,due_date};
        createItem(newTask);
        setTitle("");
        setDescription("");
        setStatus("");
        setDuedate("");
      };


  return (
    <div>
     <Container>
      <h1 className='head'>Create a New Task</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Title
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Description
        </Form.Label>
        <Col sm={10}>
          <Form.Control as="textarea" rows={3} value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Description' required/>       
         </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Status
        </Form.Label>
        <Col sm={10}>
          <Form.Select aria-label="Default select example" value={status} onChange={(e)=>setStatus(e.target.value)}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In progress</option>
            <option value="Completed">Completed</option>
          </Form.Select>       
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Due Date
        </Form.Label>
        <Col sm={10}>
          <Form.Control type='date' value={due_date} onChange={(e)=>setDuedate(e.target.value)} placeholder='Due-Date' required/>       
         </Col>
      </Form.Group>
      <Button variant="warning" type="submit">
      Create Task
      </Button>
      </Form>
      </Container>
        <Footer/>
        </div>
  )
}

export default CreateTask
