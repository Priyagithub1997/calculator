function displayvalue(val)
{
document.getElementById("screen").value = document.getElementById("screen").value + val;

}
function displayclear()
{
    document.getElementById("screen").value ="";
}

function calculate()
{
    var userinput=document.getElementById("screen").value;
    var result=eval(userinput);
    document.getElementById("screen").value=result;
}