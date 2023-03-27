import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AdditionDTO } from './calculator.dto';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Get('add')
  add(@Query() { a, b }: AdditionDTO): number {
    return this.calculatorService.add(a, b);
  }

  @Get('substract')
  @UsePipes(ValidationPipe)
  substract(@Query() { a, b }: AdditionDTO): number {
    return this.calculatorService.substract(a, b);
  }

  @Get('multiply')
  @UsePipes(ValidationPipe)
  multiply(@Query() { a, b }: AdditionDTO): number {
    return this.calculatorService.multiply(a, b);
  }

  @Get('divide')
  @UsePipes(ValidationPipe)
  divide(@Query() { a, b }: AdditionDTO): number {
    return this.calculatorService.divide(a, b);
  }
}
