import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useParams,useNavigate } from 'react-router';
import api from '../../api/api';
import Container from 'react-bootstrap/Container';
import Footer from '../Footer/Footer';




function UpdateTask() {
    const {id}=useParams();
    const navigate=useNavigate();
    const [task,setTask]=useState(null);
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [status,setStatus]=useState('Pending');
    const [due_date,setDuedate]=useState('');

    useEffect(()=>{
        const fetchTask=async()=>{
            try{
                const response=await api.get(`/tasks/${id}`);
                console.log("Task ID:", id); 
                const task=response.data;
                setTask(task)
                console.log(task)
                setTitle(task.title);
                setDescription(task.description);
                setStatus(task.status);
                setDuedate(task.due_date);
            }catch(error){
                console.error("Error fetching task",error);
            }
        };
        fetchTask();
    },[id]);

    const updateTask=async()=>{
        const taskData={title,description,status,due_date};
        try{
            const response=await api.put(`/tasks/${id}/`,taskData);
            navigate('/tasklist/')
        }catch(error){
            console.error("Error fetching task",error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTask();
      };



  return (
    <div>
    <Container>
      <h1 className='head'>Update Your Tasks</h1>
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
          <Form.Control as="textarea" rows={3} value={description} onChange={(e)=>setDescription(e.target.value)}  placeholder='Description' required/>       
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
          <Form.Control type='date' value={due_date} onChange={(e)=>setDuedate(e.target.value)}  placeholder='Due-Date' required/>       
         </Col>
      </Form.Group>
      <Button variant="warning" type="submit">
      Update Task
      </Button>
      </Form>
      </Container>
        <Footer/>
        </div>
  )
}

export default UpdateTask
