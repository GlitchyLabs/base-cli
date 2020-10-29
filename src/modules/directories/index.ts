import { program } from 'commander';
import { create, remove, rename } from './directory';

program
.command('create <path>').alias('mk')
.description('Create a folder(s) for the provided path.')
.action(create);

program
.command('remove <path>').alias('rm')
.description('Remove the folder(s) for the provided path.')
.action(remove);

program
.command('rename <path> <newPath>').alias('mv')
.description('Renames the provided path to the new path.')
.action(rename)

program.parse(process.argv);