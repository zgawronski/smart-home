import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { BoxDiv } from './Device.style';

export const Bulb: FC = () => {
  const [smartBulb, setSmartBulb] = useState<[]>([]);

  useEffect(() => {
    axios
      .get('/api/v1/devices')
      .then(({ data }) => setSmartBulb(data.SmartBulb))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BoxDiv>
      {smartBulb.map((bulb: any) => (
        <>
          <p>`{bulb.name as string}`</p>
          <p>`{bulb.id as string}`</p>
          <p>`{bulb.type as string}`</p>
          <p>`{bulb.connectionState[0] as string}`</p>
        </>
      ))}
    </BoxDiv>
  );
};
