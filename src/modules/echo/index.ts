import { program } from 'commander';
import logger from '../../utils/logger';

program.action(echo)
.passCommandToAction(false);
program.parse(process.argv);

// The first argument is normally the command, we setup not to send it, and then place an unused variable herebundleRenderer.renderToStream
// This is due to the way commander handles this without a .command() call.  Will try to fix this later.
export default function echo(_, text) {
    logger.info(text);
}