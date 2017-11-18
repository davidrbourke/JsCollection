describe("Dictionary", function() {
  var JsDictionary = require('../../index');
  var dictionary;

  beforeEach(function() {
    dictionary = new JsDictionary();
  });

  it("should add a new key value pair", function() {
    dictionary.Add("a", 123);
    var updatedDictionary = dictionary.GetDictionaryObject();
    expect(updatedDictionary["a"] === 123).toBe(true);
  });

  it("should not add duplicate keys", function() {
    dictionary.Add("a", 123);
    expect(function() { dictionary.Add("a", 456); }).toThrow(new Error('Key: a already exists in the dictionary'));
  });

  it("should get the item from the dictionary using the key", function() {
    dictionary.Add("a", 123);
    dictionary.Add("b", 456);
    dictionary.Add("c", 789);
    var value = dictionary.GetDictionaryObject()["b"];
    expect(value).toBe(456);
  });

  it("should remove the item from the dictionary using the key", function() {
    dictionary.Add("a", 123);
    dictionary.Add("b", 456);
    dictionary.Add("c", 789);
    var isFound = dictionary.Remove("b");
    var value = dictionary.GetDictionaryObject()["b"];
    expect(isFound).toBe(true);
    expect(value).toBe(undefined);
  });

  it("should return the count of item in the dictionary", function() {
    dictionary.Add("a", 123);
    dictionary.Add("b", 456);
    dictionary.Add("c", 789);
    var count = dictionary.Count();
    expect(count).toBe(3);
  });

  it("should return an array of keys", function() {
    dictionary.Add("a", 123);
    dictionary.Add("b", 456);
    dictionary.Add("c", 789);
    var keys = dictionary.Keys();
    expect(keys).toEqual(['a', 'b', 'c']);
  });

  it("should return an array of values", function() {
    dictionary.Add("a", 123);
    dictionary.Add("b", 456);
    dictionary.Add("c", 789);
    var values = dictionary.Values();
    expect(values).toEqual([123, 456, 789]);
  });

  it("should return clear the dictionary", function() {
    dictionary.Add("a", 123);
    dictionary.Add("b", 456);
    dictionary.Add("c", 789);
    dictionary.Clear();
    expect(dictionary.Count()).toEqual(0);
  });

  it("should store objects as the value", function() {
    dictionary.Add("a", { 'testA': 'partOne' });
    dictionary.Add("b", { 'testB': 'partTwo' });
    var value = dictionary.GetDictionaryObject()["b"];
    expect(value).toEqual({ 'testB': 'partTwo' });
  })
});