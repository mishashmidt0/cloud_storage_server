import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.fullName, userId: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(dto: CreateUserDto) {
    try {
      const { id } = await this.usersService.create(dto);
      return {
        access_token: await this.jwtService.signAsync({ id }),
      };
    } catch (e) {
      console.log(e);
      throw new ForbiddenException('Ошибка при регистрации');
    }
  }
}
