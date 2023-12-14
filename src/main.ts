import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 4000;
  const app = await NestFactory.create(AppModule, { cors: false });

  app.enableCors({ credentials: true, origin: true });

  try {
    await app.listen(PORT, () =>
      console.log(`Server started on port = ${PORT}`),
    );
  } catch (error) {
    console.log('Error starting the server:', error);
  }
}
start();
