import React, { useState, useRef  } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const nameInput = useRef();
  const ageInput = useRef();
  const clgInput = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInput.current.value;
    const enteredAge = ageInput.current.value;
    const enteredClg = clgInput.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge, enteredClg);
    nameInput.current.value = "";
    ageInput.current.value = "";
    clgInput.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref = {nameInput}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref = {ageInput}
          />
          <label htmlFor="clg">Collage name</label>
          <input
            id="clg"
            type="text"
            ref = {clgInput}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
