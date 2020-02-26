import React from 'react';
import block from 'bem-cn';
// import { IconArrowLeft } from '@gpn-design/uikit';

import './styles.css';

const b = block('project-card');
const d = block('decorator');

const ProjectCard = (props) => {
  return (
    <div className={b()}>
      <div className={
        b('sup-info')
        .mix(d({'distribute': 'between', 'vertical-align': 'center', 'indent-b': 'xs'}))
      }>
        <p className='text text_size_m text_view_primary text_transform_uppercase text_spacing_xs'>{props.number}</p>
        <p className='text text_size_m text_view_secondary'>{props.company}</p>
      </div>
      <h3 className={
        b('title')
        .mix(d({'distribute': 'between', 'vertical-align': 'center', 'indent-b': 'xs'}))
      }>
        {props.title}
      </h3>
      <div className={
        b('statuses')
        .mix(d({'distribute': 'left', 'vertical-align': 'baseline', 'indent-b': 's'}))
      }>
        <p className={
          d({'indent-r': 'xs'})
          .mix('text text_size_m text_view_secondary')
        }>{props.stage}</p>
        {/* <IconArrowLeft size='xs' view='ghost' /> */}
        <p className='text text_size_s text_view_secondary text_transform_uppercase text_spacing_xs'>{props.status}</p>
      </div>
    </div>
  )
};

export default ProjectCard;