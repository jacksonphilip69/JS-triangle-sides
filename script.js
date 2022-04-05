var side1= parseInt(prompt('Enter the side1'))
var side2= parseInt(prompt('Enter the side2'))
var side3= parseInt(prompt('Enter the side3'))
if (side1==side2&&side1!=side3|| side2==side1&&side2!=side3||side3!=side1&&side3!=side2 ) 
{
    console.log("It is a isosceles Triangle");   
}
else if (side1==side2&&side1==side3|| side2==side1&&side2==side3||side3==side1&&side3==side2)
{
console.log("It is a Equilateral Triangle");
}
else if (side1!=side2&&side1!=side3|| side2!=side1&&side2!=side3||side3!=side1&&side3!=side2)
{
    console.log("It is a Scalene Triangle");
}