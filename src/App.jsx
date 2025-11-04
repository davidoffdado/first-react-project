import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100, surname: "bho"});

  // GOOD - Do this!
  const handleIncreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  const updateName = () => {
    // copy the existing person object into a new object
    // while updating name
    const newPerson = { ...person, name: "Jane" };
    setPerson(newPerson);
  };

  const updateSurname = () => {
    // copy the existing person object into a new object
    // while updating name
    const newPerson = { ...person, surname: "bho" };
    setPerson(newPerson);
  };

  return (
    <>
      <h1>{person.name} {person.surname}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <input 
        type="text" 
        value={person.name} 
        onChange={(e) => {
          const newPerson = { ...person, name: e.target.value };
          setPerson(newPerson);
        }} 
      />
      <input 
        type="text" 
        value={person.surname} 
        onChange={(e) => {
          const newPerson = { ...person, surname: e.target.value };
          setPerson(newPerson);
        }} 
      />

    </>
  );
}


export default Person;
