const users = [
	{
	  username: 'David',
	  status: 'online',
	  lastActivity: 10
	},
	{
	  username: 'Lucy',
	  status: 'offline',
	  lastActivity: 22
	},
	{
          username: 'Bob',
          status: 'online',
          lastActivity: 104
        }
];

const onlineUsers=users.filter((item) => item.status==='online');
//console.log(onlineUsers);
const onlineUsersNames=onlineUsers.map((item) => item.username).join(', ');
//console.log(onlineUsersNames);
alert(`Сейчас в онлайн следующие пользователи: ${onlineUsersNames}`);