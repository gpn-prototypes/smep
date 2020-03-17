import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

const ProjectProvider = (props) => {
  const [ main, setMain ] = useState('project');

  const openProject = () => {
    setMain('project');
  }

  const addNewDriver = () => {
    setMain('new driver');
  }

  const openDriver = (driver) => {
    const { name, status } = driver;
    setMain({ name, status });
  }

  // const removeDriver = (name) => {
  //   setMain( main.filter(driver => driver.name !== name) );
  // }

  return (
    <ProjectContext.Provider value={{ main, openProject, addNewDriver, openDriver }}>
      { props.children }
    </ProjectContext.Provider>
  )
};

export default ProjectProvider;