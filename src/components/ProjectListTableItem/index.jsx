import React from 'react';
import block from 'bem-cn';
import { useHistory } from 'react-router-dom';
// import { IconArrowLeft } from '@gpn-design/uikit';
import { Text, Badge } from '@gpn-design/uikit';

import './styles.css';

const b = block('project-list-table-item');
// const d = block('decorator');

const ProjectListTableItem = (props) => {
  const history = useHistory();
  const openProject = () => {
    history.push(`/project/${props.number}`)
  };

  const badgeStatus = props.badge === 'Согласован' ? 'success' 
    : props.badge === 'На согласовании' ? 'warning'
    : 'error';

  return (
    <tr className={`pt-table__row ${b()}`} key={props.number} onClick={openProject}>
      <td className='pt-table__col'>
        <Text tag='p' size='m' view='primary' transform='uppercase' spacing='xs'>{props.number}</Text>
      </td>
      <td className={b('title').mix('pt-table__col')}>
        <Text tag='p' size='m' view='primary' weight='bold'>{props.title}</Text>
      </td>
      <td className='pt-table__col'>
        <Text tag='p' size='m' view='primary'>{props.company}</Text>
      </td>
      <td className='pt-table__col'>
        <Text tag='p' size='m' view='primary'>{props.stage}</Text>
      </td>
      <td className='pt-table__col'>
        <Text tag='p' size='m' view='primary'>{props.status}</Text>
      </td>
      <td className='pt-table__col pt-table__col_align_right'>
        <Badge wpSize='m' status={badgeStatus} view='stroked' form='round'>{props.badge}</Badge>
      </td>
    </tr>
  )
};

export default ProjectListTableItem;