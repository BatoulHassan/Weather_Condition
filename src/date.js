export const dateToStr =(date)=>{
    var today=new Date(date);
    var month=today.toLocaleString('en-us',{month:'short'});
    var weekday=today.toLocaleString('en-us',{weekday:'short'});
    var day=today.getDate();
    var today_string=weekday+', '+day+' '+month;
  
    return today_string;
  }

  export const currentDate =()=>{
    var today=new Date();
    var month=today.toLocaleString('en-us',{month:'short'});
    var weekday=today.toLocaleString('en-us',{weekday:'short'});
    var day=today.getDate();
    var today_string=weekday+', '+day+' '+month;
  
    return today_string;
  }