var textarea=document.getElementById("textarea");

textarea.addEventListener("input",function(){
	let text=this.value;
	
	let char=text.length;
	console.log(text);
	let count=document.getElementById("char");
	count.innerHTML=char;//chars is connected to char id

	// text=text.trim();
	// let words=text.split(" ");
	// let cleanlist=words.filter(function(elm){
	// 	return elm!=""; 

	// });
	// console.log(cleanlist);
	// document.getElementById("word").innerHTML=cleanlist.length;

	text=text.trim();
	let word=text.split(" ");
	let words=word.length;
	let cntwd=document.getElementById("word");
	cntwd.innerHTML=words;
	let cleanlist=word.filter(function(el){
		return el!="";
	});
	console.log(cleanlist);
	cntwd.innerHTML=cleanlist.length;
});