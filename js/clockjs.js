setInterval(() => {
    d = new Date();
   hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
        hr_time = 30 * hr + min / 2;
        min_time = 6 * min;
         sec_time = 6 * sec;
      
         hour.style.transform = `rotate(${hr_time}deg)`;
         minute.style.transform = `rotate(${min_time}deg)`;
         second.style.transform = `rotate(${sec_time}deg)`;

},1000);
setInterval(() =>{
date=new Date();
hr=date.getHours();
min=date.getMinutes();
sec=date.getSeconds();
dyear=date.getFullYear();
dmonth=date.getMonth();
dday=date.getDate();
document.querySelector("#Dhour").textContent=hr;
document.querySelector("#Dmin").textContent=min;
document.querySelector("#Dsec").textContent=sec;
document.querySelector("#date").textContent=`${dday}:${dmonth+1}:${dyear}`;
});