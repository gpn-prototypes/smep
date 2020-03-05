import React from 'react';
import block from 'bem-cn';
import { Text, Button, IconEdit } from '@gpn-design/uikit';
import StatsTable from '../StatsTable';

import './styles.css';

const b = block('project-data');
const d = block('decorator');
const grid = block('tpl-grid');

const stats = [
  { name: 'NPV', value: '0,248 млрд. ₽' },
  { name: 'PI', value: '1,3' },
  { name: 'DPP', value: '4,3 года' },
  { name: 'IRR', value: '31,5%' },
]

const ProjectData = (props) => {
  const { project, className } = props;

  return (
    <div 
      className={
        grid({'s-ratio': '1-1', 'col-gap': 'half', 'row-gap': 'half'})
        .mix( [b(), className] )
      }
    >
      <ul 
        className={
          b('list')
          .mix( grid({'s-ratio': '1-1', 'col-gap': 'half', 'row-gap': 'half'}) )
        }
      >
        <li className={b('item')}>
          <Text tag='p' size='s' view='secondary' className={d({'indent-b': '2xs'})}>Подразделение</Text>
          <Text tag='p' size='m' view='primary'>{project.company}</Text>
        </li>
        <li className={b('item')}>
          <Text tag='p' size='s' view='secondary' className={d({'indent-b': '2xs'})}>Горизонт планирования</Text>
          <div className='plan-horizon'>
            <Text tag='p' size='m' view='primary' className={d({'indent-r': 'xs'}).mix('plan-horizon__value')}>5 лет</Text>
            <Button wpSize='xs' view='clear' iconOnly>
              <IconEdit size='s' />
            </Button>
          </div>
        </li>
        <li className={b('item')}>
          <Text tag='p' size='s' view='secondary' className={d({'indent-b': '2xs'})}>Статус проекта</Text>
          <Text tag='p' size='m' view='primary'>{project.status}</Text>
        </li>
        <li className={b('item')}>
          <Text tag='p' size='s' view='secondary' className={d({'indent-b': '2xs'})}>Этап проекта</Text>
          <Text tag='p' size='m' view='primary'>{project.stage}</Text>
        </li>
      </ul>

      <div className={b('stats')}>
        <StatsTable 
          items={stats}
        />
      </div>
    </div>
  )
};

export default ProjectData;