//react
import { useContext ,useEffect } from 'react'; 
//css
import './Filter.css';
//context
import CartContext from '../../context/cart/CartContext';


export const Filter=(props)=>{
  let {filter,filterdispatch} = useContext(CartContext);
  const { sortBy, ram, rom,expandableMemory,price, discount , rating ,productName,extraoff} = filter;
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
            <span>5</span>
          </label>
        </li>
        <li>
          <label for="input-4" className="flex-row">
            <input
              type="radio" id="input-4" name="radio-rating" checked={rating === 4} value="4"
              onChange={(e) => filterdispatch({ type: "RATING", value: e.target.value })}
            />
            <span>4</span>
          </label>
        </li>
        <li>
          <label for="input-3" className="flex-row">
            <input type="radio" id="input-3" name="radio-rating" checked={rating === 3} value="3"
              onChange={(e) => filterdispatch({ type: "RATING", value: e.target.value })}
            />
            <span>3</span>
          </label>
        </li>
        <li>
          <label for="input-2" className="flex-row">
            <input type="radio" id="input-2" name="radio-rating" checked={rating === 2} value="2"
              onChange={(e) => filterdispatch({ type: "RATING", value: e.target.value })}
            />
            <span>2</span>
          </label>
        </li>
        <li>
          <label for="input-1" className="flex-row">
            <input type="radio" id="input-1" name="radio-rating" value="1" checked={rating === 1}
              onChange={(e) => filterdispatch({ type: "RATING", value: e.target.value })}
            />
            <span>1</span>
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


  return(
    <div className= {props.layout ==="mobile" ? 'Mobile-Product-List-Filter' : 'Product-List-Filter'} > 
    <div className= {props.layout ==="mobile" ? 'Mobile-Filter-Container' : 'Filter-Container'}>
        <div className='flex-row flex-space-between typography-padding-top-bottom'> 
            <h3> Filter </h3>  
            {render_clearProduct()}    
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
                <>
                {render_mobile_ram()}
                {render_mobile_rom()}
                {render_mobile_expandableMemory()}
                </>
              :
              null
            }
      </section>
    </div>
    </div>
  )
}




