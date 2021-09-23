import React, { useState } from 'react';
import './App.css';
import linkedinlogo from './linkedin.png'
import users from './users';

const App = () => {

  const [search, setSearch] = useState('');
  const [campus, setCampus] = useState('');
  const [role, setRole] = useState({ student: false, student: true })

  const options = [...new Set(users.map(user => user.campus))].map(campus => {
    return <option value={campus} key={campus}>{campus}</option>
  });

  const filteredUsers = users.filter(user =>
    `${user.firstName}${user.lastName}`.toLowerCase().includes(search.toLowerCase())
    && role[user.role]
    && (user.campus === campus || !campus)
  );

  const usersList = filteredUsers.map(user => {
    return <tr key={user.id}>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.campus}</td>
      <td>{user.role}</td>
      <td>
        {user.linkedin &&
          <a href={user.linkedin}>
            <img className="linkedin" src={linkedinlogo} alt="linkedin" />
          </a>}
      </td>
    </tr>
  });
  return (
    <div className="container">
      <div>
        <h1>IronBook</h1>
        <div className="filters">
          <input type="text" name="search" value={search} onChange={e => setSearch(e.target.value)} />
          <label>
            Student
            <input
              name="student"
              type="checkbox"
              checked={role.student}
              onChange={e => setRole({ ...role, student: e.target.checked })} />
          </label>
          <label>
            Teacher
            <input
              name="teacher"
              type="checkbox"
              checked={role.teacher}
              onChange={e => setRole({ ...role, teacher: e.target.checked })} />
          </label>
          <select name="campus" value={campus} onChange={e => setCampus(e.target.value)}>
            <option value="">All</option>
            {options}
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Campus</td>
              <td>Role</td>
              <td>Links</td>
            </tr>
          </thead>
          <tbody>
            {usersList}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;