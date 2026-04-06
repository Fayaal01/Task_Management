import React from 'react';
import TaskForm from '../Components/TaskForm';
import TaskList from '../Components/TaskList';

const Home = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
