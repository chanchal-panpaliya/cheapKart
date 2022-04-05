import "./Modal.css";
import SharePage from "../SharePage/SharePage";
import { useState } from "react";

export const Modal =({data,modalClose})=>{
    return(
        <div className='modal'>
        <div className="modal-container">  
            <div className='modal-right-side'>
                <div className='modal-right-flex-row'>
                   <SharePage data={data}/>
                </div> 
            </div>
            <i className='material-icons modal-close' onClick={modalClose}> x </i>
        </div>
    </div> 
    )
}

export const CouponCodeModal=({modalClose})=>{
    const [count,setcount]=useState(3);
    const [randomtext,setrandomtext]=useState("");
    const [getinput,setinput]=useState("");
    const [textmsg,settextmsg]=useState("");

   const handleApplyCode=()=>{
        const CODE = [
            {
            count:3,
            code: ["ACOPxR","PORCDc","12PUX1","SNO6V","MU4WFS"],
            discount: 30
            },
            {
            count:2,
            code: ["ABC123","PQR279","XYZ098","QST098","09PRWR"],
            discount: 20
            },
            {
            count:1,
            code: ["BANER40","BALEWA","BANER12","PUNE89","MB12XS"],
            discount: 10
            }
        ];

         if(getinput === randomtext){
            let getcode = CODE.filter((item)=>{ if(item.count === count){return item}})
            let randomcodename = getcode[0].code[Math.floor(Math.random() * getcode[0].code.length)]
             settextmsg("congratulations !!! Your Coupan Code is  "+randomcodename )
             localStorage.setItem("coupancode", randomcodename);
             setcount(0)
         }else{
                setcount(count => count - 1)
                let data = (Math.random() + 1).toString(36).substring(7)
                setrandomtext(data)
                settextmsg("Sorry ! you failed ")
         }
         
   }


   return(
    <div className='modal'>
    <div className="modal-container">  
        <div className='modal-right-side'>
            <div className='modal-right-flex-row'>
                <div className="flex-col row-gap-2rem flex-justify-content-center flex-align-item-center">
                    <h3> Apply coupan code and get discount </h3>
                    <ol>
                        <li> Click the below button to generate a random number. </li>
                        <li>If you enter a random number in the textbox, if it matches, you will get your coupan code. If not, then you failed.</li>
                        <li> You have only 3 attempts. </li>
                    </ol>
                    <button className="button-coupan-code" 
                            onClick={()=>{setrandomtext((Math.random() + 1).toString(36).substring(7))}}> 
                            click here 
                    </button>
                    <div className="random-number-box"> 
                        {randomtext}
                    </div>
                    <div className="flex-row  col-gap-2rem textField-container">  
                       <input type="text"  value={getinput} onChange={(e)=>{setinput(e.target.value)}} className="text-input"/>
                       <label className="text-placeholder"> Enter random number </label>                                                
                    </div>
                     <div> {textmsg} {count>0 && count<3?<span> try again! attepted count remaining {count}</span>:null}</div> 
                        {
                            getinput&& randomtext &&(<button className={count===0?"button-coupan-code-disable":"button-coupan-code"} onClick={handleApplyCode} disabled={count===0}> apply for code </button>)
                        }
                </div> 
            </div> 
        </div>
        <i className='material-icons modal-close' onClick={modalClose}> x </i>
      </div>
    </div> 
   )
}
