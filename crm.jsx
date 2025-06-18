import React, { useState } from 'react';

function App() {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');

    const addContact = () => {
        setContacts([...contacts, { name }]);
        setName('');
    };

    return (
        <div>
            <h1>CRM System</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />
            <button onClick={addContact}>Add Contact</button>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>{contact.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;