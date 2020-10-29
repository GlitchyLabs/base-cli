import { resolve } from 'path';
import { mkdirSync, rmdirSync, renameSync } from 'fs';

export function create(path) {
    console.log(arguments);
    mkdirSync(resolve(path), { recursive: true });
}
export function remove(path) {
    rmdirSync(resolve(path), { recursive: true });
}
export function rename(oldPath, newPath) {
    renameSync(resolve(oldPath), resolve(newPath));
}