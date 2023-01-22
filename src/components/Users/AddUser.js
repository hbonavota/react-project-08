import React, { useState } from 'react';
import { Card } from '../UI/Card';
import { Button } from '../UI/Button';

import classes from './Add.module.css'


const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();

    if (!enteredAge || !enteredUsername || enteredAge < 1 || enteredAge > 119) {
      setEnteredUsername('');
      setEnteredAge('');
      alert("Debe ingresar un nombre y edad validos");
      return;
    }

    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('');
    setEnteredAge('');
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          maxLength={15}
          onChange={usernameChangeHandler}
          required
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
          required
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
};


export default AddUser;