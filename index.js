function JsDictionary() {
  this.dictionary = {};
}

JsDictionary.prototype.Add = function(key, value) {
  if (this.dictionary[key] === undefined) {
    this.dictionary[key] = value;
    return this.dictionary;
  }
  throw new Error(`Key: ${key} already exists in the dictionary`);
};

JsDictionary.prototype.Remove = function(key) {
  var isFound = false;
  if (this.dictionary[key] !== undefined)
    isFound = true;
  delete this.dictionary[key];
  return isFound;
}

JsDictionary.prototype.Count = function() {
  var count = 0;
  for (var prop in this.dictionary) {
    if (this.dictionary.hasOwnProperty(prop))
      count += 1;
  }
  return count;
}

JsDictionary.prototype.GetDictionaryObject = function() {
  return this.dictionary;
}

JsDictionary.prototype.Keys = function() {
  var keys = new Array(this.Count());
  var count = 0;
  for (var prop in this.dictionary) {
    if (this.dictionary.hasOwnProperty(prop)) {
      if (prop !== undefined)
        keys[count++] = prop;
    }
  }

  return keys;
}

JsDictionary.prototype.Values = function() {
  var values = new Array(this.Count());
  var count = 0;
  for (var prop in this.dictionary) {
    if (this.dictionary.hasOwnProperty(prop)) {
      values[count++] = this.dictionary[prop];
    }
  }

  return values;
}

JsDictionary.prototype.Clear = function() {
  this.dictionary = {};
}

module.exports = JsDictionary;