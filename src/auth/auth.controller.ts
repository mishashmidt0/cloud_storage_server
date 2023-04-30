import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
  Get,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto, LoginUser } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiBody({ type: LoginUser })
  login(@Body() { password, email }: LoginUser) {
    return this.authService.login(email, password);
  }

  @Post('register')
  register(@Body() dto: CreateUserDto) {
    return this.authService.register(dto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
