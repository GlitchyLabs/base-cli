import { resolve } from 'path';
import { program } from 'commander';

program
    .command('log [level]','Just some example logs.', { executableFile: resolve(`${__dirname}/logTest/index.js`) })
    .command('dir <command>','Modifies files/folders in filesystem.', { executableFile: resolve(`${__dirname}/directories/index.js`) })
