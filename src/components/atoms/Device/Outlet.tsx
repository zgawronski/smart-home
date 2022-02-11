import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { BoxDiv, StatusP } from './Device.style';

export const Outlet: FC = () => {
  const [smartOutlet, setSmartOutlet] = useState<[]>([]);
  const [xl, setXl] = useState<boolean>(false);

  const changeSize = () => {
    !xl ? setXl(true) : setXl(false);
  };

  useEffect(() => {
    axios
      .get('/api/v1/devices/outlet')
      .then(({ data }) => setSmartOutlet(data.SmartOutlet))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BoxDiv
      onClick={() => {
        changeSize();
      }}
      bigger={xl}
      smaller={!xl}
      key="outlet"
      id="drag-2"
      className="draggable"
    >
      {smartOutlet.map((outlet: any) => {
        const connectionStatus = outlet.connectionState[2] as string;
        return (
          <div key="dd">
            <p key={outlet.name as string}>{outlet.name as string}</p>
            <p key={outlet.id as string}>ID: {outlet.id as string}</p>
            <p key={outlet.type as string}>Typ: {outlet.type as string}</p>
            <StatusP colorX={connectionStatus} key={connectionStatus}>
              Stan podłączenia: {connectionStatus}
            </StatusP>
          </div>
        );
      })}
    </BoxDiv>
  );
};
