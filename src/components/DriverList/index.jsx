import React, { useContext } from 'react';
import block from 'bem-cn';
import { Text, Badge, Button, IconAdd } from '@gpn-design/uikit';
import { DriverListContext } from '../../context/DriverListContext';
import { ProjectContext } from '../../context/ProjectContext';
import './styles.css';

const b = block('driver-list');
const d = block('decorator');
const list = block('pt-list');

let activeDriver = null;

const DriverList = (props) => {
  const { drivers } = useContext(DriverListContext);
  const { addNewDriver, openDriver } = useContext(ProjectContext);

  const setDriver = (e) => {
    activeDriver = e.currentTarget.getAttribute('data-key');
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
            d({'indent-b': 'm',})
          ])
        }
      >
        {
          drivers.map((driver, index) => {
            const id = `${driver.name} ${index}`;
            return (
              <li 
                key={id} data-key={id} 
                className={
                  b('item', { status: driver.status, view: activeDriver === id ? 'active' : 'default' })
                  .mix(list('item'))
                }
                onClick={ (e) => {
                    setDriver(e);
                    openDriver({ name: driver.name, status: driver.status });
                  }
                }
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