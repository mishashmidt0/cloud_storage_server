import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from 'src/files/entities/file.entity';
import { FilesController } from 'src/files/files.controller';
import { FilesService } from 'src/files/files.service';

@Module({
  controllers: [FilesController],
  providers: [FilesService],
  imports: [TypeOrmModule.forFeature([FileEntity])],
})
export class FilesModule {}
