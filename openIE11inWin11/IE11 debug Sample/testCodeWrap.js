
function testCode(){
	$("p").css("background-color", "yellow"); //basic

	$("tagme").css("background-color", "red"); //basic+

	//normally...
	console.log("doc contain body", $.contains( document.documentElement, document.body ) ); // true

	console.log("body contain doc", $.contains( document.body, document.documentElement ) ); // false

	console.log("sp1 has tag1 ?", $.contains( $("#sp1:first"), $("#tag1:first") ) ); //not work for multi depth

	//retrieve tree by find() -> flatten result = found all under a node
	let flatList = $("#d1").find("span, tagme");
	let flatListArray = $("#d1").find("span, tagme").toArray(); //to use contains()
	let tag1Node = $("#tag1").toArray()[0];
	console.log("flatten list result", flatListArray);
	console.log("tag1Node", tag1Node);

	console.log("found under d1", flatList);
	//console.log("d1 include tag1 multi Depth ?", flatListArray.includes(tag1Node));//work. true ★ not for IE - no includes
	
	//custom contain for containsIE11
	let isContain = false;
	flatList.each(function(idx, el) {
		console.info(idx, el);
		if( el === tag1Node ) isContain = true;
	});
	console.log("d1 $.contains tag1 multi Depth ?", $.contains(flatListArray, tag1Node));//fail. false

	//retrieve children only find direct child. 
	let directChildrens = $("#d1").children();
	let directChildrensArray = directChildrens.toArray();//to use contains()
	console.log("direct child under d1", directChildrens);
	console.log("d1 include tag1 single Depth ?", directChildrensArray.includes(tag1Node));//not for we
	console.log("d1 $.contains tag1 single Depth ?", $.contains(directChildrensArray, tag1Node));//not for we
}
