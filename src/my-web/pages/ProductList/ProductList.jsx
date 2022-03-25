//react
import { useContext, useEffect, useState } from 'react';
//components
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProductMenu from '../../components/Menu/ProductMenu';
import { Filter } from '../../components/Filter/Filter';
import { Card_ProductList ,CardTOPOFFER} from '../../components/Card/Card';
//css
import './ProductList.css';
//context
import CartContext from '../../context/cart/CartContext';
//img
import top_offer_img from "../../img/top_offer/topoffer.jpg";
//functions product filter
import { getSortedProducts,getPricedProducts,getDiscountedProducts,getFliteredProductsRAM,getFliteredProductsROM,
         getexpandableMemory,getRatingProduct,getSearchProduct,getExtraOff} from "./utlities";




const ProductList=()=>{
    let {selectedMenu , filter ,filterdispatch} = useContext(CartContext);
    const [data,setdata]=useState([]);
    const [openbottomfilter,SetOpenBottomFilter]=useState(false)

    selectedMenu = localStorage.getItem('MENU_SELECTED');
    
    useEffect(()=>{
      fetch("/api/products/",{
        method:"GET",
    }).then((res)=>res.json()).then((json)=>{
        let newdata =   json.products.filter((item)=>item.categoryName === selectedMenu)
        setdata(newdata)
 
    });
    },[selectedMenu])


    const pricedProducts = getPricedProducts( data,filter.price);
    const discountedProducts = getDiscountedProducts(pricedProducts,filter.discount);
    const productram = getFliteredProductsRAM(discountedProducts, selectedMenu, filter.ram._4GB , filter.ram._6GB , filter.ram._12GB , filter.ram._32GB);
    const productrom = getFliteredProductsROM(productram, selectedMenu, filter.rom._32GB , filter.rom._64GB , filter.rom._128GB,filter.rom._256GB);
    const productexpandableMemory = getexpandableMemory(productrom,selectedMenu,filter.expandableMemory)
    const SortedProducts = getSortedProducts(productexpandableMemory,filter.sortBy);
    const SearchProducts = getSearchProduct(SortedProducts,filter.productName);
    const ExtraOff = getExtraOff(SearchProducts ,filter.extraoff);
    const finalFilteredProducts = getRatingProduct(ExtraOff,filter.rating);

     
   const ListPage =()=>{
     return(
        <div className='product-container'>
            <div className='display-filter'>
                <Filter layout={""} filterselectedMenu={selectedMenu} filterListdata={finalFilteredProducts}/> 
            </div>
        <div> 
        <div className='display-cart'> 
                <div className='display-sort'>
                    sort by price- 
                    <button onClick={() => filterdispatch({ type: "LOW_TO_HIGH" })}> L to H </button>
                    <button onClick={() => filterdispatch({ type: "HIGH_TO_LOW" })}> H to L </button>
                </div>
                <div className='diaplay-cart-list'> 
                { 
                    finalFilteredProducts.length>0?
                       finalFilteredProducts.map((slide,index)=>{
                                return(
                                    <Card_ProductList data={slide} key={index}/>
                                )
                            }) 
                        : <div> 
                            Sorry, no results found! 
                        </div>      
                }
                </div>
            </div>
        </div>
        <div className='bottom-filter'>
             <button onClick={(e)=>SetOpenBottomFilter(!openbottomfilter)} className='bottom-filter-button'> Filter </button>
             {openbottomfilter?<div> <Filter layout={"mobile"}/> </div> : null}
        </div>
    </div>
     )
   }
   
   
   const ListTopOffer =()=>{
       return(
        <div className='product-container'>
          <div> 
            <div className='display-cart'> 
                <div className='display-topoffer-container'>
                     <h1> TOP OFFER'S </h1>
                     <div className='typography-padding-top-right-bottom-left'>
                         <img src={top_offer_img} className="top-offer-img"/>
                     </div>
                     <div className='typography-padding-top-right-bottom-left top-offer-cart-display'>
                     { 
                        data.length>0?
                            data.map((slide,index)=>{
                                return(
                                    <CardTOPOFFER data={slide} key={index}/>
                                )
                            }) 
                        : <div> empty </div>   
                    }
                     </div>
                </div>
            </div>
        </div>
    </div>
    )
   }

    return(
        <div>
            <Header/>
            <ProductMenu/>
              { selectedMenu==="Top Offer" ?  ListTopOffer() : ListPage() }
            <Footer/>
        </div>
    )
}

export default ProductList