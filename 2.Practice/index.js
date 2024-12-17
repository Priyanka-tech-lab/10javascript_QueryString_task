function btn1Click() {

    var t1=txt1.value;
    window.location.href="datatrans.html?Name="+t1; /*Name-variable*/
}

function btn2Click()
{
    var t1 = txt1.value;
    var t2 = txt2.value;
    window.location.href="datatrans.html?Name="+t1+"&Email="+t2;
}