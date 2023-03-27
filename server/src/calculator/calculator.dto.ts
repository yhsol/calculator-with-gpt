import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class AdditionDTO {
  @IsNumber()
  @Type(() => Number)
  a: number;

  @IsNumber()
  @Type(() => Number)
  b: number;
}
