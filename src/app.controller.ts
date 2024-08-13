import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {
  EMAIL_VALIDATOR_SERVICE_NAME,
  EmailValidatorController,
  Payload,
  ValidationResponse,
} from '../ts-proto/email_validator';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
// @EmailValidatorControllerMethods()
export class AppController implements EmailValidatorController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod(EMAIL_VALIDATOR_SERVICE_NAME, 'validate')
  validate(payload: Payload): ValidationResponse {
    console.log(payload);
    return {
      queueKey: '',
    };
  }
}
