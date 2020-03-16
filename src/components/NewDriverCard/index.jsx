import React, { useState, useContext } from 'react';
import block from 'bem-cn';
import { Text, Checkbox } from '@gpn-design/uikit';
import { DriverListContext } from '../../pages/Project/DriverListContext';

import './styles.css';

const b = block('new-driver-card');
const d = block('decorator');

const NewDriverCard = (props) => {
  const { name, kpi, params } = props;
  let [ isChosen, setChoice ] = useState(0);
  const { addDriver, removeDriver } = useContext(DriverListContext);

  // if (state) {
  //   isChosen = state.isChosen;
  //   setChoice = state.setChoice;
  // }

  const toggleChoice = () => {
    if (isChosen) {
      removeDriver(name);
      return 0;
    }
    addDriver({ name: name, status: 'normal'});
    return 1;
  };

  // const addDriverToList = () => { return name; }
  
  const chooseDriver = (e) => {
    setChoice(toggleChoice);
  };

  // console.log(newDriver);

  return (
    <li 
      className={ b({ view: isChosen ? 'checked' : 'default' }).mix(d({ 'indent-b': 'xs' })) }
      onClick={chooseDriver}
    >
      <Checkbox wpSize='m' className={ b('checkbox') } value={ isChosen ? true : false }></Checkbox>
      <Text tag='p' size='l' view='primary' lineHeight='xs' weight='bold'
        className={ b('title').mix(d({ 'indent-b': 's' })) }>
          { name }
      </Text>
      <div className={ b('details') }>
        <div className={ b('kpi') }>
          <Text tag='p' size='xs' view='secondary' lineHeight='xs'>
            Операционный КПЭ (в денежном выражении)
          </Text>
          <Text tag='p' size='s' view='primary' lineHeight='s'>
            { kpi }
          </Text>
        </div>
        <div className={ b('params') }>
          <Text tag='p' size='xs' view='secondary' lineHeight='xs'>
            Физические параметры
          </Text>
          <Text tag='p' size='s' view='primary' lineHeight='s'>
            { params }
          </Text>
        </div>
      </div>
    </li>
  )
};

export default NewDriverCard ;