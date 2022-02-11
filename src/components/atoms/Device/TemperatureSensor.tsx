import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { BoxDiv, StatusP } from './Device.style';

export const TemperatureSensor: FC = () => {
  const [smartTempSensor, setTempSensor] = useState<[]>([]);
  const [xl, setXl] = useState<boolean>(false);

  const changeSize = () => {
    !xl ? setXl(true) : setXl(false);
  };

  useEffect(() => {
    axios
      .get('/api/v1/devices/temperatureSensor')
      .then(({ data }) => setTempSensor(data.SmartTemperatureSensor))
      .catch((err) => console.log(err));
  }, []);
  return (
    <BoxDiv
      onDoubleClick={() => {
        changeSize();
      }}
      bigger={xl}
      smaller={!xl}
      key="TemperatureSensor"
      id="drag-3"
      className="draggable"
    >
      {smartTempSensor.map((temperatureSensor: any) => {
        const connectionStatus = temperatureSensor.connectionState[1] as string;
        return (
          <div key="dd">
            <StatusP statusColor={connectionStatus} key={temperatureSensor.name as string}>
              {temperatureSensor.name as string}
            </StatusP>
            <p key={temperatureSensor.id as string}>ID: {temperatureSensor.id as string}</p>
            <p key={temperatureSensor.type as string}>Typ: {temperatureSensor.type as string}</p>
            <StatusP statusColor={connectionStatus} key={connectionStatus}>
              Stan podłączenia: {connectionStatus}
            </StatusP>
          </div>
        );
      })}
    </BoxDiv>
  );
};
