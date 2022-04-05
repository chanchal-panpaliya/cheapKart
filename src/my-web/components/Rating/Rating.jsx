//css
import './Rating.css';

const Rating =(props)=>{
    return(
        <div className='rating'>
          <div> 
          <small>
        {[1, 2, 3, 4, 5].map((rate,index) => (
          <span key={index}>
            <i
              style={{ color:'#FFA41C'}}
              className={
                props.value + 1 === rate + 0.5
                  ? "fas fa-star-half-alt"
                  : props.value >= rate
                  ? "fas fa-star"
                  : "far fa-star"
              }
            ></i>
          </span>
        ))}
         </small>
        </div>
        <div> 
          {props.reviewText!=="" ? 
         <small>  
           {props.reviewText}
            {props.cardtype==="product_home" || props.cardtype==="product_topoffer" ? <span> rev.. </span> : null} 
            {props.cardtype==="product_list" ? <span> review </span> : null} 
            {props.cardtype==="product_wishlist"?<span>  </span>:null}
         </small>
          : null }
        </div>
      </div>
    );
  };
    

export default Rating ;