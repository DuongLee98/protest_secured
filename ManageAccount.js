const config = require('./config');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(config.httpProvider));

let log = config.log

var account = new web3.eth.Contract(config.abiAccount, config.addressAccount, {
    from: config.addressFrom,
    gasPrice: config.gasPrice
});

function deleteStudentUser(user, pass)
{
	log('(Server) send... deleteStudentUser' + user);
	return new Promise(function (resolve, reject){
		var builder = account.methods.deleteSUser(user, pass).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressAccount, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject(error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject(err);
		 		})
			}
		});
	})
}

function deleteTeacherUser(user, pass)
{
	log('(Server) send... deleteTeacherUser' + user);
	return new Promise(function (resolve, reject){
		var builder = account.methods.deleteTUser(user, pass).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressAccount, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject(error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject(err);
		 		})
			}
		});
	})
}

function editStudentUser(user, pass, newpass, newname, newphone)
{
	log('(Server) send... deleteStudentUser' + user);
	return new Promise(function (resolve, reject){
		var builder = account.methods.editSUser(user, pass, newpass, newname, newphone).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressAccount, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject(error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject(err);
		 		})
			}
		});
	})
}

function editTeacherUser(user, pass, newpass, newname, newphone, newic)
{
	log('(Server) send... deleteStudentUser' + user);
	return new Promise(function (resolve, reject){
		var builder = account.methods.editTUser(user, pass, newpass, newname, newphone, newic).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressAccount, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject(error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject(err);
		 		})
			}
		});
	})
}

function regStudent(user, pass, name, phone)
{
	log('(Server) send... deleteStudentUser' + user);
	return new Promise(function (resolve, reject){
		var builder = account.methods.regStudent(user, pass, name, phone).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressAccount, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject(error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject(err);
		 		})
			}
		});
	})
}

function regTeacher(user, pass, name, phone, ic)
{
	log('(Server) send... deleteStudentUser' + user);
	return new Promise(function (resolve, reject){
		var builder = account.methods.regTeacher(user, pass, phone, name, ic).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressAccount, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject(error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject(err);
		 		})
			}
		});
	})
}

function getIcTUser(user)
{
	return new Promise(function(rs, rj)
	{
		account.methods.getIcTUser(user).call(function (error, result){
			if (error)
			{
				return rj(error);
			}
			else
			{
				return rs(result);
			}
		});
	})
}

function getLengthSUser()
{
	return new Promise(function(rs, rj)
	{
		account.methods.getLengthSUser().call(function (error, result){
			if (error)
			{
				return rj(error);
			}
			else
			{
				return rs(result);
			}
		});
	})
}

function getLengthTUser()
{
	return new Promise(function(rs, rj)
	{
		account.methods.getLengthTUser().call(function (error, result){
			if (error)
			{
				return rj(error);
			}
			else
			{
				return rs(result);
			}
		});
	})
}

function getNameSUser(user)
{
	return new Promise(function(rs, rj)
	{
		account.methods.getNameSUser(user).call(function (error, result){
			if (error)
			{
				return rj(error);
			}
			else
			{
				return rs(result);
			}
		});
	})
}

function getNameTUser(user)
{
	return new Promise(function(rs, rj)
	{
		account.methods.getNameTUser(user).call(function (error, result){
			if (error)
			{
				return rj(error);
			}
			else
			{
				return rs(result);
			}
		});
	})
}

function getPhoneSUser(user)
{
	return new Promise(function(rs, rj)
	{
		account.methods.getPhoneSUser(user).call(function (error, result){
			if (error)
			{
				return rj(error);
			}
			else
			{
				return rs(result);
			}
		});
	})
}

function getPhoneTUser(user)
{
	return new Promise(function(rs, rj)
	{
		account.methods.getPhoneTUser(user).call(function (error, result){
			if (error)
			{
				return rj(error);
			}
			else
			{
				return rs(result);
			}
		});
	})
}

function getSUser(i)
{
	return new Promise(function(rs, rj)
	{
		account.methods.getSUser(i).call(function (error, result){
			if (error)
			{
				return rj(error);
			}
			else
			{
				return rs(result);
			}
		});
	})
}

function getTUser(i)
{
	return new Promise(function(rs, rj)
	{
		account.methods.getTUser(i).call(function (error, result){
			if (error)
			{
				return rj(error);
			}
			else
			{
				return rs(result);
			}
		});
	})
}

function login(user, pass)
{
	return new Promise(function(rs, rj)
	{
		account.methods.login(user, pass).call(function (error, result){
			if (error)
			{
				return rj(error);
			}
			else
			{
				data = {};
				data.login = result[0];
				data.type = result[1];
				data.code = parseInt(result[2], 10);
				return rs(data);
			}
		});
	})
}

function userSExist(user)
{
	return new Promise(function(rs, rj)
	{
		account.methods.userSExist(user).call(function (error, result){
			if (error)
			{
				return rj(error);
			}
			else
			{
				return rs(result);
			}
		});
	})
}

function userTExist(user)
{
	return new Promise(function(rs, rj)
	{
		account.methods.userTExist(user).call(function (error, result){
			if (error)
			{
				return rj(error);
			}
			else
			{
				return rs(result);
			}
		});
	})
}

async function getInfoStudent(user)
{
	var info = {};
	try
	{
		var name = await getNameSUser(user);
		var phone = await getPhoneSUser(user);
		info.name = name;
		info.phone = phone;
		return info;
	}
	catch(e)
	{
		throw new Error(e);
	}
}

async function getInfoAllStudent(length)
{
	let len;
	if (length == undefined)
	{
		len = await getLengthSUser();
		len = parseInt(len);
	}
	else
	{
		len = length;
	}
	var arr = [];
	for (var i=0; i<len; i++)
	{
		var info = {};
		try
		{
			var item = await getSUser(i);
			info = await getInfoStudent(item);
			info.item = item;
			arr.push(info)
		}
		catch(e)
		{
			throw new Error(e);
		}
	}
	data = {};
	data.len = len;
	data.arr = arr;
	return data;
}

async function getInfoTeacher(user)
{
	var info = {};
	try
	{
		var name = await getNameTUser(user);
		var phone = await getPhoneTUser(user);
		var CMND = await getIcTUser(user);
		info.name = name;
		info.phone = phone;
		info.cmnd = CMND;
		return info;
	}
	catch(e)
	{
		throw new Error(e);
	}
}

async function getInfoAllTeacher(length)
{
	let len;
	if (length == undefined)
	{
		len = await getLengthTUser();
		len = parseInt(len);
	}
	else
	{
		len = length;
	}
	var arr = [];
	for (var i=0; i<len; i++)
	{
		var info = {};
		try
		{
			var item = await getTUser(i);
			info = await getInfoTeacher(item);
			info.item = item;
			arr.push(info)
		}
		catch(e)
		{
			throw new Error(e);
		}
	}
	data = {};
	data.len = len;
	data.arr = arr;
	return data;
}

// getLengthSUser().then(console.log);
// getLengthTUser().then(console.log);
// getNameSUser("duonglee").then(console.log);
// getNameTUser("xuanhuy").then(console.log);
// getPhoneSUser("duonglee").then(console.log);
// getPhoneTUser("xuanhuy").then(console.log);
// getSUser(0).then(console.log);
// getTUser(0).then(console.log);
// login("xuanhuytest", "protest").then(console.log);
// userSExist("duonglee").then(console.log);
// userTExist("xuanhuy").then(console.log);

// regStudent("duonglee", "protest", "DL", "123").then(console.log);

// getInfoAllStudent().then(console.log);
// getInfoAllTeacher(2).then(console.log);

module.exports = 
{
	userSExist: userSExist,
	userTExist: userTExist,
	login: login,
	getNameTUser: getNameTUser,
	getPhoneTUser: getPhoneTUser,
	getIcTUser: getIcTUser,
	getNameSUser: getNameSUser,
	getPhoneSUser: getPhoneSUser,

	regStudent: regStudent,
	regTeacher: regTeacher,

	getInfoAllStudent: getInfoAllStudent,
	getInfoAllTeacher: getInfoAllTeacher,
	getInfoStudent: getInfoStudent,
	getInfoTeacher: getInfoTeacher
}