import React from 'react';
import { Link } from 'react-router-dom';
import block from 'bem-cn';
// import { IconArrowLeft } from '@gpn-design/uikit';
import { Text, Badge } from '@gpn-design/uikit';

import './styles.css';

const b = block('project-list-card');
const d = block('decorator');

const ProjectListCard = (props) => {

  const badgeStatus = props.badge === 'Согласован' ? 'success' 
    : props.badge === 'На согласовании' ? 'warning'
    : 'error';

  return (
    <Link to={`/smep/project/${props.number}`} className={b()} >
      <div className={
        b('sup-info')
        .mix(d({'distribute': 'between', 'vertical-align': 'center', 'indent-b': 'xs'}))
      }>
        <Text tag='p' size='s' view='primary' transform='uppercase' spacing='xs'>{props.number}</Text>
        <Text tag='p' size='s' view='secondary'>{props.company}</Text>
      </div>
      <Text tag='h3' size='xl' view='primary' weight='bold' lineHeight='s'
        className={[b('title'), d({'indent-b': 'xs'})]}
      >
        {props.title}
      </Text>
      <div className={
        b('statuses')
        .mix(d({'distribute': 'left', 'vertical-align': 'baseline', 'indent-b': 's'}))
      }>
        <Text tag='p' size='s' view='secondary' className={d({'indent-r': 'xs'})}>{props.stage}</Text>
        {/* <IconArrowLeft size='xs' view='ghost' /> */}
        <Text tag='p' size='xs' view='secondary' transform='uppercase' spacing='xs'>{props.status}</Text>
      </div>
      <footer className={b('footer')}>
        <Badge wpSize='m' status={badgeStatus} view='stroked' form='round'>{props.badge}</Badge>
      </footer>
    </Link>
  )
};


export default ProjectListCard;