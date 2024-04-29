import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'John Doe',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  full_name: string;

  @ApiProperty({
    example: 'john@gmail.com',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'admin | teacher',
    required: true,
  })
  @IsOptional()
  @IsString()
  role: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
