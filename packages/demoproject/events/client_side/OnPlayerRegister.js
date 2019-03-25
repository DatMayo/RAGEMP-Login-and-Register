const mysql = require('mysql2');

module.exports =
{
	'OnPlayerRegister' : (player, username, password) =>
	{
		const connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			database: 'demoproject',
		});

		connection.query(
			'SELECT * FROM `accounts` WHERE `username` = ?', username, (err, results, fields) =>
			{
				if(err)
					return;

				if(results.length > 0)
					return player.call('UserAllreadyExists');

				connection.query(
					'INSERT INTO `accounts` (username, password) VALUES (?, ?)', [username, password], (error, res) =>
					{
						if(error)
							return;

						return player.call('RegistrationSuccessfull');
					});
			}
		);
	},
};
