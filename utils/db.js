'use strict';

const mongodb = require('mongodb');
const assert = require('assert');
 
class Db{
 
	constructor(){
		this.mongoClient = mongodb.MongoClient;
		this.ObjectID = mongodb.ObjectID;
		this.mongoURL = `mongodb://<learn.dev.t>:<Qazxsw_1>@ds062339.mlab.com:62339/fst-smpl-db`;
	}
 
	onConnect(callback){
		this.mongoClient.connect(this.mongoURL, (err, db) => {
			assert.equal(null, err);
			callback(db,this.ObjectID);
		});
	}
}
module.exports = new Db();