describe('HelloWorld', function()
{
  it('should exist.', function()
  {
    // given
    var helloWorld = new HelloWorld();
  });

  it('should greet() correcly.', function()
  {
    // given
    var helloWorld = new HelloWorld();

    // then
    expect(helloWorld.greet()).toEqual('Hello world');
  });
});
