import React, { useState } from 'react';
import block from 'bem-cn';
import { Text, Button, IconArrowUp } from '@gpn-design/uikit';

import './styles.css';

const b = block('text-collapse');
const d = block('decorator');

const TextCollapse = (props) => {
  const { children, className } = props;
  const [isExpand, setExpand] = useState(0);

  let markup;
  
  const toggleExpand = () => {
    if (!isExpand) { return 1 }
    else { return 0 }
  };

  if (!isExpand) {
    markup = (
      <div 
        className={b({'view': 'collapsed'}).mix([ d({'indent-b': '3xl'}), className ])} 
        onClick={ () => setExpand(toggleExpand) }
      >
        <Text tag='p' size='l' lineHeight='l'>
          {children}
        </Text>
      </div>
    )
  } else {
    markup = (
      <div 
        className={b({'view': 'expand'}).mix([ d({'indent-b': '3xl'}), className ])}
      >
        <Text tag='p' size='l' lineHeight='l' className={d({'indent-b': 'm'})}>
          {children}
        </Text>
        <Button wpSize='s' view='clear' withIcon='left' onClick={ () => setExpand(toggleExpand) }>
          Свернуть описание
          <IconArrowUp size='s' />
        </Button>
      </div>
    )
  }

  return (
    <>{markup}</>
  )
};

export default TextCollapse;