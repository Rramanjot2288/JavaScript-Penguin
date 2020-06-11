$(document).ready( function() {
    
    var Count = 0;
    var maximum_score = 0;
    
    newScore(Count, maximum_score);
    
     var divs = $("#gameholder").children("div");
     random(divs);
    
    $("#yeti").mousedown(function() 
        
        {
        
        $("#yeti").css('background-image', 'url("images/yeti.png")');
            alert("Game is Over!!!!!");
        
        $('#yeti_voice').get(0).play();
        
        document.getElementById('yeti').style.pointerEvents = 'none';
        
        imageDefault();
        
        changeBehaviour();
        
        setTimeout(function()
                  
                   {
            
            $("#yeti").css('background-image', 'url("images/mound_9.png")');
            document.getElementById('yeti').style.pointerEvents = 'auto';
            Count = 0;
            newScore(Count,maximum_score);
            random(divs);
        
        }, 100);
    
    });
    
    $("#penguin1").mousedown(function()
        {
        $('#penguin_voice').get(0).play();
        $("#penguin1").css('background-image', 'url("images/penguin_1.png")');
        Count = Count + 1;  
        newScore(Count, maximum_score);
        document.getElementById('penguin1').style.pointerEvents = 'none';
    });
    
    $("#penguin2").mousedown(function(){
        
        $('#penguin_voice').get(0).play();
        $("#penguin2").css('background-image', 'url("images/penguin_2.png")');
        Count = Count + 1;  
        newScore(Count, maximum_score);
        document.getElementById('penguin2').style.pointerEvents = 'none';
    });
    
    $("#penguin3").mousedown(function(){
        $('#penguin_voice').get(0).play();
        $("#penguin3").css('background-image', 'url("images/penguin_3.png")');
        Count = Count + 1;  
        newScore(Count, maximum_score);
        document.getElementById('penguin3').style.pointerEvents = 'none';
    });
    
    $("#penguin4").mousedown(function(){
        $('#penguin_voice').get(0).play();
        $("#penguin4").css('background-image', 'url("images/penguin_4.png")');
        Count = Count + 1;  
        newScore(Count, maximum_score);
        document.getElementById('penguin4').style.pointerEvents = 'none';
    });
    
    $("#penguin5").mousedown(function(){
        $('#penguin_voice').get(0).play();
        $("#penguin5").css('background-image', 'url("images/penguin_5.png")');
        Count = Count + 1;  
        newScore(Count, maximum_score);
        document.getElementById('penguin5').style.pointerEvents = 'none';
    });
    
    $("#penguin6").mousedown(function(){
        $('#penguin_voice').get(0).play();
        $("#penguin6").css('background-image', 'url("images/penguin_6.png")');
        Count = Count + 1;  
        newScore(Count, maximum_score);
        document.getElementById('penguin6').style.pointerEvents = 'none';
    });
    
    $("#penguin7").mousedown(function(){
        $('#penguin_voice').get(0).play();
        $("#penguin7").css('background-image', 'url("images/penguin_7.png")');
        Count = Count + 1;  
        newScore(Count, maximum_score);
        document.getElementById('penguin7').style.pointerEvents = 'none';
    });
    
    $("#penguin8").mousedown(function(){
       $('#penguin_voice').get(0).play();
        $("#penguin8").css('background-image', 'url("images/penguin_8.png")');
        Count = Count + 1;  
        newScore(Count, maximum_score);
        document.getElementById('penguin8').style.pointerEvents = 'none';
    });
  
    function newScore (Count, max){
        if(max < Count){
            maximum_score = Count;
        }
        $("#score").empty();
        $("#score").append("Count-"+Count+"\nHigh-Score-"+maximum_score);
    }
    
    function imageDefault(){
        $("#penguin1").css('background-image', 'url("images/mound_1.png")');
        $("#penguin2").css('background-image', 'url("images/mound_2.png")');
        $("#penguin3").css('background-image', 'url("images/mound_3.png")');
        $("#penguin4").css('background-image', 'url("images/mound_4.png")');
        $("#penguin5").css('background-image', 'url("images/mound_5.png")');
        $("#penguin6").css('background-image', 'url("images/mound_6.png")');
        $("#penguin7").css('background-image', 'url("images/mound_7.png")');
        $("#penguin8").css('background-image', 'url("images/mound_8.png")');
    }
    
    function changeBehaviour()
    {
        document.getElementById('penguin1').style.pointerEvents = 'auto';
        document.getElementById('penguin2').style.pointerEvents = 'auto';
        document.getElementById('penguin3').style.pointerEvents = 'auto';
        document.getElementById('penguin4').style.pointerEvents = 'auto';
        document.getElementById('penguin5').style.pointerEvents = 'auto';
        document.getElementById('penguin6').style.pointerEvents = 'auto';
        document.getElementById('penguin7').style.pointerEvents = 'auto';
        document.getElementById('penguin8').style.pointerEvents = 'auto';
    }
    
  
    function random(array) 
    
    {
      
        var currentIndex = array.length, temporaryValue, indexRandom ;

      while (0 !== currentIndex) {

        indexRandom = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[indexRandom];
        array[indexRandom] = temporaryValue;
      
      }

      for(i=0;i<array.length;i++){
            
          $('#gameholder').append($(array[i]));
        }
    }

});