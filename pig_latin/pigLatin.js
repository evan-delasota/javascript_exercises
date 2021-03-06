function translate(string) {
	return string
		.split(" ")
		.map(word => {
			const index = firstVowelLoc(word);
			const beginning = word.slice(0, index);
			const ending = word.slice(index);
			return `${ending}${beginning}ay`;
		})
		.join(" ");

};

function firstVowelLoc(string) {
	const vowels = string.match(/[aeiou]/g);
	if (vowels[0] == "u" && string[string.indexOf(vowels[0]) - 1] == "q") {
		return string.indexOf(vowels[1]);

	}
	return string.indexOf(vowels[0]);

};

module.exports = {
	translate
}

