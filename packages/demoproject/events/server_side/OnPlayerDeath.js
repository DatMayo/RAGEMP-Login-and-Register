module.exports =
{
	'playerDeath' : (player, reason, killer) =>
	{
		player.spawn(player.position);
	},
};