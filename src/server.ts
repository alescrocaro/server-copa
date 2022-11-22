import Fastify from 'fastify';

async function bootstrap() {
  const fastify = Fastify({
    logger: true, // return logs 
  });

  // http://localhost:3333/

  fastify.get('/pools/count', () => {
    return {
      count: 7208
    }
  });

  await fastify.listen({ port: 3333 });
}

bootstrap()