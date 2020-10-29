import * as fs from 'fs';
import { create, remove, rename } from '../directory';

jest.mock('fs');

describe('Directory Module', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    test('should create a folder when create or mk is used', () => {
        create('test');
        expect(fs.mkdirSync).toHaveBeenCalled();
    });
    test('should remove a folder when remove or rm is used', () => {
        remove('test');
        expect(fs.rmdirSync).toHaveBeenCalled();
    });
    test('should move a folder when rename or mv is used', () => {
        create('test');
        rename('test', 'newtest');
        remove('newtest');
        expect(fs.mkdirSync).toHaveBeenCalled();
        expect(fs.renameSync).toHaveBeenCalled();
        expect(fs.rmdirSync).toHaveBeenCalled();
    });
});