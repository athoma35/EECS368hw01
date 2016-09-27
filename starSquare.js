var termLine = function termLine(num)
{
	var line = "";
	for (var i = 0; i < num; i++)
	{
		line += "*";
	}
	chalk.println(line);
}

var midLine = function midLine(num)
{
	var line = "*";
	for (var i = 0; i < num - 2; i++)
	{
		line += " ";
	}
	line += "*";
	chalk.println(line);
}

var main = function ()
{
	chalk.println("Enter a side length");

	chalk.entrybox().then(function(o)
	{
		termLine(parseInt(o));
		for (var i = 0; i < parseInt(o) - 2; i++)
		{
			midLine(parseInt(o));
		}
		termLine(parseInt(o));
	});
}
