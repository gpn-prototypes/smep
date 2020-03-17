import React, { createContext, useState } from 'react';

export const DriverListContext = createContext();

const DriverListProvider = (props) => {
  const [ drivers, setDrivers ] = useState([
    { name: 'Проведение закупок по оптимальным ценам', status: 'success' },
    { name: 'Повышение надежности поставщиков', status: 'success' },
    { name: 'Повышение оборачиваемости запасов', status: 'success' },
    { name: 'Повышение эффективности в планировании потребности запасов', status: 'warning' },
    { name: 'Повышение надёжности услуг хранения и сохранности ТМЦ', status: 'warning' }
  ]);

  const addDriver = (driver) => {
    const { name, status } = driver;
    setDrivers([ ...drivers, { name, status } ]);
  }

  const removeDriver = (name) => {
    setDrivers( drivers.filter(driver => driver.name !== name) );
  }

  return (
    <DriverListContext.Provider value={{ drivers, addDriver, removeDriver }}>
      { props.children }
    </DriverListContext.Provider>
  )
};

export default DriverListProvider;