import React from 'react';
import block from 'bem-cn';
import { Text, Button, Badge, IconKebab } from '@gpn-design/uikit';

import './styles.css';

const b = block('project-info');
const d = block('decorator');

const ProjectInfo = (props) => {
  const { project, className } = props;

  const badgeStatus = project.badge === 'Согласован' ? 'success' 
    : project.badge === 'На согласовании' ? 'warning'
    : 'error';

  return (
    <div className={b()}>
      <div className={b('header').mix(d({'distribute': 'between', 'vertical-align': 'center', 'indent-b': 'm'}))}>
        <div className={d({'distribute': 'between', 'vertical-align': 'center', 'indent-b': 'xs'})}>
          <Text size='m' lineHeight='xs' transform='uppercase' spacing='xs'>{project.id}</Text>
        </div>
        <div className={d({'distribute': 'between', 'vertical-align': 'center', 'indent-b': 'xs'})}>
          <Badge wpSize='m' status={badgeStatus} view='stroked' form='round' className={d({'indent-r': 'xs'})}>{project.badge}</Badge>
          <Button wpSize='xs' view='clear' iconOnly={true}>
            <IconKebab size='s' />
          </Button>
        </div>
      </div>

      <Text tag='h1' size='2xl' weight='bold' lineHeight='s' className={d({'indent-b': 'xl'})}>
        {project.title}
      </Text>

      <Text tag='p' size='l' lineHeight='l' className={d({'indent-b': 'xl'})}>
        1. Минимизация рисков разграничения полномочий у пользователей: по предварительной оценке 40% SOD конфликтов будут покрыты компенсирующими контрольными процедурами СВК. 2. Повышение эффективности процесса управления рисками разграничения полномочий: высвобождение времени согласующих доступ на 0,5FTE в связи с уменьшением количества 
      </Text>
    </div>
  )
};

export default ProjectInfo;