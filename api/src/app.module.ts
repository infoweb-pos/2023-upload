import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadController } from './upload/upload.controller';
import { PerfilModule } from './perfil/perfil.module';

@Module({
  imports: [PerfilModule],
  controllers: [AppController, UploadController],
  providers: [AppService],
})
export class AppModule {}
