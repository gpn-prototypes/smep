import React, { useContext } from 'react';
import block from 'bem-cn';
import { Text, Badge, Button } from '@gpn-design/uikit';
import StatsTable from '../StatsTable';
import DriverList from '../DriverList';
import BackLink from '../BackLink';
import { ProjectContext } from '../../context/ProjectContext';
import './styles.css';

const b = block('project-overview');
const d = block('decorator');

const stats = [
  { name: 'Горизонт планирования', value: '5 лет' },
  { name: 'NPV', value: '0,248 млрд. ₽' },
  { name: 'PI', value: '1,3' },
  { name: 'DPP', value: '4,3 года' },
  { name: 'IRR', value: '31,5%' },
];


const ProjectOverview = (props) => {
  const { project } = props;

  const { main, openProject } = useContext(ProjectContext);

  const badgeStatus = project.badge === 'Согласован' ? 'success' 
    : project.badge === 'На согласовании' ? 'warning'
    : 'error';

  return (
    <aside className={`${b()} ${d({'space-l': '3xl'})}`}>
      <div className={b('main').mix(d({'space-t': 'xl', 'space-r': 'xl'}))}>
        <BackLink linkTo='/'>Ко всем проектам</BackLink>

        <div className={d({'distribute': 'between', 'vertical-align': 'center', 'indent-b': 'xs'})}>
          <Text size='m' lineHeight='xs' transform='uppercase' spacing='xs'>{project.id}</Text>
          <Badge wpSize='m' status={badgeStatus} view='stroked' form='round'>{project.badge}</Badge>
        </div>
        { 
          main !== 'project' ? (
            <Text size='l' view='primary' lineHeight='s' weight='bold' className={b('title').mix( d({'indent-b': 'm'}) )}
              onClick={ openProject }
            >
              {project.title}
            </Text> 
          ) : (
            <Text size='l' view='link' lineHeight='s' weight='bold' className={b('title', { view: 'active'}).mix( d({'indent-b': 'm'}) )}>
              {project.title}
            </Text> 
          )
        }
        

        <StatsTable 
          className={d({'indent-b': '3xl'})} 
          items={stats}
        />

        <DriverList />
      </div>

      <div className={b('footer').mix(d({'space-l': '3xl', 'space-r': 'xl'}))}>
        <Button wpSize='l' view='primary' width='full'>Отправить на согласование</Button>
      </div>
      
    </aside>
  )
};

export default ProjectOverview;
