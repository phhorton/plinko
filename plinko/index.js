<html>
<head>

<script  src="http://code.jquery.com/jquery-3.2.1.min.js"
         integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
         crossorigin="anonymous">
</script>
<script>
$(document).ready(function() {
  var logedIn;
  var theScore;
  logedIn = 0;
  theScore = 0;
  var positionArray = new Array(10);
  for(var i = 0; i < 10; i++){
    positionArray[i] = new Array(2);
  }
  
  $("#UserNameSubmit").on-click(function{
    var url = "getuserscore?q="+$("#UserName").val();
    $.getJSON(url,function(data){
      theScore += data[1];
      $("UserSoreAccumulated").html(theScore);
    })

    .done(function() { console.log('getJSON request succeeded!'); })
    .fail(function() {
       
      console.log('fail to find, create new user'); 
      console.log("incoming "+jqXHR.responseText);
    })
    logedIn = 1;
    
    .always(function() { console.log('getJSON request ended!');});
  });

  $("#StarButton").on-click(function(){
    var holdH = $("#SelectedSlot").val();
    var holdV = 1;
    var H = Number(holdx);
    var V = Number(holdy);
    positionArray[0][0] = H;
    positionArray[0][1] = V; 
    for(var i = 1; i < 10; i++ ){
      var randomNum = Math.floor(Math.random() * 2);
      V = V + 1;
      var smallerRow = V % 2;
      if(smallerRow == 0){
        if(H == 1){
          H = H + 0.5;
        }
        else if( H == 6){
          H = H - 0.5;
        }
        else{
          if(randomnNum == 1){
            H = H + 0.5;
          }
          else{
            H = H - 0.5;
          }
        }
      }
      else{
        if(randomnNum == 1){
          H = H + 0.5;
        }
        else{
          H = H - 0.5;
        }
      }
      positionArray[i][0] = H;
      positionArray[i][1] = Y;    
    }
    if(H == 1.5){
      theScore = theScore + 500;
    }
    else if (H == 2.5){
      theScore = theScore + 0;
    }
    else if (H == 3.5){
      theScore  = theScore + 1000;
    }
    else if (H == 4.5){
      theScore = theScore + 0;
    } 
    else if (H == 5.5){
      theScore = theScore + 500;
    }
  });

}

</script>


</head>

  <p>User name: <input id = "UserName" type="text" value=""><br></p>
  <input id = "UserNameSubmit"  type="submit" value="Submit">
    
  <div id = "ShowScore" >
  <p> Your score: <span id = "UserSoreAccumulated"></span></p> 
  </div>
  
  <div id = "ChooseBeginningPlace">
  <p> Which slot do you want to drop your chip in?<p>
  <select id = "SelectedSlot">
    <option value=1>1</option>
    <option value=2>2</option>
    <option value=3>3</option>
    <option value=4>4</option>
    <option value=5>5</option>
    <option value=6>6</option>
  </select>
  <button id = "StartButton" type = "button" on-click="StartDropping" >Click to start</button>
  </div>



  <div id = "ShowBoard">
  
  
  <div>

</html>
