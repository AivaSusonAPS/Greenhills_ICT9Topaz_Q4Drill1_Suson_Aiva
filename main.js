// consumption classifier

function classify_consumption() {

let num1 = document.getElementById('input1').value;


switch (true) { 
   case (num1 >=1 && num1 <=100):
      document.getElementById('output').innerHTML
   = ("Lifeline Consumer: Discounted electricity rates");
   break;

      case (num1 >= 101 && num1 <=200):
      document.getElementById('output').innerHTML
   = ("<i>Low Consumption:</i> Normal residential rate");
   break;

      case (num1 >= 201 && num1 <=300):
      document.getElementById('output').innerHTML
   = ("<u>Average Consumption:</u> Typical electricity usage");
   break;

      case (num1 >= 301 && num1 <=500):
      document.getElementById('output').innerHTML
   = ("<b>High Consumption:</b> Higher electricity usage");
   break;

      case (num1 >= 501):
      document.getElementById('output').innerHTML
   = ("<u><b>Very High Consumption:</b></u> Heavy electricity users");
   break;
   
      case (num1 <= -1):
      window.alert("Please input a non-negative number.");
   break;
   

           default:
            document.getElementById('display').innerHTML = "Invalid Input. Try again";
            break;
}

}

