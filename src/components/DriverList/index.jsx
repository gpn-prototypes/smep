import React, { useState, useContext } from 'react';
import block from 'bem-cn';
import { Text, Badge, Button, IconAdd } from '@gpn-design/uikit';
import { DriverListContext } from '../../pages/Project/DriverListContext';
import './styles.css';

const b = block('driver-list');
const d = block('decorator');
const list = block('pt-list');

const DriverList = (props) => {
  // const {  } = props;
  let [ isNew, setAdd ] = useState(0);
  const { drivers } = useContext(DriverListContext);

  if (props.state) {
    const { state } = props;

    isNew = state.isNew;
    setAdd = state.setAdd;
  }

  

  const addNewDriver = () => {
    if (!isNew) { return 1 }
    else { return 0 }
  };

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
        {
          drivers.map((driver, index) => {
            return (
              <li key={`${driver.name} ${index}`} className={b('item').mix(list('item'))}>
                <Badge 
                  wpSize='s' status={ driver.status } isMinified={true} 
                  className={ b('status').mix(d({'indent-r': 'xs'})) } />
                <Text tag='p' size='m' view='primary' lineHeight='xs' className={b('name')}>{ driver.name }</Text>
              </li>
            )
          })
        }
        {/* <li className={b('item').mix(list('item'))}>
          <Badge wpSize='s' status='normal' isMinified={true} className={b('status').mix(d({'indent-r': 'xs'}))}></Badge>
          <Text tag='p' size='m' view='primary' lineHeight='xs' className={b('name')}>Повышение эффективности использования складских помещений</Text>
        </li> */}
        {/* { newDrivers } */}
      </ul>
      
      <Button wpSize='m' view='ghost' width='full' withIcon='left' onClick={ () => setAdd(addNewDriver) }>
        Добавить новый драйвер
        <IconAdd size={'s'} className={'button__icon'} />
      </Button>
    </>
  )
};

export default DriverList;