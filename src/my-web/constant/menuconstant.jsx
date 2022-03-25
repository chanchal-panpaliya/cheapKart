import menu1 from '../img/menu1.png';
import menu2 from '../img/menu2.png';
import menu3 from '../img/menu3.png';
import menu4 from '../img/menu4.png';
import menu5 from '../img/menu5.png';
import menu6 from '../img/menu6.jpg';
import menu8 from '../img/menu8.png';
import menu9 from '../img/menu9.png';

const menulist = [
    { 
      "id": 1,
      "menu_img": menu1,
      "menu_name" : "Top Offer" ,
      "Link" : "/product",
      "Menu_Item" : []
    },
    { 
        "id": 2,
        "menu_img": menu2,
        "menu_name" : "Grocery" ,
        "Link" : "/product",
        "Menu_Item" : []
    },
    { 
        "id": 3,
        "menu_img": menu3,
        "menu_name" : "Mobiles" ,
        "Link" : "/product",
        "Menu_Item" : [],
    },
    { 
        "id": 4,
        "menu_img": menu4,
        "menu_name" : "Fashion" ,
        "Link" : "/product",
        "Menu_Item" : [
            {
                "Item_name": "Men's Top Wear" ,
                "Sub_name" : ["All","Men's T-Shirts","Men's Casual Shirts","Men's Formal Shirts","Men's Kurtas","Men's Ethnic Sets","Men's Blazers","Men's Raincoat","Men's Windcheaters","Men's Suit","Men's Fabrics"]
                
            },
            {
                "Item_name": "Men's Bottom Wear" ,
                "Sub_name" : ["All","Men's Jeans","Men's Trousers","Men's Trackpants","Men's Shorts","Men's Cargos","Men's Threefourths","Men's Pyjamas & Loungepants","Men's Dhoti","Men's Ethnic Pyjama"]
            },
            {
                "Item_name": "Women Ethnic" ,
                "Sub_name" : ["All","Women Sarees","Women Kurtas & Kurtis","Women Kurta Sets & Salwar Suits","Ethnic Dresses","Women Dress Materials","Women Gowns","Women Lehenga Cholis","Women Leggings & Patialas","Women Palazzos & Shararas","Women Blouse","Women Dupatta"]
            },
            {
                "Item_name":"Women Western" ,
                "Sub_name" : ["All","Women Tops","Women Dresses","Women T-shirts & Polo T-shirts","Women Jeans","Women Nighties & Night Dresses","Women Nightsuit","Women Track Pants","Women Trouser","Women Jumpsuit","Women Shapewear"]
            },
            {
                "Item_name":"Men Footwear" ,
                "Sub_name" : ["All","Men's Sports Shoes","Men's Casual Shoes","Men's Sandals & Floaters","Men's Slippers & Flip Flops","Men's Formal Shoes","Men's Ethnic Shoes","Active Footwear","Combo Footwear","Shoe Care"]
            },
            {
                "Item_name":"Women Footwear" ,
                "Sub_name" : ["All","Women Flats","Women Heels","Women Wedges","Women Slipper Flip Flops","Women Casual Shoes","Women Sports Shoes","Women Ballerinas","Women Ethnic Shoes","Women Sneakers","Women Walking Shoes","Women Boots"]
            },
            {
                "Item_name":"Watches and Accessories" ,
                "Sub_name" : ["Men & Women Watches","Men & Women Sunglasses","Wallets","Men & Women Belts","Women Fashion Jewellery","Men Fashion Jewellery","Precious Jewellery","Precious Coins & Bars","Precious Articles","Frames & Contact Lenses","Kids Accessories"]
            },
            {
                "Item_name":"Bags, Suitcases & Luggage" ,
                "Sub_name" : ["All","Backpacks","Suitcases & Trolleys","Dufflebags","Rucksacks","Handbags","Slingbags","Women's Clutches & Wallets","Messenger Bags","Travel Accessories"]
            },
            {
                "Item_name":"Kids" ,
                "Sub_name" : ["All","Girls Dresses","Boys & Girls Tshirts","Boys & Girls Combosets","Boys & Girls Ethnic Wear","Boys & Girls Jeans","Boys & Girls Shorts","Boys & Girls Trackpants","Boys & Girls Innerwear","Infant Wear","Kids Slipper Flip Flops","Kids Sports Shoes"]
            },
            {
                "Item_name":"Essentials" ,
                "Sub_name" : ["Men's Briefs & Trunks","Men's Vests","Men's Boxers","Women Lingerie Sets","Women Bra","Women Panty","Women Sarees","Women Kurtas","Women Kurta Sets & Salwar Suits","Boys Innerwear","Girls Innerwear"]
            },
            {
                "Item_name":"Winter" ,
                "Sub_name" : ["All","Men's Jackets","Men's Sweatshirts","Men's Sweaters","Men's Thermals","Women's Jackets","Women's Sweatshirts","Women's Sweaters & Cardigans","Women's Shrugs","Kids SweatShirts","Women Kurtas","Kids Jackets"]
            }

        ]
    },
    {
        "id": 5,
        "menu_img": menu5,
        "Link" : "/product",
        "menu_name" : "Electronics",  
        "Menu_Item" : [
            {
                "Item_name":"Audio" ,
                "Sub_name" : ["All","Bluetooth Headphones","Wired Headphones","True Wireless Earbuds","Bluetooth Speakers","Soundbars","Home Theatres","TV Streaming Device","Remote Control","DTH Set top box","Headphones Pouch & Case Covers"]
            },
            {
                "Item_name":"Electronics GST Store" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Cameras & Accessories" ,
                "Sub_name" : ["All","DSLR & Mirrorless","Sports & action","Point & Shoot","Instant Cameras","Camcorders","Camera tripods","Camera Lenses","Drone","Flashes","Gimbals","Binoculars"]
            },
            {
                "Item_name":"Computer Peripherals" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Gaming" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Health & Personal Care" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Laptop Accessories" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Laptop and Desktop" ,
                "Sub_name" : []
            },
            {
                "Item_name":"MobileAccessory" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Powerbank" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Smart Home automation" ,
                "Sub_name" : []
            },
            {
                "Item_name":" Smart Wearables" ,
                "Sub_name" : []
            }
        ]
    },
    {
        "id": 6,
        "menu_img": menu6,
        "Link" : "/product",
        "menu_name" : "Home",
        "Menu_Item" : [
            {
                "Item_name":"Living Room" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Kitchen & Dining" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Bedroom room" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Home Decor" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Tools & Utility" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Lightings & Electricals" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Space Saving" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Cleaning & Bath" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Kids Furniture" ,
                "Sub_name" : []
            },

            {
                "Item_name":"Pet & Gardening" ,
                "Sub_name" : []
            },

        ]  
        
    },
    {
        "id": 7,
        "menu_img": menu9,
        "menu_name" : "Appliances", 
        "Link" : "/product", 
        "Menu_Item" : [
            {
                "Item_name":"Televisions" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Washing Machines" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Air Conditioners" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Refrigerators" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Kitchen Appliances" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Seasonal Appliances" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Premium Appliances" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Buying Guides" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Flipkart Benefits" ,
                "Sub_name" : []
            },
        ]  
        
    },
    {
        "id": 8,
        "menu_img": menu8,
        "menu_name" : "Beauty, Toys & More",
        "Link" : "/product",  
        "Menu_Item" : [
            {
                "Item_name":"Beauty & Personal Care" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Men's Grooming" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Food & Drinks" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Nutrition & Health Care" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Baby Care" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Toys & School Supplies" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Sports & Fitness" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Books & Music" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Stationery & Office Supplies" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Auto Accessories" ,
                "Sub_name" : []
            },
            {
                "Item_name":"Safety & Hygiene Essentials" ,
                "Sub_name" : []
            },
        ]  
    }

];









export default {menulist};