function validateForm() 
{
    var a = document.forms["myForm"]["Events"].value;
    var b = document.forms["myForm"]["title"].value;
    var c = document.forms["myForm"]["startD"].value;
    var d = document.forms["myForm"]["endD"].value;
    var e = document.forms["myForm"]["postD"].value;
    var x = true;


    switch( x == true)
    {

        case (a == "none"): alert("Event must be filled out");
                        return false;

        case (b == ""): alert("Title must be filled out");
                        return false;

        case (c == ""): alert("Start date must be filled out");
                        return false;

        case (d == ""): alert(" End date must be filled out");
                        return false;

        case (e == ""): alert("Posting date must be filled out");
                        return false;

        default: alert("Form Submitted!!");
                document.forms["myForm"]["Events"].value = "none";
                document.forms["myForm"]["title"].value = "";
                document.forms["myForm"]["startD"].value = "";
                document.forms["myForm"]["endD"].value = "";
                document.forms["myForm"]["postD"].value = "";
                return false;
    }

}