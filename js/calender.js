var dt = new Date();
function RenderDate(){
dt.setDate(1);
var day =dt.getDay();

var endDate = new Date(
    dt.getFullYear(),
    dt.getMonth() +1,
    0
).getDate();

var prevDate = new Date(
    dt.getFullYear(),
    dt.getMonth(),
    0
).getDate();
var months = ["January","February","March", "April","May","June","July","August","September", "October","November","December"];
var today =new Date();
document.getElementById("date_str").innerHTML = dt.toDateString();
document.getElementById("month").innerHTML = months[dt.getMonth()];

var cells ="";

for(x = day; x > 0; x--){
    cells += "<div class= 'prev_date'>" + (prevDate - x+1) + "</div>";
}
for(i=1; i<=30; i++){
    if(i==today.getDate() && dt.getMonth()==today.getMonth() ){
        cells += "<div class='today'>" +i + "</div>";
    }else{
        cells += "<div>" +i + "</div>";
    }

}

document.getElementsByClassName("days")[0].innerHTML = cells;
}
function moveDate(para){
    if(para =='prev'){
        dt.setMonth(dt.getMonth()-1);
        RenderDate();
    }else if(para == 'next'){
        dt.setMonth(dt.getMonth()+1);
        
    }
    RenderDate();
}
