import { IsString, IsNotEmpty, IsUUID, IsNumber, IsDate, MaxLength } from 'class-validator';

export class CreatePayableDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsDate()
  @IsNotEmpty()
  emissionDate: Date;

  @IsString()
  @IsNotEmpty()
  @MaxLength(140)
  assignor: string;
}
