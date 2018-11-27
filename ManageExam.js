const config = require('./config');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(config.httpProvider));

let log = config.log;

var exam = new web3.eth.Contract(config.abiExam, config.addressExam, {
    from: config.addressFrom,
    gasPrice: config.gasPrice
});
var make = new web3.eth.Contract(config.abiMake, config.addressMake, {
    from: config.addressFrom,
    gasPrice: config.gasPrice
});
var doo = new web3.eth.Contract(config.abiDo, config.addressDo, {
    from: config.addressFrom,
    gasPrice: config.gasPrice
});
var manageexamset = new web3.eth.Contract(config.abiManageExamSet, config.addressManageExamSet, {
    from: config.addressFrom,
    gasPrice: config.gasPrice
});

var manageexamget = new web3.eth.Contract(config.abiManageExamGet, config.addressManageExamGet, {
    from: config.addressFrom,
    gasPrice: config.gasPrice
});

function createExamByTeacher(tuser, pass, ename)
{
	log('(Server) send... addExam');
	return new Promise (function(resolve, reject){
		var builder = manageexamset.methods.createExamByTeacher(tuser, pass, ename).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressManageExamSet, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject("addExam: "+error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject("addExam: "+err);
		 		})
			}
		});
	});
}

function doExamByStudent(suser, pass, eid, aw)
{
	log('(Server) send... addExam');
	return new Promise (function(resolve, reject){
		var builder = manageexamset.methods.doExamByStudent(suser, pass, eid, aw).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressManageExamSet, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject("addExam: "+error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject("addExam: "+err);
		 		})
			}
		});
	});
}


function addOrSetAnswerOfExam(tuser, pass, id, i, aw)
{
	log('(Server) send... addOrSetAnswerOfExam');
	return new Promise (function(resolve, reject){
		var builder = exam.methods.addOrSetAnswerOfExam(tuser, pass, id, i, aw).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressExam, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject("addOrSetAnswerOfExam: "+error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject("addOrSetAnswerOfExam: "+err);
		 		})
			}
		});
	});
}

function addOrSetAllAnswerOfExam(tuser, pass, id, aw)
{
	log('(Server) send... addOrSetAllAnswerOfExam');
	return new Promise (function(resolve, reject){
		var builder = exam.methods.addOrSetAllAnswerOfExam(tuser, pass, id, aw).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressExam, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject("addOrSetAllAnswerOfExam: "+error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject("addOrSetAllAnswerOfExam: "+err);
		 		})
			}
		});
	});
}

function addOrSetQuestionOfExam(tuser, pass, id, i, nq)
{
	log('(Server) send... addOrSetQuestionOfExam');
	return new Promise (function(resolve, reject){
		var builder = exam.methods.addOrSetQuestionOfExam(tuser, pass, id, i, nq).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressExam, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject("addOrSetQuestionOfExam: "+error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject("addOrSetQuestionOfExam: "+err);
		 		})
			}
		});
	});
}

function addOrSetSelectionOfQuestionInExam(tuser, pass, id, q, s, ns)
{
	log('(Server) send... addOrSetSelectionOfQuestionInExam');
	return new Promise (function(resolve, reject){
		var builder = exam.methods.addOrSetSelectionOfQuestionInExam(tuser, pass, id, q, s, ns).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressExam, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject("addOrSetSelectionOfQuestionInExam: "+error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject("addOrSetSelectionOfQuestionInExam: "+err);
		 		})
			}
		});
	});
}

function deleteExamByTeacher(tuser, pass, id)
{
	log('(Server) send... deleteExam');
	return new Promise (function(resolve, reject){
		var builder = manageexamset.methods.deleteExamByTeacher(id).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressManageExamSet, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject("deleteExam: "+error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject("deleteExam: "+err);
		 		})
			}
		});
	});
}

function editNameExam(tuser, pass, id, nn)
{
	log('(Server) send... editName');
	return new Promise (function(resolve, reject){
		var builder = exam.methods.editNameExam(tuser, pass, id, nn).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressExam, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject("editName: "+error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject("editName: "+err);
		 		})
			}
		});
	});
}

function setGeneralExam(tuser, pass, id, times, timee, subj, p)
{
	log('(Server) send... setGeneralExam');
	return new Promise (function(resolve, reject){
		var builder = exam.methods.setGeneralExam(tuser, pass, id, times, timee, subj, p).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressExam, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject("editName: "+error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject("editName: "+err);
		 		})
			}
		});
	});
}

function setLengthAnswerOfExam(tuser, pass, id, len)
{
	log('(Server) send... setLengthAnswerOfExam');
	return new Promise (function(resolve, reject){
		var builder = exam.methods.setLengthAnswerOfExam(tuser, pass, id, len).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressExam, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject("setLengthAnswerOfExam: "+error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject("setLengthAnswerOfExam: "+err);
		 		})
			}
		});
	});
}

function setLengthQuestionOfExam(tuser, pass, id, len)
{
	log('(Server) send... setLengthQuestionOfExam');
	return new Promise (function(resolve, reject){
		var builder = exam.methods.setLengthQuestionOfExam(tuser, pass, id, len).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressExam, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject("setLengthQuestionOfExam: "+error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject("setLengthQuestionOfExam: "+err);
		 		})
			}
		});
	});
}

function setLengthSelectionOfQuestionInExam(tuser, pass, id, q, l)
{
	log('(Server) send... setLengthSelectionOfQuestionInExam');
	return new Promise (function(resolve, reject){
		var builder = exam.methods.setLengthSelectionOfQuestionInExam(tuser, pass, id, q, l).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressExam, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject("setLengthSelectionOfQuestionInExam: "+error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject("setLengthSelectionOfQuestionInExam: "+err);
		 		})
			}
		});
	});
}

function existQuestionOfExam(id, q)
{
	return new Promise(function(rs, rj)
	{
		exam.methods.existQuestionOfExam(id, q).call(function (error, result){
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

function existSelectionOfQuestionInExam(id, q, s)
{
	return new Promise(function(rs, rj)
	{
		exam.methods.existSelectionOfQuestionInExam(id, q, s).call(function (error, result){
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

function existTimeEndOfExam(id)
{
	return new Promise(function(rs, rj)
	{
		exam.methods.existTimeEndOfExam(id).call(function (error, result){
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

function existTimeStartOfExam(id)
{
	return new Promise(function(rs, rj)
	{
		exam.methods.existTimeStartOfExam(id).call(function (error, result){
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

function getAllAnswerOfExam(user, pass, id)
{
	return new Promise(function(rs, rj)
	{
		manageexamget.methods.getAllAnswerOfExam(user, pass, id).call(function (error, result){
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

function getAnswerOfExam(user, pass, id, i)
{
	return new Promise(function(rs, rj)
	{
		manageexamget.methods.getAnswerOfExam(user, pass, id, i).call(function (error, result){
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

function existIdExam(id)
{
	return new Promise(function(rs, rj)
	{
		exam.methods.existIdExam(id).call(function (error, result){
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

function existNameExam(n)
{
	return new Promise(function(rs, rj)
	{
		exam.methods.existNameExam(n).call(function (error, result){
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

function getAllIdExam(n)
{
	return new Promise(function(rs, rj)
	{
		exam.methods.getAllIdExam().call(function (error, result){
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

function getIdExam(i)
{
	return new Promise(function(rs, rj)
	{
		exam.methods.getIdExam(i).call(function (error, result){
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

function getIdOfExam(n)
{
	return new Promise(function(rs, rj)
	{
		exam.methods.getIdOfExam(n).call(function (error, result){
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

function getLengthAnswerOfExam(id)
{
	return new Promise(function(rs, rj)
	{
		exam.methods.getLengthAnswerOfExam(id).call(function (error, result){
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

function getLengthExam()
{
	return new Promise(function(rs, rj)
	{
		exam.methods.getLengthExam().call(function (error, result){
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

function getLengthQuestionOfExam(id)
{
	return new Promise(function(rs, rj)
	{
		exam.methods.getLengthQuestionOfExam(id).call(function (error, result){
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

function getLengthSelectionOfQuestionInExam(id, q)
{
	return new Promise(function(rs, rj)
	{
		exam.methods.getLengthSelectionOfQuestionInExam(id, q).call(function (error, result){
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

function getNameOfExam(id)
{
	return new Promise(function(rs, rj)
	{
		exam.methods.getNameOfExam(id).call(function (error, result){
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

function getPublicOfExam(id)
{
	return new Promise(function(rs, rj)
	{
		exam.methods.getPublicOfExam(id).call(function (error, result){
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

function getQuestionOfExam(tuser, pass, id, i)
{
	return new Promise(function(rs, rj)
	{
		manageexamget.methods.getQuestionOfExam(tuser, pass, id, i).call(function (error, result){
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

function getSelectionOfQuestionInExam(tuser, pass, id, q, s)
{
	return new Promise(function(rs, rj)
	{
		manageexamget.methods.getSelectionOfQuestionInExam(tuser, pass, id, q, s).call(function (error, result){
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

function getTimeStamp()
{
	return new Promise(function(rs, rj)
	{
		manageexamget.methods.getTimeStamp().call(function (error, result){
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

function getTimeEndOfExam(id)
{
	return new Promise(function(rs, rj)
	{
		exam.methods.getTimeEndOfExam(id).call(function (error, result){
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

function getTimeStartOfExam(id)
{
	return new Promise(function(rs, rj)
	{
		exam.methods.getTimeStartOfExam(id).call(function (error, result){
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

function getTypeOfExam(id)
{
	return new Promise(function(rs, rj)
	{
		exam.methods.getTypeOfExam(id).call(function (error, result){
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
//--------------------------------------------------------------------------

function setAcceptGroupForExam(t, p, e, g, acc)
{
	log('(Server) send... setAcceptGroupForExam');
	return new Promise (function(resolve, reject){
		var builder = manageexamset.methods.setAcceptGroupForExam(t, p, e, g, acc).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressManageExamSet, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject("setAcceptGroupForExam: "+error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject("setAcceptGroupForExam: "+err);
		 		})
			}
		});
	});
}
function setAllAcceptGroupForExam(t, p, e, g, acc)
{
	log('(Server) send... setAcceptGroupForExam');
	return new Promise (function(resolve, reject){
		var builder = manageexamset.methods.setAllAcceptGroupForExam(t, p, e, g, acc).encodeABI();
		var transaction = config.createTransaction(config.addressFrom, config.addressManageExamSet, builder);
		web3.eth.accounts.signTransaction(transaction, config.privateKey, function (error, signedTx) {
		    if (error)
		    {
		        return reject("setAcceptGroupForExam: "+error);
			}
			else
			{
				web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
		            return resolve(receipt);
		 		}).on('error', function(err){
		 			return reject("setAcceptGroupForExam: "+err);
		 		})
			}
		});
	});
}
function compareAnswer(a, q)
{
	return new Promise(function(rs, rj)
	{
		manageexamset.methods.compareAnswer(a, q).call(function (error, result){
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
function examExistInMake(u)
{
	return new Promise(function(rs, rj)
	{
		make.methods.examExistInMake(u).call(function (error, result){
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
function getAcceptGroupForExam(t, e, g)
{
	return new Promise(function(rs, rj)
	{
		make.methods.getAcceptGroupForExam(t, e, g).call(function (error, result){
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
function getAllAcceptGroupForExam(t, e, g, b)
{
	return new Promise(function(rs, rj)
	{
		make.methods.getAllAcceptGroupForExam(t, e, g, b).call(function (error, result){
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
function getAllIdExamTeacherMake(u)
{
	return new Promise(function(rs, rj)
	{
		make.methods.getAllIdExamTeacherMake(u).call(function (error, result){
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
function getDate(u, e)
{
	return new Promise(function(rs, rj)
	{
		make.methods.getDate(u, e).call(function (error, result){
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
function getIdExamTeacherMake(u, i)
{
	return new Promise(function(rs, rj)
	{
		make.methods.getIdExamTeacherMake(u, i).call(function (error, result){
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
function getLengthListExam(u)
{
	return new Promise(function(rs, rj)
	{
		make.methods.getLengthListExam(u).call(function (error, result){
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
function getStatusTeacherExam(u, e)
{
	return new Promise(function(rs, rj)
	{
		make.methods.getStatusTeacherExam(u, e).call(function (error, result){
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
function getTeacherExam(e)
{
	return new Promise(function(rs, rj)
	{
		make.methods.getTeacherExam(e).call(function (error, result){
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
//--------------------------------------------------------------------------
function getMask(u, e)
{
	return new Promise(function(rs, rj)
	{
		doo.methods.getMask(u, e).call(function (error, result){
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

function getStatusInDo(u, e)
{
	return new Promise(function(rs, rj)
	{
		doo.methods.getStatusInDo(u, e).call(function (error, result){
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
//--------------------------------------------------------------------------

async function getDetailExam(id)
{
	var edata = {};

	edata.tuser = await getTeacherExam(id);
	edata.name = await getNameOfExam(id);
	edata.created = await getDate(edata.tuser, id);
	edata.eid = id;
	try
	{
		edata.type = await getTypeOfExam(id);
	}
	catch(e)
	{
		edata.type = "";
	}
	var ee = await existTimeStartOfExam(id);
	if(ee)
	{
		edata.timeStart = await getTimeStartOfExam(id);
	}
	else
	{
		edata.timeStart = "";
	}
	var ee = await existTimeEndOfExam(id);
	if(ee)
	{
		edata.timeEnd = await getTimeEndOfExam(id);
	}
	else
	{
		edata.timeEnd = "";
	}
	edata.qlen = await getLengthQuestionOfExam(id);
	edata.publish = await getPublicOfExam(id);
	return edata;
}

async function getExam(user, pass, id)
{
	var edata = {};
	try
	{
		edata = await getDetailExam(id);
		let qarr = [];
		for (var q=0; q<edata.qlen; q++)
		{
			var qdata = {};
			qdata.q = await getQuestionOfExam(user, pass, id, q);
			qdata.slen = await getLengthSelectionOfQuestionInExam(id, q);
			let sarr = [];
			for (var s = 0; s<qdata.slen; s++)
			{
				var ss = await getSelectionOfQuestionInExam(user, pass, id, q, s);
				sarr.push(ss);
			}
			qdata.sarr = sarr;
			qarr.push(qdata);
		}
		edata.qarr = qarr;
		return edata;
	}
	catch(e)
	{
		throw new Error(e);
	}
}

async function getInfoAllExamTeacherMake(tuser)
{
	let data = {};
	try
	{
		data.len = await getLengthListExam(tuser);
		var arr = [];
		for (var i=0; i<data.len; i++)
		{
			var eid = await getIdExamTeacherMake(tuser, i);
			var otmp = await getDetailExam(eid);
			arr.push(otmp);
		}
		data.arr = arr;
		return data;
	}
	catch(e)
	{
		throw new Error(e);
	}
}

// createExamByTeacher("xuanhuy", "protest", "testexambefore").then(console.log);

// existIdExam(10000).then(console.log);
// existNameExam("testexambefore").then(console.log);
// existQuestionOfExam(10000, 0).then(console.log);
// existSelectionOfQuestionInExam(10000, 0, 0).then(console.log);
// existTimeStartOfExam(10000).then(console.log);
// existTimeEndOfExam(10000).then(console.log);
// getAllIdExam().then(console.log);
// getIdExam(0).then(console.log);
// getIdOfExam("testexambefore").then(console.log);
// getLengthAnswerOfExam(10000).then(console.log);
// getLengthExam().then(console.log);
// getLengthQuestionOfExam(10000).then(console.log);
// getLengthSelectionOfQuestionInExam(10000, 0).then(console.log);
// getNameOfExam(10000).then(console.log);
// getPublicOfExam(10000).then(console.log);
// getTimeStartOfExam(10000).then(console.log);
// getTimeEndOfExam(10000).then(console.log);
// getTypeOfExam(10000).then(console.log);

// getAllAnswerOfExam("xuanhuy", "protest", 10000).then(console.log);
// getAnswerOfExam("xuanhuy", "protest", 10000, 0).then(console.log);
// getQuestionOfExam("xuanhuy", "protest", 10000, 0).then(console.log);
// getSelectionOfQuestionInExam("xuanhuy", "protest", 10000, 0, 0).then(console.log);
// getTimeStamp().then(console.log);


// examExistInMake(10000).then(console.log);
// getAcceptGroupForExam("xuanhuy", 10000, 1005).then(console.log);
// getAllAcceptGroupForExam("xuanhuy", 10000, [10005], [false]).then(console.log);
// getAllIdExamTeacherMake("xuanhuy").then(console.log);
// getDate("xuanhuy", 10000).then(console.log);
// getIdExamTeacherMake("xuanhuy", 0).then(console.log);
// getLengthListExam("xuanhuy").then(console.log);
// getStatusTeacherExam("xuanhuy", 10000).then(console.log);
// getTeacherExam(10000).then(console.log);


module.exports = 
{
	getInfoAllExamTeacherMake: getInfoAllExamTeacherMake,
	getAcceptGroupForExam: getAcceptGroupForExam,
	existNameExam: existNameExam,
	createExamByTeacher: createExamByTeacher,
	getIdOfExam: getIdOfExam,
	existIdExam: existIdExam,
	getTeacherExam: getTeacherExam,
	addOrSetQuestionOfExam: addOrSetQuestionOfExam,
	addOrSetSelectionOfQuestionInExam: addOrSetSelectionOfQuestionInExam,
	setLengthSelectionOfQuestionInExam: setLengthSelectionOfQuestionInExam,
	addOrSetAllAnswerOfExam: addOrSetAllAnswerOfExam,
	setLengthAnswerOfExam: setLengthAnswerOfExam,
	setLengthQuestionOfExam: setLengthQuestionOfExam,
	getAllAnswerOfExam: getAllAnswerOfExam,
	getLengthAnswerOfExam: getLengthAnswerOfExam,
	getExam: getExam,
	setAcceptGroupForExam: setAcceptGroupForExam,
	setAllAcceptGroupForExam: setAllAcceptGroupForExam,
	editNameExam: editNameExam,
	setGeneralExam: setGeneralExam,
	getNameOfExam: getNameOfExam,
	getAnswerOfExam: getAnswerOfExam,
	doExamByStudent: doExamByStudent,
	compareAnswer: compareAnswer,
	getMask: getMask,
	getStatusInDo: getStatusInDo,
	getTimeEndOfExam: getTimeEndOfExam,
	getPublicOfExam: getPublicOfExam,
	getAllAcceptGroupForExam: getAllAcceptGroupForExam,
	getStatusTeacherExam: getStatusTeacherExam,
	getTimeStartOfExam: getTimeStartOfExam
}