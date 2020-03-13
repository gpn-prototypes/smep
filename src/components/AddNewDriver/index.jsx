import React, { useState } from 'react';
import block from 'bem-cn';
import { Text, Button, Checkbox } from '@gpn-design/uikit';
import '../../mocks.js'
import './styles.css';

const b = block('add-new-driver');
const card = block('new-driver-card');
const d = block('decorator');

const AddNewDriver = (props) => {
  const { drivers, className } = props;
  const firstLevelDrivers = drivers.firstLevel;
  const secondLevelDrivers = drivers.secondLevel;
  const thirdLevelDrivers = drivers.thirdLevel;

  let currentLevel = 1;
  const { level, setLevel } = useState(currentLevel);

  const changeLevel = (newLevel) => {
    currentLevel = newLevel;
    return level;
  };

  return (
    <section className={ d({ 'space-t': '3xl' }).mix([ b(), className ]) }>
      <Text tag='h1' size='2xl' view='primary' weigth='bold' className={ d({ 'indent-b': 'xl', 'space-l': '4xl' }) }>
        Добавление новых драйверов
      </Text>

      <div className={ b('container').mix('scroll_direction_vertical') }>
        <div className={ b('grid').mix(d({ 'space-h': '4xl' })) }>

          <ul className={b('list', { 'first-level': true }).mix(d({ 'space-b': '3xl' }))}>
            <Text tag='h2' size='l' weight='regular' 
              className={ b('list-header', { 'view': 'active' }).mix(d({ 'indent-b': 'xl' })) }>
              Процесс 1-го уровня
            </Text>

            {firstLevelDrivers.map((driver) => {
					    return (
                <li 
                  className={ b('item').mix(d({ 'space-v': 'xs', 'space-h': 's', 'indent-b': '2xs' })) }
                  onClick={ () => setLevel(changeLevel(2)) }
                >
                  <div className={ d({ 'distribute': 'left', 'vertical-align': 'baseline' }) }>
                    <Text 
                      tag='span' size='m' view='secondary' 
                      className={ b('number').mix(d({ 'indent-r': 'm' })) }>
                        {driver.number}
                    </Text>
                    <Text tag='p' size='m' view='primary' lineHeight='s' 
                      className={b('title')}>
                        {driver.name}
                    </Text>
                  </div>
                </li>
              )
            })}
          </ul>

          <ul className={b('list', { 'second-level': true }).mix(d({ 'space-b': '3xl' }))}>
            <Text tag='h2' size='l' weight='regular' 
              className={ 
                b('list-header', { 'view': currentLevel === '2' ? 'active' : 'default' })
                .mix(d({ 'indent-b': 'xl' })) 
              }
            >
              Процесс 2-го уровня
            </Text>

            {secondLevelDrivers.map((driver) => {
					    return (
                <li 
                  className={ b('item').mix(d({ 'space-v': 'xs', 'space-h': 's', 'indent-b': '2xs' })) }
                  onClick={ () => setLevel(changeLevel(3)) }
                >
                  <Text tag='p' size='m' view='primary' lineHeight='s' 
                    className={b('title')}>
                      {driver.name}
                  </Text>
                  <Text 
                    tag='span' size='xs' view='secondary' 
                    className={ b('subcompany').mix(d({ 'indent-t': '2xs' })) }>
                      {driver.subCompany}
                  </Text>
                </li>
              )
            })}
          </ul>

          <ul className={b('list', { 'third-level': true }).mix(d({ 'space-b': '3xl' }))}>
            <Text tag='h2' size='l' weight='regular' 
              className={ b('list-header', { 'view': 'default' }).mix(d({ 'indent-b': 'xl' })) }>
              Цели процесса
            </Text>

            {thirdLevelDrivers.map((driver) => {
              return (
                <li className={ d({ 'indent-b': 'xs' }).mix(card()) }>
                  <Checkbox wpSize='m' className={ card('checkbox') }></Checkbox>
                  <Text tag='p' size='l' view='primary' lineHeight='xs' weight='bold'
                    className={ card('title').mix(d({ 'indent-b': 's' })) }>
                      {driver.name}
                  </Text>
                  <div className={ card('details') }>
                    <div className={ card('kpi') }>
                      <Text tag='p' size='xs' view='secondary' lineHeight='xs'>
                        Операционный КПЭ (в денежном выражении)
                      </Text>
                      <Text tag='p' size='s' view='primary' lineHeight='s'>
                        {driver.kpi}
                      </Text>
                    </div>
                    <div className={ card('params') }>
                      <Text tag='p' size='xs' view='secondary' lineHeight='xs'>
                        Физические параметры
                      </Text>
                      <Text tag='p' size='s' view='primary' lineHeight='s'>
                        {driver.params}
                      </Text>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

        </div>
      </div>
    </section>


  )
};

export default AddNewDriver;