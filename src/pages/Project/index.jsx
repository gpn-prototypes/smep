import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import block from 'bem-cn';
import PageHeader from '../../components/Header';
import ProjectOverview from '../../components/ProjectOverview';
import ProjectInfo from '../../components/ProjectInfo';
import AddNewDriver from '../../components/AddNewDriver';
import DriverListProvider from './DriverListContext';
import './styles.css';

const prj = block('project-page');

const ProjectPage = (props) => {
  let { number } = useParams();
  const { projects, drivers } = props;
  const currentProject = projects.find( ({id}) => id === number);

  const [ isNew, setAdd ] = useState(0);

  let main;

  if (!isNew) {
    main = <ProjectInfo project={currentProject} />;
  } else {
    main = <AddNewDriver drivers={drivers} 
      // newDrivers={newDrivers} 
    />
  };

  return (
    <>
      <PageHeader />
      <DriverListProvider>
        <main className={prj()}>
          <ProjectOverview project={currentProject} state={{ isNew, setAdd }} />
          {main}  
        </main>
      </DriverListProvider>
    </>
  );
};

export { ProjectPage };