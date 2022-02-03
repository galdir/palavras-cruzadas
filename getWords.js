function getWords()
{
	//let words = [];
	let textArea = document.getElementById("words");
	let text=textArea.value;
	let words=text.split("\n");
	//words=words.slice(1,words.lenght-1);
	return words;
}