import { program } from 'commander';
import logger from '../../utils/logger';

program
.command('dir ')
.description('echo anything after the echo command')
.action((text) => {
    console.log(text);
    logger.info(text);
});
