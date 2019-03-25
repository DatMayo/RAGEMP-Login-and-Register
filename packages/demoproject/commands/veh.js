/* global mp */

module.exports =
{
	'veh' : (player, carname) =>
	{
		if(!carname)
			return player.outputChatBox('Usage: /veh [carname]');

		const veh = mp.vehicles.new(mp.joaat(carname), player.position,
			{
				numberPlate: 'ADMIN',
				color: [[0, 0, 255], [0, 0, 255]],
				heading: player.heading,
			});
		player.putIntoVehicle(veh, -1);
	},
};
