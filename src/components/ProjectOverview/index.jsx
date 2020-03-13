import React, { useState } from 'react';
import block from 'bem-cn';
import { Text, Badge, Button, IconBackward } from '@gpn-design/uikit';
import StatsTable from '../StatsTable';
import DriverList from '../DriverList';
import BackLink from '../BackLink';
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
  const { project, state } = props;

  const isNew = state.isNew;
  const setAdd = state.setAdd;

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
        <Text size='l' view='link' lineHeight='s' weight='bold' className={d({'indent-b': 'm'})}>{project.title}</Text>

        <StatsTable 
          className={d({'indent-b': '3xl'})} 
          items={stats}
        />

        <DriverList state={{ isNew, setAdd }} />
      </div>

      <div className={b('footer').mix(d({'space-l': '3xl', 'space-r': 'xl'}))}>
        <Button wpSize='l' view='primary' width='full'>Отправить на согласование</Button>
      </div>
      
    </aside>
  )
};

export default ProjectOverview;
