import React from 'react';
import block from 'bem-cn';
import { useHistory } from 'react-router-dom';
// import { IconArrowLeft } from '@gpn-design/uikit';
import { Text, Badge } from '@gpn-design/uikit';

import './styles.css';

const b = block('project-list-table');
const table = block('pt-table');

const ProjectListTable = (props) => {
  const { projects } = props;

  const history = useHistory();

  return (
    <table 
      className={table({
        'view': 'default',
        'vertical-align': 'top',
        'border': 'between',
        // 'stripe': 'even',
        'space-a': 'm'
      }).mix(b())}
    >
      <thead>
        <tr className={table('row', {'view': 'head'})}>
          <td className={table('col')}>
            <Text tag='p' size='xs' view='secondary' transform='uppercase' spacing='xs'>Номер</Text>
          </td>
          <td className={table('col' )}>
            <Text tag='p' size='xs' view='secondary' transform='uppercase' spacing='xs'>Название</Text>
          </td>
          <td className={table('col', {width: '15'})}>
            <Text tag='p' size='xs' view='secondary' transform='uppercase' spacing='xs'>Блок</Text>
          </td>
          <td className={table('col')}>
            <Text tag='p' size='xs' view='secondary' transform='uppercase' spacing='xs'>Этап</Text>
          </td>
          <td className={table('col')}>
            <Text tag='p' size='xs' view='secondary' transform='uppercase' spacing='xs'>Статус</Text>
          </td>
          <td className={table('col', {'align': 'right'})}>
            <Text tag='p' size='xs' view='secondary' transform='uppercase' spacing='xs'>Экспертиза</Text>
          </td>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => {
          const openProject = () => {
            history.push(`/project/${project.id}`)
          };

          const badgeStatus = project.badge === 'Согласован' ? 'success' 
          : props.badge === 'На согласовании' ? 'warning'
          : 'error';

          return (
            <tr className={b('item').mix(`pt-table__row`)} key={project.id} onClick={openProject}>
              <td className='pt-table__col'>
                <Text tag='p' size='m' lineHeight='s' view='primary' transform='uppercase' spacing='xs'>{project.id}</Text>
              </td>
              <td className={'pt-table__col'}>
                <Text tag='p' size='m' lineHeight='s' view='primary' weight='bold' className={b('title')}>{project.title}</Text>
              </td>
              <td className='pt-table__col'>
                <Text tag='p' size='m' lineHeight='s' view='primary'>{project.company}</Text>
              </td>
              <td className='pt-table__col'>
                <Text tag='p' size='m' lineHeight='s' view='primary'>{project.stage}</Text>
              </td>
              <td className='pt-table__col'>
                <Text tag='p' size='m' lineHeight='s' view='primary'>{project.status}</Text>
              </td>
              <td className='pt-table__col pt-table__col_align_right'>
                <Badge wpSize='m' status={badgeStatus} view='stroked' form='round'>{project.badge}</Badge>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
};

export default ProjectListTable;