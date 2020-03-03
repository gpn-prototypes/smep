import React from 'react';
import { Link } from 'react-router-dom';
import block from 'bem-cn';
import { Text, Badge, Button } from '@gpn-design/uikit';
import StatsTable from '../StatsTable';
import DriverList from '../DriverList';
import './styles.css';

const b = block('project-overview');
const d = block('decorator');

const stats = [
  { name: 'Горизонт планирования', value: '5 лет' },
  { name: 'NPV', value: '0,248 млрд. ₽' },
  { name: 'PI', value: '1,3' },
  { name: 'DPP', value: '4,3 года' },
  { name: 'IRR', value: '31,5%' },
]

const ProjectOverview = (props) => {
  const { project } = props;

  const badgeStatus = project.badge === 'Согласован' ? 'success' 
    : project.badge === 'На согласовании' ? 'warning'
    : 'error';

  return (
    <aside className={`${b()} ${d({'space-t': 'xl', 'space-l': '3xl', 'space-r': 'xl'})}`}>
      <div className={b('main')}>
        <Link to={'/'} className={b('back').mix(d({'indent-b': 'm'}))}>
          <Text size='s' view='secondary'>Ко всем проектам</Text>
        </Link>

        <div className={d({'distribute': 'between', 'vertical-align': 'center', 'indent-b': 'xs'})}>
          <Text size='m' lineHeight='xs' transform='uppercase' spacing='xs'>{project.id}</Text>
          <Badge wpSize='m' status={badgeStatus} view='stroked' form='round'>{project.badge}</Badge>
        </div>
        <Text size='l' view='link' lineHeight='s' weight='bold' className={d({'indent-b': 'm'})}>{project.title}</Text>

        <StatsTable 
          className={d({'indent-b': '3xl'})} 
          items={stats}
        />

        <DriverList />
      </div>

      <div className={b('footer')}>
        <Button wpSize='l' view='primary' width='full'>Отправить на согласование</Button>
      </div>
      
    </aside>
  )
};

export default ProjectOverview;
