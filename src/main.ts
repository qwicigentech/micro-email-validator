import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { ReflectionService } from '@grpc/reflection';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { EMAIL_VALIDATOR_PACKAGE_NAME } from '../ts-proto/email_validator';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: EMAIL_VALIDATOR_PACKAGE_NAME,
        protoPath: join(__dirname, '../email_validator.proto'),
        url: '0.0.0.0:8080',
        onLoadPackageDefinition: (pkg, server) => { // TO-DO: enable only for dev env
          new ReflectionService(pkg).addToServer(server);
        },
      },
    },
  );

  await app.listen();
  console.log('App started');
}
bootstrap();
