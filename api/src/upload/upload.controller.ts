import {
  Body,
  Controller,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import ExemploDto from './dto/ExemploDto';

@Controller('upload')
export class UploadController {
  @Post('arquivo')
  @UseInterceptors(FileInterceptor('arquivo'))
  uploadDeArquivo(@UploadedFile() arquivo: Express.Multer.File) {
    console.log(arquivo);
    return {
      estado: 'ok',
      dados: {
        nome_do_campo: arquivo.fieldname,
        arquivo: {
          nome_original: arquivo.originalname,
          codificacao: arquivo.encoding,
          mimetype: arquivo.mimetype,
          tamanho: arquivo.size,
        },
      },
    };
  }

  @Post('arquivos')
  @UseInterceptors(AnyFilesInterceptor())
  uploadFiles(@UploadedFiles() arquivos: Express.Multer.File[]) {
    console.log(arquivos);
    return {
      estado: 'ok',
      dados: {
        total: arquivos.length,
      },
    };
  }

  @Post('imagem')
  @UseInterceptors(FileInterceptor('arquivo'))
  uploadFileAndPassValidation(
    @Body() body: ExemploDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'png',
        })
        .build(),
    )
    arquivo?: Express.Multer.File,
  ) {
    console.log(arquivo);
    return {
      estado: 'ok',
      dados: {
        body,
        dados: {
          nome_do_campo: arquivo.fieldname,
          arquivo: {
            nome_original: arquivo.originalname,
            codificacao: arquivo.encoding,
            mimetype: arquivo.mimetype,
            tamanho: arquivo.size,
          },
        },
      },
    };
  }
}
