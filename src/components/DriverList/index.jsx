import React from 'react';
import block from 'bem-cn';
import { Text, Badge, Button } from '@gpn-design/uikit';
import './styles.css';

const b = block('driver-list');
const d = block('decorator');
const list = block('pt-list');

const DriverList = (props) => {
  // const {  } = props;

  return (
    <>
      <Text size='xs' view='secondary' transform='uppercase' spacing='xs' className={d({'indent-b': 'm'})}>Драйверы</Text>
      <ul className={
          list({
            'indent-v': '3xs', 
            'space-v': 'xs',
            'space-h': 's',
            'distribute': 'default',
            'vertical-align': 'center'
          }).mix([
            b(),
            d({'indent-b': 's',})
          ])
        }
      >
        <li className={b('item').mix(list('item'))}>
          <Badge wpSize='s' status='success' isMinified={true} className={b('status').mix(d({'indent-r': 'xs'}))}></Badge>
          <Text tag='p' size='m' view='primary' lineHeight='xs' className={b('name')}>Проведение закупок по оптимальным ценам</Text>
        </li>
        <li className={b('item').mix(list('item'))}>
          <Badge wpSize='s' status='success' isMinified={true} className={b('status').mix(d({'indent-r': 'xs'}))}></Badge>
          <Text tag='p' size='m' view='primary' lineHeight='xs' className={b('name')}>Повышение надежности поставщиков (надлежащее качество)</Text>
        </li>
        <li className={b('item').mix(list('item'))}>
          <Badge wpSize='s' status='success' isMinified={true} className={b('status').mix(d({'indent-r': 'xs'}))}></Badge>
          <Text tag='p' size='m' view='primary' lineHeight='xs' className={b('name')}>Повышение оборачиваемости запасов</Text>
        </li>
        <li className={b('item').mix(list('item'))}>
          <Badge wpSize='s' status='warning' isMinified={true} className={b('status').mix(d({'indent-r': 'xs'}))}></Badge>
          <Text tag='p' size='m' view='primary' lineHeight='xs' className={b('name')}>Повышение эффективности в планировании потребности запасов</Text>
        </li>
        <li className={b('item').mix(list('item'))}>
          <Badge wpSize='s' status='warning' isMinified={true} className={b('status').mix(d({'indent-r': 'xs'}))}></Badge>
          <Text tag='p' size='m' view='primary' lineHeight='xs' className={b('name')}>Повышение надёжности услуг хранения и сохранности ТМЦ</Text>
        </li>
        <li className={b('item').mix(list('item'))}>
          <Badge wpSize='s' status='normal' isMinified={true} className={b('status').mix(d({'indent-r': 'xs'}))}></Badge>
          <Text tag='p' size='m' view='primary' lineHeight='xs' className={b('name')}>Повышение эффективности использования складских помещений</Text>
        </li>
      </ul>
      
      <Button wpSize='m' view='ghost' width='full'>Добавить новый драйвер</Button>
    </>
  )
};

export default DriverList;