function btn1Click() {

    /*for name*/
    var t1 = txt1.value;
    var t2 = txt2.value;
    var t3 = txt3.value;
    var t4 = txt4.value;

    /*gender*/
    var gender = 0;
    if (rdo1.checked == true) {
        gender = "Male";
    }
    else if (rdo2.checked == true) {
        gender = "Female";
    }
    else {
        gender = "Please Select Any Option";
    }

    /*cast*/
    var cast = drop1.value;

    /*email*/
    var email = txt5.value;

    /*DOB*/
    var day = drop2.value;
    var month = drop3.value;
    var year = drop4.value;

    /*mobile number*/
    var mobile = txt6.value

    /*address*/
    var add = txt7.value;

    /*landline*/
    var landline = txt8.value;

    /*income*/
    var income = txt9.value;

    /*state*/
    var state = drop5.value;

    /*city*/
    var city = drop6.value;

    /*pincode*/
    var pincode = txt10.value;

    /*payment*/
    var payment = drop7.value;

    /*emp status*/
    var status = 0;
    if (rdo3.checked == true) {
        status = "NO";
    }
    else if (rdo4.checked == true) {
        status = "YES";
    }

    /*exp*/
    var exp = txt11.value;





     window.location.href="2datatrans.html?Name="+t1+"&name="+t2+"&fname="+t3+"&sname="+t4+"&gender="+gender
                                         +"&cast="+cast+"&email="+email+"&day="+day+"&month="+month+"&year="+year
                                         +"&mobile="+mobile +"&add="+add+"&landline="+landline+"&income="+income
                                         +"&state="+state+"&city="+city+"&pincode="+pincode+"&payment="+payment
                                         +"&status="+status+"&exp="+exp;
    
}