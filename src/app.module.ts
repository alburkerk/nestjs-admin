import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { DefaultAdminModule } from 'nestjs-admin';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, DefaultAdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
