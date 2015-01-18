describe('HelloWorld', function()
{
  it('should exist.', function()
  {
    // given
    expect(function() {
      var helloWorld = new HelloWorld();
    }).not.toThrow();
  });

  it('should greet() correcly.', function()
  {
    // given
    var helloWorld = new HelloWorld();

    // then
    expect(helloWorld.greet()).toEqual('Hello world');
  });
});
