import Fastify from 'fastify';
import axios from 'axios';
import { CONFIG } from './config';

const fastify = Fastify();
let bidPrice: number;
let askPrice: number;
let midPrice: number;

const fetchBitcoinPrice = async () => {
  try {
    const response = await axios.get(CONFIG.BINANCE_API_URL);
    const { bidPrice: bid, askPrice: ask } = response.data;

    bidPrice = parseFloat(bid) * (1 - CONFIG.SERVICE_COMMISSION);
    askPrice = parseFloat(ask) * (1 + CONFIG.SERVICE_COMMISSION);
    midPrice = (bidPrice + askPrice) / 2;

    console.log(`Bid: ${bidPrice}, Ask: ${askPrice}, Mid: ${midPrice}`);
  } catch (error) {
    console.error('Error fetching Bitcoin price:', error);
  }
};

setInterval(fetchBitcoinPrice, Number(CONFIG.UPDATE_FREQUENCY));

fetchBitcoinPrice();

fastify.get('/bitcoin-price', async (request, reply) => {
  return {
    bidPrice,
    askPrice,
    midPrice
  };
});

const startServer = async () => {
  try {
    await fastify.listen({ port: Number(CONFIG.PORT),host: "0.0.0.0" });
    console.log(`Server running on http://localhost:${CONFIG.PORT}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
