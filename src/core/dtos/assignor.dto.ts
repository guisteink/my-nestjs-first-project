import { IsString, IsNotEmpty, IsUUID, MaxLength, IsEmail } from 'class-validator';

export class CreateAssignorDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  document: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(140)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  phone: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(140)
  name: string;
}
