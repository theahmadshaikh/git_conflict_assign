let n=17;
let factor=0
for(let i=2;i<(n**(1/2));i++)
{
	if(!(i%2))
	{
	factor++;
	}
}

if(factor==2)
{
console.log("Prime");
}
else
{
console.log("Not Prime");
}