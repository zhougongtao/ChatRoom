var app = require('http').createServer();
var io = require('socket.io')(app);
var PORT = 8081;
/*定义用户数组*/
var users = [];

app.listen(PORT);
/*
	*function中的socket为每个客户端单独连接的socket实例，只通知当前连接用户
	*io.sockets 通知所有连接用户
	*socket.broadcast 给除了自己以外的客户端广播消息
*/
io.on('connection', function (socket) {
	var isNewPerson = true;    // 是否是新用户
    var username = null;       //当前登录用户
	/*监听登录*/
	socket.on('login',function(data){
		for(var i=0;i<users.length;i++){
	        if(users[i].username == data.username){
	          	isNewPerson = false;
	          	break;
			}
		}
		
	    if(isNewPerson){
	        username = data.username;
	        users.push({username:data.username,color:data.color})
	        let resdata = {
	        	username: data.username,	
	        	msgType: 0, 	
	        	msgDate:  new Date(), 	
	        	message: data.username+'   已加入群聊',
	        }
	        
	        /*给自己发送登录成功*/
	        socket.emit('loginSuccess',{username:data.username});
			io.sockets.emit('receiveMessage',resdata);
			io.sockets.emit('UserList',users);
	        console.log('登录成功:',resdata)

	        /*人数变更，广播给所有连接用户*/
	        console.log('当前连接的用户为：',users);
	        io.sockets.emit('amountChange',users.length);
		}
		else{
	        socket.emit('loginFail','');  //失败
	    }  
	})
  
	/*监听戳一戳*/
	socket.on('chuo',function(data){
		let resdata = {
			username: data.username,	
			msgType: 0, 	
			msgDate:  new Date(), 	
			message: data.username+'  戳一戳了  ' +data.opname,
		}
		io.sockets.emit('pointMessage',resdata);
		console.log(resdata)
	})

	/*监听发送消息*/
	socket.on('sendMessage',function(data){
		let resdata = {
			username: data.username,	
			msgType: 1, 			
			msgDate:  new Date(), 	
			message: data.message,
			color: data.color,
		}
        io.sockets.emit('receiveMessage',resdata);
        console.log(resdata)
	})
	
	/*监听色子消息*/
	socket.on('touzi',function(data){
		let resdata = {
			username: data.username,	
			msgType: 2, 			
			msgDate:  new Date(), 	
			imgpath: data.imgpath,
			color:data.color,
		}
        io.sockets.emit('receivetouzi',resdata);
        console.log('接受到色子信息======:',resdata)
    })

	/*退出登录*/
	socket.on('disconnect',function(){		
		
		//清理用户
		var i = users.indexOf(username)
		users.splice(i, 1)
		
		// 发送信息
		io.sockets.emit('UserList',users);	
		console.log('退出===',username)
		
        /*人数变更，广播给所有连接用户*/
        console.log('当前连接的用户为：',users);
        io.sockets.emit('amountChange',users.length);
    })
})

console.log('app listen at：'+PORT);

/**
 * 返回的数据 data
 * username: data.username,	名字
 * msgType: 0/1/2/    0 为系统消息，1 自己的消息||别人的消息  2 自己的色子||别人的色子
 * msgDate:  new Date(),  时间
 * message： 具体内容
 * imgpath:  色子图片的路径
 * color: 颜色参数
 */