function strStr(haystack, needle) {
  if (!needle) return 0;

  const split = haystack.split(needle);

  if (split.length > 1) {
    return split[0].length;
  }

  return -1;
}

console.log(strStr("hellow", "llo"));
