import { greet } from './greet';

describe ('addition', ()=> { // greet suit
   
   
    it('should include the <name> in the message', () => {
     expect(greet('adsoft')).toContain('adsoft');
    })

    it('should include the "Hi" in the message', () => {
     expect(greet('adsoft')).toContain('Hi');
    })

    it('should include the "good day" in the message', () => {
     expect(greet('adsoft')).toContain('good day');
    })

    it('should include  "." in the message', () => {
     expect(greet('adsoft')).toContain('.');
    })

})
