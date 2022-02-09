export const SmartBulb = [
  {
    type: 'bulb',
    id: '001',
    name: 'Żarówka',
    connectionState: ['connected', 'disconnected', 'poorConnection'], // 'connected', 'disconnected' or 'poorConnection'
    isTurnedOn: Boolean, // boolean
    brightness: Math.random() * 100, // <0, 100>
    color: String, // in the CSS formats
  },
];
