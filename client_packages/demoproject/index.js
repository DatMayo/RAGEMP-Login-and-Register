let menu;

mp.events.add('guiReady', () =>
{
	if (!menu)
	{
		menu = mp.browsers.new('package://demoproject/browser/login.html');
		mp.gui.cursor.show(true, true);
	}
});

mp.events.add('PlayerRegister', (username, password) =>
{
	mp.events.callRemote('OnPlayerRegister', username, password);
});

mp.events.add('UserAllreadyExists', (username, password) =>
{
	menu.execute('$("#userExists").modal()');
});

mp.events.add('RegistrationSuccessfull', (username, password) =>
{
	menu.execute('$("#registrationSuccessfull").modal()');
});