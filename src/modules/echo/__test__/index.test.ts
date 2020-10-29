import logger from '../../../utils/logger';
import echo from '../index';

jest.mock('../../../utils/logger');

describe('Echo Module', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    test('should log what we send it to the console', () => {
        echo(undefined, 'test');
        expect(logger.info).toHaveBeenCalledWith('test');
    });
});