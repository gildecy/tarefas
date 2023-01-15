import React, { useState, useEffect } from "react";

import "./App.css";
import  Card  from "./card";

export function App() {
  const [studentName, setStudentName] = useState("");

  const [students, setStudents] = useState([]);
 

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR", {
       
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }


// Obtém o elemento onde a hora será exibida


  return (
    <div className="container">
     <header>
     <h1 id="titulo">Lista de Tarefas/ </h1>
     <small>construtor Gildecy de Jesus Sá</small>
     

     <div className='foto'>
    
      <img  class="foto"src='https://media.treasy.com.br/media/2017/06/gest%C3%A3o-de-tarefas-dicas.png' />
     </div>
     </header>
     
     
      <input
        type="text"
        placeholder="Digite o Nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>
  
      

      {students.map((student) => (
        <Card name={student.name} time={student.time} />
      ))}
    </div>
  );
}

export default App

