import axios from "axios";
import { useNavigate } from "react-router-dom";

//context

//all data
export async function fetchAllCartData() {
    try {
       let data = [];
       data = await axios.get("/api/products/").then(res=> res.data.products)
       const items = JSON.parse(localStorage.getItem('Allproduct'));
     
      if (items === null ) {
         localStorage.setItem('Allproduct', JSON.stringify(data));
      }
       
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
export const handleRegistration = async (e,email,password,firstname,lastname,termsAndConditions,navigator,props,setError) =>{
    e.preventDefault();
    try {
         await axios.post("/api/auth/signup",{
            email,password,firstname,lastname,termsAndConditions
         }).then((res) => {
            if(res.status === 200 || res.status === 201){
                localStorage.setItem("token", res.data.encodedToken );
                localStorage.setItem("user", JSON.stringify(res.data.createdUser));
                setError("Registered successfully")
                props.onClose()
                navigator('/')
            }

         }).catch((error)=>{
                     if(error.response.status === 422){
                        setError("email id already exist")
                        let time = setTimeout(()=>{
                            setError("")
                          },1000)
                          return()=>clearTimeout(time)
                     }
         });
               
          } catch (error) {
              console.log(error.status)
              setError("Not able to registered !! check ")
              let time = setTimeout(()=>{
                setError("")
              },1000)
              return()=>clearTimeout(time)
        }
}

//login
export const handleLogin = async (e,email,password,navigator,props,setError) => {
    e.preventDefault();
    try {
        await axios.post("/api/auth/login",{
            email,password 
        }).then((res)=>{
            if(res.status === 200){
                if(res.data){
                    localStorage.setItem("token", res.data.encodedToken );
                    localStorage.setItem("user", JSON.stringify(res.data.foundUser));
                    props.onClose()
                    navigator('/')
                } 
            }else{
                setError("login Failed ! please try again") 
            }
         });
      } catch (error) {
          console.log("error",error)
          setError("login Failed ! please try again")
      }
};

//cart
export const addToCartHandler = async (e,props,addToCart) => {
    e.preventDefault();
    let token = localStorage.getItem('token'); 
    try {
        await axios.post(`/api/user/cart`,{ product: props },
            		{ headers: { Accept: "*/*", authorization: token,},}).then((res)=>{
                        addToCart(props)
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
export const updateProductQty = async (e,id,Quntityfun,str) => {
    e.preventDefault();
    let token = localStorage.getItem('token'); 
    try {
        await axios.post(`/api/user/cart/${id}`,{ action: { type: str,},},
            		{ headers: { Accept: "*/*", authorization: token,},}).then((res)=>{
                        Quntityfun(id);
                       
         });
      } catch (error) {
          console.log("error",error)
      }
}

//cart delete id
export const removeFromCart = async(e,id,removeItem)=>{
    e.preventDefault();
    let token = localStorage.getItem('token');
    try {
       await axios.delete(`api/user/cart/${id}`, {
            headers: {
                authorization: token,
            },
        }).then((res)=>{
            removeItem(id)
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
export const addToWishlistHandler = async (e,props,addToWishList) =>{
    e.preventDefault();
    let token = localStorage.getItem('token'); 
    try {
        await axios.post(`/api/user/wishlist`,{ product: props },
            		{ headers: { Accept: "*/*", authorization: token,},}).then((res)=>{
                        addToWishList(props)
         });
      } catch (error) {
          console.log("error",error)
      }
}

//remove wishlist
export const removeFromWishlist = async(e,id,removeWishList)=>{
    e.preventDefault();
    let token = localStorage.getItem('token');
    try {
       await axios.delete(`api/user/wishlist/${id}`, {
            headers: {
                authorization: token,
            },
        }).then((res)=>{
            removeWishList(id)
        });
    } catch (error) {
        console.log("Error in cart service", error);
    }
}


