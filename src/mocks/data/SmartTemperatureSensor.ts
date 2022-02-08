export const SmartTemperatureSensor = [
  {
    type: 'temperatureSensor',
    id: '100',
    name: 'Czujnik temperatury',
    connectionState: ['connected', 'disconnected', 'poorConnection'], // 'connected', 'disconnected' or 'poorConnection'
    temperature: Number + '&#x2103', // in Celsius
  },
];
