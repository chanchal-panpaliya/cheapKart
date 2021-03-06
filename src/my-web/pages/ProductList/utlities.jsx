
//product sort
export const getSortedProducts =(products, sortBy)=>{
    if (sortBy === "LOW_TO_HIGH"){
        return [...products].sort((item1, item2) =>{
            let price1 = item1.saleingprice.replace(/\,(\d\d)$/, ".$1").replace(',','');
            let price2 = item2.saleingprice.replace(/\,(\d\d)$/, ".$1").replace(',','');
            return price1 - price2
        })
    }

  if (sortBy === "HIGH_TO_LOW"){
    return [...products].sort((item1, item2) =>{
        let price1 = item1.saleingprice.replace(/\,(\d\d)$/, ".$1").replace(',','');
        let price2 = item2.saleingprice.replace(/\,(\d\d)$/, ".$1").replace(',','');
        return price2 - price1
    })
}
  return products;
}

//range
export const getPricedProducts=(products, price)=>{
  let data = products.filter((item) => Number(item.saleingprice.replace(/\,(\d\d)$/, ".$1").replace(',','')) <= Number(price)).sort((item1, item2) =>{
        let price1 = item1.saleingprice.replace(/\,(\d\d)$/, ".$1").replace(',','');
        let price2 = item2.saleingprice.replace(/\,(\d\d)$/, ".$1").replace(',','');
        return price2 - price1
    })
    return data;
}

//discount
export const getDiscountedProducts=(products, discount)=>{
    if (discount) {
        return products.filter((item) => item.percentOff >= discount);
      }
    return products;
}

//rating
export const getRatingProduct=(products,rating)=>{
    if(rating){
        return products.filter((item) => Math.floor(item.Rating) === rating);
    }
    return products;
}

//search
export const getSearchProduct=(product,productname)=>{
    return product.filter((item) =>
        item.title.toLowerCase().includes(productname.toLowerCase())
      )
   
}

//mobile-RAM
export const getFliteredProductsRAM=(sortedproducts,selectedMenu, _4GB ,_6GB , _12GB , _32GB )=>{
                 if(selectedMenu==="Mobiles"){
                    const filteredlist = [];

                        if (_4GB === false && _6GB === false && _12GB === false && _32GB === false) {
                            return sortedproducts;
                        }

                        if (_4GB) {
                            let newList = sortedproducts.filter(
                            (item) => "4GB" === item.RAM
                            );

                            filteredlist.push(...newList);
                        }

                        if (_6GB) {
                            let newList = sortedproducts.filter(
                            (item) => "6GB" === item.RAM
                            );

                            filteredlist.push(...newList);
                        }

                        if (_12GB) {
                            let newList = sortedproducts.filter(
                            (item) => "12GB" === item.RAM
                            );

                            filteredlist.push(...newList);
                        }

                        if (_32GB) {
                            let newList = sortedproducts.filter(
                            (item) => "32GB" === item.RAM
                            );

                            filteredlist.push(...newList);
                        }

                        return filteredlist;  
                        
                    }else{
                        return sortedproducts
                    }

        }

//mobile-ROM
export const getFliteredProductsROM=(sortedproducts,selectedMenu, _32GB ,_64GB , _128GB , _256GB )=>{
    if(selectedMenu==="Mobiles"){
        const filteredlist = [];

            if (_32GB === false && _64GB === false && _128GB === false && _256GB === false) {
                return sortedproducts;
            }

            if (_32GB) {
                let newList = sortedproducts.filter(
                (item) => "32GB" === item.ROM
                );

                filteredlist.push(...newList);
            }

            if (_64GB) {
                let newList = sortedproducts.filter(
                (item) => "64GB" === item.ROM
                );

                filteredlist.push(...newList);
            }

            if (_128GB) {
                let newList = sortedproducts.filter(
                (item) => "128GB" === item.ROM
                );

                filteredlist.push(...newList);
            }

            if (_256GB) {
                let newList = sortedproducts.filter(
                (item) => "256GB" === item.ROM
                );

                filteredlist.push(...newList);
            }
            return filteredlist;  
        }else{
            return sortedproducts
        }
}

//mobile expandableMemory
export const getexpandableMemory=(products,selectedmenu,memoryname)=>{
      if(selectedmenu==="Mobiles"){
        if(memoryname){
            return products.filter((item) => item.ExpandableMemory === memoryname);
        }
        return products;

      }else{
          return products
      }   
} 

//extraoff
export const getExtraOff=(products,extraoff)=>{
    let pricefiltersplit = extraoff.split("-");
    if (extraoff) {
        return products.filter((item) =>{
            if( (Number(pricefiltersplit[0]) <= Number(item.extraOff)) && (Number(pricefiltersplit[1]) >= Number(item.extraOff))){
                 return item
            }
        })
      }
    return products
}

//getGrosaryType
export const getGrosaryType=(products,selectedMenu,type)=>{
 
    if(selectedMenu==="Grocery"){
        if(type.length === 0) {
            return products
        }else{
           return products.filter((item) => type.includes(item.Type));   
        }
    }else{
        return products
    }    
}
//getGrosaryBrand
export const getGrosaryBrand=(products,selectedMenu,brand)=>{
 
    if(selectedMenu==="Grocery"){
        if(brand.length === 0) {
            return products
        }else{
           return products.filter((item) => brand.includes(item.Brand));   
        }
    }else{
        return products
    }    
}

//getFashionType
export const getFashionType=(products,selectedMenu,type)=>{
    if(selectedMenu==="Fashion"){
        if(type.length === 0) {
            return products
        }else{
           return products.filter((item) => type.includes(item.FashionType));   
        }
    }else{
        return products
    } 
}

//getFashionColor
export const getFashionColor=(products,selectedMenu,color)=>{
    if(selectedMenu==="Fashion"){
        if(color.length === 0) {
            return products
        }else{
           return products.filter((item) => color.includes(item.Color));   
        }
    }else{
        return products
    }
}

//getElectronicstype

export const getElectronicstype=(products,selectedMenu,type)=>{
    if(selectedMenu==="Electronics"){
        if(type.length === 0) {
            return products
        }else{
           return products.filter((item) => type.includes(item.Electronics_type));   
        }
    }else{
        return products
    } 
}

//getHometype

export const getHometype=(products,selectedMenu,type)=>{
    if(selectedMenu==="Home"){
        if(type.length === 0) {
            return products
        }else{
           return products.filter((item) => type.includes(item.type));   
        }
    }else{
        return products
    } 
}

//getAppliancestype

export const getAppliancestype=(products,selectedMenu,type)=>{
    if(selectedMenu==="Appliances"){
        if(type.length === 0) {
            return products
        }else{
           return products.filter((item) => type.includes(item.type));   
        }
    }else{
        return products
    }
}

//getMoreBrand
export const getMoreBrand=(products,selectedMenu,Brand)=>{
    if(selectedMenu==="Beauty, Toys & More"){
        if(Brand.length === 0) {
            return products
        }else{
           return products.filter((item) => Brand.includes(item.Brand));   
        }
    }else{
        return products
    }
}

//
export const getMoreType=(products,selectedMenu,type)=>{
    if(selectedMenu==="Beauty, Toys & More"){
        if(type.length === 0) {
            return products
        }else{
           return products.filter((item) => type.includes(item.type));   
        }
    }else{
        return products
    }
}
