import { compute } from "./compute"

describe('compute', () => {
    it('should return 0 if input is negative', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;
        
        // Act
        result = compute(-1000);

        // Assert
        expect(result).toBe(0);
    })
    it('should increment if input is positive', () => {
        // Arrange
        let result = 0;
        // Act
        result = compute(1000);
        // Assert
        expect(result).toBe(1001);
    })

})