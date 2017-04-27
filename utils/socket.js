'use strict';
 
const path = require('path');
const helper = require('./helper');
 
class Socket{
 
    constructor(socket){
        this.io = socket;
    }

    socketEvents(){

        this.io.on('connection', (socket) => {
            
            socket.on('chat-list', (data) => {
                //Todo
            });

            socket.on('add-message', (data) => {
                //Todo
            });

            socket.on('logout',(data)=>{
                //Todo
            });
            
            socket.on('disconnect',()=>{
                //Todo
            });
        });

    }
	
}
module.exports = Socket;