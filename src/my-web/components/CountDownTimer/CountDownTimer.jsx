import {useState,useEffect} from 'react';
import './timer.css';

const CountDownTimer = () =>{
   let [timeleft,settimeleft] = useState({})
    let timer ;

  useEffect(() => {
    timer = setInterval(() => {
      settimeleft( handleCountDown())
    }, 1000);
    return ()=>clearTimeout(timer);
  })

   const handleCountDown=()=>{
      let today = new Date();
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1); 
      tomorrow.setHours(0,0,0,0); 

      let difference = tomorrow.getTime() - today.getTime();
        let Left={};

        if(difference<=0){
           clearTimeout(timer);
        }else{

          let seconds = Math.floor(difference / 1000);
          let minutes = Math.floor(seconds / 60);
          let hours = Math.floor(minutes / 60);
          let days = Math.floor(hours / 24);

          hours %= 24;
          minutes %= 60;
          seconds %= 60;

         Left = {
              days: days,
              hours: hours,
              minutes: minutes,
              seconds: seconds
           }

           if((days==0 && hours==0) && (minutes==0 && seconds==0)){
            let name = localStorage.getItem("coupancode");
            if(name!==""){
             localStorage.setItem("coupancode","");
            }
          }

        }  
        return Left ;
   }

    return(
        <div className='flex-row col-gap-1rem timer-container'>
            <label> <i class="fa-solid fa-clock"></i> </label>
            <label>   {timeleft.days!==""?timeleft.days:""}  </label>
            <label> :: </label>
            <label>  {timeleft.hours!==""?timeleft.hours:""}</label>
            <label> :: </label>
            <label>   {timeleft.minutes!==""?timeleft.minutes:""} </label>
            <label> :: </label>
            <label>   {timeleft.seconds!==""?timeleft.seconds:""} </label> 
            <label> Remaining time </label>         
        </div>
    )
}



export default CountDownTimer