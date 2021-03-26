var pic=[
    "https://thumbs.dreamstime.com/z/father-portrait-handsome-man-shirt-jeans-sweater-wearing-glasses-cartoon-character-standing-dad-vector-illustration-86364395.jpg",
 "https://previews.123rf.com/images/julianka/julianka1706/julianka170600010/79990787-beautiful-and-cute-cartoon-mother-with-baby-happy-motherhood-illustration-for-mother-s-day-vector-il.jpg",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_O-W4XdTxd4pVfX52dbIvG2LcHWHJSsCMtw&usqp=CAU",
"https://i.quotev.com/img/q/u/16/10/25/b3vxqomoqd.jpg"
];
var names=["Vishnu Chaithanya","Anita","Ishitha","Samveda"];

  var i=0;
  function next(){
    i++;
    var number_of_family_members=4
    if(i>number_of_family_members){
      i=0;
    }
    document.getElementById("image").src=pic[i];
    document.getElementById("name").innerHTML=names[i];
   
  }