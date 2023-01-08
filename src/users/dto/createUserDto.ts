import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'example@gmail.com', description: 'email' })
  @IsString({ message: 'string only' })
  @IsEmail({}, { message: 'not valid email' })
  readonly email: string;
  @IsString({ message: 'string only' })
  @ApiProperty({ example: 'qwerty', description: 'password' })
  @Length(4, 16, { message: 'min 4 max 16 characters' })
  readonly password: string;
}
