import { program } from 'commander';
import logger from '../../utils/logger';

program
.command('echo [text...]')
.description('echo anything after the echo command')
.action(echo);

export default function echo(text) {
    logger.info(text);
}