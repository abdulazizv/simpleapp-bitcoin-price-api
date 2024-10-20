import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
  PORT: process.env.PORT || 3000,
  BINANCE_API_URL: process.env.BINANCE_API_URL || 'https://api.binance.com/api/v3/ticker/bookTicker?symbol=BTCUSDT',
  UPDATE_FREQUENCY: process.env.UPDATE_FREQUENCY || 10000,
  SERVICE_COMMISSION: parseFloat(process.env.SERVICE_COMMISSION || '0.0001') // 0.01%
};
