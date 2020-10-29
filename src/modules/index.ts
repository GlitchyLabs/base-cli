import { resolve } from 'path';
import { program } from 'commander';

program
    .command('dir <command>','Modifies files/folders in filesystem.', { executableFile: resolve(`${__dirname}/directories/index.js`) })
    .command('echo [string]','Echo anything after the echo command', { executableFile: resolve(`${__dirname}/echo/index.js`) })
    .command('log [level]','Just some example logs.', { executableFile: resolve(`${__dirname}/logTest/index.js`) })
