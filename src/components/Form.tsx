import { useState } from 'react';
import { useCounterContext } from '../context/CounterContext';
import Card from './Card';
import Price from './Price';

const Form = () => {
  
  const content = [
    { title: "Seo", text: "Programació d'una web responsive completa", preu: 300 },
    { title: "Ads", text: "Programació d'una web responsive completa", preu: 400 },
    { title: "Web", text: "Programació d'una web responsive completa", preu: 500 }
  ];
  const { numPagines, numIdiomes } = useCounterContext();


  const [checkedStates, setCheckedStates] = useState([false, false, false]);

  const subtotal = content.reduce((sum, item, index) => sum + (checkedStates[index] ? item.preu : 0), 0);
  const total = subtotal + (checkedStates[2] ? (numPagines + numIdiomes) * 30 : 0);

  const handleCheckboxChange = (index: number) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  };

  return (
    <>
      {content.map((item, index) => (
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
