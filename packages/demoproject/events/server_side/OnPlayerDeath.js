module.exports =
{
	'playerDeath' : (player, reason, killer) =>
	{
		const spawnPoints =
		[
			{ 'x': 351.0, 'y': -8.2, 'z': 91.4 },
			{ 'x': 234.7, 'y': -107.2, 'z': 74.5 },
			{ 'x': 525.2, 'y': 150.0, 'z': 58.7 },
			{ 'x': 41.3, 'y': 0.0, 'z': 116.1 },
			{ 'x': -318.1, 'y': -82.7, 'z': 54.1 },
		];
		const select = Math.floor(Math.random() * spawnPoints.length);
		const pos = spawnPoints[select];

		player.spawn(pos);
	},
};