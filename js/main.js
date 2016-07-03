 

 $( "#window" ).click(function() {
var sa = $(this).text();
$(this).text("");
$(this).addClass("ball");
setTimeout(function(){
    $("#modal").fadeIn();
    $("#close").css("width", "30px");
    $("#close").css("height", "30px");
        setTimeout(function(){
        $("#window").removeClass("ball");
        $("#window").text(sa);
        }, 500);
}, 800);
});

$( "#close" ).click(function() {
$("#modal").fadeOut();
$("#close").css("width", "0px");
$("#close").css("height", "0px");
});

var audioTypes={
        "mp3": "audio/mpeg",
        "ogg": "audio/ogg",
        "wav": "audio/wav"
    }

    function sound(sound){
        var audio_element = document.createElement('audio')
        if (audio_element.canPlayType){
            for (var i = 0; i < arguments.length; i++){
                var source_element = document.createElement('source')
                source_element.setAttribute('src', arguments[i])
                if (arguments[i].match(/\.(\w+)$/i))
                    source_element.setAttribute('type', audioTypes[RegExp.$1])
                audio_element.appendChild(source_element)
            }
            audio_element.load()
            audio_element.playclip=function(){
                audio_element.pause()
                audio_element.currentTime=0
                audio_element.play()
            }
            return audio_element
        }
    }

var tufaha  = sound('sounds/Tufaha.mp3')
var ahlan = sound('sounds/ahlan.mp3')


$(document).ready(function() {
    $("#my_audio").get(0).play();
});

$('#window').click(function(event){
tufaha.playclip();
 $( this ).off( event );
});


$('#window').click(function(event) {
    $('<p>تفاحةء<br>Tufaha</p><br>').appendTo('.back');
      $('<img src="img/apple.jpg">').appendTo('.back');
        $( this ).off( event );
});
