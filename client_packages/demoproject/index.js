let menu;

mp.events.add('guiReady', () =>
{
	if (!menu)
	{
		menu = mp.browsers.new('package://demoproject/browser/login.html');
		mp.gui.cursor.show(true, true);
	}
});

/* Registration */
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

/* Login */
mp.events.add('PlayerLogin', (username, password) =>
{
	mp.events.callRemote('OnPlayerLogin', username, password);
});
mp.events.add('UserDoesNotExists', (username, password) =>
{
	menu.execute('$("#userDoesNotExists").modal()');
});

mp.events.add('WrongPassword', (username, password) =>
{
	menu.execute('$("#wrongPassword").modal()');
});

mp.events.add('LoginSuccessfull', (username, password) =>
{
	menu.destroy();
	mp.gui.cursor.show(false, false);
});