import { Command } from 'commander';
import logger from '../../utils/logger';
const program = new Command();

program.action(log)
.passCommandToAction(false);
program.parse(process.argv);

// The first argument is normally the command, we setup not to send it, and then place an unused variable herebundleRenderer.renderToStream
// This is due to the way commander handles this without a .command() call.  Will try to fix this later.
export default function log(_, level?) {
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