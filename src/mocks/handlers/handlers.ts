import { rest } from 'msw';
import { SmartBulb } from '../data/SmartBulb';
import { SmartOutlet } from '../data/SmartOutlet';
import { SmartTemperatureSensor } from '../data/SmartTemperatureSensor';

interface SmartDevice {
  type: string; // 'bulb', 'outlet' or 'temperatureSensor';
  id: string;
  name: string;
  connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
}

export const handlers = [
  rest.get<SmartDevice>('/api/v1/devices', (req, res, ctx) => {
    if (req.params.id) {
      const matchingBulb = SmartBulb.filter((bulb) => bulb.id === req.params.id);
      return res(
        ctx.status(200),
        ctx.json({
          SmartBulb: matchingBulb,
        })
      );
    }
    return res(ctx.status(200), ctx.json({ SmartBulb: SmartBulb }));
  }),
  rest.get<SmartDevice>('/api/v1/devices', (req, res, ctx) => {
    if (req.params.id) {
      const matchingOutlet = SmartOutlet.filter((outlet) => outlet.id === req.params.id);
      return res(
        ctx.status(200),
        ctx.json({
          SmartOutlet: matchingOutlet,
        })
      );
    }
    return res(ctx.status(200), ctx.json({ SmartOutlet: SmartOutlet }));
  }),
  rest.get<SmartDevice>('/api/v1/devices', (req, res, ctx) => {
    if (req.params.id) {
      const matchingTemperatureSensor = SmartTemperatureSensor.filter((temperatureSensor) => temperatureSensor.id === req.params.id);
      return res(
        ctx.status(200),
        ctx.json({
          SmartTemperatureSensor: matchingTemperatureSensor,
        })
      );
    }
    return res(ctx.status(200), ctx.json({ SmartTemperatureSensor: SmartTemperatureSensor }));
  }),
];
