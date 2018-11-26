const keyAPI = "79KTIDWR8NE2G8CP6I5JBGVAUCFYNWU3RH";

const httpProvider = "https://kovan.infura.io/"+keyAPI;

const addressAccount = '0xE50ad55eE3F4E1A3F50b8d1617c3edaCFd4eF1Bc';
const addressGroup = '0x9376871a993Bfa8800BE196c2c93c1809db9b823';
const addressJoin = '0x70BaC1C4D61A0ad10a494448e5D310a118e62a50';
const addressManage = '0x5c91641Bb07A53a7aEE3740b05EC737428C15fE7';
const addressManageGroup = '0xBa53eA8e6A00cCE3595A646606Caf818c36fFf38';

const addressExam = '0x86847AA2Efb2581a7B2F4f7F22284545e000AEc6';
const addressMake = '0xAF67Ca3723Bf84D43646411009E926b4dE88c285';
const addressDo = '0x3F13163584c690b73eE5Dbb2aA715365313AA88f';
const addressManageExamGet = '0xB9159E5C7b1Bab448FB303E74Cb11e70cb2Cb496';
const addressManageExamSet = '0x7906A147B0d17166742143cD2B113eA3b5dDd247';

const addressFrom = '0x5609c3ece14be63dff0bc314610990608bc6a7de';
const privateKey = '0xB75C5664625CADD6D18AAC559D54064310C4A82F8A90E7D61ECC61DAF5A9816F';

const gasPrice = '50000000000';
const gasLimit = 6000000;

function transaction(ffrom, tto, ddata)
{
	let transactionObject =
	{
		gas: gasLimit,
	    data: ddata,
	    from: ffrom,
	    to: tto
	};
	return transactionObject;
}

function infoTransaction(receipt)
{
	var tx = {};
	tx.status = receipt.status
	tx.transactionHash = receipt.transactionHash
	tx.blockNumber = receipt.blockNumber
	tx.transactionIndex = receipt.transactionIndex

	return tx;
}

function log(data)
{
	var d = new Date();
	let date = d.toLocaleDateString().split('/');
	const year = date[2];
	const mounth = date[0].length > 1 ? date[0] : '0'+date[0];
	const day = date[1].length > 1 ? date[1] : '0'+date[1];
	let time = d.toLocaleTimeString().split(' ');
	let stamp = time[0].split(':');
	const hour = stamp[0].length > 1 ? stamp[0] : '0'+stamp[0];
	const minute = stamp[1].length > 1 ? stamp[1] : '0'+stamp[1];
	const second = stamp[2].length > 1 ? stamp[2] : '0'+stamp[2];
    console.log('['+year+'/'+mounth+'/'+day+'-'+time[1]+':'+hour+':'+minute+':'+second+']'+': '+data);
}

function getDate()
{
	var d = new Date();
	let date = d.toLocaleDateString().split('/');
	const year = date[2];
	const mounth = date[0].length > 1 ? date[0] : '0'+date[0];
	const day = date[1].length > 1 ? date[1] : '0'+date[1];
	time1 = year+'/'+mounth+'/'+day;
    return time1;
}

function getTime()
{
	var d = new Date();
	let time = d.toLocaleTimeString().split(' ');
	let stamp = time[0].split(':');
	const hour = stamp[0].length > 1 ? stamp[0] : '0'+stamp[0];
	const minute = stamp[1].length > 1 ? stamp[1] : '0'+stamp[1];
	const second = stamp[2].length > 1 ? stamp[2] : '0'+stamp[2];
    return time[1]+':'+hour+':'+minute+':'+second;
}


const abiAccount = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "paw",
				"type": "string"
			},
			{
				"name": "pw",
				"type": "string"
			}
		],
		"name": "setPassSUser",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "paw",
				"type": "string"
			},
			{
				"name": "pw",
				"type": "string"
			},
			{
				"name": "n",
				"type": "string"
			},
			{
				"name": "p",
				"type": "string"
			},
			{
				"name": "ic",
				"type": "string"
			}
		],
		"name": "editTUser",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLengthTUser",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			}
		],
		"name": "getPhoneSUser",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "user",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "phone",
				"type": "string"
			},
			{
				"name": "ic",
				"type": "string"
			}
		],
		"name": "regTeacher",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			}
		],
		"name": "getNameSUser",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getSUser",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			}
		],
		"name": "userTExist",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLengthSUser",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "user",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			}
		],
		"name": "login",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "pw",
				"type": "string"
			}
		],
		"name": "deleteSUser",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getTUser",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "pw",
				"type": "string"
			},
			{
				"name": "p",
				"type": "string"
			}
		],
		"name": "setPhoneTUser",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "user",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "phone",
				"type": "string"
			}
		],
		"name": "regStudent",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			}
		],
		"name": "userSExist",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "pw",
				"type": "string"
			},
			{
				"name": "ic",
				"type": "string"
			}
		],
		"name": "setIcTUser",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			}
		],
		"name": "getPhoneTUser",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			}
		],
		"name": "getIcTUser",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "pw",
				"type": "string"
			},
			{
				"name": "p",
				"type": "string"
			}
		],
		"name": "setPhoneSUser",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "pw",
				"type": "string"
			},
			{
				"name": "n",
				"type": "string"
			}
		],
		"name": "setNameTUser",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			}
		],
		"name": "getNameTUser",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "pw",
				"type": "string"
			}
		],
		"name": "deleteTUser",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "paw",
				"type": "string"
			},
			{
				"name": "pw",
				"type": "string"
			},
			{
				"name": "n",
				"type": "string"
			},
			{
				"name": "p",
				"type": "string"
			}
		],
		"name": "editSUser",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "paw",
				"type": "string"
			},
			{
				"name": "pw",
				"type": "string"
			}
		],
		"name": "setPassTUser",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "pw",
				"type": "string"
			},
			{
				"name": "n",
				"type": "string"
			}
		],
		"name": "setNameSUser",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	}
];
const abiGroup = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_adr",
				"type": "address"
			}
		],
		"name": "setOtherContract",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAllIdGroup",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "deleteGroup",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLengthIdGroup",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "n",
				"type": "string"
			}
		],
		"name": "getIdNameGroup",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "existIdGroup",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			},
			{
				"name": "n",
				"type": "string"
			}
		],
		"name": "editGroup",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "n",
				"type": "string"
			}
		],
		"name": "existNameGroup",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "n",
				"type": "string"
			}
		],
		"name": "addGroup",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "item",
				"type": "uint256"
			}
		],
		"name": "getIdGroup",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getNameGroup",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];
const abiJoin = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "g",
				"type": "uint256"
			}
		],
		"name": "groupAddUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "g",
				"type": "uint256"
			}
		],
		"name": "userRefuseGroup",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			}
		],
		"name": "getLengthJGroup",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getJGroup",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_adr",
				"type": "address"
			}
		],
		"name": "setOtherContract",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "g",
				"type": "uint256"
			}
		],
		"name": "userJoinGruop",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			}
		],
		"name": "getAllGroupOfUser",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "g",
				"type": "uint256"
			}
		],
		"name": "getLengthJUser",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "g",
				"type": "uint256"
			}
		],
		"name": "groupRefuseUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "g",
				"type": "uint256"
			},
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getJUser",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "g",
				"type": "uint256"
			}
		],
		"name": "getJStatus",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "g",
				"type": "uint256"
			}
		],
		"name": "deleteAllUserInGroup",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];
const abiManage = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "g",
				"type": "uint256"
			}
		],
		"name": "addManage",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "g",
				"type": "uint256"
			}
		],
		"name": "deleteManage",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			}
		],
		"name": "getAllIdGroupTeacher",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_adr",
				"type": "address"
			}
		],
		"name": "setOtherContract",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "g",
				"type": "uint256"
			}
		],
		"name": "getStatus",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getGroup",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "uint256"
			}
		],
		"name": "groupExist",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "g",
				"type": "uint256"
			}
		],
		"name": "getTeacher",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "g",
				"type": "uint256"
			}
		],
		"name": "getDate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			}
		],
		"name": "getLengthGroupTeacherManage",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];
const abiManageGroup = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "tuser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "gname",
				"type": "string"
			}
		],
		"name": "createGroupByTeacher",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tuser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "gid",
				"type": "uint256"
			}
		],
		"name": "deleteGroupByTeacher",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tuser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "gid",
				"type": "uint256"
			},
			{
				"name": "nm",
				"type": "string"
			}
		],
		"name": "editGroupByTeacher",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tuser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "gid",
				"type": "uint256"
			},
			{
				"name": "suser",
				"type": "string"
			}
		],
		"name": "groupAddOrInviteStudentByTeacher",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tuser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "gid",
				"type": "uint256"
			},
			{
				"name": "suser",
				"type": "string"
			}
		],
		"name": "groupDeleteOrRefuseStudentByTeacher",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "suser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "gid",
				"type": "uint256"
			}
		],
		"name": "studentExitOrRefuseGroup",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "suser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "gid",
				"type": "uint256"
			}
		],
		"name": "studentJoinOrAcceptGroup",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

const abiExam = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "tuser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "q",
				"type": "uint256"
			},
			{
				"name": "l",
				"type": "uint256"
			}
		],
		"name": "setLengthSelectionOfQuestionInExam",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "existTimeEndOfExam",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getLengthAnswerOfExam",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLengthExam",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "n",
				"type": "string"
			}
		],
		"name": "existNameExam",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getTypeOfExam",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "deleteExam",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getAnswerOfExam",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "q",
				"type": "uint256"
			},
			{
				"name": "s",
				"type": "uint256"
			}
		],
		"name": "existSelectionOfQuestionInExam",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tuser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "i",
				"type": "uint256"
			},
			{
				"name": "aw",
				"type": "uint256"
			}
		],
		"name": "addOrSetAnswerOfExam",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getPublicOfExam",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tuser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "nn",
				"type": "string"
			}
		],
		"name": "editNameExam",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "existTimeStartOfExam",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getNameOfExam",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getTimeStartOfExam",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tuser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "q",
				"type": "uint256"
			},
			{
				"name": "s",
				"type": "uint256"
			},
			{
				"name": "ns",
				"type": "string"
			}
		],
		"name": "addOrSetSelectionOfQuestionInExam",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tuser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "aw",
				"type": "uint256[]"
			}
		],
		"name": "addOrSetAllAnswerOfExam",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tuser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "len",
				"type": "uint256"
			}
		],
		"name": "setLengthQuestionOfExam",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "q",
				"type": "uint256"
			},
			{
				"name": "s",
				"type": "uint256"
			}
		],
		"name": "getSelectionOfQuestionInExam",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getAllAnswerOfExam",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getTimeEndOfExam",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "existIdExam",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "s",
				"type": "uint256"
			}
		],
		"name": "existQuestionOfExam",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_adr1",
				"type": "address"
			},
			{
				"name": "_adr2",
				"type": "address"
			}
		],
		"name": "setOtherContract",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "n",
				"type": "string"
			}
		],
		"name": "addExam",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tuser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "i",
				"type": "uint256"
			},
			{
				"name": "nq",
				"type": "string"
			}
		],
		"name": "addOrSetQuestionOfExam",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getLengthQuestionOfExam",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "q",
				"type": "uint256"
			}
		],
		"name": "getLengthSelectionOfQuestionInExam",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tuser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "timeS",
				"type": "uint256"
			},
			{
				"name": "timeE",
				"type": "uint256"
			},
			{
				"name": "subject",
				"type": "string"
			},
			{
				"name": "p",
				"type": "bool"
			}
		],
		"name": "setGeneralExam",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "n",
				"type": "string"
			}
		],
		"name": "getIdOfExam",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getQuestionOfExam",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getIdExam",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tuser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "len",
				"type": "uint256"
			}
		],
		"name": "setLengthAnswerOfExam",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAllIdExam",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];
const abiMake = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			}
		],
		"name": "getLengthListExam",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "e",
				"type": "uint256"
			}
		],
		"name": "getStatusTeacherExam",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getIdExamTeacherMake",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "uint256"
			}
		],
		"name": "examExistInMake",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "t",
				"type": "string"
			},
			{
				"name": "e",
				"type": "uint256"
			}
		],
		"name": "deleteMake",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "t",
				"type": "string"
			},
			{
				"name": "e",
				"type": "uint256"
			},
			{
				"name": "g",
				"type": "uint256[]"
			},
			{
				"name": "acc",
				"type": "bool[]"
			}
		],
		"name": "getAllAcceptGroupForExam",
		"outputs": [
			{
				"name": "",
				"type": "bool[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "t",
				"type": "string"
			},
			{
				"name": "e",
				"type": "uint256"
			},
			{
				"name": "g",
				"type": "uint256[]"
			},
			{
				"name": "acc",
				"type": "bool[]"
			}
		],
		"name": "setAllAcceptGroupForExam",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "t",
				"type": "string"
			},
			{
				"name": "e",
				"type": "uint256"
			},
			{
				"name": "g",
				"type": "uint256"
			},
			{
				"name": "acc",
				"type": "bool"
			}
		],
		"name": "setAcceptGroupForExam",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "t",
				"type": "string"
			},
			{
				"name": "e",
				"type": "uint256"
			},
			{
				"name": "g",
				"type": "uint256"
			}
		],
		"name": "getAcceptGroupForExam",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			}
		],
		"name": "getAllIdExamTeacherMake",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "t",
				"type": "string"
			},
			{
				"name": "e",
				"type": "uint256"
			}
		],
		"name": "addMake",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_adr1",
				"type": "address"
			},
			{
				"name": "_adr2",
				"type": "address"
			}
		],
		"name": "setOtherContract",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "e",
				"type": "uint256"
			}
		],
		"name": "getDate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "e",
				"type": "uint256"
			}
		],
		"name": "getTeacherExam",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];
const abiDo =[
	{
		"constant": true,
		"inputs": [
			{
				"name": "g",
				"type": "uint256"
			},
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getUserInDo",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "eid",
				"type": "uint256[]"
			}
		],
		"name": "getAllMaskStudentDo",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			}
		],
		"name": "getLengthExamInDo",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getExamInDo",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "e",
				"type": "uint256"
			},
			{
				"name": "m",
				"type": "uint256"
			},
			{
				"name": "aw",
				"type": "int256[]"
			}
		],
		"name": "add",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "g",
				"type": "uint256"
			}
		],
		"name": "getLengthUserInDo",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_adr1",
				"type": "address"
			},
			{
				"name": "_adr2",
				"type": "address"
			}
		],
		"name": "setOtherContract",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "e",
				"type": "uint256"
			}
		],
		"name": "getMask",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "e",
				"type": "uint256"
			}
		],
		"name": "getAnswer",
		"outputs": [
			{
				"name": "",
				"type": "int256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			},
			{
				"name": "g",
				"type": "uint256"
			}
		],
		"name": "getStatusInDo",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "u",
				"type": "string"
			}
		],
		"name": "getAllExamStudentDo",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];
const abiManageExamSet = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "tuser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "ename",
				"type": "string"
			}
		],
		"name": "createExamByTeacher",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tuser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "eid",
				"type": "uint256"
			}
		],
		"name": "deleteExamByTeacher",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "suser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "eid",
				"type": "uint256"
			},
			{
				"name": "aw",
				"type": "int256[]"
			}
		],
		"name": "doExamByStudent",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tuser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "eid",
				"type": "uint256"
			},
			{
				"name": "gid",
				"type": "uint256"
			},
			{
				"name": "ac",
				"type": "bool"
			}
		],
		"name": "setAcceptGroupForExam",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tuser",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "eid",
				"type": "uint256"
			},
			{
				"name": "gid",
				"type": "uint256[]"
			},
			{
				"name": "ac",
				"type": "bool[]"
			}
		],
		"name": "setAllAcceptGroupForExam",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "aw",
				"type": "int256[]"
			},
			{
				"name": "qs",
				"type": "uint256[]"
			}
		],
		"name": "compareAnswer",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	}
];
const abiManageExamGet = [
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "user",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "eid",
				"type": "uint256"
			}
		],
		"name": "getAllAnswerOfExam",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "user",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "eid",
				"type": "uint256"
			},
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getAnswerOfExam",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "user",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "eid",
				"type": "uint256"
			},
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getQuestionOfExam",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "user",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "eid",
				"type": "uint256"
			},
			{
				"name": "q",
				"type": "uint256"
			},
			{
				"name": "s",
				"type": "uint256"
			}
		],
		"name": "getSelectionOfQuestionInExam",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getTimeStamp",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

module.exports = 
{
	keyAPI: keyAPI,

	httpProvider: httpProvider,

	addressAccount: addressAccount,
	addressGroup: addressGroup,
	addressJoin: addressJoin,
	addressManage: addressManage,
	addressManageGroup: addressManageGroup,

	addressExam: addressExam,
	addressMake: addressMake,
	addressDo: addressDo,
	addressManageExamSet: addressManageExamSet,
	addressManageExamGet: addressManageExamGet,
	
	addressFrom: addressFrom,
	privateKey: privateKey,

	abiAccount: abiAccount,
	abiGroup: abiGroup,
	abiJoin: abiJoin,
	abiManage: abiManage,
	abiManageGroup: abiManageGroup,

	abiExam: abiExam,
	abiMake: abiMake,
	abiDo: abiDo,
	abiManageExamGet: abiManageExamGet,
	abiManageExamSet: abiManageExamSet,

	gasPrice: gasPrice,
	gasLimit: gasLimit,

	createTransaction: transaction,
	infoTransaction: infoTransaction,
	getDate: getDate,
	getTime: getTime,
	log: log
}