var text = encodeURIComponent("Follow JavaScript Jeep form Amazing JavaScript Tutorial");
var url = "https://medium.com/@jagathishsaravanan/"; 
var user_id = "jagathish1123";
var hash_tags = "JS,JavaScript,100DaysOfCode,Programming";
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
