import logger from '../../../utils/logger';
import echo from '../index';

jest.mock('../../../utils/logger');

describe('Echo Module', () => {
    test('should log what we send it to the console', () => {
        echo('test');
        expect(logger.info).toHaveBeenCalledWith('test');
    });
})