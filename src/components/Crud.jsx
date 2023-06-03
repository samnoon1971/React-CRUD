import React, { useState, useEffect } from 'react';
import '../App.css';
function Crud() {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState('');

  useEffect(() => {
    const initialPersons = [
      { id: 1, name: 'Samnoon' },
      { id: 2, name: 'Navid' },
      { id: 3, name: 'Tanvir' },
      { id: 4, name: 'Irfan' },
      { id: 5, name: 'Solaiman' },
      { id: 6, name: 'Labib' },
    ];
    setPersons(initialPersons);
  }, []);

  const handleInputChange = (event) => {
    event.preventDefault();
    setNewPerson(event.target.value);
  };

  const handleAddPerson = () => {
    if(newPerson.length === 0) {
        alert('can not add empty user');
        return;
    }
    const newPersonObj = { id: Date.now(), name: newPerson };
    setPersons([...persons, newPersonObj]);
    setNewPerson('');
  };

  const handleDeletePerson = (personId) => {
    const updatedPersons = persons.filter((person) => person.id !== personId);
    setPersons(updatedPersons);
  };

  return (
    <div class="crud-container">
      <h2>User List</h2>
      <div>
      <input type="text" value={newPerson} onChange={handleInputChange} />
      <button onClick={handleAddPerson}>Add User</button>
      </div>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name}
            <button onClick={() => handleDeletePerson(person.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
