import React from 'react';
import block from 'bem-cn';
import { Link } from 'react-router-dom';
import { Text, IconBackward } from '@gpn-design/uikit';
import './styles.css';

const b = block('back-link');
const d = block('decorator');
const iPlus = block('pt-icon-plus');

const BackLink = (props) => {
  const { linkTo, className, children } = props;
  
  return (
    <Link 
      to={linkTo} 
      className={`${b()} 
        ${iPlus({'vertical-align': 'center'})}
        ${d({'indent-b': 'm'})}
        ${className ? className : ''}
      `}
    >
      <div className={ b('icon-wrapper').mix(iPlus('icon', {'indent-r': 'xs'})) }>
        <IconBackward size={'s'} view='secondary' className={ b('icon') } />
      </div>
      <Text size='s' view='secondary' className={b('text')}>{children}</Text>
    </Link>
  )
};

export default BackLink;