// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const parentheses = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (parentheses[letter]) stack.push(parentheses[letter]);
    else if (stack.pop() !== letter) return false;
  }
  return !stack.length;
};

console.log(isValid("()"));
