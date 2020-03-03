import React from 'react';
import block from 'bem-cn';
import { Text } from '@gpn-design/uikit';
import './styles.css';

const d = block('decorator');

const DriverList = (props) => {
  // const {  } = props;

  return (
    <Text size='xs' view='secondary' transform='uppercase' spacing='xs' className={d({'indent-b': 'm'})}>Драйверы</Text>
  )
};

export default DriverList;