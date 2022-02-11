import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { BoxDiv, StatusP } from './Device.style';

export const Bulb: FC = () => {
  const [smartBulb, setSmartBulb] = useState<[]>([]);
  const [xl, setXl] = useState<boolean>(false);
  const changeSize = () => {
    !xl ? setXl(true) : setXl(false);
  };

  useEffect(() => {
    axios
      .get('/api/v1/devices/bulb')
      .then(({ data }) => setSmartBulb(data.SmartBulb))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BoxDiv
      onClick={() => {
        changeSize();
      }}
      bigger={xl}
      smaller={!xl}
      key="bulb"
      id="drag-1"
      className="draggable"
    >
      {smartBulb.map((bulb: any) => {
        const connectionStatus = bulb.connectionState[0] as string;
        return (
          <div key="dd">
            <p key={bulb.name as string}>{bulb.name as string}</p>
            <p key={bulb.id as string}>ID: {bulb.id as string}</p>
            <p key={bulb.type as string}>Typ: {bulb.type as string}</p>
            <StatusP colorX={connectionStatus} key={connectionStatus}>
              Stan podłączenia: {connectionStatus}
            </StatusP>
          </div>
        );
      })}
    </BoxDiv>
  );
};
