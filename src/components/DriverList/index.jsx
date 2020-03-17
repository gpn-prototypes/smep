import React, { useContext } from 'react';
import block from 'bem-cn';
import { Text, Badge, Button, IconAdd } from '@gpn-design/uikit';
import { DriverListContext } from '../../context/DriverListContext';
import { ProjectContext } from '../../context/ProjectContext';
import './styles.css';

const b = block('driver-list');
const d = block('decorator');
const list = block('pt-list');

const DriverList = (props) => {
  const { drivers } = useContext(DriverListContext);
  const { addNewDriver, openDriver } = useContext(ProjectContext);

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
              <li 
                key={`${driver.name} ${index}`} 
                className={b('item', { 'status': driver.status }).mix(list('item'))}
                onClick={ () => openDriver({ name: driver.name, status: driver.status }) }
              >
                <Badge 
                  wpSize='s' status={ driver.status } isMinified={true} 
                  className={ b('status').mix(d({'indent-r': 'xs'})) } />
                <Text tag='p' size='m' view='primary' lineHeight='xs' className={b('name')}>{ driver.name }</Text>
              </li>
            )
          })
        }
      </ul>
      
      <Button wpSize='m' view='ghost' width='full' withIcon='left' onClick={ addNewDriver }>
        Добавить новый драйвер
        <IconAdd size={'s'} className={'button__icon'} />
      </Button>
    </>
  )
};

export default DriverList;