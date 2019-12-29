
(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });


function downlode(){
    window.open('../imge/jinsonkjr.pdf', 'Download');
}




function reply_click(clicked_id,src)
  {
      var imgsrc=src.toString();
      console.log(imgsrc);
     var abc=clicked_id;
     var choopedid=imgsrc.split("imge/");
     console.log(choopedid[1]);
     var srcid="./imge/"+choopedid[1];
     console.log(srcid);
     
        document.getElementById("pop-img").src=srcid;
      
    



    



  }



function auofuse(){
   var vid= document.getElementById("myvideo");
   console.log(vid);
   vid.pause(); 
    
}
function auofuse1(){
    var vid= document.getElementById("myvideo1");
    console.log(vid);
    vid.pause(); 
     
 }
 function auofuse3(){
    var vid= document.getElementById("myvideo3");
    console.log(vid);
    vid.pause(); 
     
 }
 function playvideo2()
{
 
    var vid2=document.getElementById("myvideo");
    vid2.play();

}
function playvideo3()
{
 
    var vid2=document.getElementById("myvideo3");
    vid2.play();
}
    

function playvideo1()
{
 
    var vid2=document.getElementById("myvideo1");
    vid2.play();
    

}