$(document).ready(function() {
  var logedIn;
  var theScore;
  logedIn = 0;
  theScore = 0;
  var positionArray = new Array(10);
  for(var i = 0; i < 10; i++){
    positionArray[i] = new Array(2);
  }
  
  $("#UserNameSubmit").click(function(){
    var url = "getuserscore?q="+$("#UserName").val();
    $.getJSON(url,function(data){
      theScore += data[1];
      $("#UserSoreAccumulated").html(theScore);
    })

    .done(function() { console.log('getJSON request succeeded!'); })
    .fail(function() { 
      // console.log('fail to find, create new user'); 
      // console.log("incoming "+jqXHR.responseText);
    })
    logedIn = 1;    
  });

  $("#StartButton").click(function(){
    var holdH = $("#SelectedSlot").val();
    var holdV = 1;

    console.log("droping");

    var H = Number(holdH);
    var V = Number(holdV);
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
          if(randomNum == 1){
            H = H + 0.5;
          }
          else{
            H = H - 0.5;
          }
        }
      }
      else{
        if(randomNum == 1){
          H = H + 0.5;
        }
        else{
          H = H - 0.5;
        }
      }
      positionArray[i][0] = H;
      positionArray[i][1] = V;    
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

    console.log(theScore);

    $("#UserSoreAccumulated").text(theScore);

  });

});
