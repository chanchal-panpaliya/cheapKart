//react
import { useContext, useEffect, useState } from 'react';
//components
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProductMenu from '../../components/Menu/ProductMenu';
import { Filter } from '../../components/Filter/Filter';
import { Card_ProductList ,CardTOPOFFER} from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';
//css
import './ProductList.css';
//context
import CartContext from '../../context/cart/CartContext';
//img
import top_offer_img from "../../img/top_offer/topoffer.jpg";
//functions product filter
import { getSortedProducts,getPricedProducts,getDiscountedProducts,getFliteredProductsRAM,getFliteredProductsROM,
         getexpandableMemory,getRatingProduct,getSearchProduct,getExtraOff,getGrosaryType,getGrosaryBrand,getFashionType,
         getFashionColor,getElectronicstype,getHometype,getAppliancestype,getMoreBrand,getMoreType} from "./utlities";

//
import Pagination from '../../components/Pagination/Pagination';


const ProductList=()=>{
    let {selectedMenu , filter ,filterdispatch} = useContext(CartContext);
    const [data,setdata]=useState([]);
    const [openbottomfilter,SetOpenBottomFilter]=useState(false);
    const [loader,setloader]=useState(false)
  

    selectedMenu = localStorage.getItem('MENU_SELECTED');
    
    useEffect(()=>{
        setloader(true)
      fetch("/api/products/",{
        method:"GET",
    }).then((res)=>res.json()).then((json)=>{
        let newdata =   json.products.filter((item)=>item.categoryName === selectedMenu)
        setdata(newdata)
        setloader(false)
    });
    window.scrollTo({ behavior: 'smooth', top: '0px' });
    },[selectedMenu])


    const pricedProducts = getPricedProducts( data,filter.price);
    const discountedProducts = getDiscountedProducts(pricedProducts,filter.discount);
    //mobile
    const productram = getFliteredProductsRAM(discountedProducts, selectedMenu, filter.ram._4GB , filter.ram._6GB , filter.ram._12GB , filter.ram._32GB);
    const productrom = getFliteredProductsROM(productram, selectedMenu, filter.rom._32GB , filter.rom._64GB , filter.rom._128GB,filter.rom._256GB);
    const productexpandableMemory = getexpandableMemory(productrom,selectedMenu,filter.expandableMemory)
    //Grosary
    const GrosaryType = getGrosaryType(productexpandableMemory,selectedMenu,filter.GrosaryType); 
    const GrosaryBrand = getGrosaryBrand(GrosaryType,selectedMenu,filter.GrosaryBrand);
    //Fashion
    const FashionType = getFashionType(GrosaryBrand,selectedMenu,filter.FashionType);
    const FashionColor = getFashionColor(FashionType,selectedMenu,filter.FashionColor)
    //Electronic
    const Electronicstype = getElectronicstype(FashionColor,selectedMenu,filter.Electronicstype)
    //Home
    const Hometype = getHometype(Electronicstype,selectedMenu,filter.Hometype)
    //Appliances
    const Appliancestype=getAppliancestype(Hometype,selectedMenu,filter.Appliancestype)
    //More
    const MoreBrand = getMoreBrand(Appliancestype,selectedMenu,filter.MoreBrand)
    const MoreType = getMoreType(MoreBrand,selectedMenu,filter.MoreType)
    //
    const SortedProducts = getSortedProducts(MoreType,filter.sortBy);
    const SearchProducts = getSearchProduct(SortedProducts,filter.productName);
    const ExtraOff = getExtraOff(SearchProducts ,filter.extraoff);
    const finalFilteredProducts = getRatingProduct(ExtraOff,filter.rating);

   

   const ListPage =()=>{
     return(
        <div className='product-container'>
            <div className='display-filter'>
                <Filter layout={""} originaldata={data} filterselectedMenu={selectedMenu} filterListdata={finalFilteredProducts}/> 
            </div>
        <div> 
        <div className='display-cart'> 
                <div className='display-sort'>
                </div>
                <div className='diaplay-cart-list'> 

                {
                   loader? <Loader/> : finalFilteredProducts.length>0? 
                   <Pagination
                      data={finalFilteredProducts}
                      RenderComponent={Card_ProductList}
                      pageLimit={1}
                      dataLimit={5}
                    /> : "no data" 
                }
                          
                </div>
            </div>
        </div>
        <div className='bottom-filter'>
             <button onClick={(e)=>SetOpenBottomFilter(!openbottomfilter)} className='bottom-filter-button'> Filter </button>
             {openbottomfilter?<div> <Filter layout={"mobile"} originaldata={data} filterselectedMenu={selectedMenu} filterListdata={finalFilteredProducts}/> </div> : null}
        </div>
    </div>
     )
   }
   
   
   const ListTopOffer =()=>{
       return(
        <div className='product-container'>
            <div className='display-filter'>
                <Filter layout={""} originaldata={data} filterselectedMenu={selectedMenu} filterListdata={finalFilteredProducts}/> 
            </div>
          <div> 
            <div className='display-cart'> 
                <div className='display-topoffer-container'>
                     <h1> TOP OFFER'S </h1>
                     <div className='typography-padding-top-right-bottom-left'>
                         <img src={top_offer_img} className="top-offer-img"/>
                     </div>
                     <div className='typography-padding-top-right-bottom-left top-offer-cart-display'>
                     {  
                       loader? <Loader/> :
                       finalFilteredProducts.length>0?

                            finalFilteredProducts.map((slide,index)=>{
                                return(
                                    <CardTOPOFFER data={slide} key={index}/>
                                )
                            }) 
                        : <div> no data </div>   
                    }
                     </div>
                </div>
            </div>
        </div>
        <div className='bottom-filter'>
             <button onClick={(e)=>SetOpenBottomFilter(!openbottomfilter)} className='bottom-filter-button'> Filter </button>
             {openbottomfilter?<div> <Filter layout={"mobile"} originaldata={data} filterselectedMenu={selectedMenu} filterListdata={finalFilteredProducts}/> </div> : null}
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