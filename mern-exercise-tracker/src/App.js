import React from 'react';
import{BrowserRouter as Router,Rout} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ExecisesList from "./component/exercise-list.component";
import Navbar from "./component/navbar.component";
import EditExercise from "./component/edit-exercise.component";
import CreateExercise from "./component/create-exercise.component";
import CreateUser from "./component/create-user.component";

function App() {
  return (
    <Router>
        <Navbar/>
        <br/>
        <Rout path="/" exact component={ExecisesList}></Rout>
        <Rout path="/edit/:id" component={EditExercise}></Rout>
        <Rout path="create" component={CreateExercise}></Rout>
        <Rout path="/user" component={CreateUser}></Rout>
    </Router>
    
  );
}

export default App;
