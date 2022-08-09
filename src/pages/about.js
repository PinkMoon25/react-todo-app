import React from 'react';

const About = () => (
  <div className="about-section">
    <p className="about-detail">
      This is a To-do List app, where you can add your tasks to do, and
      It will be saved on your browser&apos;s local storage
      so you will have access to your tasks anytime,anywhere.
      You can add Tasks, mark them as complete, delete tasks,
      or delete all that are completed at once.
      Created by
      {' '}
      <a href="https://github.com/PinkMoon25">Tushar</a>
      .
      This app is developed using React library, you can get the source code
      {' '}
      <a href="https://github.com/PinkMoon25/react-todo-app">here</a>
      {' '}
      .
    </p>
  </div>
);

export default About;
