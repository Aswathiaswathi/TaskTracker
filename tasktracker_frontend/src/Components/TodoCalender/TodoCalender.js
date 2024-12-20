import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import api from '../../api/api'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Container from 'react-bootstrap/Container';
import Footer from '../Footer/Footer'



function TodoCalender() {
  const [tasks,setTasks]=useState([]);
  const [date,setDate]=useState(new Date());

  useEffect(()=>{
    const fetchTasks = async () => {
     try{
      const response= await api.get('/tasks/');
      setTasks(response.data);
    }catch(error){
      console.error("Error fetching tasks",error);
    }
  };
fetchTasks();
},[]);

const handleDateChange=(newDate)=>{
  setDate(newDate);
};

const filteredTasks=tasks.filter((task)=>{
  const taskDate= new Date(task.due_date);
  return taskDate.toDateString()===date.toDateString();

});


  return (
    <div>
    <Container>
      <h1 className='head'>View Calender</h1>
      <Calendar onChange={handleDateChange} value={date} />

<h2>Tasks for {date.toDateString()}</h2>
<ul>
  {filteredTasks.length > 0 ? (
    filteredTasks.map((task) => (
      <li key={task.id}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Status: {task.status}</p>
      </li>
    ))
  ) : (
    <p>No tasks for this date.</p>
  )}
</ul>
</Container>
        <Footer/>
        </div>  )
}

export default TodoCalender
