import { getCurrencies } from './getCurrencies';

describe('currencies', () => {

    it ('should return the supported currencies', () => {
        // Arrange
        let result;

        // Act
        result = getCurrencies();
        // Assert
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
        
    })
})
