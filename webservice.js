
let account = require('./ManageAccount');
let group = require('./ManageGroup');
let exam = require('./ManageExam');
var config = require('./config');

let log = config.log

async function login(socket, keyin, keyout, data){
	log('(Web   ) '+socket.user+'->'+keyin+': '+JSON.stringify(data))
		var user = data.user
		var pass = data.pass
		let exists = await account.userSExist(user);
		let existt = await account.userTExist(user);
		if (exists == true || existt == true)
		{
			let info = await account.login(user, pass);
			if (info.login == true)
			{
				ddata = {};
				if (info.code == 0)
				{
					ddata.name = await account.getNameSUser(user);
					ddata.phone = await account.getPhoneSUser(user);
					
					log('(Server) '+socket.user+'<-'+keyout+": "+JSON.stringify(ddata));
					return success(ddata, "student");
				}
				else if (info.code == 1)
				{
					ddata.name = await account.getNameTUser(user);
					ddata.phone = await account.getPhoneTUser(user);
					ddata.cmnd = await account.getIcTUser(user);
					
					log('(Server) '+socket.user+'<-'+keyout+": "+JSON.stringify(ddata));
					return success(ddata, "teacher");
				}
				else
				{
					var msg = "User undefined";
					
					log('(Server) '+socket.user+"<-"+keyout+": "+msg)
					return error(msg)
				}
				
				
			}
			else
			{
				var msg = "Password doesn't correct"
				
				log('(Server) '+socket.user+"<-"+keyout+": "+msg)
				return error(msg)
			}
		}
		else
		{
			var msg = "User doesn't correct"
			
			log('(Server) '+socket.user+"<-"+keyout+": "+msg)
			return error(msg)
		}
}

async function getInfoOfTeacher(socket, keyin, keyout, data)
{
	log('(Client) '+socket.user+'->'+keyin+': '+JSON.stringify(data))
	if (socket.lg != "none")
	{
		var tuser = data.tuser;
		let existTeacher = await account.userTExist(tuser)
		if (existTeacher == true)
		{
			try
			{
				let infoteacher = await account.getInfoTeacher(tuser);
				log('(Server) '+socket.user+'<-'+keyout+": "+JSON.stringify(infoteacher));
				return success(infoteacher, "success");
				
			}
			catch(e)
			{
				var msg = e;
				log('(Server) '+socket.user+"<-"+keyout+": "+msg)
				return error(msg)
				
			}
		}
		else
		{
			var msg = "Teacher doesn't exist";
			log('(Server) '+socket.user+"<-"+keyout+": "+msg)
			return error(msg)
		}
	}
	else
	{
		var msg = "Must login before you get info teacher";
		log('(Server) '+socket.user+"<-"+keyout+": "+msg)
		return error(msg)
	}
}

async function getInfoOfStudent(socket, keyin, keyout, data)
{
	log('(Client) '+socket.user+'->'+keyin+': '+JSON.stringify(data))
	if (socket.lg != "none")
	{
		var suser = data.suser;
		let existStudent = await account.userSExist(suser)
		if (existStudent == true)
		{
			try
			{
				let infostudent = await account.getInfoStudent(suser);
				log('(Server) '+socket.user+'<-'+keyout+": "+JSON.stringify(infostudent));
				
				return success(infostudent, "success");
				
			}
			catch(e)
			{
				var msg = e;
				log('(Server) '+socket.user+"<-"+keyout+": "+msg)
				return error(msg)
				
			}
		}
		else
		{
			var msg = "Student doesn't exist";
			log('(Server) '+socket.user+"<-"+keyout+": "+msg)
			return error(msg)
		}
	}
	else
	{
		var msg = "Must login before you get info student";
		log('(Server) '+socket.user+"<-"+keyout+": "+msg)
		return error(msg)
	}
}

async function getInfoAllGroupTeacherManage(socket, keyin, keyout, data){
	log('(Client) '+socket.user+'->'+keyin+': '+JSON.stringify(data));
	if (socket.lg != "none")
	{
		try
		{
			var userteacher = data.userteacher;
			let ddata = await group.getInfoAllGroupTeacherManage(userteacher)
			if (userteacher == socket.user)
				ddata.control = true;
			else
				ddata.control = false;
			log('(Server) '+socket.user+'<-'+keyout+": "+JSON.stringify(ddata));
			return success(ddata, "get success")
		}
		catch (e)
		{
			var msg = e;
			log('(Server) '+socket.user+"<-"+keyout+": "+msg)
			return error(msg)
		}
	}
	else
	{
		var msg = "Must login before you get info";
		log('(Server) '+socket.user+"<-"+keyout+": "+msg)
		return error(msg)
	}
}

async function getInfoOfGroup(socket, keyin, keyout, data)
{
	log('(Client) '+socket.user+'->'+keyin+': '+JSON.stringify(data))
	if (socket.lg != "none")
	{
		var idg = data.idgroup;
		let existGroup = await group.existIdGroup(idg)
		if (existGroup == true)
		{
			try
			{
				let tuser = await group.getTeacherOfGroup(idg);
				let tname = await teacher.getNameUser(tuser);
				let allstudent = await group.getAllStudentOfGroup(idg);
				let len = allstudent.len;
				let arruser = allstudent.arr;
				var arr = [];
				for (var i = 0; i<len; i++)
				{
					var info = {};
					info.user = arruser[i];
					let namestudent = await student.getNameUser(info.user);
					let status = await group.getStatus(arruser[i], idg);
					info.name = namestudent;
					info.status = status;
					arr.push(info);
				}
				ddata = {};
				ddata.tuser = tuser;
				ddata.tname = tname;
				ddata.gid = idg;
				ddata.gname = await group.getNameGroup(idg);
				ddata.len = len;
				ddata.arr = arr;
				if (tuser == socket.user)
					ddata.control = true;
				else
					ddata.control = false;
				log('(Server) '+socket.user+'<-'+keyout+": "+JSON.stringify(ddata));
				return success(ddata, "success");
				
			}
			catch(e)
			{
				var msg = e;
				return error(msg)
				log('(Server) '+socket.user+"<-"+keyout+": "+msg)
			}
		}
		else
		{
			var msg = "Group doesn't exist";
			log('(Server) '+socket.user+"<-"+keyout+": "+msg)
			return error(msg)
		}
	}
	else
	{
		var msg = "Must login before you get info group";
		log('(Server) '+socket.user+"<-"+keyout+": "+msg)
		return error(msg)
	}
}

async function getInfoAllExamTeacherMake(socket, keyin, keyout, data){
	log('(Client) '+socket.user+'->'+keyin+': '+JSON.stringify(data));
	if (socket.lg != "none")
	{
		try
		{
			var tuser = data.tuser;
			var exist = await teacher.userExist(tuser);
			if (exist == true)
			{
				let ddata = await exam.getInfoAllExamTeacherMake(tuser)
				log('(Server) '+socket.user+'<-'+keyout+": "+JSON.stringify(ddata));
				return success(ddata, "get success")
			}
			else
			{
				var msg = "tuser doesn't exist";
				log('(Server) '+socket.user+"<-"+keyout+": "+msg)
				return error(msg)
			}	
		}
		catch (e)
		{
			var msg = e;
			log('(Server) '+socket.user+"<-"+keyout+": "+msg)
			return error(msg)
		}
	}
	else
	{
		var msg = "Must login before you get info";
		log('(Server) '+socket.user+"<-"+keyout+": "+msg)
		return error(msg)
	}
}

async function getExam(socket, keyin, keyout, data)
{
	log('(Client) '+socket.user+'->'+keyin+': '+JSON.stringify(data))
	if (socket.lg != "none")
	{
		var eid = data.eid;
		let existExam = await exam.getExistId(eid)
		if (existExam == true)
		{
			try
			{
				let dataExam = await exam.getExam(eid);
				dataExam.tname = await teacher.getNameUser(dataExam.tuser);
				if (dataExam.tuser == socket.user)
				{
					dataAnswer = await exam.getAllAnswerOfExam(eid);
					dataExam.alen = dataAnswer.alen;
					dataExam.aarr = dataAnswer.aarr;
				}
				if(dataExam.publish == false)
				{
					let dataGroup = await group.getInfoAllGroupTeacherManage(dataExam.tuser);
					let lenGroupAcc = 0;
					let arrGourpAcc = [];
					for (var i = 0; i<dataGroup.len; i++)
					{
						var st = await exam.getAcceptGroupForExam(dataExam.tuser, eid, parseInt(dataGroup.arr[i].gid));
						if (st==true)
						{
							lenGroupAcc++;
							arrGourpAcc.push(parseInt(dataGroup.arr[i].gid));
						}
					}
					dataExam.lenGroupAcc = lenGroupAcc;
					dataExam.arrGourpAcc = arrGourpAcc;
				}
				
				log('(Server) '+socket.user+'<-'+keyout+": "+JSON.stringify(dataExam));
				return success(dataExam, "success")
				
			}
			catch(e)
			{
				var msg = e;
				log('(Server) '+socket.user+"<-"+keyout+": "+msg)
				return error(msg)
				
			}
		}
		else
		{
			var msg = "Exam doesn't exist";
			log('(Server) '+socket.user+"<-"+keyout+": "+msg)
			return error(msg)
			
		}
	}
	else
	{
		var msg = "Must login before you get exam";
		log('(Server) '+socket.user+"<-"+keyout+": "+msg)
		return error(msg)
		
	}
}

async function getInfoAllExamAcceptForGroup(socket, keyin, keyout, data){
	log('(Client) '+socket.user+'->'+keyin+': '+JSON.stringify(data));
	if (socket.lg != "none")
	{
		try
		{
			var gid = data.gid;
			var exist = await group.existIdGroup(gid);
			if (exist == true)
			{
				let tuser = await group.getTeacherOfGroup(gid);
				let tname = await teacher.getNameUser(tuser);
				let edata = await exam.getInfoAllExamTeacherMake(tuser);
				let len = 0;
				let arr = [];
				for (var i=0; i<edata.len; i++)
				{
					var edt = edata.arr[i];
					if (edt.publish == false)
					{
						var pl = await exam.getAcceptGroupForExam(tuser, edt.eid, gid);
						if (pl == true)
						{
							len++;
							arr.push(edt);
						}
					}
				}
				ddata = {};
				ddata.gid = gid;
				ddata.tuser = tuser;
				ddata.tname = tname;
				ddata.len = len;
				ddata.arr = arr;
				log('(Server) '+socket.user+'<-'+keyout+": "+JSON.stringify(ddata));
				return success(ddata, "get success")
				
			}
			else
			{
				var msg = "Group doesn't exist";
				log('(Server) '+socket.user+"<-"+keyout+": "+msg)
				return error(msg)
				
			}
		}
		catch (e)
		{
			var msg = e;
			log('(Server) '+socket.user+"<-"+keyout+": "+msg)
			return error(msg)
			
		}
	}
	else
	{
		var msg = "Must login before you get info";
		log('(Server) '+socket.user+"<-"+keyout+": "+msg)
		return error(msg)
		
	}
}

async function createExamByTeacher(socket, keyin, keyout, data){
	log('(Client) '+socket.user+'->'+keyin+': '+JSON.stringify(data));
	if (socket.lg == "teacher")
	{
		var ename = data.ename;
		var tuser = data.tuser;

		let existExam = await exam.getExistName(ename);
		if (existExam == false)
		{
			try
			{
				let addExam = await exam.addExam(ename);
				var tx = config.infoTransaction(addExam);
				if (tx.status == true)
				{
					log('(Block ) transaction info: '+JSON.stringify(tx))
					try
					{
						let eid = await exam.getIdOfExam(ename);
						let existExamMake = await exam.examExist(eid);
						if (existExamMake == false)
						{
							try
							{
								let addMake = await exam.addMake(tuser, eid);
								var tx = config.infoTransaction(addMake);
								if (tx.status == true)
								{
									var ddata = {};
									ddata.ename = ename;
									ddata.tuser = tuser;
									ddata.eid = eid;
									log('(Server) '+socket.user+'<-'+keyout+": "+JSON.stringify(ddata));
									log('(Block ) transaction info: '+JSON.stringify(tx))
									return success(ddata, "create exam success")
									
								}
								else
								{
									var msg = 'create exam false'
									log('(Server) '+socket.user+"<-"+keyout+": "+msg)
									log('(Block ) transaction info: '+JSON.stringify(tx))

									exam.deleteExam(eid).then(function (edata){
										log('(Block ) transaction info: '+JSON.stringify(config.infoTransaction(edata)));
									})
									return error(msg)
								}
							}
							catch (e)
							{
								var msg = 'Error System!'
								
								log('(Server) '+socket.user+"<-"+keyout+": "+msg)
								log('(Block ) transaction error: '+e)

								exam.deleteExam(eid).then(function (edata){
									log('(Block ) transaction info: '+JSON.stringify(config.infoTransaction(edata)));
								})

							}
						}
						else
						{
							var msg = 'Exam managed by other teacher'
							
							log('(Server) '+socket.user+"<-"+keyout+": "+msg)
							log('(Block ) transaction info: '+JSON.stringify(tx))

							exam.deleteExam(eid).then(function (edata){
								log('(Block ) transaction info: '+JSON.stringify(config.infoTransaction(edata)));
							})
							return error(msg)
						}
					}
					catch(e)
					{
						var msg = e;
						
						log('(Server) '+socket.user+"<-"+keyout+": "+msg)
						log('(Block ) info: '+e)

						exam.deleteExam(eid).then(function (edata){
							log('(Block ) transaction info: '+JSON.stringify(config.infoTransaction(edata)));
						})
						return error(msg)
					}

				}
				else
				{
					var msg = 'addExam false'
					
					log('(Server) '+socket.user+"<-"+keyout+": "+msg)
					log('(Block ) transaction info: '+JSON.stringify(tx))
					return error(msg)
				}
			}
			catch(e)
			{
				var msg = 'Error System!'
				
				log('(Server) '+socket.user+"<-"+keyout+": "+msg)
				log('(Block ) transaction error: '+e)
				return error(msg)
			}
		}
		else
		{
			var msg = "Exam exist";
			
			log('(Server) '+socket.user+"<-"+keyout+": "+msg)
			return error(msg)
		}
	}
	else if (socket.lg == "student")
	{
		var msg = "You're a student, not a teacher";
		
		log('(Server) '+socket.user+"<-"+keyout+": "+msg)
		return error(msg)
	}
	else
	{
		var msg = "Must login before you create group";
		
		log('(Server) '+socket.user+"<-"+keyout+": "+msg)
		return error(msg)
	}
}

function success(data, msg)
{
	let rptrue = {};
	rptrue.cd = 0;
	rptrue.data = data;
	rptrue.msg = msg
	return rptrue;
}

function error(msg)
{
	let rpfalse = {};
	rpfalse.cd = 1;
	rpfalse.msg = msg;
	return rpfalse
}

module.exports =
{
	login: login,
	getInfoOfTeacher: getInfoOfTeacher,
	getInfoAllGroupTeacherManage: getInfoAllGroupTeacherManage,
	getInfoOfGroup: getInfoOfGroup,
	getInfoAllExamTeacherMake: getInfoAllExamTeacherMake,
	getExam: getExam,
	getInfoAllExamAcceptForGroup: getInfoAllExamAcceptForGroup,
	createExamByTeacher: createExamByTeacher,
	getInfoOfStudent: getInfoOfStudent,

	exam: exam
}