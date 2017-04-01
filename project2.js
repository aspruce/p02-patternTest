<!--Alex Spruce -->
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function updateQ1()
{
  var userEntered = document.getElementById("Q1").value;
  if(isNaN(userEntered))
  {

  }
  else
  {
    setCookie( "Q1", userEntered, 5);
  }

}
function updateQ2()
{
  var userEntered = document.getElementById("Q2").value;
  if(isNaN(userEntered))
  {

  }
  else
  {
    setCookie( "Q2", userEntered, 5);
  }

}
function updateQ3()
{
  var userEntered = document.getElementById("Q3").value;
  if(isNaN(userEntered))
  {

  }
  else
  {
    setCookie( "Q3", userEntered, 5);
  }

}
function mainLoad()
{
  var temp;
  temp = getCookie("Q1");
  if (temp == "")
  {
    document.getElementById("Question_1").innerHTML = "Question 1 has not been answered.";
  }
  else
  {
    document.getElementById("Question_1").innerHTML = "Question 1 has been answered.";
  }
  temp = getCookie("Q2");
  if (temp == "")
  {
    document.getElementById("Question_2").innerHTML = "Question 2 has not been answered.";
  }
  else
  {
    document.getElementById("Question_2").innerHTML = "Question 2 has been answered.";
  }
  temp = getCookie("Q3");
  if (temp == "")
  {
    document.getElementById("Question_3").innerHTML = "Question 3 has not been answered.";
  }
  else
  {
    document.getElementById("Question_3").innerHTML = "Question 3 has been answered.";
  }
}
function resultsLoad()
{
  var temp;
  var correct = 0;
  temp = getCookie("Q1");
  if (temp == 14)
  {
    document.getElementById("Question_1_Results").innerHTML = "You got question 1 correct.";
    correct++;
  }
  else
  {
    document.getElementById("Question_1_Results").innerHTML = "You got question 1 incorrect.";
  }
  temp = getCookie("Q2");
  if (temp == 50)
  {
    document.getElementById("Question_2_Results").innerHTML = "You got question 2 correct.";
    correct++;
  }
  else
  {
    document.getElementById("Question_2_Results").innerHTML = "You got question 2 incorrect.";
  }
  temp = getCookie("Q3");
  if (temp == 147)
  {
    document.getElementById("Question_3_Results").innerHTML = "You got question 3 correct.";
    correct++;
  }
  else
  {
    document.getElementById("Question_3_Results").innerHTML = "You got question 3 incorrect.";
  }
  document.getElementById("Results").innerHTML = "You got " + correct + " correct.";
}
