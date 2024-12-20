import React,{useEffect,useState} from 'react'
import api from '../../api/api'
import Table from 'react-bootstrap/Table';
import { Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import './TaskList.css';
import Footer from '../Footer/Footer';



function TaskList() {
  const [tasks,setTasks]=useState([]);
  useEffect(()=>{
    const fetchTasks=async()=>{
        try{
            const response=await api.get('/tasks/');
            setTasks(response.data);
            console.log(response.data);
        } catch(error){
            console.error("Error fetching data:",error);
        }
    };
    fetchTasks();
    
  },[]);
  const handleTaskCreated=(newTask)=>{
    setTasks((prevTasks)=>[...prevTasks,newTask]);
  };
 const handleDelete=async(id)=>{
  const confirmDelete=window.confirm("Are you sure you want to delete this task?")
  if(confirmDelete){
    try{
      await api.delete(`/tasks/${id}/`);
      alert("Task deleted Successfully");
      setTasks(tasks.filter((task)=>task.id!==id))
    }catch(error){
      console.error("Error deleting task",error);
      alert("Failed to delete task");
    }
  }
 }



  
  return (
    <div>
    <Container>
      <h1 className='head'>Your Tasks</h1>
      {/* <CreateTask task={tasksToEdit} onTaskCreatedOrUpdated={handleTaskCreatedOrUpdated}/> */}
      <Table striped>
      <thead >
        <tr>
          <th>Task</th>
          <th>Description</th>
          <th>Status</th>
          <th>Due Date</th>
          <th>Edit</th>
          <th>Delete</th>

        </tr>
      </thead>
      <tbody>
        {tasks.map((task)=>{
            return(
                <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td>{task.due_date}</td>
                {/* <td><button onClick={()=>handleUpdateClick(task)}>Update</button></td> */}
                <td><Link to={`/update/${task.id}`} style={{'textDecoration':'none','color':'#2c0467','fontWeight':500}}>Update</Link></td>
                <td><button onClick={()=>handleDelete(task.id)} style={{'border':'none','color':'red','background':'none','fontWeight':'700'}}>X</button> </td>
              
              </tr>
            )
        })
           
        }
        
        </tbody>
        </Table>
        <Link to="/newtask/" className='btn'>Create New Task</Link>
        
        </Container>
        <Footer/>
        </div>
  )
}

export default TaskList
