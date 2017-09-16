var fs=require('fs');
var filepath=process.argv[2];
fs.readFile(filepath,function(error,contents){
	var lines=contents.toString().split('\n').length;
	console.log(lines);
	});
