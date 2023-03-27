import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculatorController } from './calculator/calculator.controller';
import { CalculatorModule } from './calculator/calculator.module';
import { CalculatorService } from './calculator/calculator.service';

@Module({
  imports: [CalculatorModule],
  controllers: [AppController, CalculatorController],
  providers: [
    AppService,
    CalculatorService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
