import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';
import cors from '@fastify/cors';

const prisma = new PrismaClient({
  log: ['query'], // log of all queries
});

async function bootstrap() {
  const fastify = Fastify({
    logger: true, // return logs 
  });

  await fastify.register(cors, {
    origin: true, // any application can access the server
  })

  // http://localhost:3333/

  fastify.get('/pools/count', async () => {
    const count = await prisma.pool.count();

    return {
      count
    }
  });

  await fastify.listen({ port: 3333, host: '0.0.0.0' }); // host is for the mobile environment
}

bootstrap()