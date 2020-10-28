import { program } from 'commander';
import logger from '../../utils/logger';

program
.command('log [level]')
.description('echo anything after the echo command')
.action(log);

export default function log(level?) {
    if (level) {
        logger[level](`${level} test`);
    } else {
        logger.info(`Winston supports JSON`, { seriously: true });
        logger.info('It also supports %s', 'variable replacement');
        for (const level in logger.levels) {
            logger[level](`${level} test`);
        }
    }
}