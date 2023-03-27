import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let calculatorService: CalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatorService],
    }).compile();

    calculatorService = module.get<CalculatorService>(CalculatorService);
  });

  it('should be defined', () => {
    expect(calculatorService).toBeDefined();
  });

  describe('add', () => {
    it('should return the sum of two numbers', () => {
      const a = 5;
      const b = 10;
      const result = calculatorService.add(a, b);
      expect(result).toBe(15);
    });
  });

  describe('substract', () => {
    it('should return the difference of two numbers', () => {
      const a = 20;
      const b = 10;
      const result = calculatorService.substract(a, b);
      expect(result).toBe(10);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      const a = 5;
      const b = 10;
      const result = calculatorService.multiply(a, b);
      expect(result).toBe(50);
    });
  });

  describe('divide', () => {
    it('should return the quotient of two numbers', () => {
      const a = 20;
      const b = 10;
      const result = calculatorService.divide(a, b);
      expect(result).toBe(2);
    });
  });
});
