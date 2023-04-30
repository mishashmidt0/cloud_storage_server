import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@gmail.com',
  })
  email: string;
  @ApiProperty({
    default: 'Mister Bin',
  })
  fullName: string;
  @ApiProperty({
    default: '123',
  })
  password: string;
}

export class LoginUser {
  @ApiProperty({
    default: 'test1@gmail.com',
  })
  email: string;
  @ApiProperty({
    default: '123',
  })
  password: string;
}
