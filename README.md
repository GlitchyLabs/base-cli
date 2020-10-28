# CLI-Base

## About

This is a base for building CLI applications.

## Build and Deploy

```sh
npm run build
```

## Local Development

For local development, just `npm install` the repository.  Once this is done, you can run `npm run build` to get changes to a locally installed CLI.

```sh
npm install -g .
```

### Logging

By Default, the logging utility (powered by winston) will only show error, warn, and info level logs.  If you want to see Debug level and lower, you will need to run the cli with the env variable DEBUG set to true

```sh
DEBUG=true cli echo test
```

Additionally, while in debug mode, you can set the log level with the LOG_LEVEL env variable.

```sh
DEBUG=true LOG_LEVEL=silly cli echo test
```