import React, { useState, useEffect } from 'react';
import block from 'bem-cn';
import { Text, Checkbox } from '@gpn-design/uikit';
import '../../mocks.js'
import './styles.css';

const b = block('add-new-driver');
const card = block('new-driver-card');
const d = block('decorator');

let secondLevelCollection = '';
let thirdLevelCollection = '';

const AddNewDriver = (props) => {
  const { drivers, className } = props;
  const firstLevelDrivers = drivers.firstLevel;
  const secondLevelDrivers = drivers.secondLevel;
  const thirdLevelDrivers = drivers.thirdLevel;

  const [ level, setLevel ] = useState(1);

  let secondLevel;
  let thirdLevel;

  const buildSecondLevel = () => {
    return secondLevelDrivers.map((driver, index) => {
      return (
        <li 
          key={`${driver.name} ${index}`}
          className={ b('item').mix(d({ 'space-v': 'xs', 'space-h': 's', 'indent-b': '2xs' })) }
          onClick={ openThirdLevel }
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
    })
  };

  const buildThirdLevel = () => {
    return thirdLevelDrivers.map((driver, index) => {
      return (
        <li 
          key={`${driver.name} ${index}`}
          className={ d({ 'indent-b': 'xs' }).mix(card()) }
        >
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
    })
  };

  const openSecondLevel = () => setLevel(2);
  const openThirdLevel = () => setLevel(3);
  
  if (level === 2) {
    secondLevel = buildSecondLevel();
    secondLevelCollection = secondLevel;
  } 
  if (level === 3) {
    thirdLevel = buildThirdLevel();
  }

  return (
    <section className={ d({ 'space-t': '3xl' }).mix([ b(), className ]) }>
      <Text tag='h1' size='2xl' view='primary' weigth='bold' className={ d({ 'indent-b': 'xl', 'space-l': '4xl' }) }>
        Добавление новых драйверов
      </Text>

      <div className={ b('container').mix('scroll_direction_vertical') }>
        <div className={ b('grid').mix(d({ 'space-h': '4xl' })) }>

          <ul className={b('list', { 'first-level': true }).mix(d({ 'space-b': '3xl' }))}>
            <Text tag='h2' size='l' weight='regular' 
              className={ 
                b('list-header', { 
                  'view': level === 1 ? 'active' 
                  : level > 1 ? 'passed'
                  : 'default' })
                .mix(d({ 'indent-b': 'xl' })) 
              }
            >
              Процесс 1-го уровня
            </Text>

            {firstLevelDrivers.map((driver, index) => {
					    return (
                <li 
                  key={`${driver.name} ${index}`}
                  className={ b('item').mix(d({ 'space-v': 'xs', 'space-h': 's', 'indent-b': '2xs' })) }
                  onClick={ openSecondLevel }
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
                b('list-header', { 
                  'view': level === 2 ? 'active' 
                  : level > 2 ? 'passed'
                  : 'default' })
                .mix(d({ 'indent-b': 'xl' })) 
              }
            >
              Процесс 2-го уровня
            </Text>

            { secondLevel ? secondLevel : secondLevelCollection }
          </ul>

          <ul className={b('list', { 'third-level': true }).mix(d({ 'space-b': '3xl' }))}>
            <Text tag='h2' size='l' weight='regular' 
              className={ 
                b('list-header', { 
                  'view': level === 3 ? 'active' 
                  : 'default' })
                .mix(d({ 'indent-b': 'xl' })) 
              }
            >
              Цели процесса
            </Text>

            { thirdLevel }
          </ul>

        </div>
      </div>
    </section>


  )
};

export default AddNewDriver;