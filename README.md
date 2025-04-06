# GIM

### Instalação das dependências

```bash
$ npm install
```

### Compilando o projeto e realizando deploy

```bash
$ npm run build
$ docker build -t luissssmartins/gim-app:latest .
$ docker run -d --name gim-app luissssmartins/gim-app:latest
```

