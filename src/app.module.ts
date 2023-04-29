import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    UsersModule,
    FilesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'horton.db.elephantsql.com',
      port: 5432,
      username: 'wikmwpoq',
      password: 'uIYqiUWEROzr6Km-ee6Kd1OCjo7-AqPQ',
      database: 'wikmwpoq',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
