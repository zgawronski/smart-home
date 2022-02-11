import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { BoxDiv, BoxP } from './Device.style';

export const TemperatureSensor: FC = () => {
  const [smartTempSensor, setTempSensor] = useState<[]>([]);

  useEffect(() => {
    axios
      .get('/api/v1/devices/temperatureSensor')
      .then(({ data }) => setTempSensor(data.SmartTemperatureSensor))
      .catch((err) => console.log(err));
  }, []);
  return (
    <BoxDiv key="TemperatureSensor" id="drag-3" className="draggable">
      {smartTempSensor.map((temperatureSensor: any) => {
        const connectionStatus = temperatureSensor.connectionState[1] as string;
        return (
          <div key="dd">
            <p key={temperatureSensor.name as string}>Urządzenie: {temperatureSensor.name as string}</p>
            <p key={temperatureSensor.id as string}>ID: {temperatureSensor.id as string}</p>
            <p key={temperatureSensor.type as string}>Typ: {temperatureSensor.type as string}</p>
            <BoxP colorX={connectionStatus} key={connectionStatus}>
              Stan podłączenia: {connectionStatus}
            </BoxP>
          </div>
        );
      })}
    </BoxDiv>
  );
};
