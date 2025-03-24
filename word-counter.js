let sentence = "hello dear how are you now.";

// Function to analyze the sentence
function analyzeSentence(sentence) {
  // condition - I Ensured the sentence ends with a period
  if (!sentence.endsWith(".")) {
    console.log("The sentence must end with a period.");
    return;
  }

  let length = sentence.length; // Total number of characters
  let words = sentence.trim().split(" ").length; // Words count (split by space)
  let vowels = sentence.match(/[aeiouAEIOU]/g); // Find vowels aeiou
  let vowelCount = vowels ? vowels.length : 0;

  console.log("Sentence Length:", length);
  console.log("Number of Words:", words);
  console.log("Number of Vowels:", vowelCount);
}

analyzeSentence(sentence);
