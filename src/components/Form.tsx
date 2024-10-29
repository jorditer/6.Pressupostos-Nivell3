// import { useState } from 'react';
import { useCounterContext } from '../context/CounterContext';
import { useState } from 'react';
import Card from './Card';
import Price from './Price';
import Switch from './Switch';

const Form = () => {
  const { handleCheckboxChange, total, content, checkedStates } = useCounterContext();
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const calculatePrice = (price: number) => {
    return isSwitchOn ? price * 0.8 : price;
  };


  return (
    <>
      <Switch onChange={handleSwitchChange}/>
      {content.map((item, index:number) => (
        <Card
          key={index}
          title={item.title}
          text={item.text}
          preu={calculatePrice(item.preu)}
          checked={checkedStates[index]}
          onChange={() => handleCheckboxChange(index)}
        />
      ))}
      <Price price={total} />
    </>
  );
};

export default Form;
