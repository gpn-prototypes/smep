import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import block from 'bem-cn';
import PageHeader from '../../components/Header';
import ProjectOverview from '../../components/ProjectOverview';
import ProjectInfo from '../../components/ProjectInfo';
import AddNewDriver from '../../components/AddNewDriver';
import DriverListProvider from '../../context/DriverListContext';
import Driver from '../../components/Driver';
import { ProjectContext } from '../../context/ProjectContext';
import './styles.css';

const prj = block('project-page');

const ProjectPage = (props) => {
  let { number } = useParams();
  const { projects, drivers } = props;
  const currentProject = projects.find( ({id}) => id === number);

  // const [ isNew, setAdd ] = useState(0);
  const { main } = useContext(ProjectContext);

  let mainMarkup;

  if (main === 'new driver') {
    mainMarkup = <AddNewDriver drivers={drivers} />
  } else if (main.hasOwnProperty('name')) {
    mainMarkup = <Driver driver={ main } />
  } else {
    mainMarkup = <ProjectInfo project={currentProject} />;
  };

  return (
    <>
      <PageHeader />
      <DriverListProvider>
        <main className={prj()}>
          <ProjectOverview project={currentProject} />
          { mainMarkup }  
        </main>
      </DriverListProvider>
    </>
  );
};

export { ProjectPage };