# API para upload e download de imagens

## Descrição

Projeto js criado com o [Nest](https://github.com/nestjs/nest) usando como linguagem o [TypeScript](https://www.typescriptlang.org/).

## Installation

```bash
# Instalação
$ npm install
added 673 packages, and audited 674 packages in 1m

97 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

# Execução
$ npm run start:dev

[16:21:45] Starting compilation in watch mode...

[16:21:47] Found 0 errors. Watching for file changes.

[Nest] 158438  - 17/10/2023, 16:21:48     LOG [NestFactory] Starting Nest application...
[Nest] 158438  - 17/10/2023, 16:21:48     LOG [InstanceLoader] AppModule dependencies initialized +10ms
[Nest] 158438  - 17/10/2023, 16:21:48     LOG [RoutesResolver] AppController {/}: +16ms
[Nest] 158438  - 17/10/2023, 16:21:48     LOG [RouterExplorer] Mapped {/, GET} route +3ms
[Nest] 158438  - 17/10/2023, 16:21:48     LOG [NestApplication] Nest application successfully started +2ms

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
< Date: Tue, 17 Oct 2023 19:32:05 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
* Connection #0 to host localhost left intact
{"estado":"ok","dados":"API Online"}

$
```

