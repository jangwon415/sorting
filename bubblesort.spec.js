describe('Bubble Sort', function(){




  beforeAll(function () {
    spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });
  it('number of swaps', function () {
    window.bubbleSort([1, 5, 4, 3, 2]);
    expect(window.swap.calls.count()).toEqual(4);
  });





  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles one element', function(){
    expect( bubbleSort([1])).toEqual([1]);
  });

  it('handles one element', function(){
    expect( bubbleSort([1, 5, 4, 3, 2])).toEqual([1, 2, 3, 4, 5]);
  });



});

