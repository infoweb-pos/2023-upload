# API para upload e download de imagens

## Descrição

Projeto js criado com o [Nest](https://github.com/nestjs/nest) usando como linguagem o [TypeScript](https://www.typescriptlang.org/).

## Execução e teste

```bash
# Instalação
$ npm install
added 673 packages, and audited 674 packages in 1m

97 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

# Execução
$ npm run start:dev

```

```bash
# Teste de URL
$ curl --verbose http://localhost:3000/
*   Trying 127.0.0.1:3000...
* Connected to localhost (127.0.0.1) port 3000 (#0)
> GET / HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.0.1
> Accept: */*
> 
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 36
< ETag: W/"24-CzAKVSqdy0vPki2Fs0ol6AfhWs0"
< Date: Thu, 19 Oct 2023 14:23:11 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
* Connection #0 to host localhost left intact
{"estado":"ok","dados":"API Online"}

$ 

```

## Log de construção

### branch api-01-criar-projeto - criando o projeto
```bash
# cria projeto javascript para aplicação de api com nestjs e typescript
$ npx @nestjs/cli new api
⚡  We will scaffold your app in a few seconds..

? Which package manager would you ❤️  to use? npm
CREATE api/.eslintrc.js (663 bytes)
CREATE api/.prettierrc (51 bytes)
CREATE api/README.md (3340 bytes)
CREATE api/nest-cli.json (171 bytes)
CREATE api/package.json (1948 bytes)
CREATE api/tsconfig.build.json (97 bytes)
CREATE api/tsconfig.json (546 bytes)
CREATE api/src/app.controller.spec.ts (617 bytes)
CREATE api/src/app.controller.ts (274 bytes)
CREATE api/src/app.module.ts (249 bytes)
CREATE api/src/app.service.ts (142 bytes)
CREATE api/src/main.ts (208 bytes)
CREATE api/test/app.e2e-spec.ts (630 bytes)
CREATE api/test/jest-e2e.json (183 bytes)

✔ Installation in progress... ☕

🚀  Successfully created project api
👉  Get started with the following commands:

    $ cd api

    $ npm run start:dev
                                         
                          Thanks for installing Nest 🙏
                 Please consider donating to our open collective
                        to help us maintain this package.
                                         
                                         
               🍷  Donate: https://opencollective.com/nest

# acessa pasta do projeto
$ cd api

# executa a api no modo de desenvolvimento
[api] $ npx run start:dev
[09:30:08] Starting compilation in watch mode...

[09:30:10] Found 0 errors. Watching for file changes.

[Nest] 218957  - 19/10/2023, 09:30:11     LOG [NestFactory] Starting Nest application...
[Nest] 218957  - 19/10/2023, 09:30:11     LOG [InstanceLoader] AppModule dependencies initialized +10ms
[Nest] 218957  - 19/10/2023, 09:30:11     LOG [RoutesResolver] AppController {/}: +9ms
[Nest] 218957  - 19/10/2023, 09:30:11     LOG [RouterExplorer] Mapped {/, GET} route +2ms
[Nest] 218957  - 19/10/2023, 09:30:11     LOG [NestApplication] Nest application successfully started +2ms

```


### branch api-02-upload - adicionando rotas de upload
```bash
# instala pacote que irá tratar os pacotes HTTP com arquivos
[api] $ npm i -D @types/multer

added 1 package, and audited 675 packages in 3s

97 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

# cria um controlador para configurar rotas de upload
[api] $ npx @nestjs/cli g controller upload
CREATE src/upload/upload.controller.spec.ts (492 bytes)
CREATE src/upload/upload.controller.ts (101 bytes)
UPDATE src/app.module.ts (330 bytes)

# inicia API em modo de desenvolvimento
[api] $ npx run start:dev
[10:10:47] File change detected. Starting incremental compilation...

[10:10:48] Found 0 errors. Watching for file changes.

[Nest] 223048  - 19/10/2023, 10:10:48     LOG [NestFactory] Starting Nest application...
[Nest] 223048  - 19/10/2023, 10:10:48     LOG [InstanceLoader] AppModule dependencies initialized +17ms
[Nest] 223048  - 19/10/2023, 10:10:48     LOG [RoutesResolver] AppController {/}: +12ms
[Nest] 223048  - 19/10/2023, 10:10:48     LOG [RouterExplorer] Mapped {/, GET} route +3ms
[Nest] 223048  - 19/10/2023, 10:10:48     LOG [RoutesResolver] UploadController {/upload}: +0ms
[Nest] 223048  - 19/10/2023, 10:10:48     LOG [RouterExplorer] Mapped {/upload/arquivo, POST} route +0ms
[Nest] 223048  - 19/10/2023, 10:10:48     LOG [RouterExplorer] Mapped {/upload/arquivos, POST} route +1ms
[Nest] 223048  - 19/10/2023, 10:10:48     LOG [RouterExplorer] Mapped {/upload/imagem, POST} route +0ms
[Nest] 223048  - 19/10/2023, 10:10:48     LOG [NestApplication] Nest application successfully started +2ms


```

**testando as novas rotas**
```bash
# usa o aplicativo curl para testar rota de upload de arquivo
$ curl --verbose -F "arquivo=@./nest-cli.json" http://localhost:3000/upload/arquivo
*   Trying 127.0.0.1:3000...
* Connected to localhost (127.0.0.1) port 3000 (#0)
> POST /upload/arquivo HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.0.1
> Accept: */*
> Content-Length: 379
> Content-Type: multipart/form-data; boundary=------------------------2368b23b168113c8
> 
* We are completely uploaded and fine
< HTTP/1.1 201 Created
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 168
< ETag: W/"a8-Vx4PkIsk+//YiyE5ATTrMepen3k"
< Date: Thu, 19 Oct 2023 13:12:18 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
* Connection to host localhost left intact
{"estado":"ok","dados":{"nome_do_campo":"arquivo","arquivo":{"nome_original":"nest-cli.json","codificacao":"7bit","mimetype":"application/octet-stream","tamanho":171}}}

# usa o aplicativo curl para testar rota de upload de múltiplos arquivos
$ curl --verbose -F "arquivo=@./nest-cli.json" -F "arquivo=@./tsconfig.json" http://localhost:3000/upload/arquivos
*   Trying 127.0.0.1:3000...
* Connected to localhost (127.0.0.1) port 3000 (#0)
> POST /upload/arquivos HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.0.1
> Accept: */*
> Content-Length: 1087
> Content-Type: multipart/form-data; boundary=------------------------e3a057817da54df7
> 
* We are completely uploaded and fine
< HTTP/1.1 201 Created
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 35
< ETag: W/"23-2RVcTHMTpVKPJsi/Jm9Vs/ql3Wc"
< Date: Thu, 19 Oct 2023 13:13:20 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
* Connection #0 to host localhost left intact
{"estado":"ok","dados":{"total":2}}

# usa o aplicativo curl para testar rota de upload de arquivo de imagem png
$ curl --verbose -F "arquivo=@./nest-cli.json" http://localhost:3000/upload/imagem
*   Trying 127.0.0.1:3000...
* Connected to localhost (127.0.0.1) port 3000 (#0)
> POST /upload/imagem HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.0.1
> Accept: */*
> Content-Length: 379
> Content-Type: multipart/form-data; boundary=------------------------3bcaa5c88448b92b
> 
* We are completely uploaded and fine
< HTTP/1.1 400 Bad Request
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 93
< ETag: W/"5d-GoyTG/sgPL8BJi41ThE4P3xA0OM"
< Date: Thu, 19 Oct 2023 13:14:31 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
* Connection #0 to host localhost left intact
{"message":"Validation failed (expected type is png)","error":"Bad Request","statusCode":400}

# usa o aplicativo curl para testar rota de upload de arquivo de imagem png
$ curl --verbose -F "json={'nome': 'exemplo', 'tipo': 'png'}" -F "arquivo=@./diatinf.png" http://localhost:3000/upload/imagem
*   Trying 127.0.0.1:3000...
* Connected to localhost (127.0.0.1) port 3000 (#0)
> POST /upload/imagem HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.0.1
> Accept: */*
> Content-Length: 132518
> Content-Type: multipart/form-data; boundary=------------------------cfb32b3ea1c55b37
> 
* We are completely uploaded and fine
< HTTP/1.1 201 Created
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 217
< ETag: W/"d9-rTTw4h2MLo66C57Z8I9GSD5Bc8I"
< Date: Thu, 19 Oct 2023 13:30:16 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
* Connection #0 to host localhost left intact
{"estado":"ok","dados":{"body":{"json":"{'nome': 'exemplo', 'tipo': 'png'}"},"dados":{"nome_do_campo":"arquivo","arquivo":{"nome_original":"diatinf.png","codificacao":"7bit","mimetype":"image/png","tamanho":132200}}}}

$
```

**Links**
- upload em https://docs.nestjs.com/techniques/file-upload
- download em https://notiz.dev/blog/type-safe-file-downloads

### branch api-03-perfil - adicionando rotas de perfil

```bash
# cria módulo vazio
[api] $ npx @nestjs/cli g module perfil --no-spec
CREATE src/perfil/perfil.module.ts (83 bytes)
UPDATE src/app.module.ts (397 bytes)

# cria serviço vazio
[api] $ npx @nestjs/cli g service perfil --no-spec
CREATE src/perfil/perfil.service.ts (90 bytes)
UPDATE src/perfil/perfil.module.ts (163 bytes)

# cria controlador vazio
[api] $ npx @nestjs/cli g controller perfil --no-spec
CREATE src/perfil/perfil.controller.ts (101 bytes)
UPDATE src/perfil/perfil.module.ts (254 bytes)

# executa API em modo desenvolvimento
[api] $ npm run start:dev
[14:32:10] File change detected. Starting incremental compilation...

[14:32:10] Found 0 errors. Watching for file changes.

[Nest] 236326  - 19/10/2023, 14:32:11     LOG [NestFactory] Starting Nest application...
[Nest] 236326  - 19/10/2023, 14:32:11     LOG [InstanceLoader] PerfilModule dependencies initialized +15ms
[Nest] 236326  - 19/10/2023, 14:32:11     LOG [InstanceLoader] AppModule dependencies initialized +0ms
[Nest] 236326  - 19/10/2023, 14:32:11     LOG [RoutesResolver] AppController {/}: +8ms
[Nest] 236326  - 19/10/2023, 14:32:11     LOG [RouterExplorer] Mapped {/, GET} route +3ms
[Nest] 236326  - 19/10/2023, 14:32:11     LOG [RoutesResolver] UploadController {/upload}: +0ms
[Nest] 236326  - 19/10/2023, 14:32:11     LOG [RouterExplorer] Mapped {/upload/arquivo, POST} route +1ms
[Nest] 236326  - 19/10/2023, 14:32:11     LOG [RouterExplorer] Mapped {/upload/arquivos, POST} route +1ms
[Nest] 236326  - 19/10/2023, 14:32:11     LOG [RouterExplorer] Mapped {/upload/imagem, POST} route +1ms
[Nest] 236326  - 19/10/2023, 14:32:11     LOG [RoutesResolver] PerfilController {/:apelido/perfil}: +0ms
[Nest] 236326  - 19/10/2023, 14:32:11     LOG [RouterExplorer] Mapped {/:apelido/perfil, GET} route +1ms
[Nest] 236326  - 19/10/2023, 14:32:11     LOG [NestApplication] Nest application successfully started +1ms

```

**testando a rota /:aplido/pefil e /:apelido/perfil/foto**
```bash
# teste da rota GET /:apelido/perfil
$ curl --verbose http://localhost:3000/alunos/perfil
*   Trying 127.0.0.1:3000...
* Connected to localhost (127.0.0.1) port 3000 (#0)
> GET /alunos/perfil HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.0.1
> Accept: */*
> 
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 165
< ETag: W/"a5-8o9mdGrYXSjqXaJbfv98Y+FWK60"
< Date: Thu, 19 Oct 2023 17:36:03 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
* Connection #0 to host localhost left intact
{"estado":"ok","id":1,"nome_social":"alunos","descricao":"conta única dos alunos de infoweb","foto":{"id":1,"url":"https://randomuser.me/api/portraits/lego/1.jpg"}}

# Modificando o conteúdo do perfil
$ 

# Modificando a foto do conteúdo do perfil com URL externa
$ curl --verbose -H 'Content-Type: application/json' -d '{"url":"https://randomuser.me/api/portraits/lego/2.jpg"}' http://localhost:3000/alunos/perfil/foto/url
*   Trying 127.0.0.1:3000...
* Connected to localhost (127.0.0.1) port 3000 (#0)
> POST /alunos/perfil/foto/url HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.0.1
> Accept: */*
> Content-Type: application/json
> Content-Length: 56
> 
< HTTP/1.1 201 Created
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 15
< ETag: W/"f-zEyU8uspYexNXQo+eM6rxYB/Bc0"
< Date: Mon, 23 Oct 2023 12:51:52 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
* Connection #0 to host localhost left intact
{"estado":"ok"}

# Modificando a foto do conteúdo do perfil com arquivo
$ 

```


### branch api-04-persistencia - adicionando persistência as rotas de perfil
```bash

$

```