import './App.css';
import Header from './Components/Header/Header';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import TaskList from './Components/TaskList/TaskList';
import CreateTask from './Components/CreateTask/CreateTask';
import TodoCalender from './Components/TodoCalender/TodoCalender';
import Home from './Components/Home/Home';
import UpdateTask from './Components/UpdateTask/UpdateTask';


function App() {
  return (
    <div>
      <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/tasklist' element={<TaskList/>}></Route>
            <Route path='/newtask' element={<CreateTask/>}></Route>
            <Route path='/update/:id' element={<UpdateTask/>}></Route>
            <Route path='/calender' element={<TodoCalender/>}></Route>

          </Routes>
         
      </Router>
     
    </div>
  );
}

export default App;
