import axios from "axios";

//all data
export async function fetchAllCartData() {
    try {
       let data = [];
       data = await axios.get("/api/products/").then(res=> res.data.products)       
       return data
      }catch (error) {
        console.log(error);
    }
}

//top offer
export async function fetchAllTopOfferData() {
    try {
       let data = [];
      data = await axios.get("/api/products/").then(res=> res.data.products)
      let filterdata =  data.filter(item=> item.categoryName === "Top Offer")
       return filterdata
      }catch (error) {
        console.log(error);
    }
}

//mobiledata
export async function fetchAllMobileData() {
    try {
       let data = [];
      data = await axios.get("/api/products/").then(res=> res.data.products)
      let filterdata =  data.filter(item=> item.categoryName === "Mobiles")
       return filterdata
      }catch (error) {
        console.log(error);
    }
}


//Grocery
export async function fetchAllGroceryData() {
    try {
       let data = [];
      data = await axios.get("/api/products/").then(res=> res.data.products)
      let filterdata =  data.filter(item=> item.categoryName === "Grocery")
       return filterdata
      }catch (error) {
        console.log(error);
    }
}

//Fashion
export async function fetchAllFashionData() {
    try {
       let data = [];
      data = await axios.get("/api/products/").then(res=> res.data.products)
      let filterdata =  data.filter(item=> item.categoryName === "Fashion")
       return filterdata
      }catch (error) {
        console.log(error);
    }
}

//Electronics
export async function fetchAllElectronicsData() {
    try {
       let data = [];
      data = await axios.get("/api/products/").then(res=> res.data.products)
      let filterdata =  data.filter(item=> item.categoryName === "Electronics")
       return filterdata
      }catch (error) {
        console.log(error);
    }
}

//Home
export async function fetchAllHomeData() {
    try {
       let data = [];
      data = await axios.get("/api/products/").then(res=> res.data.products)
      let filterdata =  data.filter(item=> item.categoryName === "Home")
       return filterdata
      }catch (error) {
        console.log(error);
    }
}

//applications
export async function fetchAllApplicationData() {
    try {
       let data = [];
      data = await axios.get("/api/products/").then(res=> res.data.products)
      let filterdata =  data.filter(item=> item.categoryName === "Appliances")
       return filterdata
      }catch (error) {
        console.log(error);
    }
}

//Beauty, Toys & More
export async function fetchAllBeautyToysMoreData() {
    try {
       let data = [];
      data = await axios.get("/api/products/").then(res=> res.data.products)
      let filterdata =  data.filter(item=> item.categoryName === "Beauty, Toys & More")
       return filterdata
      }catch (error) {
        console.log(error);
    }
}


//for the perticular product
export async function fetchProductDetailsData(id) {
    try {
       let data = "";
        data = await axios.get(`${"/api/products/"+id}`).then(res=> res.data.product)
       return data
      }catch (error) {
        console.log(error);
    }
}
//registration
export const handleRegistration = async (e,email,password,firstname,lastname,termsAndConditions,navigator,props,setError,toastdispatch) =>{
    e.preventDefault();
    try {
         await axios.post("/api/auth/signup",{
            email,password,firstname,lastname,termsAndConditions
         }).then((res) => {
            if(res.status === 200 || res.status === 201){
                localStorage.setItem("token", res.data.encodedToken );
                localStorage.setItem("user", JSON.stringify(res.data.createdUser));
                toastdispatch({type:'SUCCESS',payload:"Registered successfully"})
                props.onClose()
                navigator('/')
            }

         }).catch((error)=>{
                     if(error.response.status === 422){
                        toastdispatch({type:'WARNING',payload:"email id already exist"})
                        let time = setTimeout(()=>{
                            setError("")
                          },1000)
                          return()=>clearTimeout(time)
                     }
         });
               
          } catch (error) {
              setError("")
              toastdispatch({type:'DANGER',payload:"Not able to registered , try again"})
              let time = setTimeout(()=>{
                setError("")
              },1000)
              return()=>clearTimeout(time)
        }
}

//login
export const handleLogin = async (e,email,password,navigator,props,setError,toastdispatch) => {
    e.preventDefault();
    try {
        await axios.post("/api/auth/login",{
            email,password 
        }).then((res)=>{
            if(res.status === 200){
                if(res.data){
                    localStorage.setItem("token", res.data.encodedToken );
                    localStorage.setItem("user", JSON.stringify(res.data.foundUser));
                    toastdispatch({type:'SUCCESS',payload:"LOGIN SUCCESSFUL"})
                    props.onClose()
                    navigator('/')
                } 
            }else{
                setError("login Failed ! please try again") 
                toastdispatch({type:'DANGER',payload:"login Failed ! please try again"})
            }
         });
      } catch (error) {
          toastdispatch({type:'DANGER',payload:"login Failed ! please try again"})
          setError("login Failed ! please try again")
      }
};

//cart
export const addToCartHandler = async (e,props,addToCart,toastdispatch) => {
    e.preventDefault();
    let token = localStorage.getItem('token'); 
    try {
        await axios.post(`/api/user/cart`,{ product: props },
            		{ headers: { Accept: "*/*", authorization: token,},}).then((res)=>{
                        if(res.status===201){
                            toastdispatch({type:'SUCCESS',payload:"Product Added To Cart"})
                            addToCart(res.data.cart)
                        }else{
                            toastdispatch({type:'DANGER',payload:"ERROR!!!"})
                        }
         });
      } catch (error) {
          console.log("error",error)
      }
};

//get cart data
export const getcart= async()=> {
    try {
       let data = [];
       let token = localStorage.getItem('token');
       data = await axios.get("/api/user/cart",{ headers: { Accept: "*/*", authorization: token,},}).then(res=> res.data.cart)
       return data
      }catch (error) {
        console.log(error);
    }
}

//update cart
    export const updateProductQty = async (e,id,addToCart,str,toastdispatch) => {    
    e.preventDefault();
    let token = localStorage.getItem('token'); 
    try {
        await axios.post(`/api/user/cart/${id}`,{ action: { type: str,},},
            		{ headers: { Accept: "*/*", authorization: token,},}).then((res)=>{
                    if(res.status===200){
                        toastdispatch({type:'SUCCESS',payload:str+" by 1"})
                        addToCart(res.data.cart)
                    }else{
                        toastdispatch({type:'DANGER',payload:"ERROR!!!"})
                    }
                       
                       
         });
      } catch (error) {
          console.log("error",error)
      }
}

//cart delete id
export const removeFromCart = async(e,id,addToCart,toastdispatch)=>{
    e.preventDefault();
    let token = localStorage.getItem('token');
    try {
       await axios.delete(`api/user/cart/${id}`, {
            headers: {
                authorization: token,
            },
        }).then((res)=>{
            if(res.status===200){
                toastdispatch({type:'DANGER',payload:"Product Remove From Cart"})
                addToCart(res.data.cart)
            }else{
                toastdispatch({type:'DANGER',payload:"ERROR!!!"})
            }
        });
    

    } catch (error) {
        console.log("Error in cart service", error);
    }
}

//wishlist get
export const getwishlist= async()=> {
    try {
       let data = [];
       let token = localStorage.getItem('token');

       data = await axios.get("/api/user/wishlist",{ headers: { Accept: "*/*", authorization: token,},}).then(res=> res.data.wishlist)
       
       return data
      }catch (error) {
        console.log(error);
    }
}

//add wishlist
export const addToWishlistHandler = async (e,props,addToWishList,toastdispatch) =>{
    e.preventDefault();
    let token = localStorage.getItem('token'); 
    try {
        await axios.post(`/api/user/wishlist`,{ product: props },
            		{ headers: { Accept: "*/*", authorization: token,},}).then((res)=>{
                    if(res.status===201){
                        toastdispatch({type:'SUCCESS',payload:"Product Added To Wishlist"})
                        addToWishList(res.data.wishlist)
                    }else{
                        toastdispatch({type:'DANGER',payload:"ERROR!!!"})
                    }
                       
         });
      } catch (error) {
          console.log("error",error)
      }
}

//remove wishlist
export const removeFromWishlist = async(e,id,removeWishList,toastdispatch)=>{
    e.preventDefault();
    let token = localStorage.getItem('token');
    try {
       await axios.delete(`api/user/wishlist/${id}`, {
            headers: {
                authorization: token,
            },
        }).then((res)=>{
            if(res.status===200){
                toastdispatch({type:'DANGER',payload:"Product Removed From Wishlist"})
                removeWishList(res.data.wishlist)
            }else{
                toastdispatch({type:'DANGER',payload:"ERROR!!!"})
            }
        });
    } catch (error) {
        console.log("Error in cart service", error);
    }
}


