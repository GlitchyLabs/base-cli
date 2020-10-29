import logger from '../../../utils/logger';
import log from '../index';

jest.mock('../../../utils/logger');

describe('Log Module', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    test('should log each log level if we do not pass anything', () => {
        log(undefined);
        for (const level in logger.levels) {
            expect(logger[level]).toHaveBeenCalled();
        }
    });
    test('should log only the level we pass in', () => {   
        log(undefined, 'error');
        expect(logger.error).toHaveBeenCalled();
        for (const level in logger.levels) {
            if (level !== 'error') {
                expect(logger[level]).not.toHaveBeenCalled();
            }
        }
    });
});