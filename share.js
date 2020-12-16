var text = encodeURIComponent("W3SCHOOLS");
var url = "https://www.w3schools.com/";
var hash_tags = "My first web page";
var params = "menubar=no,toolbar=no,status=no,width=570,height=570"; // for window

var facebook = document.querySelector('.facebook');
var twitter = document.querySelector('.twitter');

facebook.addEventListener('click', function(ev) {
  console.log("hi");
    
    let shareUrl = `http://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(shareUrl,"NewWindow" , params);  
});
twitter.addEventListener('click', function(ev) {
  let shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}&via=${user_id}&hashtags=${hash_tags}`;
   window.open(shareUrl,"NewWindow" , params);
});
