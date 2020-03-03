import React from 'react';
import block from 'bem-cn';
import ProjectListCard from '../ProjectListCard';
import ProjectListTable from '../ProjectListTable';
import './styles.css';

const ProjectList = (props) => {
  const { projects, layout } = props;

	let listMarkup;

  if (layout === 'grid') {
		const grid = block('tpl-grid');
		listMarkup = (
			<div 
				className={grid({
					'l-ratio': '1-1-1',
					'xl-ratio': '1-1-1-1',
					'col-gap': 'half',
					'row-gap': 'half'
				})}
			>
				{projects.map((project) => {
					return (
						<ProjectListCard 
							key={project.id}
							number={project.id}
							company={project.company} 
							title={project.title}
							stage={project.stage}
							status={project.status}
							badge={project.badge}
						/>
					)
				})}
			</div>
		)
	} else {
		listMarkup = <ProjectListTable projects={projects} />
  }
  
  return (
    <>{listMarkup}</>
  )
};

export default ProjectList;