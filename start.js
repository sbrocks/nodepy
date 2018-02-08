var spawn=require('child_process').spawn,
	py=spawn('python',['test1.py']),
	data=[1,2,3,4,5],
	dataString='';

py.stdout.on('data',function(data){
	dataString+=data.toString();
});

py.stdout.on('end',function(){
	console.log('Sum of numbers=',dataString);
});

py.stdin.write(JSON.stringify(data));
py.stdin.end();