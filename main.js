var n=parseInt(prompt("enter the number of rows of pattern(1 to 9)"));
for(let i=1;i<=n;i++)
{
	for(j=1;j<=i;j++)
	{
		document.write(i);
		document.write("&nbsp");
	}
	document.write("<br>");
}