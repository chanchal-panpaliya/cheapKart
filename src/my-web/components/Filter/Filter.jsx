//react
import { useContext ,useEffect,useState } from 'react'; 
//css
import './Filter.css';
//context
import CartContext from '../../context/cart/CartContext';
//component
import Rating from '../Rating/Rating';




export const Filter=(props)=>{
  let {filter,filterdispatch} = useContext(CartContext);
  const { sortBy, ram, rom,expandableMemory,price, discount , rating ,productName,extraoff,GrosaryType,GrosaryBrand,FashionType,
          FashionColor,Electronicstype,Hometype,Appliancestype,MoreBrand,MoreType} = filter;
  const { _4GB, _6GB , _12GB , _32GB } = ram ;


  const render_clearProduct=()=>{
     return(
            <button onClick={() => filterdispatch({ type: "CLEAR" })}> Cleat All </button>
     )
  }

  const render_searchProduct=()=>{
    return(
      <input placeholder="Search by product name" value={productName} onChange={(e) => filterdispatch({ type: "SEARCH_PRODUCTS", payload: e.target.value })}/>
     
    )
  }


  const render_rangeprice=()=>{
    return(
      <section className='typography-padding-top-bottom'>
            <h3>PRICE</h3>
                <div>
                  <input type="range" name="" step={500} min={100} max={100000} list="steplist" value={price}
                    onChange={(e) =>
                      filterdispatch({ type: "PRICE", payload: e.target.value })
                    }
                  />
                    <output> Rs{price} </output>
                </div>
      </section>
    )
  }


  const render_discount=()=>{
    return(
      <section className='typography-padding-top-bottom'>
        <ul className="flex-col">
          <h3>DISCOUNT</h3>
          <li>
            <label for="input-50%" className="flex-row">
              <input type="radio" id="input-50%" name="radio-discount" checked={discount === 50} value="50"
                onChange={(e) =>
                  filterdispatch({ type: "DISCOUNT", value: e.target.value })
                }
              />
              <span>50% and above</span>
            </label>
          </li>

          <li>
            <label for="input-40%" className="flex-row">
              <input type="radio"  id="input-40%" name="radio-discount" checked={discount === 40}
                value="40" onChange={(e) =>filterdispatch({ type: "DISCOUNT", value: e.target.value })}/>
              <span>40% and above</span>
            </label>
          </li>
          <li>
            <label for="input-30%" className="flex-row">
              <input type="radio" id="input-30%" name="radio-discount" checked={discount === 30} value="30"
                onChange={(e) => filterdispatch({ type: "DISCOUNT", value: e.target.value })}
              />
              <span>30% and above</span>
            </label>
          </li>
          <li>
            <label for="input-20%" className="flex-row">
              <input type="radio" id="input-20%" name="radio-discount" checked={discount === 20} value="20"
                onChange={(e) => filterdispatch({ type: "DISCOUNT", value: e.target.value })}
              />
              <span>20% and above</span>
            </label>
          </li>
          <li>
            <label for="input-10%" className="flex-row">
              <input type="radio" class="input-radio element-round" id="input-10%" name="radio-discount" value="10" checked={discount === 10}
                onChange={(e) => filterdispatch({ type: "DISCOUNT", value: e.target.value })}
              />
              <span>10% and above</span>
            </label>
          </li>
        </ul>
      </section>
    )
  }


  const render_rating=()=>{
     return(
      <section className='typography-padding-top-bottom'>
      <ul className="flex-col">
        <h3>RATING</h3>
        <li>
          <label for="input-5" className="flex-row">
            <input type="radio" id="input-5" name="radio-rating" checked={rating === 5} value="5"
              onChange={(e) => filterdispatch({ type: "RATING", value: e.target.value })}
            />
            <span>  <Rating cardtype="product_wishlist" value={5} reviewText={""} /> </span>
          </label>
        </li>
        <li>
          <label for="input-4" className="flex-row">
            <input
              type="radio" id="input-4" name="radio-rating" checked={rating === 4} value="4"
              onChange={(e) => filterdispatch({ type: "RATING", value: e.target.value })}
            />
            <span><Rating cardtype="product_wishlist" value={4} reviewText={""} /></span>
          </label>
        </li>
        <li>
          <label for="input-3" className="flex-row">
            <input type="radio" id="input-3" name="radio-rating" checked={rating === 3} value="3"
              onChange={(e) => filterdispatch({ type: "RATING", value: e.target.value })}
            />
            <span> <Rating cardtype="product_wishlist" value={3} reviewText={""} /> </span>
          </label>
        </li>
        <li>
          <label for="input-2" className="flex-row">
            <input type="radio" id="input-2" name="radio-rating" checked={rating === 2} value="2"
              onChange={(e) => filterdispatch({ type: "RATING", value: e.target.value })}
            />
            <span> <Rating cardtype="product_wishlist" value={2} reviewText={""} /> </span>
          </label>
        </li>
        <li>
          <label for="input-1" className="flex-row">
            <input type="radio" id="input-1" name="radio-rating" value="1" checked={rating === 1}
              onChange={(e) => filterdispatch({ type: "RATING", value: e.target.value })}
            />
            <span> <Rating cardtype="product_wishlist" value={1} reviewText={""} /> </span>
          </label>
        </li>
      </ul>
    </section>
     )
  }

  const render_mobile_ram=()=>{
    return(
      <section className='typography-padding-top-bottom'>
      <h3>RAM</h3>
        <label for="checkbox-input-ram" className="flex-row ">
          <input type="checkbox" name="4GB" value="4GB"  checked={_4GB}
            onChange={(e) => filterdispatch({ type: "Mobile_RAM_4GB" })}
          />
          4GB
          </label>

          <label for="checkbox-input-ram" className="flex-row ">
          <input
            type="checkbox" name="6GB" value="6GB"  checked={_6GB}
            onChange={(e) => filterdispatch({ type: "Mobile_RAM_6GB" })}
          />
          6GB
          </label>

          <label for="checkbox-input-ram" className="flex-row ">
          <input
            type="checkbox" name="12GB" value="12GB"  checked={_12GB}
            onChange={(e) => filterdispatch({ type: "Mobile_RAM_12GB"  })}
          />
          12GB
          </label>

          <label for="checkbox-input-ram" className="flex-row">
          <input
            type="checkbox" name="32GB" value="32GB"  checked={_32GB}
            onChange={(e) => filterdispatch({ type: "Mobile_RAM_32GB" })}
          />
          32GB
          </label>

    </section>
    )
  }

  const  render_mobile_rom=()=>{
    return(
      <section className='typography-padding-top-bottom'>
      <h3>ROM</h3>

        <label for="checkbox-input-rom" className="flex-row ">
          <input
            type="checkbox" name="32GB" value="32GB"  checked={rom._32GB}
            onChange={(e) => filterdispatch({ type: "Mobile_ROM_32GB" })}
          />
          32GB
          </label>{" "}

          <label for="checkbox-input-rom" className="flex-row ">
          <input
            type="checkbox" name="64GB" value="64GB"  checked={rom._64GB}
            onChange={(e) => filterdispatch({ type: "Mobile_ROM_64GB" })}
          />
          64GB
          </label>{" "}

          <label for="checkbox-input-rom" className="flex-row ">
          <input
            type="checkbox" name="128GB" value="128GB"  checked={rom._128GB}
            onChange={(e) => filterdispatch({ type: "Mobile_ROM_128GB"  })}
          />
          128GB
          </label>{" "}

          <label for="checkbox-input-rom" className="flex-row">
          <input
            type="checkbox" name="256GB" value="256GB"  checked={rom._256GB}
            onChange={(e) => filterdispatch({ type: "Mobile_ROM_256GB" })}
          />
          256GB
          </label>{" "}
         
    </section>

    )
  }

  const  render_mobile_expandableMemory=()=>{
    return(
      <section className='typography-padding-top-bottom'>
      <ul>
        <h3> Expandable Memory</h3>
        <li>
          <label>
            <input type="radio" name="radio-expandableMemory" checked={expandableMemory === "512GB"} value="512GB"
              onChange={(e) => filterdispatch({ type: "ExpandableMemory", value: e.target.value })}
            />
            <span> 512GB </span>
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="radio-expandableMemory" checked={expandableMemory === "1 TB"} value="1 TB"
              onChange={(e) => filterdispatch({ type: "ExpandableMemory", value: e.target.value })}
            />
            <span> 1TB </span>
          </label>
        </li>
        </ul>
      </section>
    )
  }

  const render_extraOFF=()=>{
     return(
       <section className='typography-padding-top-bottom'>
           <h3> Extra off </h3>
           <ul>
              <li>
                 <label className="flex-row">
                    <input type="radio" name="radio-extraoff" checked={extraoff === "0 - 10"} value="0 - 10"
                      onChange={(e) => filterdispatch({ type: "EXTRAOFF", value: e.target.value })}
                    />
                    <span> 0 - 10 RS </span>
                  </label>
               </li>

               <li>
                 <label className="flex-row">
                    <input type="radio" name="radio-extraoff" checked={extraoff === "10 - 50"} value="10 - 50"
                      onChange={(e) => filterdispatch({ type: "EXTRAOFF", value: e.target.value })}
                    />
                    <span> 10 - 50 RS </span>
                  </label>
               </li>

               <li>
                 <label className="flex-row">
                    <input type="radio" name="radio-extraoff" checked={extraoff === "50 - 200"} value="50 - 200"
                      onChange={(e) => filterdispatch({ type: "EXTRAOFF", value: e.target.value })}
                    />
                    <span> 50 - 200 RS </span>
                  </label>
               </li>

               <li>
                 <label className="flex-row">
                    <input type="radio" name="radio-extraoff" checked={extraoff === "200 - 10000"} value="200 - 10000"
                      onChange={(e) =>filterdispatch({ type: "EXTRAOFF", value: e.target.value })}
                    />
                    <span> 200 - 10,000 RS </span>
                  </label>
               </li>

           </ul>
       </section>
     )
  }

  const render_Grocery_brand=()=>{
      
    let unique_list = props.originaldata.length>0 && [...new Set(props.originaldata.map(q => q.Brand))];    
    let updated_list = unique_list.length>0 && unique_list.filter((item)=>item!=="")
  
  return(
    <section>
         <h3> Brand </h3>
              {
                      updated_list.length>0 ? updated_list.map((item,index)=>{
                      return(
                          <>
                              <label key={index} className="flex-row flex-align-item-center">
                                  {item}
                                  <input  type="checkbox" name="GrosaryBrand"  value={item} checked={GrosaryBrand.includes(item)}
                                   onChange={(e)=>filterdispatch({type:"GROSARY_BRAND",payload: e.target.value,status: e.target.checked})}
                                  />
                                  
                              </label> 
                          </>
                      )
                  }) : <small> No type found </small>
                  }
    </section>
  )
  }

  const render_Grocery_type=()=>{
    
      let unique_list = props.originaldata.length>0 && [...new Set(props.originaldata.map(q => q.Type))];    
      let updated_list = unique_list.length>0 && unique_list.filter((item)=>item!=="")
    
    return(
      <div className='typology-padding-top'>
           <h3> Type </h3>
                {
                        updated_list.length>0 ? updated_list.map((item,index)=>{
                        return(
                            <>
                                <label key={index} className="flex-row flex-align-item-center">
                                    {item}
                                    <input  type="checkbox" name="GrosaryType"  value={item} checked={GrosaryType.includes(item)}
                                     onChange={(e)=>filterdispatch({type:"GROSARY_TYPE",payload: e.target.value,status: e.target.checked})}
                                    />
                                    
                                </label> 
                            </>
                        )
                    }) : <small> No type found </small>
                    }
      </div>
    )
  }

  const render_Grocery_FashionType=()=>{
    let unique_list = props.originaldata.length>0 && [...new Set(props.originaldata.map(q => q.FashionType))];    
    let updated_list = unique_list.length>0 && unique_list.filter((item)=>item!=="")
  
  return(
    <div className='typology-padding-top'>
         <h3> Type </h3>
              {
                      updated_list.length>0 ? updated_list.map((item,index)=>{
                      return(
                          <>
                              <label key={index} className="flex-row flex-align-item-center">
                                  {item}
                                  <input  type="checkbox" name="FashionType"  value={item} checked={FashionType.includes(item)}
                                   onChange={(e)=>filterdispatch({type:"Fashion_Type",payload: e.target.value,status: e.target.checked})}
                                  />
                                  
                              </label> 
                          </>
                      )
                  }) : <small> No type found </small>
                  }
    </div>
  )
  }

  const render_Grocery_Color=()=>{
    let unique_list = props.originaldata.length>0 && [...new Set(props.originaldata.map(q => q.Color))];    
    let updated_list = unique_list.length>0 && unique_list.filter((item)=>item!=="")
  
  return(
    <div className='typology-padding-top'>
         <h3> Color </h3>
              {
                      updated_list.length>0 ? updated_list.map((item,index)=>{
                      return(
                          <>
                              <label key={index} className="flex-row flex-align-item-center">
                                  {item}
                                  <input  type="checkbox" name="FashionColor"  value={item} checked={FashionColor.includes(item)}
                                   onChange={(e)=>filterdispatch({type:"Fashion_Color",payload: e.target.value,status: e.target.checked})}
                                  />
                                  
                              </label> 
                          </>
                      )
                  }) : <small> No type found </small>
                  }
    </div>
  )  
  }

  const render_Electronics_type=()=>{
    let unique_list = props.originaldata.length>0 && [...new Set(props.originaldata.map(q => q.Electronics_type))];    
    let updated_list = unique_list.length>0 && unique_list.filter((item)=>item!=="")
  
  return(
    <div className='typology-padding-top'>
         <h3> Electronics Type </h3>
              {
                      updated_list.length>0 ? updated_list.map((item,index)=>{
                      return(
                          <>
                              <label key={index} className="flex-row flex-align-item-center">
                                  {item}
                                  <input  type="checkbox" name="Electronicstype"  value={item} checked={Electronicstype.includes(item)}
                                   onChange={(e)=>filterdispatch({type:"Electronics_type",payload: e.target.value,status: e.target.checked})}
                                  />
                                  
                              </label> 
                          </>
                      )
                  }) : <small> No type found </small>
                  }
    </div>
  )   
  }

  const render_Home_type=()=>{
    let unique_list = props.originaldata.length>0 && [...new Set(props.originaldata.map(q => q.type))];    
    let updated_list = unique_list.length>0 && unique_list.filter((item)=>item!=="")
  
  return(
    <div className='typology-padding-top'>
         <h3> Home Type </h3>
              {
                      updated_list.length>0 ? updated_list.map((item,index)=>{
                      return(
                          <>
                              <label key={index} className="flex-row flex-align-item-center">
                                  {item}
                                  <input  type="checkbox" name="Hometype"  value={item} checked={Hometype.includes(item)}
                                   onChange={(e)=>filterdispatch({type:"Home_type",payload: e.target.value,status: e.target.checked})}
                                  />
                                  
                              </label> 
                          </>
                      )
                  }) : <small> No type found </small>
                  }
    </div>
  )  
  }

  const render_Appliances_type=()=>{
    let unique_list = props.originaldata.length>0 && [...new Set(props.originaldata.map(q => q.type))];    
    let updated_list = unique_list.length>0 && unique_list.filter((item)=>item!=="")
  
  return(
    <div className='typology-padding-top'>
         <h3> Appliances Type </h3>
              {
                      updated_list.length>0 ? updated_list.map((item,index)=>{
                      return(
                          <>
                              <label key={index} className="flex-row flex-align-item-center">
                                  {item}
                                  <input  type="checkbox" name="Appliancestype"  value={item} checked={Appliancestype.includes(item)}
                                   onChange={(e)=>filterdispatch({type:"Appliances_type",payload: e.target.value,status: e.target.checked})}
                                  />
                                  
                              </label> 
                          </>
                      )
                  }) : <small> No type found </small>
                  }
    </div>
  )  
  }

  const render_More_Brand=()=>{
    let unique_list = props.originaldata.length>0 && [...new Set(props.originaldata.map(q => q.Brand))];    
    let updated_list = unique_list.length>0 && unique_list.filter((item)=>item!=="")
  
  return(
    <div className='typology-padding-top'>
         <h3> Brand </h3>
              {
                      updated_list.length>0 ? updated_list.map((item,index)=>{
                      return(
                          <>
                              <label key={index} className="flex-row flex-align-item-center">
                                  {item}
                                  <input  type="checkbox" name="MoreBrand"  value={item} checked={MoreBrand.includes(item)}
                                   onChange={(e)=>filterdispatch({type:"More_Brand",payload: e.target.value,status: e.target.checked})}
                                  />
                                  
                              </label> 
                          </>
                      )
                  }) : <small> No type found </small>
                  }
    </div>
  ) 
  }

  const render_More_type=()=>{
    let unique_list = props.originaldata.length>0 && [...new Set(props.originaldata.map(q => q.type))];    
    let updated_list = unique_list.length>0 && unique_list.filter((item)=>item!=="")
  
  return(
    <div className='typology-padding-top'>
         <h3> Type </h3>
              {
                      updated_list.length>0 ? updated_list.map((item,index)=>{
                      return(
                          <>
                              <label key={index} className="flex-row flex-align-item-center">
                                  {item}
                                  <input  type="checkbox" name="MoreType"  value={item} checked={MoreType.includes(item)}
                                   onChange={(e)=>filterdispatch({type:"More_Type",payload: e.target.value,status: e.target.checked})}
                                  />
                                  
                              </label> 
                          </>
                      )
                  }) : <small> No type found </small>
                  }
    </div>
  ) 
  }

  return(
    <div className= {props.layout ==="mobile" ? 'Mobile-Product-List-Filter' : 'Product-List-Filter'} > 
    <div className= {props.layout ==="mobile" ? 'Mobile-Filter-Container' : 'Filter-Container'}>
        <div className='flex-row flex-space-between typography-padding-top-bottom'> 
            <h3> Filter </h3>  
            {render_clearProduct()}    
        </div>
        <div className='flex-row flex-space-between typography-padding-top-bottom'>
             <small><b> SORT BY PRICE-</b>  </small> 
                    <button onClick={() => filterdispatch({ type: "LOW_TO_HIGH" })}> Asc - Dec </button>
                    <button onClick={() => filterdispatch({ type: "HIGH_TO_LOW" })}> Dec - Asc </button>
        </div>     
        <hr/>
        {render_searchProduct()}
         <hr/>
        <section className='filter-container-scroll'> 
          {render_rangeprice()}
          {render_discount()}
          {render_rating()}
          {render_extraOFF()}
          {
            props.filterselectedMenu === "Mobiles" ?
              <div> 
              {render_mobile_ram()}
              {render_mobile_rom()}
              {render_mobile_expandableMemory()}
              </div>
            :
            null
          }

          {
            props.filterselectedMenu === "Grocery" ?
              <>
               {render_Grocery_brand()}
               {render_Grocery_type()}
              </>
            :
            null
          }

          {
           props.filterselectedMenu ==="Fashion"?
           <>
            {render_Grocery_FashionType()}
            {render_Grocery_Color()}
          </>
          :
          null
          }

          {
            props.filterselectedMenu === "Electronics"?
            <>
              {render_Electronics_type()}
            </>
            :
            null
          }
          {
            props.filterselectedMenu === "Home"?
            <>
              {render_Home_type()}
            </>
            :
            null
          }
          {
            props.filterselectedMenu === "Appliances"?
            <>
              {render_Appliances_type()}
            </>:
            null
          }
          {
            props.filterselectedMenu === "Beauty, Toys & More"?
            <>
             {render_More_Brand()}
             {render_More_type()}
            </>:null
          }

      </section>
    </div>
    </div>
  )
}




