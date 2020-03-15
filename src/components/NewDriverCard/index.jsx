import React, { useState } from 'react';
import block from 'bem-cn';
import { Text, Checkbox } from '@gpn-design/uikit';

import './styles.css';

const b = block('new-driver-card');
const d = block('decorator');

const NewDriverCard = (props) => {
  const { index, name, kpi, params } = props;
  const [ isChosen, setChoice ] = useState(0);

  const toggleChoice = () => {
    if (isChosen) return 0;
    return 1;
  }

  return (
    <li 
      key={`${name} ${index}`}
      className={ b({ view: isChosen ? 'checked' : 'default' }).mix(d({ 'indent-b': 'xs' })) }
      onClick={() => setChoice(toggleChoice)}
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