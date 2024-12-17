var QueryString = new URLSearchParams(window.location.search);
window.onload=function()
{  
    if (QueryString.has("Name" && "name" && "fname" && "sname") == true) {
        lbl1.innerHTML += QueryString.get("Name");
        lbl1.innerHTML += "&nbsp;" + QueryString.get("name");
        lbl1.innerHTML += "&nbsp;" + QueryString.get("fname");
        lbl1.innerHTML += "&nbsp;" + QueryString.get("sname") + "<br>";
    }

    if (QueryString.has("gender") == true) {
        lbl2.innerHTML = QueryString.get("gender") + "<br>";
    }

    if (QueryString.has("cast") == true) {
        lbl3.innerHTML = QueryString.get("cast") + "<br>";
    }

    if (QueryString.has("email") == true) {
        lbl4.innerHTML = QueryString.get("email") + "<br>";
    }

    if (QueryString.has("day" && "month" && "year") == true) {
        lbl5.innerHTML += QueryString.get("day") + "/";
        lbl5.innerHTML += QueryString.get("month") + "/";
        lbl5.innerHTML += QueryString.get("year") + "<br>";
    }
    if (QueryString.has("mobile") == true) {
        lbl6.innerHTML += QueryString.get("mobile") + "<br>";
    }
    if (QueryString.has("add") == true) {
        lbl7.innerHTML += QueryString.get("add") + "<br>";
    }

    if (QueryString.has("landline") == true) {
        lbl8.innerHTML += QueryString.get("landline") + "<br>";
    }

    if (QueryString.has("income") == true) {
        lbl9.innerHTML += QueryString.get("income") + "<br>";
    }

    if (QueryString.has("state") == true) {
        lbl10.innerHTML += QueryString.get("state") + "<br>";
    }

    if (QueryString.has("city") == true) {
        lbl11.innerHTML += QueryString.get("city") + "<br>";
    }

    if (QueryString.has("pincode") == true) {
        lbl12.innerHTML += QueryString.get("pincode") + "<br>";
    }

    if (QueryString.has("payment") == true) {
        lbl13.innerHTML += QueryString.get("payment") + "<br>";
    }

    if (QueryString.has("status") == true) {
        lbl14.innerHTML += QueryString.get("status") + "<br>";
    }

    if (QueryString.has("exp") == true) {
        lbl15.innerHTML += QueryString.get("exp") + "<br>";
    }





}