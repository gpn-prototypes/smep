import React from 'react';
import { block } from 'bem-cn';
import { Text } from '@gpn-design/uikit';
import './styles.css';

const b = block('stats-table');
const d = block('decorator');

const StatsTable = (props) => {
  const { items, className } = props;

  return (
    <ul className={`${b()} ${className}`}>
      {items.map((item) => {
        return (
          <li className={b('row').mix(d({'distribute': 'between', 'vertical-align': 'center', 'indent-b': '2xs'}))}>
            <Text size='m' view='secondary' lineHeight='s' className={b('name')}>{item.name}</Text>
            <Text size='m' view='primary' lineHeight='s' className={b('value')}>{item.value}</Text>
          </li>
        )
      })}
    </ul>
  )
};

export default StatsTable;