import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query'], // log of all queries
});

async function bootstrap() {
  const fastify = Fastify({
    logger: true, // return logs 
  });

  // http://localhost:3333/

  fastify.get('/pools/count', async () => {
    const count = await prisma.pool.count();

    return {
      count
    }
  });

  await fastify.listen({ port: 3333 });
}

bootstrap()