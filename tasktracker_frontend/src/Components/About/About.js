import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import todo_about from '../../assets/images/todo_about.webp'
import './About.css'


function About() {
  return (
   <Container>
      <h1 className='head'>About Us</h1>
      <Row> 
        <Col><img src={todo_about} height={400} width={500}/></Col>
        <Col>
        <div> Task Tracker To-Do Application is a simple and effective tool for managing tasks and staying organized. It allows users to create, edit, track, and delete tasks.
             Whether you need to manage personal tasks, work assignments, or project deadlines, this app provides an easy way to keep everything in check.
             <h4>Key Features</h4>
             <ListGroup as="ol" numbered>
      <ListGroup.Item as="li">Add Tasks: Users can create tasks by specifying a title, description, and due date.</ListGroup.Item>
      <ListGroup.Item as="li">Edit Tasks: Enable users to edit the title or description of an existing task.</ListGroup.Item>
      <ListGroup.Item as="li">View Tasks: Display a list of tasks with their current status.</ListGroup.Item>
      <ListGroup.Item as="li">Delete Tasks: Let users delete tasks they no longer need.</ListGroup.Item>
      <ListGroup.Item as="li">Calendar View: View tasks on a Calendar</ListGroup.Item>

    </ListGroup>
             </div>
        </Col>
      </Row>
      </Container>
  )
}

export default About
