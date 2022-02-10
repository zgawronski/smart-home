import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { BoxDiv } from './Device.style';

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
      {smartTempSensor.map((temperatureSensor: any) => (
        <div key="dd">
          <p key={temperatureSensor.name as string}>Urządzenie: {temperatureSensor.name as string}</p>
          <p key={temperatureSensor.id as string}>ID: {temperatureSensor.id as string}</p>
          <p key={temperatureSensor.type as string}>Typ: {temperatureSensor.type as string}</p>
          <p key={temperatureSensor.connectionState[2] as string}>Stan podłączenia: {temperatureSensor.connectionState[2] as string}</p>
        </div>
      ))}
    </BoxDiv>
  );
};
