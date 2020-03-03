import React from 'react';
import { useParams } from 'react-router-dom';
import block from 'bem-cn';
import ProjectOverview from '../../components/ProjectOverview';
import PageHeader from '../../components/Header';
import './styles.css';

const prj = block('project-page');
const d = block('decorator');


const ProjectPage = (props) => {
  let { number } = useParams();
  const { projects } = props;
  const currentProject = projects.find( ({id}) => id === number);
  return (
    <>
      <PageHeader />
      <main className={prj()}>
        <ProjectOverview project={currentProject}/>
      </main>
    </>
  );
};

export { ProjectPage };