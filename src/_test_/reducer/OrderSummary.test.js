import {ordersummary_reducer} from '../../my-web/context/checkout/checkout'

const InitialReducerState = {
    ordersummarydata : "Home"
}

describe("testing Order Summary", () => {
    //selectedMenu
    it("should set the Order Summary", () => {   

        let cartItems =  [{
            Loader:"",
            createdAt: "2022-06-25T13:09:09+05:30",
            data:{
                _id: 3,
                categoryName: "Home",
                quntity:"1",
                title: "GTB Plant Container Set  (Pack of 5, Plastic)",
                type:"Plant Container",
                costprice:"999",
                saleingprice: "299",
                extraOff : "50",
                percentOff:"70", 
                Rating:"4",
                Reviews:"144",
                Status:"Available",
                Image:"https://rukminim2.flixcart.com/image/216/216/k5jxfgw0/plant-container/q/f/4/hanging-planter-flower-pot-basket-plant-container-set-fp-01-5-pc-original-imafz7sfx44nrak5.jpeg?q=70",
                Availableoffers : [
                                "Special PriceGet at flat ₹99",
                                "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                                "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                                "Bank Offer10% off on Federal Bank Cards, up to ₹1500. On orders of ₹5000 and above",
                                "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                                "Partner OfferBuy this product and get upto ₹500 off on Flipkart Furniture"
                                 ],
              DeliverBy:"Delivery by 21 march",
              Change:"40",
              Replacement:"7 Days Return Policy",
              Specifications:[
                {Name:"In The Box",
                SubItem:[ 
                          {type:"Sales Package",value:"5__Multicolor"} ,
                          {type:"Model Number",value:"Hanging Planter Flower Pot Basket Plant Container Set fp-01-5 pc"} ,  
                        ]
                },
                {
                  Name:"More Details", 
                  SubItem:[
                      {type:"Generic Name",value:"Plant Container Set"},
                      {type:"Country of Origin",value:"India"},
                    ]
                },
              ],
              SmallImages:[
                        "https://rukminim1.flixcart.com/image/128/128/k5jxfgw0/plant-container/q/f/4/hanging-planter-flower-pot-basket-plant-container-set-fp-01-5-pc-original-imafz7sfx44nrak5.jpeg?q=70",
                        "https://rukminim1.flixcart.com/image/128/128/k5pn6vk0/plant-container/r/v/h/hanging-planter-flower-pot-basket-plant-container-set-fp-01-2-pc-original-imafz7sfzpy3crue.jpeg?q=70"
                          ],
              RatingReviewData :[
                  {title:"Really Nice",
                  rating:"4",
                  desc:"It's just awesome satisfied my mom loved it must buy this for beautiful gardening ???",
                  images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202108/blobio-imr-202108_f5c9a8ce52604d74befea86aa04bd7e3.jpg?q=90"]
                  },
                  {title:"Nice",
                  rating:"5",
                  desc:"Nice looking product",
                   images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202010/blobio-imr-202010_8db00162d8e04790ba91e0f0d547e65e.jpg?q=90",
                           "https://rukminim1.flixcart.com/blobio/178/178/imr-202011/blobio-imr-202011_19751da1bcd14619abf499a569212f03.jpg?q=90"]
                  },
                  {
                    title:"Perfect product",
                    rating:"5",
                    desc:"Nice item Quality is good",
                    images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202201/blobio-imr-202201_9ea5319cdf8b4658993d5275b14dc0bf.jpg?q=90"]
                  },
                 ],
            },
            qty: 1,
            updatedAt: "2022-06-25T13:09:09+05:30"
          }]
    
        let gettotalamount =  cartItems.length>0 && cartItems.reduce((amount, item) =>{
            let price = item.data.saleingprice.replace(/\,(\d\d)$/, ".$1").replace(',','');
            let sale_cost  = Number(price);
            let quntity = Number(item.qty);
            let extraoff = Number(item.data.extraOff);
            return ((sale_cost-extraoff)*quntity) + amount}, 0)
    
        let discounttotal = gettotalamount - (gettotalamount * (30/100)) + 75  
           
        const checkoutdata = {
            Items : cartItems,
            Subamount:gettotalamount,
            Delivery:75,
            Total: gettotalamount + 75,
            Coupancode:"AcB#123",
            Discount:30,
            Finaltotal:Math.round(discounttotal)
        }

        let data = {
            paymentId: "rzp_test_JTpMiaE4ZqOyY7",
            cartItems: checkoutdata,
            amount: checkoutdata.Finaltotal,
            address : {
                BillerName : "chanchal panpaliya" ,
                BillerCounty : "india",
                BillerAddress : "biji nagar" ,
                BillerCity : "pune",
                BillerMobileNumber : "098765431" ,
                BillerState : "Maha",
                BillerZipPostal : "444202"
            }
          }

        const expectedState = {
            ...InitialReducerState,
            ordersummarydata : [...InitialReducerState.ordersummarydata,data]
        }

        const state = ordersummary_reducer(InitialReducerState, {
            type: "ORDER_DATA",
            payload : data
        });
       
        expect(state).toEqual(expectedState); 
    })
});