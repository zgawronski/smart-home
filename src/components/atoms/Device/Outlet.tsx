import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { BoxDiv } from './Device.style';

export const Outlet: FC = () => {
  const [smartOutlet, setSmartOutlet] = useState<[]>([]);

  useEffect(() => {
    axios
      .get('/api/v1/devices/outlet')
      .then(({ data }) => setSmartOutlet(data.SmartOutlet))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BoxDiv key="outlet" id="drag-2" className="draggable">
      {smartOutlet.map((outlet: any) => (
        <div key="dd">
          <p key={outlet.name as string}>Urządzenie: {outlet.name as string}</p>
          <p key={outlet.id as string}>ID: {outlet.id as string}</p>
          <p key={outlet.type as string}>Typ: {outlet.type as string}</p>
          <p key={outlet.connectionState[1] as string}>Stan podłączenia: {outlet.connectionState[1] as string}</p>
        </div>
      ))}
    </BoxDiv>
  );
};
