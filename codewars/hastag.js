function generateHashtag(str) {
  const trimmed = str.trim();
  if (!trimmed) return false;
  const splitted = trimmed.split(" ");
  let result = "";
  splitted.forEach((word) => {
    if (word) {
      result += word[0].toUpperCase() + word.slice(1);
    }
  });
  if (result.length > 140) return false;
  return "#" + result;
}
console.log(generateHashtag("   "));
console.log(generateHashtag("codewars"));
console.log(generateHashtag("Codewars Is Nice"));
console.log(generateHashtag("Codewars is nice"));
generateHashtag("");
generateHashtag(" ".repeat(200));
generateHashtag("Do We have A Hashtag");
generateHashtag("Codewars");
generateHashtag("Codewars Is Nice");
generateHashtag("Codewars is nice");
generateHashtag("code" + " ".repeat(140) + "wars");
generateHashtag(
  "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
);
generateHashtag("a".repeat(139));
generateHashtag("a".repeat(140));

// NOTE: charAt is a safer method to use than the regular square brackets
function generateHashtag(str) {
  const trimmed = str.trim();
  if (!trimmed) return false;

  const result = trimmed
    .split(/\s+/) // Split by any whitespace and reduce multiple spaces to single
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
    .join("");

  return result.length >= 140 ? false : `#${result}`;
}

function generateHashtag(str) {
  var hashtag = str.split(" ").reduce(function (tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, "#");

  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}

function generateHashtag(str) {
  if (!str.trim()) return false;

  const result =
    "#" +
    str
      .split(" ")
      .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
      .join("");

  return result.length > 140 ? false : result;
}
