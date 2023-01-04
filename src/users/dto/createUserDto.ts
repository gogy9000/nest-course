import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'example@gmail.com', description: 'email' })
  readonly email: string;
  @ApiProperty({ example: 'qwerty', description: 'password' })
  readonly password: string;
}
