import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      success: true,
      message: "Hi from AWS Amplify!",
      sign: "RBH"
    };
  }
}
