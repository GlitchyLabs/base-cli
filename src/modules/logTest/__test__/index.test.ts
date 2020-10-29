import logger from '../../../utils/logger';
import log from '../index';

jest.mock('../../../utils/logger');

describe('Log Module', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    test('should log each log level if we do not pass anything', () => {
        jest.mock('../../../utils/logger');
        log(undefined);
        for (const level in logger.levels) {
            expect(logger[level]).toHaveBeenCalled();
        }
    });
    test('should log only the level we pass in', () => {
        jest.mock('../../../utils/logger');        
        log(undefined, 'error');
        expect(logger.error).toHaveBeenCalled();
        for (const level in logger.levels) {
            if (level !== 'error') {
                expect(logger[level]).not.toHaveBeenCalled();
            }
        }
    });
});