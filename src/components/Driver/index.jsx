import React from 'react';
import block from 'bem-cn';
import { Text, Button, Input, Select } from '@gpn-design/uikit';
import './styles.css';

const b = block('driver');
const bb = block('driver-calc');
const form = block('pt-form');
const formula = block('driver-formula');
const d = block('decorator');

const Driver = (props) => {
  const { driver, className } = props;

  const options = [
    { value: 'mln', label: 'Млн. ₽' },
    { value: 'bln', label: 'Млрд. ₽' },
  ]

  return (
    <section className={ b({}).mix(d({ 'space-t': '4xl', 'space-h': '4xl' })) }>
      <Text tag='h1' size='2xl' view='primary' weight='bold' className={ d({ 'indent-b': 'xl' }) }>
        { driver.name }
      </Text>

      <div className={ b('grid') }>

        <div className={ bb({}).mix(d({ 'space-v': '3xl', 'space-h': '4xl' })) }>
          <Text tag='h2' size='2xl' view='primary' weight='regular' >
            Расчет снижения потерь/упущенной выгоды от внеплановых аварий, простоя оборудования
          </Text>

          <form className={ form({'structure': '50-50', 'vertical-align': 'center', 'space-v': 'xs'}) }>
            <div className={ form('section', {'space-v': '2xl', border: 'bottom'}) }>
              <div className={ form('item') }>
                <Text tag='p' size='m' view='primary' lineHeight='s' className={ form('label').mix(d({ 'indent-r': 'l' })) }>
                  Целевая продолжительность простоев основного оборудования
                </Text>
                <div className={ form('control', {'distribute': 'default', 'vertical-align': 'center'}) }>
                  <Input view='default' wpSize='l' placeholder='Число' className={ bb('input') } />
                  <Text tag='span' size='m' view='primary' className={ d({ 'indent-l': 's' }) }>дней</Text>
                </div>
              </div>

              <div className={ form('item') }>
                <Text tag='p' size='m' view='primary' lineHeight='s' className={ form('label').mix(d({ 'indent-r': 'l' })) }>
                  Фактическая продолжительность простоев основного оборудования
                </Text>
                <div className={ form('control', {'distribute': 'default', 'vertical-align': 'center'}) }>
                  <Input view='default' wpSize='l' placeholder='Число' className={ bb('input') } />
                  <Text tag='span' size='m' view='primary' className={ d({ 'indent-l': 's' }) }>дней</Text>
                </div>
              </div>

              <div className={ form('item') }>
                <Text tag='p' size='m' view='primary' lineHeight='s' className={ form('label').mix(d({ 'indent-r': 'l' })) }>
                  Операционная прибыль
                </Text>
                <div className={ form('control', {'distribute': 'default', 'vertical-align': 'center'}) }>
                  <Input view='default' wpSize='l' placeholder='Число' className={ bb('input') } />
                  <div className={ bb('select').mix(d({ 'indent-l': 's' })) }>
                    <Select
                      placeholder={options[0].label}
                      name="storySelect"
                      options={options}
                      wpSize='l'
                    />
                  </div>
                </div>
              </div>

              <div className={ formula({}).mix(d({ 'indent-t': 'xl' })) }>
                <Text tag='span' size='2xl' view='secondary' align='center' className={ d({'indent-r': 'm'}) }>(</Text>
                <Text 
                  tag='p' size='s' view='primary' align='center' lineHeight='xs'
                  className={ formula('item') }
                >
                  целевая продолжительность простоев
                </Text>
                <Text tag='span' size='2xl' view='secondary' align='center' className={ d({'indent-h': 'm'}) }>–</Text>
                <Text 
                  tag='p' size='s' view='primary' align='center' lineHeight='xs'
                  className={ formula('item') }
                >
                  фактическая продолжительность простоев
                </Text>
                <Text tag='span' size='2xl' view='secondary' align='center' className={ d({'indent-h': 'm'}) }>)</Text>
                <Text tag='span' size='2xl' view='secondary' align='center' className={ d({'indent-h': 'm'}) }>×</Text>
                <Text 
                  tag='p' size='s' view='primary' align='center' lineHeight='xs'
                  className={ formula('item') }
                >
                  операционная прибыль
                </Text>
              </div>
            </div>

            <div className={ form('section', {'space-v': '2xl'}) }>
              <div className={ d({'distribute': 'between', 'vertical-align': 'center', 'indent-b': '2xl'}) }>
                <p className={ bb('result') }>
                  <Text tag='span' size='l' view='primary'>Снижение потерь = </Text>
                  <Text tag='span' size='2xl' weight='bold' view='primary'>11,9 млн. ₽</Text>
                </p>
                <Button wpSize='m' view='ghost'>Детали расчёта</Button>
              </div>
              <Button wpSize='l' view='primary' width='full'>Сохранить</Button>
            </div>
          </form>
        </div>
      
        <div className={ b('info') }>
          <Text tag='h3' size='l' weight='bold' view='primary' className={ d({'indent-b': 'm'}) }>
            Информация
          </Text>

          <Text tag='p' size='s' view='secondary' className={ d({'indent-b': '2xs'}) }>
            Цель процесса
          </Text>
          <Text tag='p' size='m' view='primary' lineHeight='s' className={ d({'indent-b': 'xl'}) }>
            Проведение закупок по оптимальным ценам
          </Text>

          <Text tag='p' size='s' view='secondary' className={ d({'indent-b': '2xs'}) }>
            Операционный КПЭ (в денежном выражении)
          </Text>
          <Text tag='p' size='m' view='primary' lineHeight='s' className={ d({'indent-b': 'xl'}) }>
            Снижение потерь/ упущенной выгоды от внеплановых аварий, простоя оборудования 
          </Text>

          <Text tag='p' size='s' view='secondary' className={ d({'indent-b': '2xs'}) }>
            Физические параметры
          </Text>
          <Text tag='p' size='m' view='primary' lineHeight='s' className={ d({'indent-b': 'xl'}) }>
            Продолжительность аварийных простоев оборудования (по причине некачественных ТМЦ) за год
          </Text>
        </div>
      </div>
    </section>
  )
};

export default Driver;