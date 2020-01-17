describe('Test my fizzBuzz function', function(){
    describe('It should create a new Instance of fizBuzz', function(){
        beforeEach(function(){
            
        })
        let result = fizzBuzz(15);
        it('fizBuzz should exist', function(){
            expect(fizzBuzz).toBeDefined();
            expect(result).toEqual("FizzBuzz");
        })
        
    })
})