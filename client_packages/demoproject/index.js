let menu;

mp.events.add('guiReady', () =>
{
	if (!menu)
	{
		menu = mp.browsers.new('package://demoproject/browser/login.html');
		mp.gui.cursor.show(true, true);
	}
});