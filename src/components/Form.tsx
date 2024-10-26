// import { useState } from 'react';
import { useCounterContext } from '../context/CounterContext';
import Card from './Card';
import Price from './Price';

const Form = () => {
  

  const { handleCheckboxChange, total, content, checkedStates } = useCounterContext();


  return (
    <>
      {content.map((item, index:number) => (
        <Card
          key={index}
          title={item.title}
          text={item.text}
          preu={item.preu}
          checked={checkedStates[index]}
          onChange={() => handleCheckboxChange(index)}
        />
      ))}
      <Price price={total} />
    </>
  );
};

export default Form;
