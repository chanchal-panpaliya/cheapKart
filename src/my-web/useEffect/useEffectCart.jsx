
import axios from "axios";

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
export async function handleRegistration(data){
    
    try {
        console.log(data)

         await axios.post("/api/auth/signup",data).then((res) => console.log(res));

          } catch (error) {
              console.log(error)
           
        }
}

//login
export const handleLogin = async ({e,email,password,setFormData}) => {
    e.preventDefault();
    try {
     await axios.post('/api/auth/login', {
          email,
          password
        }).then((res)=>
             console.log(res)
        );
      } catch (error) {
          console.log(error)
      }

  };

