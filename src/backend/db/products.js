import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  //mobile
  {
    _id: uuid(),
    categoryName: "Mobiles",
    quntity:"1",
    title: "Xiaomi 11i 5G (Camo Green, 128 GB)  (6 GB RAM)",
    costprice:"29,999",
    saleingprice: "24,999",
    extraOff : "5000",
    percentOff:"16", 
    packagingCharges : "49",
    Rating:"4.2",
    Reviews:"1,234",
    Image:"https://rukminim2.flixcart.com/image/416/416/ky7lci80/mobile/i/w/n/-original-imagag2gugrdkbwu.jpeg?q=70",
    Availableoffers : ["Bank Offer10% off on SBI Credit Card, up to ₹750. On orders of ₹5000 and above",
                       "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                       "Bank OfferFlat ₹250 off on SBI Credit Card Transactions",
                       "Special PriceGet extra ₹5000 off (price inclusive of discount)",
                       "Freebie25% Off on Discovery+ Subscription",
                       "FreebieAdd Bitcoin worth ₹201 to your portfolio",
                       "No cost EMI ₹4,167/month. Standard EMI also available",
                       "Combo OfferBuy 3 or more items save 1%",
                       "FreebieUpto 25% off on PharmEasy",
                       "Get Google Pixel Buds A-series at ₹6999",
                       "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                       "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"],
  BuywithoutExchange : "24,999",
  BuywithExchange : "Up to 17,000 off",
  Warranty:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box Accessories",
  
  RAM:"6GB",
  ROM:"128GB",
  ExpandableMemory:"1TB",
  Color:"Green",
  SIMType:"Dual Sim",


  DeliverBy:"Delivery by21 Mar, Monday",
  Change:"Free",
  Highlights:["6 GB RAM | 128 GB ROM | Expandable Upto 1 TB","16.94 cm (6.67 inch) Full HD+ AMOLED Display",
              "108MP Rear Camera | 16MP Front Camera","5160 mAh Li-Polymer Battery","Mediatek Dimensity 920 Processor"] ,
  EasyPaymentOptions:["No cost EMI starting from ₹4,167/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
  Replacement:"7 Days Replacement Policy",
  Specifications:[
    {Name:"General",
    SubItem:[ 
              {type:"InTheBox",value:"Handset, 67 W Power Adapter, USB Cable, SIM Eject Tool, Warranty Card, User Guide, Clear Soft Case, Screen Protector Pre-Applied on the Phone"},
              {type:"ModelNumber",value:"MZB0A5AIN"},
              {type:"ModelName",value:"11i 5G"},
              {type:"Color",value:"Camo Green"},
              {type:"BrowseType",value:"Smartphones"},
              {type:"SIMType",value:"Dual Sim"},
              {type:"HybridSimSlot",value:"Yes"},
              {type:"Touchscreen",value:"Yes"},
              {type:"OTGCompatible",value:"Yes"},
              {type:"QuickCharging",value:"Yes"},
              {type:"SoundEnhancements",value:"Dual Symmetrical Stereo Speakers (Dolby Atmos, Hi-Res Audio Certification, Hi-Res Wireless Certification)"},
              {type:"Head",value:"0.824W/Kg"},
              {type:"Body",value:"0.608W/Kg"},
           ]
    },
    {
      Name:"DisplayFeatures",
      SubItem:[
        {type:"DisplaySize",value:"16.94 cm (6.67 inch)"},
        {type:"Resolution",value:"2400 x 1080 Pixels"},
        {type:"ResolutionType",value:"Full HD+ AMOLED Display"},
        {type:"GPU",value:"ARM Mali-G68 MC4"},
        {type:"DisplayType",value:"Full HD + AMOLED Dot Display"},
        {type:"HDGameSupport",value:"Yes"},
        {type:"DisplayColors",value:"16M"},
       
       ]
    },
    {
      Name:"Os & Processor Features",
      SubItem:[
        {type:"OperatingSystem",value:"Android 11"},
        {type:"ProcessorType",value:"Mediatek Dimensity 920"},
        {type:"ProcessorCore",value:"Octa Core"},
        {type:"PrimaryClockSpeed",value:"2.5 GHz"},
        {type:"SecondaryClockSpeed",value:"2 GHz"},
        {type:"OperatingFrequency",value:"5G NR: N1, N3, N5, N8, N28, N40, N77, N78, 4G FDD: B1, B3, B5, B8, 4G TDD: B40, B41, 3G WCDMA: B1, B2, B5, B8, 2G GSM: B2, B3, B5, B8"},
       ]
    },
    {
      Name:"Memory & Storage Features",
      SubItem:[
        {type:"InternalStorage",value:"128 GB"},
        {type:"RAM",value:"6 GB"},
        {type:"ExpandableStorage",value:"1 TB"},
        {type:"Supported Memory Card Type",value:"microSD"},
        {type:"Memory Card Slot Type",value:"Hybrid Slot"},
        {type:"Call Log Memory",value:"Yes"}, 
      ]
    },
    {
      Name:"Camera Features",
      SubItem:[
        {type:"Primary Camera Available",value:"Yes"},
        {type:"Primary Camera",value:"108MP Rear Camera"},
        {type:"Primary Camera Features",value:"Triple Camera Setup: 108MP f/1.89 Primary Camera, 8MP f/2.2 120 Degree Ultra Wide Camera, 2MP Macro Camera, Camera Features: Panaroma, Document Mode, VLOG Mode, Time-Lapse, Long Exposure, Pro Colour Mode, Timed Burst, Movie Frame, Pro Mode"},
        {type:"Secondary Camera Available",value:"Yes"},
        {type:"Secondary Camera",value:"16MP Front Camera"},
        {type:"Secondary Camera Features",value:"16 MP Camera Setup: (f/2.45 Aperture)"}, 
        {type:"Flash",value:"Rear: Flash"},
        {type:"HD Recording",value:"Yes"},
        {type:"Full HD Recording",value:"Yes"},
        {type:"Video Recording",value:"Yes"},
        {type:"Video Recording Resolution",value:"Rear Camera: 1080P (at 30 fps / 60 fps), 720P (at 30 fps), Supports: 4K (at 30 fps), Slow Motion: 1080P (at 120 fps), 720P (at 960 fps / 240 fps / 120 fps)"},
        {type:"Digital Zoom",value:"Yes"},
        {type:"Image Editor",value:"Yes"},
      ]},
    {
      Name:"Call Features", 
      SubItem:[
          {type:"Call Wait/Hold",value:"Yes"},
          {type:"Hands Free",value:"Yes"},
          {type:"Video Call Support",value:"Yes"},
          {type:"Call Divert",value:"Yes"},
          {type:"Phone Book",value:"Yes"},
          {type:"Call Timer",value:"Yes"},
          {type:"Speaker Phone",value:"Yes"},
          {type:"Call Records",value:"Yes"},
        ]
    },
    {
      Name:"Connectivity Features", 
      SubItem:[
          {type:"Network Type",value:"5G, 4G VOLTE, 4G, 3G, 2G"},
          {type:"Supported Networks",value:"5G, 4G VoLTE, 4G LTE, WCDMA, GSM"},
          {type:"Internet Connectivity",value:"5G, 4G, 3G, Wi-Fi, EDGE, GPRS"},
          {type:"GPRS",value:"Yes"},
          {type:"Bluetooth Support",value:"Yes"},
          {type:"Bluetooth Version",value:"v5.2"},
          {type:"Wi-Fi",value:"Yes"},
          {type:"Wi-Fi Version",value:"802.11a/b/g/n/ac/ax"},
          {type:"Wi-Fi Hotspot",value:"Yes"},
          {type:"NFC",value:"No"},
          {type:"USB Tethering",value:"Yes"},
          {type:"Infrared",value:"Yes"},
          {type:"USB Connectivity",value:"Yes"},
          {type:"Audio Jack",value:"3.5mm"},
          {type:"Map Support",value:"Google Maps"},
          {type:"GPS Support",value:"Yes"},
        ]
    },
    {
      Name:"Other Details", 
      SubItem:[
          {type:"Smartphone",value:"Yes"},
          {type:"Touchscreen Type",value:"Capacitive"},
          {type:"SIM Size",value:"Nano"},
          {type:"User Interface",value:"MIUI 12.5"},
          {type:"Instant Message",value:"Yes"},
          {type:"Removable Battery",value:"No"},
          {type:"MMS",value:"Yes"},
          {type:"SMS",value:"Yes"},
          {type:"Keypad",value:"No"},
          {type:"Voice Input",value:"Yes"},
          {type:"Graphics PPI",value:"395 PPI"},
          {type:"Predictive Text Input",value:"Yes"},
          {type:"User Memory",value:"105.7"},
          {type:"Sensors",value:"Accelerometer, Gyro Sensor, E-compass, Proximity Sensor, Ambient Light Sensor, Side Fingerprint Sensor"},
          {type:"Browser",value:"Google Chrome"},
          {type:"Other Features",value:"SGS Eye Care Certified Display, Corning Gorilla Glass 5 Protection, IP 53 Rating, VC Liquidcool Technology, Wi-Fi 6 Enabled, IR Blaster, Quick Charge - 67 W Turbocharge, Charging Time: 0 to 50% in 13 mins"},
          {type:"GPS Type",value:"Dual GPS, AGPS, GLONASS, BEIDOU"},

        ]
    },
    {
      Name:"Multimedia Features", 
      SubItem:[
          {type:"FM Radio",value:"Yes"},
          {type:"FM Radio Recording",value:"Yes"},
          {type:"Music Player",value:"Yes"},
        ]
    },
    {
      Name:"Battery & Power Features", 
      SubItem:[
          {type:"Battery Capacity",value:"5160 mAh"},
          {type:"Talk Time",value:"30 hrs"},
        ]
    },
    {
      Name:"Dimensions", 
      SubItem:[
          {type:"Width",value:"76.19 mm"},
          {type:"Height",value:"163.65 mm"},
          {type:"Depth",value:"8.34 mm"},
        ]
    },
    {
      Name:"Warranty", 
      SubItem:[
          {type:"Warranty Summary",value:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box Accessories"},
          {type:"Domestic Warranty",value:"1 Year"},
        ]
    },
  ],

  SmallImages:[
    // "https://rukminim2.flixcart.com/image/416/416/kxz0pe80/mobile/x/2/s/-original-imagaaxkyk8bmkgq.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/kxz0pe80/mobile/b/d/d/-original-imagaaxk3esduzg7.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/kxz0pe80/mobile/0/t/m/-original-imagaaxkmuufpvdb.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/kxz0pe80/mobile/0/t/m/-original-imagaaxkmuufpvdb.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/ky7lci80/mobile/l/v/t/-original-imagag2gnjpzzfqs.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/ky7lci80/mobile/y/n/q/-original-imagag2ghbvbdqs7.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/kxz0pe80/mobile/n/h/n/-original-imagaaxkg3qhhd7g.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/ky1vl3k0/mobile/p/u/z/-original-imagadbyxtpyh3cv.jpeg?q=70",
    // "https://rukminim1.flixcart.com/image/128/128/ky7lci80/mobile/9/h/c/-original-imagag2gqzwkupt9.jpeg?q=70"
  ],
  RatingReviewData :[
      {title:"Brilliant",
       rating:"5",
       desc:"This phone looks great in real life than in image .. must buy.. sound quality is best.. design of phone is amazing .. I loved it",
       images:["https://rukminim1.flixcart.com/blobio/248/248/imr-202201/blobio-imr-202201_c0c2c8a436ed47daa77bf55a49c7247a.jpg?q=90",
              "https://rukminim1.flixcart.com/blobio/248/248/imr-202201/blobio-imr-202201_543878fb1cdc4202a6696c69395f9e1a.jpg?q=90"
          ]
      },
      {title:"Delightful",
      rating:"4",
      desc:"Pros - display , loud speaker👌👌 ,good sunlight viewing ,super touch 120 Hertz ,always on display . Cons - average camera",
      images:["https://rukminim1.flixcart.com/blobio/248/248/imr-202202/blobio-imr-202202_56dcb5698e5440a79a5b59a4828ad500.jpg?q=90",
              "https://rukminim1.flixcart.com/blobio/248/248/imr-202201/blobio-imr-202201_0804cef3bc04489894e36de07ebce3d7.jpg?q=90",
              "https://rukminim1.flixcart.com/blobio/178/178/imr-202202/blobio-imr-202202_c0cf0f5faacb478e88efd764accd53ee.jpg?q=90"]
      },
      {title:"Delightful",
      rating:"5",
      desc:"Overall Very Nice Phone , 4.5 star out of the 5 , Thank you Flipkart",
      images:[
           "https://rukminim1.flixcart.com/blobio/178/178/imr-202201/blobio-imr-202201_363e496fbcdc436f80df1d2ec13053a4.jpg?q=90",
           "https://rukminim1.flixcart.com/blobio/178/178/imr-202201/blobio-imr-202201_f526b83ad1644900bda1d092c03220e2.jpg?q=90",
           "https://rukminim1.flixcart.com/blobio/178/178/imr-202201/blobio-imr-202201_f39ed6ee09a54058af4211da80e02b2e.jpg?q=90"
         ]
      }
     ],
  },
  {
      _id: uuid(),
      categoryName: "Mobiles",
      quntity:"1",
      title: "OPPO A16k (White, 32 GB)  (3 GB RAM) - Offer for the week ",
      costprice:"13,990",
      saleingprice: "9,990",
      extraOff : "4000",
      percentOff:"28", 
      packagingCharges : "49",
      Rating:"3",
      Reviews:"1,012",
      Image:"https://rukminim2.flixcart.com/image/416/416/kyg5zm80/mobile/n/y/9/-original-imagazh6fmxqpc4m.jpeg?q=70",
      Availableoffers : ["Bank Offer 10% off on SBI Credit Card, up to ₹750. On orders of ₹5000 and above",
                         "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                         "Special PriceGet extra ₹4000 off (price inclusive of discount)",
                         "FreebieAdd Bitcoin worth ₹201 to your portfolio",
                         "Freebie25% Off on Discovery+ Subscription",
                         "FreebieFree 6 Months Gaana Plus",
                         "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                         "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                         "FreebieUpto 25% off on PharmEasy",
                         "EMI starting from ₹347/month",
                       ],
    BuywithoutExchange : "9,990",
    BuywithExchange : "Up to 9,300 off",
    Warranty:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories",
    
    RAM:"3GB",
    ROM:"32GB",
    ExpandableMemory:"1 TB",
    Color:"White",
    SIMType:"Dual Sim",

    DeliverBy:"Delivery by21 Mar, Monday",
    Change:"Free",
    Highlights:["3 GB RAM | 32 GB ROM | Expandable Upto 1 TB","Mediatek Helio G35 (MT6765) Processor",
                "16.56 cm (6.52 inch) HD+ Display","13MP Rear Camera | 5MP Front Camera","4230 mAh Battery",] ,
    EasyPaymentOptions:["EMI starting from ₹347/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
    Replacement:"7 Days Replacement Policy",
    Specifications:[
      {Name:"General",
      SubItem:[ 
                {type:"InTheBox",value:"Handset, Data Cable, Charger, Sim Cartoon Pin, Protective Cover, Quick Start Guide, Warranty Card"},
                {type:"ModelNumber",value:"CPH2349"},
                {type:"ModelName",value:"A16k"},
                {type:"Color",value:"White"},
                {type:"BrowseType",value:"Smartphones"},
                {type:"SIMType",value:"Dual Sim"},
                {type:"HybridSimSlot",value:"No"},
                {type:"Touchscreen",value:"Yes"},
                {type:"OTGCompatible",value:"Yes"},
                {type:"SAR Value",value:"Head: <2.0 W/kg, Body: <2.0 W/kg"},
              
             ]
      },
      {
        Name:"DisplayFeatures",
        SubItem:[
          {type:"DisplaySize",value:"16.56 cm (6.52 inch)"},
          {type:"Resolution",value:"1600 x 720 Pixels"},
          {type:"ResolutionType",value:"HD+"},
          {type:"GPU",value:"IMG GE8320 (at 680 MHz)"},
          {type:"DisplayType",value:"HD+ LCD Display"},
          {type:"OtherDisplayFeatures",value:"Screen-to-Body Ratio: 89.27%, Color Saturation: 71% NTSC, 60 Hz Refresh Rate, Touch Sampling Rate: 60 Hz, Contrast Ratio: 1500:1, Brightness: 480 nits, Cover Glass: Corning Glass 3"},
         ]
      },
      {
        Name:"Os & Processor Features",
        SubItem:[
          {type:"OperatingSystem",value:"Android 11"},
          {type:"ProcessorType",value:"Mediatek Helio G35 (MT6765)"},
          {type:"ProcessorCore",value:"Octa Core"},
          {type:"PrimaryClockSpeed",value:"2.3 GHz"},
          {type:"SecondaryClockSpeed",value:"1.8 GHz"},
          {type:"OperatingFrequency",value:"2G GSM: 850 MHz/900 MHz/1800 MHz/1900 MHz, 3G UMTS(WCDMA):B1/B5/B8, 4G TD-LTE: B38/B40/B41(120MHz), 4G LTE FDD: B1/B3/B5/B7/B8/B20/B28"},
         ]
      },
      {
        Name:"Memory & Storage Features",
        SubItem:[
          {type:"InternalStorage",value:"32 GB"},
          {type:"RAM",value:"3 GB"},
          {type:"ExpandableStorage",value:"1 TB"},
          {type:"Supported Memory Card Type",value:"MicroSD"},
          {type:"Memory Card Slot Type",value:"Dedicated Slot"},
        ]
      },
      {
        Name:"Camera Features",
        SubItem:[
            {type:"Primary Camera Available",value:"Yes"},
            {type:"Primary Camera",value:"13MP Rear Camera"},
            {type:"Primary Camera Features",value:"13MP Camera (f/2.2 Aperture, FOV: 80 Degree, 5P Lens, AF Supported), Camera Feature: Photo, Video, Night, Expert, Panoramic, Timelapse"},
            {type:"Secondary Camera Available",value:"Yes"},
            {type:"Secondary Camera",value:"5MP Front Camera"},
            {type:"Secondary Camera Features",value:"5MP Camera Setup: (f/2.4 Aperture, FOV: 76 Degree, 3P Lens), Camera Feature: Photo (Retouching Turned On by Default), Video, Panoramic, Timelapse"}, 
            {type:"Full HD Recording",value:"Yes"},
            {type:"Video Recording Resolution",value:"Rear Camera: 1080P (at 30 fps / 60 fps), 720P (at 30 fps), Supports: 4K (at 30 fps), Slow Motion: 1080P (at 120 fps), 720P (at 960 fps / 240 fps / 120 fps)"},
            {type:"Frame Rate",value:"30 fps"},
          ]
      },
      {
        Name:"Connectivity Features", 
        SubItem:[
            {type:"Network Type",value:"4G VOLTE, 4G, 3G, 2G"},
            {type:"Supported Networks",value:"4G VoLTE, 4G LTE, WCDMA, GSM"},
            {type:"Internet Connectivity",value:"4G,3G, Wi-Fi"},
            {type:"Micro USB Port",value:"Yes"},
            {type:"Bluetooth Support",value:"Yes"},
            {type:"Bluetooth Version",value:"v5.0"},
            {type:"Wi-Fi",value:"Yes"},
            {type:"Wi-Fi Version",value:"802.11a/b/g/n/ac (2.4 GHz | 5.0 GHz)"},
            {type:"NFC",value:"No"},
            {type:"USB Tethering",value:"Yes"},
            {type:"Infrared",value:"Yes"},
            {type:"USB Connectivity",value:"Yes"},
            {type:"Audio Jack",value:"3.5mm"},
            {type:"Map Support",value:"Google Maps"},
          ]
      },
      {
        Name:"Other Details", 
        SubItem:[
            {type:"Smartphone",value:"Yes"},
            {type:"SIM Size",value:"Nano Sim + U-Nano Sim"},
            {type:"User Interface",value:"ColorOS 11.1 (Based on Android 11)"},
            {type:"Graphics PPI",value:"269 PPI"},
            {type:"Sensors",value:"Geomagnetic Sensor, Light Sensor, Proximity Sensor, Accelerometer, Gravity Sensor, E-Compass"},
            {type:"Other Features",value:"ROM: eMMC 5.1, OTG: FAT32, NTFS, EXFAT, LTE Cat: CAT D4U5, DL/ UL 150 Mbps/ 75 Mbps, IPX4 Waterproof, Bluetooth Audio Codec: SBC, AAC, aptX, LDAC, Support Face Unlock"},
            {type:"GPS Type",value:"GPS, AGPS, BEIDOU, GLONASS, GALILEO"},

          ]
      },
      {
        Name:"Battery & Power Features", 
        SubItem:[
            {type:"Battery Capacity",value:"4230 mAh"},
          ]
      },
      {
        Name:"Dimensions", 
        SubItem:[
            {type:"Width",value:"75.4 mm"},
            {type:"Height",value:"164 mm"},
            {type:"Depth",value:"7.85 mm"},
            {type:"Weight",value:"175 g"},
          ]
      },
      {
        Name:"Warranty", 
        SubItem:[
            {type:"Warranty Summary",value:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box Accessories"},
            {type:"Domestic Warranty",value:"1 Year"},
          ]
      },
    ],
 
    SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/kyg5zm80/mobile/n/y/9/-original-imagazh6fmxqpc4m.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kyg5zm80/mobile/5/d/2/-original-imagazh6tbmqntyg.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kyg5zm80/mobile/g/m/7/-original-imagazh6hgzzj8qv.jpeg?q=70",
      // "https://rukminim1.flixcart.com/image/128/128/kyg5zm80/mobile/u/y/d/-original-imagazh6tfznuw5z.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kyg5zm80/mobile/e/0/v/-original-imagazh69fpf7g6m.jpeg?q=70",
      // "https://rukminim1.flixcart.com/image/128/128/kyg5zm80/mobile/o/m/g/-original-imagazh67ux8vkyt.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kyg5zm80/mobile/r/n/x/-original-imagazh6zjgrcqz5.jpeg?q=70",
      // "https://rukminim1.flixcart.com/image/128/128/kyg5zm80/mobile/i/t/d/-original-imagazh6ef5mhqy4.jpeg?q=70",

    ],
    RatingReviewData :[

        {title:"Great product",
        rating:"5",
        desc:"Camera Quality is much better than similar range mobiles. Look wise is also impressive.",
        images:[]
        },
        {title:"Excellent",
        rating:"5",
        desc:"Fantastic ☺️☺️☺️",
         images:[]
        }
       ],
    },

    {
      _id: uuid(),
      categoryName: "Mobiles",
      quntity:"1",
      title: "SAMSUNG Galaxy F12 (Sea Green, 64 GB)(4 GB RAM)",
      costprice:"12,999",
      saleingprice: "9,499",
      extraOff : "3500",
      percentOff:"26", 
      packagingCharges : "49",
      Rating:"4.5",
      Reviews:"18,462",
      Image:"https://rukminim2.flixcart.com/image/416/416/kn22m4w0/mobile/a/q/8/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmjw3xqg4yk.jpeg?q=70",
      Availableoffers : ["Bank Offer10% off on SBI Credit Card, up to ₹750. On orders of ₹5000 and above",
                         "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                         "Special PriceExtra ₹3500 off(price inclusive of discount)",
                         "Get Lenovo smart clock essential at just ₹2999",
                         "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                         "Combo OfferBuy 3 or more items save 1%",
                         "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                         "Partner OfferGST Invoice Available! Save up to 28%",
                         "EMI starting from ₹330/month",
                       ],
    BuywithoutExchange : "9,499",
    BuywithExchange : "up to ₹8,950 off",
    Warranty:"1 Year Warranty Provided by the Manufacturer from Date of Purchase",

    RAM:"4GB",
    ROM:"64GB",
    ExpandableMemory:"512GB",
    Color:"Green",
    SIMType:"Dual Sim",

    DeliverBy:"Delivery by21 Mar, Monday",
    Change:"Free",
    Highlights:["4 GB RAM | 64 GB ROM | Expandable Upto 512 GB","16.55 cm (6.515 inch) HD+ Display",
                "48MP + 5MP + 2MP + 2MP | 8MP Front Camera","6000 mAh Lithium-ion Battery","Exynos 850 Processor",] ,
    EasyPaymentOptions:["EMI starting from ₹330/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
    Replacement:"7 Days Replacement Policy With GST invoice available",
    Specifications:[
      {Name:"General",
      SubItem:[ 
                {type:"InTheBox",value:"Handset, Data Cable and Travel Adaptor, Ejection Pin, Manual"},
                {type:"ModelNumber",value:"SM-F127GZGGINS"},
                {type:"ModelName",value:"Galaxy F12"},
                {type:"Color",value:"Sea Green"},
                {type:"BrowseType",value:"Smartphones"},
                {type:"SIMType",value:"Dual Sim"},
                {type:"HybridSimSlot",value:"No"},
                {type:"Touchscreen",value:"Yes"},
                {type:"OTGCompatible",value:"Yes"},                
             ]
      },
      {
        Name:"DisplayFeatures",
        SubItem:[
          {type:"DisplaySize",value:"16.55 cm (6.515 inch)"},
          {type:"Resolution",value:"1600 x 720 Pixels"},
          {type:"ResolutionType",value:"HD+"},
          {type:"GPU",value:"ARM Mali G52"},
          {type:"DisplayType",value:"HD+ Display"},
          {type:"DisplayColor",value:"16M"},
         ]
      },
      {
        Name:"Os & Processor Features",
        SubItem:[
          {type:"OperatingSystem",value:"Android 11"},
          {type:"ProcessorType",value:"Exynos 850"},
          {type:"ProcessorCore",value:"Octa Core"},
          {type:"PrimaryClockSpeed",value:"2 GHz"},
         ]
      },
      {
        Name:"Memory & Storage Features",
        SubItem:[
          {type:"InternalStorage",value:"64 GB"},
          {type:"RAM",value:"4 GB"},
          {type:"ExpandableStorage",value:"512 GB"},
          {type:"Supported Memory Card Type",value:"MicroSD"},
          {type:"Memory Card Slot Type",value:"Dedicated Slot"},
        ]
      },
      {
        Name:"Camera Features",
        SubItem:[
            {type:"Primary Camera Available",value:"Yes"},
            {type:"Primary Camera",value:"48MP + 5MP + 2MP + 2MP"},
            {type:"Primary Camera Features",value:"Quad Rear Camera Setup: 48MP Main (f/2.0) + 5MP Ultra-wide (f/2.2) + 2MP Depth (f/2.4) + 2MP Macro (f/2.4), Photo, Pro, Video, Panorama, Filters, Stamps, Live Stickers"},
            {type:"Secondary Camera Available",value:"Yes"},
            {type:"Secondary Camera",value:"8MP Front Camera"},
            {type:"Secondary Camera Features",value:"8MP Front Camera (f/2.2), Ultra Wide, Live Focus, Macro"}, 
            {type:"Flash",value:"Rear Flash"},
            {type:"Video Recording",value:"Yes"},
            {type:"Digital Zoom",value:"10x"},
            {type:"Image Editor",value:"Yes"},
            {type:"Dual Camera Lens",value:"Primary Camera"},
          ]
      },
      {
        Name:"Call Features", 
        SubItem:[
            {type:"Call Wait/Hold",value:"Yes"},
            {type:"Hands Free",value:"Yes"},
            {type:"Video Call Support",value:"Yes"},
            {type:"Call Divert",value:"Yes"},
            {type:"Phone Book",value:"Yes"},
            {type:"Call Timer",value:"Yes"},
            {type:"Speaker Phone",value:"Yes"},
            {type:"Call Records",value:"Yes"},
          ]
      },
      {
        Name:"Connectivity Features", 
        SubItem:[
            {type:"Network Type",value:"4G, 3G, 2G"},
            {type:"Supported Networks",value:"4G LTE, WCDMA, GSM"},
            {type:"Internet Connectivity",value:"4G, 3G, Wi-Fi, EDGE, GPRS"},
            {type:"3G",value:"Yes"},
            {type:"GPRS",value:"Yes"},
            {type:"Pre-installed Browser",value:"Google Chrome | Samsung S-Browser 11.2"},
            {type:"Bluetooth Support",value:"Yes"},
            {type:"Bluetooth Version",value:"v5.0"},
            {type:"Wi-Fi",value:"Yes"},
            {type:"Wi-Fi Hotspot",value:"Yes"},
            {type:"Infrared",value:"No"},
            {type:"EDGE",value:"Yes"},
            {type:"Infrared",value:"Yes"},
            {type:"USB Connectivity",value:"Yes"},
            {type:"Audio Jack",value:"3.5mm"},
            {type:"Map Support",value:"Google Maps"},
            {type:"GPS Support",value:"Yes"},
          ]
      },
      {
        Name:"Other Details", 
        SubItem:[
            {type:"Smartphone",value:"Yes"},
            {type:"SIM Size",value:"Nano"},
            {type:"Social Networking Phone",value:"Yes"},
            {type:"Removable Battery" , value:"No"},
            {type:"SMS",value:"Yes"},
            {type:"Voice Input",value:"Yes"},
            {type:"Graphics PPI",value:"269 PPI"},
            {type:"Sensors",value:"Accelerometer, Fingerprint Sensor, Grip Sensor, Virtual Light Sensor, Virtual Proximity Sensor"},
            {type:"Series",value:"F Series"},
            {type:"Browser",value:"Google Chrome | Samsung S-Browser 11.2"},

          ]
      },
      {
        Name:"Battery & Power Features", 
        SubItem:[
            {type:"Battery Capacity",value:"6000 mAh"},
          ]
      },
      {
        Name:"Multimedia Features", 
        SubItem:[
            {type:"FM Radio",value:"Yes"},
            {type:"FM Radio Recording",value:"Yes"},
          ]
      },
      {
        Name:"Dimensions", 
        SubItem:[
            {type:"Width",value:"75.4 mm"},
            {type:"Height",value:"164 mm"},
            {type:"Depth",value:"9.7 mm"},
            {type:"Weight",value:"221 g"},
          ]
      },
      {
        Name:"Warranty", 
        SubItem:[
            {type:"Warranty Summary",value:"1 Year Warranty Provided by the Manufacturer from Date of Purchase"},
            {type:"Domestic Warranty",value:"1 Year"},
          ]
      },
    ],
 
    SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/kn22m4w0/mobile/a/5/u/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmjqrnfqnmp.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kn22m4w0/mobile/l/v/e/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmjhpwweyap.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kn22m4w0/mobile/b/f/s/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmjbkqyk4t7.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kn22m4w0/mobile/c/q/d/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmj5g4hhgcy.jpeg?q=70",
      // "https://rukminim1.flixcart.com/image/128/128/kn22m4w0/mobile/f/f/b/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmj7p8zx47m.jpeg?q=70",
      // "https://rukminim1.flixcart.com/image/128/128/kn22m4w0/mobile/s/e/e/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmjzyz8fmfg.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kn22m4w0/mobile/y/t/i/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmjbusb5gz3.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kn22m4w0/mobile/a/q/8/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmjw3xqg4yk.jpeg?q=70",
    ],
    RatingReviewData :[

        {title:"Good choice",
        rating:"5",
        desc:"Best Samsung phone in this price range.Good battery back up.",
        images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202106/blobio-imr-202106_0568179db64c491ab932aee7a6af0665.jpg?q=90",
                "https://rukminim1.flixcart.com/blobio/178/178/imr-202104/blobio-imr-202104_29c597e9caf3496b8e0d19004b94053b.jpg?q=90",
                "https://rukminim1.flixcart.com/blobio/178/178/imr-202105/blobio-imr-202105_bbfb4961e13e4eb79a5d4d2472a2a31f.jpg?q=90"]
        },
        {title:"Excellent",
        rating:"5",
        desc:"Fantastic ☺️☺️☺️",
         images:[]
        },
        {title:"Good choice",
        rating:"5",
        desc:"Amazing smartphone.Amazing smartphone for students becoz I'm using as a student .😊😊.",
         images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202110/blobio-imr-202110_c981144f332b43349fb1e1014c025c9e.jpg?q=90",
         "https://rukminim1.flixcart.com/blobio/178/178/imr-202110/blobio-imr-202110_e5d17890efb54aeba1ebf2c5ca27ae06.jpg?q=90",
        "https://rukminim1.flixcart.com/blobio/178/178/imr-202110/blobio-imr-202110_1f6f468ff71948e988a90881cd5a352c.jpg?q=90"]
        },
        {title:"Excellent",
        rating:"5",
        desc:"This smartphone is very good in camera and battery And value for money from Samsung with clean and smooth Ui and good battery life also",
         images:[]
        },
        {title:"Excellent",
        rating:"5",
        desc:"Fantastic ☺️☺️☺️",
         images:[]
        },
       ],
    },

    {
      _id: uuid(),
      categoryName: "Mobiles",
      quntity:"1",
      title: "POCO C31 (Royal Blue, 32 GB)(3 GB RAM) - New Brand.",
      costprice:"10,999",
      saleingprice: "7,999",
      extraOff : "3000",
      percentOff:"27", 
      packagingCharges : "49",
      Rating:"4.5",
      Reviews:"1,447",
      Image:"https://rukminim2.flixcart.com/image/416/416/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70",
      Availableoffers : ["Bank OfferFlat ₹250 off on SBI Credit Card Transactions",
                         "Bank Offer 10% off on SBI Credit Card, up to ₹750. On orders of ₹5000 and above",
                         "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                         "Special PriceExtra ₹3000 off(price inclusive of discount)",
                         "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                         "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                         "Combo OfferBuy 3 or more items save 1%",
                         "EMI starting from ₹278/month",
                       ],
    BuywithoutExchange : "7,999",
    BuywithExchange : "up to ₹7,450 off",
    Warranty:"1 Year Warranty for Handset, 6 Months for Accessories",

    RAM:"3GB",
    ROM:"32GB",
    ExpandableMemory:"512GB",
    Color:"Blue",
    SIMType:"Dual Sim",

    DeliverBy:"Delivery by20 Mar, Sunday (if ordered before 10:50 PM)",
    Change:"40",
    Highlights:["3 GB RAM | 32 GB ROM | Expandable Upto 512 GB","16.59 cm (6.53 inch) HD+ Display",
                "13MP + 2MP + 2MP | 5MP Front Camera","5000 mAh Lithium-ion Polymer Battery","MediaTek Helio G35 Processor",] ,
    EasyPaymentOptions:["EMI starting from ₹278/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
    Replacement:"7 Days Replacement Policy With GST invoice available",
    Specifications:[
      {Name:"General",
      SubItem:[ 
                {type:"InTheBox",value:"Handset, Power Adapter, Micro-USB Cable, SIM Ejector Tool, User Guide and Warranty Card"},
                {type:"ModelNumber",value:"MZB0A0JIN"},
                {type:"ModelName",value:"C31"},
                {type:"Color",value:"Royal Blue"},
                {type:"BrowseType",value:"Smartphones"},
                {type:"SIMType",value:"Dual Sim"},
                {type:"HybridSimSlot",value:"No"},
                {type:"Touchscreen",value:"Yes"},
                {type:"OTGCompatible",value:"Yes"},     
                {type:"SAR Value",value:"Head: 0.506 W/Kg, Body: 0.833 W/Kg"},              
             ]
      },
      {
        Name:"DisplayFeatures",
        SubItem:[
          {type:"DisplaySize",value:"16.59 cm (6.53 inch)"},
          {type:"Resolution",value:"1600 x 720 Pixels"},
          {type:"ResolutionType",value:"HD+"},
          {type:"GPU",value:"PowerVR GE8320"},
          {type:"Display Type",value:"HD+ In-Cell LCD Display"},
          {type:"Other Display Features",value:"20:9 Aspect Ratio, Panda Glass, 1500:1 Contrast Ratio, 70.8% NTSC Ratio"},
         ]
      },
      {
        Name:"Os & Processor Features",
        SubItem:[
          {type:"OperatingSystem",value:"Android 10"},
          {type:"ProcessorType",value:"MediaTek Helio G35"},
          {type:"ProcessorCore",value:"Octa Core"},
          {type:"PrimaryClockSpeed",value:"2.3 GHz"},
          {type:"Secondary Clock Speed",value:"1.8 GHz"},
          {type:"Operating Frequency",value:"2G GSM: B2/B3/B5/B8, 3G WCDMA: B1/B5/B8, 4G LTE FDD: B1/B3/B5/B8, 4G LTE TDD: B40/B41"},
         ]
      },
      {
        Name:"Memory & Storage Features",
        SubItem:[
          {type:"InternalStorage",value:"32 GB"},
          {type:"RAM",value:"3 GB"},
          {type:"ExpandableStorage",value:"512 GB"},
          {type:"Supported Memory Card Type",value:"MicroSD"},
          {type:"Memory Card Slot Type",value:"Dedicated Slot"},
        ]
      },
      {
        Name:"Camera Features",
        SubItem:[
            {type:"Primary Camera Available",value:"Yes"},
            {type:"Primary Camera",value:"13MP + 2MP + 2MP"},
            {type:"Primary Camera Features",value:"Triple Rear Camera Setup: 13MP Primary (f/2.2, 1.0μm Pixel Size) + 2MP Macro (Fixed Focus, 1.75μm Pixel Size) + 2MP Portrait (Fixed Focus, 1.75μm Pixel Size), Features: Phase Detection Auto Focus, HDR, AI Portrait Mode, Face Recognition, AI Scene Detection, Night Mode"},
            {type:"Secondary Camera Available",value:"Yes"},
            {type:"Secondary Camera",value:"5MP Front Camera"},
            {type:"Secondary Camera Features",value:"5MP Front Camera (f/2.2, 1.12μm Pixel Size), Features: Face Recognition, HDR, AI Portrait Mode, Screen Flash, Selfie Timer, Portrait Selfies, Palm Shutter"}, 
            {type:"Flash",value:"Rear - LED Flash | Front - Screen Flash"},
            {type:"Video Recording",value:"Yes"},
            {type:"Full HD Recording",value:"Yes"},
            {type:"HD Recording",value:"Yes"},
            {type:"Video Recording Resolution",value:"Front and Rear Camera: 1080p (at 30fps)"},
            {type:"Frame Rate",value:"30 fps"},
            {type:"Dual Camera Lens",value:"Primary Camera"},
          ]
      },
      {
        Name:"Call Features", 
        SubItem:[
            {type:"Call Wait/Hold",value:"Yes"},
            {type:"Hands Free",value:"Yes"},
            {type:"Video Call Support",value:"Yes"},
            {type:"Call Divert",value:"Yes"},
            {type:"Phone Book",value:"Yes"},
            {type:"Call Timer",value:"Yes"},
            {type:"Speaker Phone",value:"Yes"},
            {type:"Call Records",value:"Yes"},
          ]
      },
      {
        Name:"Connectivity Features", 
        SubItem:[
            {type:"Network Type",value:"4G, 3G, 2G"},
            {type:"Supported Networks",value:"4G LTE, WCDMA, GSM"},
            {type:"Internet Connectivity",value:"4G, 3G, Wi-Fi, EDGE, GPRS"},
            {type:"3G",value:"Yes"},
            {type:"GPRS",value:"Yes"},
            {type:"Pre-installed Browser",value:"Google Chrome"},
            {type:"Bluetooth Support",value:"Yes"},
            {type:"Wi-Fi Version",value:"802.11 a/b/g/n"},
            {type:"Wi-Fi",value:"Yes"},
            {type:"Wi-Fi Hotspot",value:"Yes"},
            {type:"Infrared",value:"No"},
            {type:"EDGE",value:"Yes"},
            {type:"Audio Jack",value:"3.5mm"},
            {type:"Map Support",value:"Google Maps"},
            {type:"GPS Support",value:"Yes"},
          ]
      },
      {
        Name:"Other Details", 
        SubItem:[
            {type:"Smartphone",value:"Yes"},
            {type:"SIM Size",value:"Nano"},
            {type:"User Interface",value:"MIUI 12 (Based on Android 10)"},
            {type:"SMS",value:"Yes"},
            {type:"Graphics PPI",value:"270 PPI"},
            {type:"Sensors",value:"Ambient Light Sensor, Proximity Sensor, Accelerometer"},
            {type:"Other Features",value:"Screen Mirror/Cast, Face Unlock, Dual App Support, 10W Charger"},
            {type:"Browser",value:"Google Chrome"},
            {type:"GPS Type",value:"GPS/A-GPS, GLONASS, BeiDou"}
          ]
      },
      {
        Name:"Battery & Power Features", 
        SubItem:[
            {type:"Battery Capacity",value:"5000 mAh"},
          ]
      },
      {
        Name:"Dimensions", 
        SubItem:[
            {type:"Width",value:"77.1 mm"},
            {type:"Height",value:"164.9 mm"},
            {type:"Depth",value:"9 mm"},
            {type:"Weight",value:"194 g"},
          ]
      },
      {
        Name:"Warranty", 
        SubItem:[
            {type:"Warranty Summary",value:"1 Year Warranty for Handset, 6 Months for Accessories"},
            {type:"Domestic Warranty",value:"1 Year"},
          ]
      },
    ],
 
    SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kyag87k0/mobile/g/g/h/-original-imagajt3twwp8uxg.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/ku4ezrk0/mobile/j/s/e/c31-mzb0a0jin-poco-original-imag7bzqbdhjuvhz.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/ku4ezrk0/mobile/i/u/f/c31-mzb0a0jin-poco-original-imag7bzqhb4jxkq9.jpeg?q=70",
      // "https://rukminim1.flixcart.com/image/128/128/ku4ezrk0/mobile/n/p/i/c31-mzb0a0jin-poco-original-imag7bzqnpd37r3u.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/ku4ezrk0/mobile/k/i/p/c31-mzb0a0jin-poco-original-imag7bzqp8pvwbaf.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/ku4ezrk0/mobile/q/e/1/c31-mzb0a0jin-poco-original-imag7bzquuy7zz9y.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/ku4ezrk0/mobile/x/h/b/c31-mzb0a0jin-poco-original-imag7bzqztayjtye.jpeg?q=70",
      // "https://rukminim1.flixcart.com/image/128/128/ku4ezrk0/mobile/z/8/f/c31-mzb0a0jin-poco-original-imag7bzqsxpqmrkg.jpeg?q=70",
      // "https://rukminim1.flixcart.com/image/128/128/ku4ezrk0/mobile/p/h/9/c31-mzb0a0jin-poco-original-imag7bzq3ytmthjf.jpeg?q=70",
      // "https://rukminim1.flixcart.com/image/128/128/ku4ezrk0/mobile/i/h/x/c31-mzb0a0jin-poco-original-imag7bzqxcfgjvrh.jpeg?q=70"
    ],
    RatingReviewData :[

        {title:"Simply awesome",
        rating:"5",
        desc:"Fantastic phone. I loved it. Looks better then the photos in showcase. I will suggest this phone to People who are looking for a good budget phone.",
        images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202110/blobio-imr-202110_b2a3f8053ea74a449e83b42e06ea3afe.jpg?q=90",
                "https://rukminim1.flixcart.com/blobio/178/178/imr-202110/blobio-imr-202110_e1edb020c7284156a08794e0730276cb.jpg?q=90"]
        },
        {title:"Terrific purchase",
        rating:"5",
        desc:"Phone is best in its price range, +Poco is knows for its best mobile, good 👍 I like it.",
         images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202110/blobio-imr-202110_1d4b36d1f7554fe9a0a10cc9bbadab29.jpg?q=90",
                 "https://rukminim1.flixcart.com/blobio/178/178/imr-202201/blobio-imr-202201_57d5a51b731241ce8dfc449e0090a419.jpg?q=90",
                "https://rukminim1.flixcart.com/blobio/178/178/imr-202110/blobio-imr-202110_829c3fa6f9794d6583752ab5d0d0fbca.jpg?q=90"]
        },
        {title:"Super!",
        rating:"5",
        desc:"Vry vry good quality and performance is too good awesome design / everything is too good",
         images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202201/blobio-imr-202201_7693ece08a1741ed8beb42a9f38b8a3e.jpg?q=90",
                 "https://rukminim1.flixcart.com/blobio/178/178/imr-202201/blobio-imr-202201_82a29a31fa8a4e2f85a9379d5492822e.jpg?q=90",
                ]
        },
       ],
    },
    {
      _id: uuid(),
      categoryName: "Mobiles",
      quntity:"1",
      title: "MOTOROLA G40 Fusion (Dynamic Gray, 64 GB)  (4 GB RAM)",
      costprice:"16,999",
      saleingprice: "14,499",
      extraOff : "2500",
      percentOff:"14", 
      packagingCharges : "49",
      Rating:"3.5",
      Reviews:"3,495",
      Image:"https://rukminim2.flixcart.com/image/416/416/knoxnrk0/mobile/s/d/d/g40-fusion-panv0002in-panv0006in-panv0010in-motorola-original-imag2aqcxrhhuwfh.jpeg?q=70",
      Availableoffers : ["Bank Offer10% off on SBI Credit Card, up to ₹750. On orders of ₹5000 and above",
                         "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                         "Special PriceGet extra ₹2500 off (price inclusive of discount)",
                         "Get Google Pixel Buds A-series at ₹6999",
                         "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                         "Combo OfferBuy 3 or more items save 1%",
                         "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                         "EMI starting from ₹503/month",
                       ],
    BuywithoutExchange : "14,499",
    BuywithExchange : "up to ₹13,000 off",
    Warranty:"1 Year on Handset and 6 Months on Accessories",

    RAM:"4GB",
    ROM:"64GB",
    ExpandableMemory:"512GB",
    Color:"Grey",
    SIMType:"Dual Sim",


    DeliverBy:"Delivery by 19 Mar, Saturday (if ordered before 10:50 PM)",
    Change:"Free",
    Highlights:["4 GB RAM | 64 GB ROM","17.22 cm (6.78 inch) Full HD+ Display","Stock Android Experience",
                "64MP + 8MP + 2MP | 16MP Front Camera","6000 mAh Battery","Qualcomm Snapdragon 732G Processor","120Hz Refresh Rate"] ,
    EasyPaymentOptions:["EMI starting from ₹503/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
    Replacement:"7 Days Replacement Policy ",
    Specifications:[
      {Name:"General",
      SubItem:[ 
                {type:"InTheBox",value:"Handset, Charger, USB Cable, SIM Tool, User Guides"},
                {type:"ModelNumber",value:"PANV0000IN / PANV0004IN / PANV0008IN"},
                {type:"ModelName",value:"G40 Fusion"},
                {type:"Color",value:"Dynamic Gray"},
                {type:"BrowseType",value:"Smartphones"},
                {type:"SIMType",value:"Dual Sim"},
                {type:"HybridSimSlot",value:"Yes"},
                {type:"Touchscreen",value:"Yes"},
                {type:"OTGCompatible",value:"Yes"},    
                {type:"Sound Enhancements",value:"Bottom-Ported Loudspeaker, 2 Microphone"}, 
                {type:"SAR Value",value:"Head: 0.85 w/kg, Body 1.20 w/kg"},              
             ]
      },
      {
        Name:"DisplayFeatures",
        SubItem:[
          {type:"DisplaySize",value:"17.22 cm (6.78 inch)"},
          {type:"Resolution",value:"2460 x 1080 Pixels"},
          {type:"ResolutionType",value:"Full HD+"},
          {type:"Display Type",value:"Full HD+ IPS LCD Display"},
          {type:"Other Display Features",value:"120Hz Refresh Rate, 20.5:9 Display Aspect Ratio, Active Area-Touch Panel (AA-TP): 84.69%, Anti Fingerprint Coating, Water Repellent Design, HDR10"},
         ]
      },
      {
        Name:"Os & Processor Features",
        SubItem:[
          {type:"OperatingSystem",value:"Android 11"},
          {type:"ProcessorType",value:"Qualcomm Snapdragon 732G"},
          {type:"ProcessorCore",value:"Octa Core"},
          {type:"PrimaryClockSpeed",value:"2.3 GHz"},
          {type:"Secondary Clock Speed",value:"1.8 GHz"},
          {type:"Operating Frequency",value:"2G GSM: B2/B3/B5/B8, 3G WCDMA: B1/B2/B4/B5/B8/B19, 4G LTE: B1/B2/B3/B4/B5/B7/B8/B18/B19/B20/B26/B28/B38/B40/B41"},
         ]
      },
      {
        Name:"Memory & Storage Features",
        SubItem:[
          {type:"InternalStorage",value:"64 GB"},
          {type:"RAM",value:"4 GB"},
          {type:"Supported Memory Card Type",value:"MicroSD"},
          {type:"Memory Card Slot Type",value:"Hybrid Slot"},
        ]
      },
      {
        Name:"Camera Features",
        SubItem:[
            {type:"Primary Camera Available",value:"Yes"},
            {type:"Primary Camera",value:"64MP + 8MP + 2MP"},
            {type:"Primary Camera Features",value:"Triple Rear Camera Setup: 64 MP Main (Quad Pixel Technology) + 8 MP Ultra-wide Angle and Macro Vision (f/2.2 Aperture, 1.0μm Pixels, FOV 117 Degree) + 2 MP Depth Camera, Features: Shot Optimization, Auto Smile Capture, Gesture Selfie, Smart Composition, HDR, Timer, Active Photos, Pro Mode, Portrait Mode, Cutout, Macro, Spot Color, Cinemograph, Panorama, Live Filter, High-Res Zoom, RAW Photo Output, Best Shot, Google Lens Integration, Video Features: Macro Video, Slow Motion Video, Time-Lapse Video, Hyperlapse Video, Spot Color"},
            {type:"Secondary Camera Available",value:"Yes"},
            {type:"Secondary Camera",value:"16MP Front Camera"},
            {type:"Secondary Camera Features",value:"16 MP Front Camera, Features: HDR, Timer, Face Beauty, Auto Smile Capture, Gesture Selfie, Shot Optimization, Active Photos, Pro Mode, Portrait Mode, Spot Color, Cinemograph, Group Selfie, Live Filter, Video Features: Timelapse Video, Hyperlapse Video"}, 
            {type:"Flash",value:"Rear LED Flash"},
            {type:"Video Recording",value:"Yes"},
            {type:"Full HD Recording",value:"Yes"},
            {type:"HD Recording",value:"Yes"},
            {type:"Video Recording Resolution",value:"Rear Main Camera: UHD (at 120/30 fps), Full HD (at 240/60/30 fps), HD (at 360 fps), Rear Ultra-wide Angle/Macro Camera: Full HD (at 30 fps), Front Camera: UHD (at 30 fps), Full HD (at 240/60/30 fps), HD (at 360 fps)"},
            {type:"Dual Camera Lens",value:"Primary Camera"},
          ]
      },
      {
        Name:"Call Features", 
        SubItem:[
            {type:"Hands Free",value:"Yes"},
          ]
      },
      {
        Name:"Connectivity Features", 
        SubItem:[
            {type:"Network Type",value:"4G, 3G, 2G"},
            {type:"Supported Networks",value:"4G LTE, WCDMA, GSM"},
            {type:"Internet Connectivity",value:"4G, 3G, Wi-Fi, EDGE, GPRS"},
            {type:"3G",value:"Yes"},
            {type:"GPRS",value:"Yes"},
            {type:"Pre-installed Browser",value:"Google Chrome"},
            {type:"Bluetooth Support",value:"Yes"},
            {type:"Bluetooth Version",value:"Yes"},
            {type:"Wi-Fi Version",value:"802.11 a/b/g/n/ac (2.4GHz | 5GHz)"},
            {type:"Wi-Fi",value:"Yes"},
            {type:"Wi-Fi Hotspot",value:"Yes"},
            {type:"EDGE",value:"Yes"},
            {type:"Audio Jack",value:"3.5mm"},
            {type:"Map Support",value:"Google Maps"},
            {type:"GPS Support",value:"Yes"},
          ]
      },
      {
        Name:"Other Details", 
        SubItem:[
            {type:"Smartphone",value:"Yes"},
            {type:"SIM Size",value:"Nano"},
            {type:"SMS",value:"Yes"},
            {type:"Graphics PPI",value:"396 PPI"},
            {type:"Sensors",value:"Fingerprint Sensor, Proximity Sensor, Accelerometer, Ambient Light Sensor"},
            {type:"Other Features",value:"Face Unlock, Google Assistant, 20W Charger"},
            {type:"Browser",value:"Google Chrome"},
            {type:"GPS Type",value:"GPS/A-GPS, LTEPP, SUPL, GLONASS, Galileo"}
          ]
      },
      {
        Name:"Battery & Power Features", 
        SubItem:[
            {type:"Battery Capacity",value:"6000 mAh"},
          ]
      },
      {
        Name:"Dimensions", 
        SubItem:[
            {type:"Width",value:"75.88 mm"},
            {type:"Height",value:"169.613 mm"},
            {type:"Depth",value:"9.6 mm"},
            {type:"Weight",value:"220 g"},
          ]
      },
      {
        Name:"Warranty", 
        SubItem:[
            {type:"Warranty Summary",value:"1 Year on Handset and 6 Months on Accessories"},
            {type:"Domestic Warranty",value:"1 Year"},
          ]
      },
    ],
 
    SmallImages:[
     "https://rukminim1.flixcart.com/image/128/128/knoxnrk0/mobile/s/d/d/g40-fusion-panv0002in-panv0006in-panv0010in-motorola-original-imag2aqcxrhhuwfh.jpeg?q=70",
     "https://rukminim1.flixcart.com/image/128/128/knoxnrk0/mobile/c/o/j/g40-fusion-panv0002in-panv0006in-panv0010in-motorola-original-imag2aqcbqgdrt8z.jpeg?q=70",
    //  "https://rukminim1.flixcart.com/image/128/128/knoxnrk0/mobile/d/m/h/g60-panb0000in-panb0016in-panb0012in-panb0014in-motorola-original-imag2aq9r25sepqg.jpeg?q=70",
     "https://rukminim1.flixcart.com/image/128/128/knoxnrk0/mobile/g/v/s/g60-panb0000in-panb0016in-panb0012in-panb0014in-motorola-original-imag2aq9r7pzkngd.jpeg?q=70",
     "https://rukminim1.flixcart.com/image/128/128/knoxnrk0/mobile/q/r/l/g60-panb0000in-panb0016in-panb0012in-panb0014in-motorola-original-imag2aq9hnf2kwhg.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/knoxnrk0/mobile/a/g/i/g40-fusion-panv0002in-panv0006in-panv0010in-motorola-original-imag2aqcpdgnwg59.jpeg?q=70",
     "https://rukminim1.flixcart.com/image/128/128/knoxnrk0/mobile/o/f/r/g40-fusion-panv0002in-panv0006in-panv0010in-motorola-original-imag2aqcpwg6m97d.jpeg?q=70"
    ],
    RatingReviewData :[

        {title:"Best in the market!",
        rating:"3.5",
        desc:"Very beautiful phone impressive battery 6000 mah good display type c port this product is worth buying go for it 😀",
        images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202107/blobio-imr-202107_d5ac232baa0440cda387d3b997029a9f.jpeg?q=90",
                "https://rukminim1.flixcart.com/blobio/178/178/202105/blobio-202105_qr884hh2.jpeg?q=90"]
        },
        {title:"Value for money",
        rating:"4.1",
        desc:"All of above, a big 120Hz display with HDR 10 support & true colors (at this price)",
         images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202107/blobio-imr-202107_5543f5cdde6d4c8aaf8453985ccc84eb.jpeg?q=90"]
        },
        {title:"A must buy",
        rating:"5",
        desc:"In my brief usage, the battery is good enough.",
         images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202107/blobio-imr-202107_dbef043a66fe44e09a9b84247624dca5.jpeg?q=90"]
        },
        {title:"Super",
        rating:"4",
        desc:"Stock android, one of the major reasons for buying it. Also the moto app is good enough for customization.",
         images:["https://rukminim1.flixcart.com/blobio/178/178/202105/blobio-202105_qr884hh2.jpeg?q=90"]
        },
        {title:"Good",
        rating:"2.5",
        desc:" All-over build quality is good enough,But Relatively slow charger",
         images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202107/blobio-imr-202107_eed1274918ee4cdb976afe27ad98c526.jpeg?q=90"]
        },
       ],
    },
    {
      _id: uuid(),
      categoryName: "Mobiles",
      quntity:"1",
      title: "APPLE iPhone SE (Red, 128 GB) - Offer today (free delivery)",
      costprice:"44,900",
      saleingprice: "29,999",
      extraOff : "5000",
      percentOff:"33", 
      packagingCharges : "49",
      Rating:"4.5",
      Reviews:"11,526",
      Image:"https://rukminim2.flixcart.com/image/416/416/k9loccw0/mobile/6/8/g/apple-iphone-se-mxvv2hn-a-original-imafrcqmfxhcrpsb.jpeg?q=70",
      Availableoffers : ["Bank Offer 10% off on SBI Credit Card, up to ₹750. On orders of ₹5000 and above",
                         "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                         "Bank OfferFlat ₹250 off on SBI Credit Card Transactions",
                         "Special PriceExtra ₹14901 off(price inclusive of discount)",
                         "Get Lenovo smart clock essential at just ₹2999",
                         "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                         "Combo OfferBuy 3 or more items save 1%",
                         "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                         "Partner OfferGST Invoice Available! Save up to 28%",
                         "EMI starting from ₹1,026/month",
                        ],
    BuywithoutExchange : "29,999",
    BuywithExchange : "up to ₹13,000 off",
    Warranty:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box Accessories",
    

    RAM:"4GB",
    ROM:"128GB",
    ExpandableMemory:"1 TB",
    Color:"Red",
    SIMType:"Dual Sim",

    DeliverBy:"Delivery by 21 Mar, Monday",
    Change:"Free",
    Highlights:["128 GB ROM","11.94 cm (4.7 inch) Retina HD Display","Fast Charge Capable","Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately",
                "12MP Rear Camera | 7MP Front Camera","A13 Bionic Chip with 3rd Gen Neural Engine Processor","Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)"] ,
    EasyPaymentOptions:["No cost EMI starting from ₹4,167/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
    Replacement:"7 day seller replacement policy/brand assistance for device issues* with GST invoice available",
    Specifications:[
      {Name:"General",
      SubItem:[ 
                {type:"InTheBox",value:"This iPhone box does not include a power adapter and EarPods , iPhone, USB-C to Lightning Cable, Documentation"},
                {type:"ModelNumber",value:"MHGV3HN/A"},
                {type:"ModelName",value:"iPhone SE"},
                {type:"Color",value:"Red"},
                {type:"BrowseType",value:"Smartphones"},
                {type:"SIMType",value:"Dual Sim"},
                {type:"HybridSimSlot",value:"No"},
                {type:"Touchscreen",value:"Yes"},
                {type:"OTGCompatible",value:"No"},
                {type:"QuickCharging",value:"Yes"},
                {type:"SoundEnhancements",value:"Built-in Stereo Speake"},
             ]
      },
      {
        Name:"DisplayFeatures",
        SubItem:[
          {type:"DisplaySize",value:"11.94 cm (4.7 inch)"},
          {type:"Resolution",value:"1334 x 750 Pixels"},
          {type:"ResolutionType",value:"Retina HD Display"},
          {type:"DisplayType",value:"Retina HD Display"},
          {type:"HDGameSupport",value:"Yes"},
          {type:"Other Display Features",value:"Widescreen HD LCD Retina Multi-touch IPS Display (1400:1 Contrast Ratio (Typical), True Tone Display, Wide Color Display (P3), Haptic Touch, 625 nits Max Brightness (Typical), Fingerprint-resistant Oleophobic Coating, Display Zoom, Reachability)"},
         
         ]
      },
      {
        Name:"Os & Processor Features",
        SubItem:[
          {type:"OperatingSystem",value:"iOS 14.2"},
          {type:"ProcessorType",value:"A13 Bionic Chip with 3rd Gen Neural Engine"},
          ]
      },
      {
        Name:"Memory & Storage Features",
        SubItem:[
          {type:"InternalStorage",value:"128 GB"},
        ]
      },
      {
        Name:"Camera Features",
        SubItem:[
            {type:"Primary Camera Available",value:"Yes"},
            {type:"Primary Camera",value:"12MP Rear Camera"},
            {type:"Primary Camera Features",value:"12MP Wide Camera, F/1.8 Aperture, Portrait Mode with Advanced Bokeh and Depth Control, Portrait Lighting with Six Effects (Natural, Studio, Contour, Stage, Stage Mono, High-Key Mono), Optical Image Stabilisation, Six‑element Lens, Panorama (Upto 63 MP), Sapphire Crystal Lens Cover, Autofocus with Focus Pixels, Wide Color Capture for Photos and Live Photos, Next-generation Smart HDR for Photos, Advanced Red-eye Correction, Auto Image Stabilisation, Burst Mode, Photo Geotagging, Image Formats Captured: HEIF and JPEG | Video: 4K Video Recording Upto 60 fps, 1080p HD Video Recording Upto 60fps, 720p HD Video Recording at 30 fps, Extended Dynamic Range for Video Upto 30 fps, Optical Image Stabilisation for Video, QuickTake Video, Slow-motion Video Support for 1080p Upto 240 fps, Time-lapse Video with Stabilisation, Cinematic Video Stabilisation (4K,1080p and 720p), Continuous Autofocus Video, Take 8 MP Still Photos while Recording 4K Video, Playback Zoom, Video Formats Recorded: HEVC and H.264, Stereo Recording"},
            {type:"Secondary Camera Available",value:"Yes"},
            {type:"Secondary Camera",value:"7MP Front Camera"},
            {type:"Secondary Camera Features",value:"7 MP Camera, F/2.2 Aperture, Portrait Mode with Advanced Bokeh and Depth Control, Portrait Lighting with Six Effects (Natural, Studio, Contour, Stage, Stage Mono, High-Key Mono), 1080p HD Video Recording at 30 fps, QuickTake Video, Wide Color Capture for Photos and Live Photos, Auto HDR for Photos, Auto Image Stabilisation, Burst Mode, Cinematic Video Stabilisation (1080p and 720p)"}, 
            {type:"Flash",value:"Rear: LED True Tone Flash with Slow Sync | Front: Retina Flash"},
            {type:"HD Recording",value:"Yes"},
            {type:"Full HD Recording",value:"Yes"},
            {type:"Video Recording",value:"Yes"},
            {type:"Video Recording Resolution",value:"4K, 1080p, 720p"},
            {type:"Digital Zoom",value:"Photo: Digital Zoom Upto 5x, Video: Digital Zoom Upto 3x"},
    
          ]
      },
      {
        Name:"Call Features", 
        SubItem:[
            {type:"Call Wait/Hold",value:"Yes"},
            {type:"Phone Book",value:"Yes"},
            {type:"Speaker Phone",value:"Yes"},
          ]
      },
      {
        Name:"Connectivity Features", 
        SubItem:[
            {type:"Network Type",value:"4G VOLTE, 4G, 3G, 2G"},
            {type:"Supported Networks",value:"4G VoLTE, 4G LTE, WCDMA, GSM"},
            {type:"Internet Connectivity",value:"4G, 3G, Wi-Fi, EDGE"},
            {type:"3G",value:"Yes"},
            {type:"GPRS",value:"Yes"},
            {type:"Pre-installed Browser",value:"Safari"},
            {type:"Bluetooth Support",value:"Yes"},
            {type:"Bluetooth Version",value:"v5.0"},
            {type:"Wi-Fi",value:"Yes"},
            {type:"Wi-Fi Version",value:"802.11ax (Wi-Fi 6 with 2x2 MIMO)"},
            {type:"Wi-Fi Hotspot",value:"Yes"},
            {type:"NFC",value:"Yes"},
            {type:"EDGE",value:"Yes"},
            {type:"Map Support",value:"Google Maps"},
            {type:"GPS Support",value:"Yes"},
          ]
      },
      {
        Name:"Other Details", 
        SubItem:[
            {type:"Smartphone",value:"Yes"},
            {type:"SIM Size",value:"Nano + eSIM"},
            {type:"Mobile Tracker",value:"Yes"},
            {type:"Removable Battery",value:"No"},
            {type:"SMS",value:"Yes"},
            {type:"Graphics PPI",value:"326 PPI"},
            {type:"Sensors",value:"Touch ID Fingerprint Sensor, Barometer, Three-axis gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor"},
            {type:"Series",value:"iPhone SE"},
            {type:"Other Features",value:"Splash, Water and Dust Resistant (IP67 Rated (Maximum Depth of 1 metre Upto 30 mins) Under IEC Standard 60529), Fingerprint Sensor Built into the Home Hutton, Digital Compass, iBeacon Micro-location, Video Calling (FaceTime Video Calling Over Wi-Fi or Mobile Data), Audio Calling (FaceTime Audio Calling Over Wi-Fi or Mobile Data, Voice over LTE (VoLTE), Wi-Fi Calling), Fast Charge Capable (Upto 50% Charge in 30 mins with 18 W Adapter or Higher), Wireless Charging (Works with Qi Chargers), Accessibility: Voice Control, VoiceOver, Zoom, Magnifier, RTT and TTY Support, Siri and Dictation, Type to Siri, Switch Control, Closed Captions, AssistiveTouch, Speak Screen, Rating for Hearing Aids: M3, T4"},
        
            {type:"Important Apps",value:"Built-in Apps - Camera, Photos, Health, Messages, Phone, FaceTime, Mail, Music, Wallet, Safari, Maps, Siri, Calendar, iTunes Store, App Store, Notes, Contacts, Books, Home, Weather, Reminders, Clock, Videos, Stocks, Calculator, Voice Memos, Compass, Podcasts, Watch, Tips, Find My iPhone, Find My Friends, Settings, Files, Measure, Free Apps from Apple - iMovie, Pages, Numbers, Keynote, iTunes U, GarageBand, Apple TV Remote, iTunes Remote, Music Memos, Clips, Shortcuts"},
            {type:"GPS Type",value:"A-GPS, GLONASS"},  
          ]
      },
      {
        Name:"Multimedia Features", 
        SubItem:[
            {type:"Audio Formats",value:"AAC-LC, HE-AAC, HE-AAC v2, Protected AAC, MP3, Linear PCM, Apple Lossless, FLAC, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3) and Audible (Formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+)"},
            {type:"Video Formats",value:"HEVC, H.264, MPEG-4 Part 2 and Motion JPEG"},
          ]
      },
      {
        Name:"Dimensions", 
        SubItem:[
            {type:"Width",value:"67.3 mm"},
            {type:"Height",value:"138.4 mm"},
            {type:"Depth",value:"7.3 mm"},
            {type:"Weight",value:"148 g"}
          ]
      },
      {
        Name:"Warranty", 
        SubItem:[
            {type:"Warranty Summary",value:"Brand Warranty of 1 Year"},
            {type:"Domestic Warranty",value:"1 Year"},
          ]
      },
    ],

    SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/k9loccw0/mobile/6/8/g/apple-iphone-se-mxvv2hn-a-original-imafrcqmfxhcrpsb.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/k9loccw0/mobile/6/8/g/apple-iphone-se-mxvv2hn-a-original-imafrcqmzzajg3zg.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kmp7ngw0/mobile/d/h/n/iphone-se-mhgv3hn-a-apple-original-imagfj4ckfdpffch.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/k9loccw0/mobile/6/8/g/apple-iphone-se-mxvv2hn-a-original-imafrcqmh5hgugse.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/k9loccw0/mobile/6/8/g/apple-iphone-se-mxvv2hn-a-original-imafrcqmyhg8h82e.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/k9loccw0/mobile/6/8/g/apple-iphone-se-mxvv2hn-a-original-imafrcqmhkqzv7xx.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/k9loccw0/mobile/6/8/g/apple-iphone-se-mxvv2hn-a-original-imafrcqmqesyfhhy.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/k9loccw0/mobile/6/8/g/apple-iphone-se-mxvv2hn-a-original-imafrcqmfh4zznmq.jpeg?q=70"
    ],
    RatingReviewData :[
        {title:"Must buy!",
         rating:"5",
         desc:"Superb build quality1. Superb build quality , Great display , Camera is great in good lighting conditions",
         images:["https://rukminim1.flixcart.com/blobio/248/248/202007/blobio-202007_s2ks13cj.jpeg?q=90",
                 "https://rukminim1.flixcart.com/blobio/248/248/202007/blobio-202007_ar2tbmq3.jpeg?q=90",
            ]
        },
        {title:"Great product",
        rating:"4",
        desc:"Who all loves older size i.e., 4.7 inch type should definitely go for this. Nothing is better than XR, XS or 11. Best for price and usage.",
        images:[]
        },
        {title:"Super",
        rating:"5",
        desc:"Great camera for pics and videos",
        images:[
            "https://rukminim1.flixcart.com/blobio/248/248/imr-202008/blobio-imr-202008_78be4208043d4adaaff0dd302ea97de0.jpeg?q=90",
            "https://rukminim1.flixcart.com/blobio/178/178/imr-202012/blobio-imr-202012_85c9ee452b284289ae3a0d21289d33f3.jpg?q=90",
            "https://rukminim1.flixcart.com/blobio/178/178/imr-202011/blobio-imr-202011_b04566a87b3145fb8a4eded2aeda16a4.jpeg?q=90"
           ]
        }
       ],
    },
    {
      _id: uuid(),
      categoryName: "Mobiles",
      quntity:"1",
      title: "ASUS ROG Phone 5 (Black, 128 GB)  (8 GB RAM) ",
      costprice:"55,999",
      saleingprice: "49,999",
      extraOff : "6000",
      percentOff:"10", 
      packagingCharges : "49",
      Rating:"4",
      Reviews:"1,743",
      Image:"https://rukminim2.flixcart.com/image/416/416/km2clu80/mobile/8/r/x/rog-phone-5-zs673ks-1a053in-asus-original-imagff5hufbu4eg5.jpeg?q=70",
      Availableoffers : ["Bank Offer10% off on SBI Credit Card, up to ₹750. On orders of ₹5000 and above",
                         "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                         "Special PriceExtra ₹6000 off(price inclusive of discount)",
                         "Get Google Pixel Buds A-series at ₹6999",
                         "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                         "Combo OfferBuy 3 or more items save 1%",
                         "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                         "Partner OfferGST Invoice Available! Save up to 28%",
                         "EMI starting from ₹1,709/month",
                       ],
    BuywithoutExchange : "49,999",
    BuywithExchange : "up to ₹13,000 off",
    Warranty:"1 Year Warranty",
 

    RAM:"8GB",
    ROM:"128GB",
    ExpandableMemory:"1 TB",
    Color:"Black",
    SIMType:"Dual Sim",

    DeliverBy:"Delivery by 19 Mar, Saturday",
    Change:"Free",
    Highlights:["8 GB RAM | 128 GB ROM","17.22 cm (6.78 inch) Full HD+ Display",
                "64MP + 13MP + 5MP | 24MP Front Camera","6000 mAh Lithium Polymer Battery","Qualcomm Snapdragon 888 (SM8350) Processor",] ,
    EasyPaymentOptions:["EMI starting from ₹1,709/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
    Replacement:"7 Days Replacement Policy With GST invoice available",
    Specifications:[
      {Name:"General",
      SubItem:[ 
                {type:"InTheBox",value:"1 N handset, 1 N Charger, 1N user manual, 1N warranty card"},
                {type:"ModelNumber",value:"ZS673KS-1A043IN"},
                {type:"ModelName",value:"ROG Phone 5"},
                {type:"Color",value:"Black"},
                {type:"BrowseType",value:"Smartphones"},
                {type:"SIMType",value:"Dual Sim"},
                {type:"HybridSimSlot",value:"No"},
                {type:"Touchscreen",value:"Yes"},
                {type:"OTGCompatible",value:"Yes"},
                {type:"Sound Enhancements",value:"ESS Sabre Quad DAC + Headphone Amplifier, Dual 7-Magnet Stereo Speaker with Dirac Tuning, Quad Microphone"}                
             ]
      },
      {
        Name:"DisplayFeatures",
        SubItem:[
          {type:"DisplaySize",value:"17.22 cm (6.78 inch)"},
          {type:"Resolution",value:"2448 x 1080 Pixels"},
          {type:"ResolutionType",value:"Full HD+"},
          {type:"GPU",value:"Qualcomm Adreno 660 "},
          {type:"DisplayType",value:"Full HD+ sAMOLED Display"},
          {type:"DisplayColor",value:"144 Hz Refresh Rate, 300 Hz Touch Sense, HDR10+, Delta E<1"},
         ]
      },
      {
        Name:"Os & Processor Features",
        SubItem:[
          {type:"OperatingSystem",value:"Android 11"},
          {type:"ProcessorType",value:"Qualcomm Snapdragon 888 (SM8350)"},
          {type:"ProcessorCore",value:"Octa Core"},
          {type:"PrimaryClockSpeed",value:"2 GHz"},
          {type:"Operating Frequency",value:"2G GSM: 850/900/1800/1900, 3G HSDPA: 850(5)/900/1700/1800/1900/1(2100), 4G LTE: B1(2100), B2(1900), B3(1800), B4(1700/2100), B5(850), B7(2600), B8(900), B18, B19, B20(800), B26, B28(700), 4G TD-LTE: B34(2000), B38(2600), B39(1900), B40(2300), B41(2500), B48(3600), B42(3500), 5G: n1/n3/n7/n8/n20/n28/n38/n41/n77/n78/n79"}
         ]
      },
      {
        Name:"Memory & Storage Features",
        SubItem:[
          {type:"InternalStorage",value:"128 GB"},
          {type:"RAM",value:"8 GB"},
        ]
      },
      {
        Name:"Camera Features",
        SubItem:[
            {type:"Primary Camera Available",value:"Yes"},
            {type:"Primary Camera",value:"64MP + 13MP + 5MP"},
            {type:"Primary Camera Features",value:"Triple Rear Camera: 64MP Main + 13MP Wide-angle + 5MP Macro"},
            {type:"Secondary Camera Available",value:"Yes"},
            {type:"Secondary Camera",value:"24MP Front Camera"},
            {type:"Video Recording",value:"Yes"},
            {type:"HD Recording",value:"Yes"},
            {type:"Dual Camera Lens",value:"Primary Camera"},
          ]
      },
      {
        Name:"Connectivity Features", 
        SubItem:[
            {type:"Network Type",value:"5G, 4G VOLTE, 4G, 3G, 2G"},
            {type:"Supported Networks",value:"5G, 4G LTE, WCDMA"},
            {type:"Internet Connectivity",value:"5G, 4G, 3G, Wi-Fi, EDGE, GPRS"},
            {type:"3G",value:"Yes"},
            {type:"GPRS",value:"Yes"},
            {type:"Pre-installed Browser",value:"Google Chrome"},
            {type:"Bluetooth Support",value:"Yes"},
            {type:"Bluetooth Version",value:"v5.0"},
            {type:"Wi-Fi",value:"Yes"},
            {type:"Wi-Fi Version",value:"802.11 a/b/g/n/ac/ax (Wi-Fi 6)"},
            {type:"Wi-Fi Hotspot",value:"Yes"},
            {type:"Infrared",value:"No"},
            {type:"NFC",value:"Yes"},
            {type:"EDGE",value:"Yes"},
            {type:"USB Connectivity",value:"Yes"},
            {type:"Audio Jack",value:"3.5mm"},
            {type:"Map Support",value:"Google Maps"},
            {type:"GPS Support",value:"Yes"},
          ]
      },
      {
        Name:"Other Details", 
        SubItem:[
            {type:"Smartphone",value:"Yes"},
            {type:"SIM Size",value:"Nano"},
            {type:"Other Features" , value:"UFS 3.1 ROM, 2x2 MIMO, Wi-Fi Direct, MMT Split Battery Design, ROG GameCool 5 Cooling System, Supports 65W ROG HyperCharge, Dual USB-C Ports (Charging | Audio | Display Out)"},
            {type:"SMS",value:"Yes"},
            {type:"GPS Type",value:"GPS (L1+L5), GLONASS, GLONASS (L1), BDS (B1/B2a), GALILEO (E1+E5a), QZSS (L1+L5), NavIC (L5)"},
            {type:"Sensors",value:"Gyroscope, E-compass, Proximity Sensor, Ambient Light Sensor, In-display Fingerprint, Accelerator, Gyro (Support ARCore), Ultrasonic Sensor"},
            {type:"Browser",value:"Google Chrome"},

          ]
      },
      {
        Name:"Battery & Power Features", 
        SubItem:[
            {type:"Battery Capacity",value:"6000 mAh"},
          ]
      },
      {
        Name:"Multimedia Features", 
        SubItem:[
            {type:"FM Radio",value:"Yes"},
            {type:"FM Radio Recording",value:"Yes"},
          ]
      },
      {
        Name:"Dimensions", 
        SubItem:[
            {type:"Width",value:"77.25 mm"},
            {type:"Height",value:"172.83 mm"},
            {type:"Depth",value:"10.29 mm"},
            {type:"Weight",value:"242 g"},
          ]
      },
      {
        Name:"Warranty", 
        SubItem:[
            {type:"Warranty Summary",value:"Brand Warranty of 1 Year"},
            {type:"Domestic Warranty",value:"1 Year"},
          ]
      },
    ],
 
    SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/km2clu80/mobile/8/r/x/rog-phone-5-zs673ks-1a053in-asus-original-imagff5hufbu4eg5.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/km2clu80/mobile/u/0/e/rog-phone-5-zs673ks-1a043in-asus-original-imagff5hhzttjs6s.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/km2clu80/mobile/w/o/m/rog-phone-5-zs673ks-1a053in-asus-original-imagff5hmfzcyzh2.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/km2clu80/mobile/h/d/x/rog-phone-5-zs673ks-1a053in-asus-original-imagff5htny9hhue.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/km2clu80/mobile/s/c/9/rog-phone-5-zs673ks-1a053in-asus-original-imagff5hueuvhwtc.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/km2clu80/mobile/r/j/l/rog-phone-5-zs673ks-1a053in-asus-original-imagff5hcusgc8ff.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/km2clu80/mobile/y/m/c/rog-phone-5-zs673ks-1a053in-asus-original-imagff5hznsuq5z5.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/km2clu80/mobile/2/e/o/rog-phone-5-zs673ks-1a053in-asus-original-imagff5hqfb7vph3.jpeg?q=70",
      // "https://rukminim1.flixcart.com/image/128/128/km2clu80/mobile/i/g/s/rog-phone-5-zs673ks-1a053in-asus-original-imagff5hggg5ephh.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/km2clu80/mobile/k/g/o/rog-phone-5-zs673ks-1a053in-asus-original-imagff5hythhxpcn.jpeg?q=70"
            ],
    RatingReviewData :[

        {title:"Good choice",
        rating:"5",
        desc:"If you are a gamer a only choice is ROG perfect phone for me it's simple too good and value for money best in class best performance iam surprised and I love it 🔥🔥❤️❤️🔥🔥",
        images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202105/blobio-imr-202105_018654313c764a23be4cdd120536844e.jpg?q=90"]
        },
        {title:"Fabulous!",
        rating:"5",
        desc:"Camera: Rear cam above avarage with excellent video capabilities. Selfie cam is excellent, much better than op9 series.",
         images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202108/blobio-imr-202108_268ffe9149b24d0e8c9d88dd49c421db.jpg?q=90"]
        },
        {title:"Value-for-money",
        rating:"5",
        desc:"Its good classy phone.😊😊.",
         images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202105/blobio-imr-202105_1157ab1d87484064965b9552c393bf04.jpg?q=90"]
        },
        {title:"Excellent",
        rating:"5",
        desc:"This smartphone is very good in camera and battery And value for money from Samsung with clean and smooth Ui and good battery life also",
         images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202105/blobio-imr-202105_fa85bed2226e468890b1e906330c7689.jpg?q=90"]
        },
        {title:"Excellent",
        rating:"5",
        desc:"Fantastic ☺️☺️☺️",
         images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202108/blobio-imr-202108_5e9b1f2a3e3e4a5891f28a32dfea7662.jpg?q=90"]
        },
       ],
    },
    {
      _id: uuid(),
      categoryName: "Mobiles",
      quntity:"1",
      title: "vivo V23 5G (Sunshine Gold, 128 GB)  (8 GB RAM)#JustHere",
      costprice:"34,990",
      saleingprice: "29,990",
      extraOff : "5000",
      percentOff:"14", 
      packagingCharges : "49",
      Rating:"4",
      Reviews:"1,432 ",
      Image:"https://rukminim2.flixcart.com/image/416/416/ky0g58w0/mobile/0/a/h/-original-imagabvqrkwhkydy.jpeg?q=70",
      Availableoffers : ["Bank OfferFlat ₹250 off on SBI Credit Card Transactions",
                         "Bank Offer₹2000 Instant Discount with SBI Credit, Credit EMI and Debit Card Non-Emi Transactions",
                         "Bank Offer10% off on SBI Credit Card, up to ₹750. On orders of ₹5000 and above",
                         "Special PriceGet extra ₹5000 off (price inclusive of discount)",
                         "Get Google Pixel Buds A-series at ₹6999",
                         "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                         "No cost EMI ₹4,999/month. Standard EMI also available",
                         "Combo OfferBuy 3 or more items save 1%",
                         "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                       ],
    BuywithoutExchange : "29,990",
    BuywithExchange : "up to ₹13,000 off",
    Warranty:"1 Year for Handset and 6 Months for Accessories",

    RAM:"8GB",
    ROM:"128GB",
    ExpandableMemory:"1 TB",
    Color:"Gold",
    SIMType:"Dual Sim",

    DeliverBy:"Delivery by21 Mar, (Monday)",
    Change:"Free",
    Highlights:["8 GB RAM | 128 GB ROM | Expandable Upto 12 GB","116.36 cm (6.44 inch) Full HD+ Display","64MP + 8MP + 2MP | 50MP + 8MP Dual Front Camera",
                "4200 mAh Lithium Battery","Mediatek Dimensity 920 Processor"] ,
    EasyPaymentOptions:["No cost EMI starting from ₹4,999/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
    Replacement:"7 Days Replacement Policy ",
    Specifications:[
      {Name:"General",
      SubItem:[ 
                {type:"InTheBox",value:"Handset, Headset, USB Cable, Charger, 3.5mm Earphone Jack Adapter, Eject Tool, Phone Case, Protective Film (Applied), Documentation"},
                {type:"ModelNumber",value:"V2130"},
                {type:"ModelName",value:"V23 5G"},
                {type:"Color",value:"Sunshine Gold"},
                {type:"BrowseType",value:"Smartphones"},
                {type:"SIMType",value:"Dual Sim"},
                {type:"HybridSimSlot",value:"No"},
                {type:"Touchscreen",value:"Yes"},
                {type:"OTGCompatible",value:"Yes"},    
                {type:"Sound Enhancements",value:"Bottom-Ported Loudspeaker, 2 Microphone"}, 
                {type:"SAR Value",value:"Head: 1.08 W/kg, Body: 0.72 W/kg"},              
             ]
      },
      {
        Name:"DisplayFeatures",
        SubItem:[
          {type:"DisplaySize",value:"16.36 cm (6.44 inch)"},
          {type:"Resolution",value:"2400 x 1080 Pixels"},
          {type:"ResolutionType",value:"Full HD+"},
          {type:"Display Type",value:"Full HD+ AMOLED Display"},
          {type:"Other Display Features",value:"20:09 Aspect Ratio, Screen-to-Body Ratio: 91.04%"},
         ]
      },
      {
        Name:"Os & Processor Features",
        SubItem:[
          {type:"OperatingSystem",value:"Android 12"},
          {type:"ProcessorType",value:"Mediatek Dimensity 920"},
          {type:"ProcessorCore",value:"Octa Core"},
          {type:"PrimaryClockSpeed",value:"2.5 GHz"},
          {type:"Operating Frequency",value:"5G: N1/N3/N38/N40/N41/N77/N78, 4G TDD LTE: B38/B39/B40/B41, 4G FDD LTE: B1/B2/B3/B4/B5/B8/B18/B19/B26, 3G WCDMA: B1/B2/B4/B5/B8"},
         ]
      },
      {
        Name:"Memory & Storage Features",
        SubItem:[
          {type:"InternalStorage",value:"128 GB"},
          {type:"RAM",value:"8 GB"},
          {type:"Expandable Storage",value:"12 GB"},
          {type:"Supported Memory Card Type",value:"MicroSD"},
          {type:"Memory Card Slot Type",value:"Dedicated Slot"},
          {type:"Call Log Memory",value:"Yes"}
        ]
      },
      {
        Name:"Camera Features",
        SubItem:[
            {type:"Primary Camera Available",value:"Yes"},
            {type:"Primary Camera",value:"64MP + 8MP + 2MP"},
            {type:"Primary Camera Features",value:"Triple Camera Setup: 64 MP (f/1.89 Aperture) + 8 MP (f/2.2 Aperture) + 2 MP (f/2.4 Aperture), Camera Features: Eye Autofocus, Night, Ultra-Wide Night, Super Macro, Bokeh Portrait, Portrait Filters, Bokeh Flare Portrait, High Resolution, Live Photo, AR Stickers, Slo-Mo, Time-Lapse, Dual-View Video, Double Exposure, Documents, Pano, Pro, Ultra Stabilization"},
            {type:"Secondary Camera Available",value:"Yes"},
            {type:"Secondary Camera",value:"50MP + 8MP Dual Front Camera"},
            {type:"Secondary Camera Features",value:"Dual Camera: 50 MP (f/2.0 Aperture) + 8 MP (f/2.8 Aperture), Camera Feature: Autofocus, AI Extreme Night, Steadiface Selfie Video, Multi-Style Portrait, Double Exposure, Video Face Beauty, Dual-View Video, Slo-Mo, High Resolution, Live Photo, AR Stickers, Natural Portrait"}, 
            {type:"Flash",value:"Dual Tone Spotlight Flash"},
            {type:"Video Recording",value:"Yes"},
            {type:"Full HD Recording",value:"Yes"},
            {type:"HD Recording",value:"Yes"},
            {type:"Dual Camera Lens",value:"Primary Camera"},
          ]
      },
      {
        Name:"Call Features", 
        SubItem:[
            {type:"Phone Book",value:"Yes"},
          ]
      },
      {
        Name:"Connectivity Features", 
        SubItem:[
            {type:"Network Type",value:"5G, 4G, 3G, 2G"},
            {type:"Supported Networks",value:"5G, 4G LTE, WCDMA, GSM"},
            {type:"Internet Connectivity",value:"5G, 4G, 3G, Wi-Fi"},
            {type:"Bluetooth Support",value:"Yes"},
            {type:"Bluetooth Version",value:"v5.2"},
            {type:"Wi-Fi",value:"Yes"},
            {type:"NFC",value:"No"},
            {type:"USB Connectivity",value:"Yes"},
            {type:"Audio Jack",value:"3.5mm"},
            {type:"GPS Support",value:"Yes"},
          ]
      },
      {
        Name:"Other Details", 
        SubItem:[
            {type:"Smartphone",value:"Yes"},
            {type:"SIM Size",value:"Nano Sim"},
            {type:"SMS",value:"Yes"},
            {type:"User Interface",value:"Funtouch OS 12 (Based on Android 12)"},
            {type:"Removable Battery",value:"No"},
            {type:"Graphics PPI",value:"408 PPI"},
            {type:"Sensors",value:"44 W Fast Charging, Charging Time: 1% to 66% in 30 mins Flat, Widevine L1 Certificate, Material Handset: Glass, Wi-Fi Version: Support 2.4 GHz, 5 GHz"},
            {type:"Other Features",value:"Face Unlock, Google Assistant, 20W Charger"},
            {type:"Browser",value:"Vivo Browser"},
            {type:"GPS Type",value:"GPS, BEIDOU, GLONASS, GALILEO, QZSS, NavIC"}
          ]
      },
      {
        Name:"Multimedia Features", 
        SubItem:[
            {type:"Audio Formats",value:"AAC, OGG, FLAC, WMA, WAV, APE, MP3, MP2, MP1, OPUS, M4A"},
            {type:"Video Formats",value:"MP4, 3GP, AVI, FLV, MKV"}
          ]
      },
      {
        Name:"Battery & Power Features", 
        SubItem:[
            {type:"Battery Capacity",value:"4200 mAh"},
          ]
      },
      {
        Name:"Dimensions", 
        SubItem:[
            {type:"Width",value:"72.42 mm"},
            {type:"Height",value:"157.2 mm"},
            {type:"Depth",value:"7.55 mm"},
            {type:"Weight",value:"181 g"},
          ]
      },
      {
        Name:"Warranty", 
        SubItem:[
            {type:"Warranty Summary",value:"1 Year on Handset and 6 Months on Accessories"},
            {type:"Domestic Warranty",value:"1 Year"},
          ]
      },
    ],
 
    SmallImages:[
     "https://rukminim1.flixcart.com/image/128/128/ky0g58w0/mobile/6/7/j/-original-imagabvqfqsgnzfu.jpeg?q=70",
     "https://rukminim1.flixcart.com/image/128/128/kyag87k0/mobile/c/v/n/-original-imagaju9zruyuhkf.jpeg?q=70",
     "https://rukminim1.flixcart.com/image/128/128/ky0g58w0/mobile/0/a/h/-original-imagabvqrkwhkydy.jpeg?q=70",
     "https://rukminim1.flixcart.com/image/128/128/ky0g58w0/mobile/a/r/t/-original-imagabvq2sqpwkfm.jpeg?q=70",
     "https://rukminim1.flixcart.com/image/128/128/ky0g58w0/mobile/a/r/t/-original-imagabvq2sqpwkfm.jpeg?q=70",
     "https://rukminim1.flixcart.com/image/128/128/ky0g58w0/mobile/1/p/c/-original-imagabvqrchpkgxn.jpeg?q=70"
    ],
    RatingReviewData :[

        {title:"Delightful",
        rating:"3.5",
        desc:"Definitely a great choice for the users looking for camera and optimized day to day performance. phone's ram management is so impressive however UI is quite buggy need for an update.",
        images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202202/blobio-imr-202202_4cf5ca931d964826a68b48bc6e03aafd.jpg?q=90"]
        },
        {title:"Value for money",
        rating:"4.1",
        desc:"Good phone. Colour changing feature is unique!!Camera quality superb.",
         images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202202/blobio-imr-202202_6c2beceb86fc4cd29abc1ce9656d87ca.jpg?q=90"]
        },
        {title:"Brilliant",
        rating:"5",
        desc:"Really Really awesome This Phone !! I'm super HAPPY (:.",
         images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202201/blobio-imr-202201_3b98899b02d9462182ae40cd92bdf8bf.jpg?q=90"]
        },
        {title:"Super",
        rating:"4",
        desc:"BUILD QUALITY WOW !!",
         images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202201/blobio-imr-202201_2a2c935a71df4d1e9a6b072592abea82.jpg?q=90"]
        },
        {title:"Good",
        rating:"2.5",
        desc:"ONLY PROBLEM IS PRICE BIT EXPENSIVE... BUT OVERALL GREAT 👍🏻 👌 ❤r",
         images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202201/blobio-imr-202201_647f7094013e4d16804c7f2e05979548.jpg?q=90",
                 "https://rukminim1.flixcart.com/blobio/124/124/imr-202201/blobio-imr-202201_9b6b492af42648b4aec9addc8182e426.jpg?q=90"]
        },
       ],
    },
    {
      _id: uuid(),
      categoryName: "Mobiles",
      quntity:"1",
      title: "realme Narzo 30 5G (Racing Silver, 128 GB)  (6 GB RAM)",
      costprice:"17,999",
      saleingprice: "16,999",
      extraOff : "1000",
      percentOff:"5", 
      packagingCharges : "49",
      Rating:"4",
      Reviews:"5,935",
      Image:"https://rukminim2.flixcart.com/image/416/416/kq18n0w0/mobile/d/b/6/narzo-30-5g-rmx3242-realme-original-imag45yjub2vdrzx.jpeg?q=70",
      Availableoffers : [
                        "Bank Offer10% off on SBI Credit Card, up to ₹750. On orders of ₹5000 and above",
                        "Bank OfferAdditional ₹2000 off on Debit and Credit cards",
                        "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                        "Special PriceGet extra ₹1000 off (price inclusive of discount)",
                        "Get Google Pixel Buds A-series at ₹6999",
                        "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                        "Combo OfferBuy 3 or more items save 1%",
                        "Bank OfferAdditional ₹2000 off on UPI Transactions",
                        "Bank OfferFlat ₹250 off on SBI Credit Card Transactions",
                        "EMI starting from ₹590/month"
                       ],
    BuywithoutExchange : "16,999",
    BuywithExchange : "up to ₹13,000 off",
    Warranty:"1 Year Warranty for Handset, 6 Months for Accessories",
 
    RAM:"6GB",
    ROM:"128GB",
    ExpandableMemory:"1 TB",
    Color:"Silver",
    SIMType:"Dual Sim",

    DeliverBy:"Delivery by20 Mar, Sunday (if ordered before 10:50 PM)",
    Change:"40",
    Highlights:["6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
                "16.51 cm (6.5 inch) Full HD+ Display",
                "48MP + 2MP + 2MP | 16MP Front Camera",
                "5000 mAh Battery" ,
                "MediaTek Dimensity 700 (MT6833) Processor"] ,
    EasyPaymentOptions:["EMI starting from ₹590/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
    Replacement:"7 Days Replacement Policy With GST invoice available",
    Specifications:[
      {Name:"General",
      SubItem:[ 
                {type:"InTheBox",value:"Handset, Adapter, USB Cable, SIM Card Tool, Screen Protect Film, Case, Important Info Booklet with Warranty Card, Quick Guide"},
                {type:"ModelNumber",value:"RMX3242"},
                {type:"ModelName",value:"Narzo 30 5G"},
                {type:"Color",value:"Racing Silver"},
                {type:"BrowseType",value:"Smartphones"},
                {type:"SIMType",value:"Dual Sim"},
                {type:"HybridSimSlot",value:"No"},
                {type:"Touchscreen",value:"Yes"},
                {type:"OTGCompatible",value:"Yes"},    
                {type:"Sound Enhancements",value:"Hi-Res Audio Certification"}, 
                {type:"SAR Value",value:"Head: 1.190 W/kg, Body: 1.173 W/kg"},              
             ]
      },
      {
        Name:"DisplayFeatures",
        SubItem:[
          {type:"DisplaySize",value:"16.59 cm (6.53 inch)"},
          {type:"Resolution",value:"2400 x 1080 Pixels"},
          {type:"ResolutionType",value:"Full HD+"},
          {type:"GPU",value:"Mali-G57 MC2"},
          {type:"Display Type",value:"Full HD+ LCD In-Cell Display"},
          {type:"Other Display Features",value:"90Hz Refresh Rate, 20:9 Aspect Ratio, 90.5% Screen-to-Body Ratio, 180Hz Touch Sampling Rate, Screen Contrast: 1500:1 (Typ), Brightness: 480nits (Typ), 600nits (Max), Color Saturation: 96% NTSC (Typ), COG Sealing Process"},
         ]
      },
      {
        Name:"Os & Processor Features",
        SubItem:[
          {type:"OperatingSystem",value:"Android 11"},
          {type:"ProcessorType",value:"MediaTek Dimensity 700 (MT6833)"},
          {type:"ProcessorCore",value:"Octa Core"},
          {type:"PrimaryClockSpeed",value:"2.2 GHz"},
          {type:"Secondary Clock Speed",value:"2 GHz"},
          {type:"Operating Frequency",value:"2G GSM: 850/900/1800/1900, 3G WCDMA: B1/B2/B5/B6/B8/B19, 4G LTE FDD:B1/B2/B3/B5/B7/B8/B28, 4G LTE TDD: B34/B38/B39/B40/B41 (2515 - 2675 MHz), 5G: NR_NSA n41 (2515 - 2675 MHz)/n77/n78, 5G: NR_SA n1/n28/n41(2515 - 2675 MHz)/n78"},
         ]
      },
      {
        Name:"Memory & Storage Features",
        SubItem:[
          {type:"InternalStorage",value:"128 GB"},
          {type:"RAM",value:"6 GB"},
          {type:"ExpandableStorage",value:"1 TB"},
          {type:"Supported Memory Card Type",value:"MicroSD"},
          {type:"Memory Card Slot Type",value:"Dedicated Slot"},
        ]
      },
      {
        Name:"Camera Features",
        SubItem:[
            {type:"Primary Camera Available",value:"Yes"},
            {type:"Primary Camera",value:"14MP + 2MP + 2MP"},
            {type:"Primary Camera Features",value:"Triple Rear Camera Setup: 48MP Primary (Samsung S5KGM1ST, f/1.8 Aperture, FOV: 79.8 Degree, 25.4mm Focal Length, 1/2 inch Sensor Size, 0.80um Pixel Size, 6P Lens, PDAF) + 2MP Portrait (Galaxycore GC02M1B, f/2.4 Aperture, FOV: 88.8 Degree, 21.9 mm Focal Length, 1/5 inch Sensor Size, 1.75um Pixel Size, 3P Lens, FF) + 2MP Macro (OV OV02B10, f/2.4 Aperture, FOV: 88.8 Degree, 21.9mm Focal Length, 1/5 inch Sensor Size, 1.75um Pixel Size, 3P Lens, 4cm FF), CMOS Sensor, EIS, 20 Continuous Shooting"},
            {type:"Secondary Camera Available",value:"Yes"},
            {type:"Secondary Camera",value:"16MP Front Camera"},
            {type:"Secondary Camera Features",value:"16MP Front Camera (Samsung S5K3P9SP04, f/2.1 Aperture, FOV: 79.3 Degree, 25.6mm Focal Length, 1/3.1 inch Sensor Size, 1.0μm Pixel Size, 5P Lens, FF), CMOS Sensor, EIS"}, 
            {type:"Flash",value:"Rear Flash"},
            {type:"Video Recording",value:"Yes"},
            {type:"Full HD Recording",value:"Yes"},
            {type:"HD Recording",value:"Yes"},
            {type:"Video Recording Resolution",value:"Rear Camera: 720p and 1080p (at 30 fps), Slo-mo Video: 720p (at 120 fps), EIS: 1080P (at 30 fps), Digtal Zoom Mode: 1080P (at 30fps), Front Camera: 720p and 1080p (at 30fps)"},
            {type:"Digital Zoom",value:"10X"},
            {type:"Frame Rate",value:"30 fps"},
            {type:"Dual Camera Lens",value:"Primary Camera"},
          ]
      },
      {
        Name:"Call Features", 
        SubItem:[
            {type:"Call Records",value:"Yes"},
          ]
      },
      {
        Name:"Connectivity Features", 
        SubItem:[
            {type:"Network Type",value:"5G, 4G VOLTE, 4G, 3G, 2G"},
            {type:"Supported Networks",value:"5G, 4G VoLTE, 4G LTE, WCDMA, GSM"},
            {type:"Internet Connectivity",value:"5G, 4G, 3G, Wi-Fi, EDGE, GPRS"},
            {type:"3G",value:"Yes"},
            {type:"GPRS",value:"Yes"},
            {type:"Pre-installed Browser",value:"Google Chrome"},
            {type:"Bluetooth Support",value:"Yes"},
            {type:"Bluetooth Version",value:"v5.1"},
            {type:"Wi-Fi Version",value:"802.11 a/b/g/n/ac (2.4GHz | 5.1GHz | 5.8GHz)"},
            {type:"NFC",value:"No"},
            {type:"Wi-Fi Hotspot",value:"Yes"},
            {type:"EDGE",value:"Yes"},
            {type:"Audio Jack",value:"3.5mm"},
            {type:"Map Support",value:"Google Maps"},
            {type:"GPS Support",value:"Yes"},
          ]
      },
      {
        Name:"Other Details", 
        SubItem:[
            {type:"Smartphone",value:"Yes"},
            {type:"Touchscreen Type",value:"Capacitive"},
            {type:"SIM Size",value:"Nano"},
            {type:"User Interface",value:"Realme UI v2.0 (Based on Android 11)"},
            {type:"SMS",value:"Yes"},
            {type:"Voice Input",value:"Yes"},
            {type:"Graphics PPI",value:"405 PPI"},
            {type:"Sensors",value:"Magnetic Induction Sensor, Light Sensor, Proximity Sensor, Acceleration Sensor, Gyro-meter"},
            {type:"Other Features",value:"OTG Storage Format: VFAT, EXFAT, NTFS, UFS 2.1 ROM (2 Lanes HS-Gear3), 18W Max Charging Power, PD (9V/2A) Charging Protocol, Side Fingerprint Sensor, Phone Lock Functions: Face Unlock, Fingerprint Unlock, Password Unlock, Pattern Unlock, Google Smart Lock, Fingerprint Unlock Speed (392ms), Wet Fingerpringt Unlock, Face Unlock Speed (713ms), Number Identification, File Encryption, Private Space, Private Apps, Private Protection, Headphones Monitor, Kids Space, Clone Apps, Night Shiled, Step Tracker, Voice Wake Up, Game Space, APP Market, Theme Store, Clone Phone, Phone Manager, Wallet, Google Lens, Telephone Number Identification"},
            {type:"GPS Type",value:"GPS/A-GPS, GLONASS, BeiDou"}
          ]
      },
      {
        Name:"Battery & Power Features", 
        SubItem:[
            {type:"Battery Capacity",value:"5000 mAh"},
          ]
      },
      {
        Name:"Dimensions", 
        SubItem:[
            {type:"Width",value:"78.1 mm"},
            {type:"Height",value:"164.9 mm"},
            {type:"Depth",value:"8.5 mm"},
            {type:"Weight",value:"189 g"},
          ]
      },
      {
        Name:"Warranty", 
        SubItem:[
            {type:"Warranty Summary",value:"1 Year Warranty for Handset, 6 Months for Accessories"},
            {type:"Domestic Warranty",value:"1 Year"},
          ]
      },
    ],
 
    SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/kq18n0w0/mobile/d/b/6/narzo-30-5g-rmx3242-realme-original-imag45yjub2vdrzx.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kq18n0w0/mobile/6/9/n/narzo-30-5g-rmx3242-realme-original-imag45yjyggqrdvj.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kqb8pzk0/mobile/5/f/x/narzo-30-5g-rmx3242-realme-original-imag4cvhrxwfsbgz.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kq18n0w0/mobile/1/f/r/narzo-30-5g-rmx3242-realme-original-imag45yjn8wzjtrd.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kq18n0w0/mobile/n/k/g/narzo-30-5g-rmx3242-realme-original-imag45yjn6a8rvey.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kq18n0w0/mobile/5/z/8/narzo-30-5g-rmx3242-realme-original-imag45yjjm7jvgvj.jpeg?q=70"
    ],
    RatingReviewData :[

        {title:"Worth every penny",
        rating:"5",
        desc:"Nice phone camera is super, battery backup super display super , I like this phone very much after a one month usage.",
        images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202108/blobio-imr-202108_ae041ad0bc9f4d6eadde85351e76b1c3.jpg?q=90",
                "https://rukminim1.flixcart.com/blobio/178/178/imr-202107/blobio-imr-202107_00ef137499c5425cbae9f909fa5ef942.jpg?q=90"]
        },
        {title:"Terrific purchase",
        rating:"5",
        desc:"super camera qulity...i use realme phon first time but i m feel so much happy and satisfaide with product..",
         images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202107/blobio-imr-202107_dfeec693e6474445a8a6ea9ae0625ecd.jpg?q=90"]
        },
        {title:"Super!",
        rating:"5",
        desc:"Really great phone , it's worth for money , good display , good battery backup , really a good phone ❤️👏👍",
         images:["https://rukminim1.flixcart.com/blobio/248/248/imr-202108/blobio-imr-202108_33027220a3644d2595fa25c1ef86d5ee.jpg?q=90"]
        },
       ],
    },
    {
      _id: uuid(),
      categoryName: "Mobiles",
      quntity:"1",
      title: "OPPO Reno6 Pro 5G (Majestic Gold, 256 GB)  (12 GB RAM)#JustHere",
      costprice:"45,990",
      saleingprice: "41,990",
      extraOff : "4000",
      percentOff:"8", 
      packagingCharges : "49",
      Rating:"3",
      Reviews:"1,470",
      Image:"https://rukminim2.flixcart.com/image/416/416/ktd9mkw0/mobile/b/l/m/reno6-pro-5g-cph2249-oppo-original-imag6pmnnkthda6y.jpeg?q=70",
      Availableoffers : ["Bank Offer 10% off on SBI Credit Card, up to ₹750. On orders of ₹5000 and above",
                         "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                         "Special PriceGet extra ₹4000 off (price inclusive of discount)",
                         "FreebieAdd Bitcoin worth ₹201 to your portfolio",
                         "Freebie25% Off on Discovery+ Subscription",
                         "FreebieFree 6 Months Gaana Plus",
                         "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                         "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                         "FreebieUpto 25% off on PharmEasy",
                         "EMI starting from ₹6,999/month",
                       ],
    BuywithoutExchange : "41,990",
    BuywithExchange : "up to ₹13,000 off",
    Warranty:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories",
  

    RAM:"12GB",
    ROM:"256GB",
    ExpandableMemory:"512GB",
    Color:"Gold",
    SIMType:"Dual Sim",

    DeliverBy:"Delivery by21 Mar, Monday",
    Change:"Free",
    Highlights:["12 GB RAM | 256 GB ROM","16.64 cm (6.55 inch) Full HD+ Display","65W SuperVOOC 2.0 Charging","3D Borderless Screen","Bokeh Flare Portrait Video | AI Highlight Video | OPPO Reno Glow 2.0",
                "64MP + 8MP + 2MP + 2MP | 32MP Front Camera","4500 mAh Lithium-ion Polymer Battery","MediaTek Dimensity 1200 Processor",] ,
    EasyPaymentOptions:["EMI starting from ₹6,999/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
    Replacement:"7 Days Replacement Policy",
    Specifications:[
      {Name:"General",
      SubItem:[ 
                {type:"InTheBox",value:"Handset, Charger, USB Cable, Earphone, SIM Ejector Tool, Protective Case, Quick Start Guide, Safety Guide"},
                {type:"ModelNumber",value:"CPH2249"},
                {type:"ModelName",value:"Reno6 Pro 5G"},
                {type:"Color",value:"Gold"},
                {type:"BrowseType",value:"Smartphones"},
                {type:"SIMType",value:"Dual Sim"},
                {type:"HybridSimSlot",value:"No"},
                {type:"Touchscreen",value:"Yes"},
                {type:"OTGCompatible",value:"Yes"},
                {type:"Sound Enhancements",value:"Dolby Atmos (Supported by Both the Speaker and Earphones), Integrated Chip: MT6359"},
                {type:"SAR Value",value:"Head - 1.17W/kg, Body - 1.03W/kg"},
              
             ]
      },
      {
        Name:"DisplayFeatures",
        SubItem:[
          {type:"DisplaySize",value:"16.64 cm (6.55 inch)"},
          {type:"Resolution",value:"2400 x 1080 Pixels"},
          {type:"ResolutionType",value:"Full HD+"},
          {type:"GPU",value:"ARM G77 MC9"},
          {type:"DisplayType",value:"Full HD+ AMOLED Display"},
          {type:"OtherDisplayFeatures",value:"90 Hz Refresh Rate, 92.1% Screen-to-Body Ratio, Color Saturation: 97% (Typical), 20:9 Aspect Ratio, Static Maximum Contrast Ratio: 5000000:1, Color Gamut: Vivid mode 97% NTSC / 100% DCI-P3, Brightness: 500 nits (Typical), HBM: 800 nits, Corning Gorilla Glass 5, Touch Sampling Rate: 180 Hz (Max), Oleophobic Coating, Night Mode, Eye Comfort, HDR Display"},
         ]
      },
      {
        Name:"Os & Processor Features",
        SubItem:[
          {type:"OperatingSystem",value:"Android 11"},
          {type:"ProcessorType",value:"MediaTek Dimensity 1200"},
          {type:"ProcessorCore",value:"Octa Core"},
          {type:"PrimaryClockSpeed",value:"3 GHz"},
          {type:"SecondaryClockSpeed",value:"1.8 GHz"},
          {type:"OperatingFrequency",value:"2G GSM: 850 MHz/900 MHz/1800 MHz/1900 MHz, 3G UMTS(WCDMA):B1/B5/B8, 4G TD-LTE: B38/B40/B41(120MHz), 4G LTE FDD: B1/B3/B5/B7/B8/B20/B28"},
         ]
      },
      {
        Name:"Memory & Storage Features",
        SubItem:[
          {type:"InternalStorage",value:"265 GB"},
          {type:"RAM",value:"12 GB"},
        ]
      },
      {
        Name:"Camera Features",
        SubItem:[
            {type:"Primary Camera Available",value:"Yes"},
            {type:"Primary Camera",value:"64MP + 8MP + 2MP + 2MP"},
            {type:"Primary Camera Features",value:"Quad Rear Camera Setup: 64MP Main (OmniVISION OV64B, 1/2.0 Inch Sensor Size, 0.7 um Pixel Size, 4:3 Aspect Ratio, f/1.7 Aperture, FOV 81 Degree, 6P Lens, Closed-loop Focus Motor, Focal Length: 4.73 mm, 2 x 2 PDAF) + 8MP Wide-angle (Sony IMX355, 1/4.0 Inch Sensor Size, 1.12 um Pixel Size, 4:3 Aspect Ratio, f/2.2 Aperture, FOV 120 Degree, 5P Lens, FF, Focal Length: 1.64 mm) + 2MP Macro (OmniVISION OV02B10, 1/5 Inch Sensor Size, 1.75 μm Pixel Size, 4:3 Aspect Ratio, f/2.4 Aperture, FOV 89 Degree, 3P Lens, FF, Focal Length: 1.77 mm) + 2MP Mono (Galaxycore GC02M1B, 1/5.0 Inch Sensor Size, 1.75 um Pixel Size, 4:3 Aspect Ratio, f/2.4 Aperture, FOV 89 Degree, 3P Lens, Focal Length: 1.77 mm), EIS, Smart Scenario Recognition, CMOS Sensor (Main Rear Camera: 4-in-1), Fill Light for Video Shooting, Camera Mode: Photo, Video, Night, Expert, Panorama, Portrait, Time-lapse, Slow-motion, Text Scanner, and Sticker, Photo Editing Options: Crop & Rotate, Adjust, Filter, Markup, Text, Mosaic, Beautify, Stickers, Eraser, Blur"},
            {type:"Secondary Camera Available",value:"Yes"},
            {type:"Secondary Camera",value:"5MP Front Camera"},
            {type:"Secondary Camera Features",value:"32MP Front Camera (Sony IMX615, f/2.4 Aperture, FOV 81 Degree, 5P Lens, Focal Length: 3.77 mm, 4:3 Aspect Ratio, 1/2.74 inch Sensor Size, 0.8 μm Pixel Size, Fixed Focus), CMOS Sensor, Camera Mode: Photo, Video, Panorama, Portrait, Night, Time-lapse, Sticker"}, 
            {type:"Full HD Recording",value:"Yes"},
            {type:"Video Recording Resolution",value:"Rear Camera: 4k (at 30 fps / 60 fps), 720P (at 30 fps), Supports: 4K (at 30 fps), Slow Motion: 1080P (at 120 fps), 720P (at 960 fps / 240 fps / 120 fps)"},
            {type:"Frame Rate",value:"30 fps, 60 fps"},
          ]
      },
      {
        Name:"Connectivity Features", 
        SubItem:[
            {type:"Network Type",value:"5G , 4G VOLTE, 4G, 3G, 2G"},
            {type:"Supported Networks",value:" 5G ,4G VoLTE, 4G LTE, WCDMA, GSM"},
            {type:"Internet Connectivity",value:" 5G ,4G,3G, Wi-Fi"},
            {type:"Micro USB Port",value:"Yes"},
            {type:"Pre-installed Browser",value:"Google Chrome"},
            {type:"Bluetooth Support",value:"Yes"},
            {type:"Bluetooth Version",value:"v5.0"},
            {type:"Wi-Fi",value:"Yes"},
            {type:"Wi-Fi Version",value:"Wi-Fi 6 (802.11ax), Wi-Fi 5 (802.11ac), 802.11a/b/g/n"},
            {type:"NFC",value:"Yes"},
            {type:"USB Tethering",value:"Yes"},
            {type:"Infrared",value:"Yes"},
            {type:"USB Connectivity",value:"Yes"},
            {type:"Audio Jack",value:"Type-C"},
            {type:"Map Support",value:"Google Maps"},
          ]
      },
      {
        Name:"Other Details", 
        SubItem:[
            {type:"Smartphone",value:"Yes"},
            {type:"SIM Size",value:"Nano Sim + U-Nano Sim"},
            {type:"Graphics PPI",value:"402 PPI"},
            {type:"Sensors",value:"Geomagnetic Sensor, Color Temperature Sensor, Proximity Sensor, Optical Sensor, Accelerometer, Gravity Sensor, Gyroscope, Pedometer"},
            {type:"Other Features",value:"UFS 2.1 ROM (at 2-lane HS-Gear4), 2 TB Maximum OTG Storage, FAT32, NTFS, exFAT Storage Formats, 4 Channel RAM, Fast Charging: Supports SuperVOOC 2.0, SuperVOOC, VOOC 3.0, PD (9V/2A), QC (9V/2A), Flash Charging, Reverse Charging, X-axis Linear Motor, Heat Dissipation Mechanism: Graphite Sheet + VC Soaking Condensing Copper Plate + High Thermal Conductivity Aluminum Middle Frame + Thermal Condensing Grease + Copper Foil Thermal Conductive Material, IP54 Rated Ingress Protection, In-Display Fingerprint, Face Recognition, 65W (10V/6.5) Charger"},
            {type:"GPS Type",value:"GPS, AGPS, BEIDOU, GLONASS, GALILEO"},

          ]
      },
      {
        Name:"Battery & Power Features", 
        SubItem:[
            {type:"Battery Capacity",value:"4500 mAh"},
          ]
      },
      {
        Name:"Dimensions", 
        SubItem:[
            {type:"Width",value:"73.1 mm"},
            {type:"Height",value:"160 mm"},
            {type:"Depth",value:"7.6 mm"},
            {type:"Weight",value:"177 g"},
          ]
      },
      {
        Name:"Warranty", 
        SubItem:[
            {type:"Warranty Summary",value:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box Accessories"},
            {type:"Domestic Warranty",value:"1 Year"},
          ]
      },
    ],
 
    SmallImages:[
       "https://rukminim1.flixcart.com/image/128/128/ktd9mkw0/mobile/b/l/m/reno6-pro-5g-cph2249-oppo-original-imag6pmnnkthda6y.jpeg?q=70",
       "https://rukminim1.flixcart.com/image/128/128/ktrk13k0/mobile/f/a/3/reno6-pro-5g-cph2249-oppo-original-imag7fj3bss5rgtf.jpeg?q=70",
       "https://rukminim1.flixcart.com/image/128/128/ku4ezrk0/mobile/1/y/1/reno6-pro-5g-cph2249-oppo-original-imag7bfdjhebkyuz.jpeg?q=70",
       "https://rukminim1.flixcart.com/image/128/128/ktd9mkw0/mobile/7/i/m/reno6-pro-5g-cph2249-oppo-original-imag6pmnfqpwrkkh.jpeg?q=70",
       "https://rukminim1.flixcart.com/image/128/128/ktd9mkw0/mobile/8/c/v/reno6-pro-5g-cph2249-oppo-original-imag6pmnhaek4jbt.jpeg?q=70",
       "https://rukminim1.flixcart.com/image/128/128/ktd9mkw0/mobile/l/d/d/reno6-pro-5g-cph2249-oppo-original-imag6pmnebp4dufd.jpeg?q=70",
       "https://rukminim1.flixcart.com/image/128/128/ktd9mkw0/mobile/x/p/q/reno6-pro-5g-cph2249-oppo-original-imag6pmnygherjdy.jpeg?q=70",
       "https://rukminim1.flixcart.com/image/128/128/ktd9mkw0/mobile/a/3/u/reno6-pro-5g-cph2249-oppo-original-imag6pmn3ry2g3fj.jpeg?q=70"
    ],
    RatingReviewData :[

        {title:"Great product",
        rating:"5",
        desc:"It's a nice phone with good performance. Fast charging is amazing and upto 8 hrs of screen time is guaranteed with average usage. ",
        images:["https://rukminim1.flixcart.com/blobio/248/248/imr-202107/blobio-imr-202107_331a95a3b4d94b19872d72ba24b3c4c7.jpg?q=90",
                "https://rukminim1.flixcart.com/blobio/248/248/imr-202107/blobio-imr-202107_504afb07d8694f58b2556af93cbb3d49.jpg?q=90",
               "https://rukminim1.flixcart.com/blobio/248/248/imr-202107/blobio-imr-202107_38064069be6f4e4eabd36bea0eb4685e.jpg?q=90"]
        },
        {title:"Excellent",
        rating:"5",
        desc:"Phone is just owsam. Camera quality is good fast charging withing 30 mint 24 hour battry backup. Value. For money purchase on launching day. Recommended if u r looking a good phone",
         images:["https://rukminim1.flixcart.com/blobio/248/248/imr-202109/blobio-imr-202109_6fd5c70866424b7bb75a0b9123e0f876.jpg?q=90",
                 "https://rukminim1.flixcart.com/blobio/248/248/imr-202107/blobio-imr-202107_1cbd934b2cd64a718e22024e0c8cb353.jpg?q=90"]
        }
       ],
    },
    ///Top Offer
    {
      _id: uuid(),
      categoryName: "Top Offer",
      quntity:"1",
      title: "by Hrithik Roshan Men White Running Shoes Running Shoes For Men  (White)",
      costprice:"2,159",
      saleingprice: "3,499",
      extraOff : "200",
      percentOff:"38", 
      Coupon : "Special PriceGet extra 30% off upto ₹50 on 1 item(s) (price inclusive of discount)",
      Rating:"3",
      Reviews:"13",
      Status :"Fast delivery service",
      Image:"https://rukminim2.flixcart.com/image/880/1056/k6mibgw0/shoe/6/g/u/10616668-43-hrx-by-hrithik-roshan-white-original-imafpffbffdtxbqf.jpeg?q=50",
      Availableoffers : ["Special PriceGet extra 15% off",
                         "Bank Offer10% off on SBI Credit Card, up to ₹1250. On orders of ₹5000 and above",
                         "Special PriceGet extra ₹4000 off (price inclusive of discount)",
                         "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                         "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                         "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                       ],
    Size:["6","7","8","9","10","11"],
    DeliverBy:"Delivery by21 Mar, Monday",
    Change:"Free",
    Replacement:"14 Days Return Policy",
    ProductDetails : [
                   {type:"Color",value:"White"},
                   {type:"Outer material",value:"Mesh"},
                   {type:"Model name",value:"by Hrithik Roshan Men White Running Shoes"},
                   {type:"Ideal for",value:"Men"},
                   {type:"Occasion",value:"Sports"},
                   {type:"Sole material",value:"Rubber"},
                   {type:"Closure",value:"Lace-Ups"},
                   {type:"Generic Name",value:"Shoe"},
                   {type:"Country of Origin",value:"China"},
                  ],
    SmallImages:[
     "https://rukminim1.flixcart.com/image/128/128/k6mibgw0/shoe/6/g/u/10616668-43-hrx-by-hrithik-roshan-white-original-imafpffbffdtxbqf.jpeg?q=70",
     "https://rukminim1.flixcart.com/image/128/128/k6mibgw0/shoe/z/g/s/10616668-45-hrx-by-hrithik-roshan-white-original-imafpffbanvuu7nr.jpeg?q=70",
     "https://rukminim1.flixcart.com/image/128/128/k6mibgw0/shoe/z/g/s/10616668-42-hrx-by-hrithik-roshan-white-original-imafpffctgewcww4.jpeg?q=70",
     "https://rukminim1.flixcart.com/image/128/128/k6mibgw0/shoe/z/g/s/10616668-41-hrx-by-hrithik-roshan-white-original-imafpffczmhcjxy4.jpeg?q=70"
    ],
    RatingReviewData :[

        {title:"Amazing this product",
        rating:"5",
        desc:"Quality product is very good",
        images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202202/blobio-imr-202202_6a3209e772d0424abb2afd0c8d6fbb8c.jpg?q=90"]
        },
        {title:"Nice 1",
        rating:"5",
        desc:"Nice 1",
         images:[]
        }
       ],
    },
    {
      _id: uuid(),
      categoryName: "Top Offer",
      quntity:"1",
      title: "Combo of 6 pair Small Colorful Jhumka Alloy Jhumki Earring (multy colour)",
      costprice:"139",
      saleingprice: "1,566",
      extraOff : "200",
      percentOff:"38", 
      Coupon : "Special PriceGet extra 30% off upto ₹100 on 1 item(s) (price inclusive of discount)",
      Rating:"3",
      Reviews:"13",
      Size:[],
      Status :"Fast delivery service",
      Image:"https://rukminim2.flixcart.com/image/746/895/kxtaxzk0/earring/r/9/z/na-ffc6005-fashion-fusion-original-imaga6s4bqsgc94d.jpeg?q=50",
      Availableoffers : ["Special PriceGet extra 15% off",
                         "Bank Offer 10% off on SBI Credit Card, up to ₹1250. On orders of ₹5000 and above",
                         "Special PriceGet extra ₹4000 off (price inclusive of discount)",
                         "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                         "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                         "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                       ],
    DeliverBy:"Delivery in 3-5 days",
    Change:"100",
    Replacement:"10 Days Return Policy",
    ProductDetails : [
                   {type:"Base Material",value:"Alloy"},
                   {type:"Plating",value:"Gold-plated"},
                   {type:"Color",value:"Black, White"},
                   {type:"Model Number",value:"FFC6005"},
                   {type:"Model Name",value:"Combo of 6 pair Small Colorful Jhumka"},
                   {type:"Ideal For",value:"Women, Girls"},
                   {type:"Type",value:"Jhumki Earring"},
                   {type:"Collection",value:"Contemporary"},
                  ],
    SmallImages:[
    "https://rukminim1.flixcart.com/image/128/128/kxtaxzk0/earring/r/9/z/na-ffc6005-fashion-fusion-original-imaga6s4bqsgc94d.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/kxqg2a80/earring/n/e/o/na-esc6005-alysa-original-imaga4dgypgppech.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/kxqg2a80/earring/0/c/d/na-ffc1203-fashion-fusion-original-imaga4h6fgup3nmk.jpeg?q=70"
    ],
    RatingReviewData :[

        {title:"Very cheap Quality. I Don't like this",
        rating:"1",
        desc:"Very cheap Quality.Don't buy .",
        images:[]
        },
        {title:"I bought the same combo of 12 colors and really liked it. Now I bought this for my sister. Worth every penny.",
        rating:"5",
        desc:"Nice zumka",
         images:[]
        }
       ],
    },
    {
      _id: uuid(),
      categoryName: "Top Offer",
      quntity:"1",
      title: "Printed, Embellished, Checkered, Self Design Daily Wear Art Silk Saree  (Pack of 2)",
      costprice:"1999",
      saleingprice: "419",
      extraOff : "200",
      percentOff:"79", 
      Coupon : "Special PriceGet extra 30% off upto ₹100 on 1 item(s) (price inclusive of discount)",
      Rating:"4.8",
      Reviews:"27",
      Status :"Available",
      Size:[],
      Image:"https://rukminim2.flixcart.com/image/880/1056/kzx1a4w0/sari/h/o/3/free-combo-s181195-s181196-aadvika-unstitched-original-imagbtnvjreayebq.jpeg?q=50",
      Availableoffers : ["Special PriceGet extra 15% off",
                         "Bank Offer 10% off on SBI Credit Card, up to ₹1250. On orders of ₹5000 and above",
                         "Special PriceGet extra ₹4000 off (price inclusive of discount)",
                         "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                         "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                         "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                       ],
    DeliverBy:"Delivery in 9-11 days",
    Change:"50",
    Replacement:"14 Days Return Policy",
    ProductDetails : [
                   {type:"Style Code",value:"COMBO_S181195_S181196"},
                   {type:"Pattern",value:"Printed, Embellished, Checkered, Self Design"},
                   {type:"Pack of",value:"2"},
                   {type:"Occasion",value:"Party & Festive"},
                   {type:"Fabric Care",value:"Hand Wash"},
                   {type:"Fabric",value:"Art Silk"},
                   {type:"Type",value:"Daily Wear"},
                   {type:"Blouse Piece",value:"Unstitched"},
                  ],
    SmallImages:["https://rukminim2.flixcart.com/image/880/1056/kzx1a4w0/sari/h/o/3/free-combo-s181195-s181196-aadvika-unstitched-original-imagbtnvjreayebq.jpeg?q=50"],
    RatingReviewData :[

        {title:"Very nice",
        rating:"1",
        desc:"The saree is looks great as shown in the image. Saree is very soft and comfortable to wear. Perfect for casual and summer days..",
        images:[]
        },
        {title:"looks nice",
        rating:"5",
        desc:"I purchased the saree for my mom's golden jubilee anniversary last weekend.",
         images:[]
        }
       ],
    },
    {
      _id: uuid(),
      categoryName: "Top Offer",
      quntity:"1",
      title: "Check-in Suitcase(66 cm)-AMT BRANDON SP 66CM-BLUE -Blue",
      costprice:"8,800",
      saleingprice: "3,949",
      extraOff : "200",
      percentOff:"55", 
      Coupon : "Special PriceGet extra 30% off upto ₹100 on 1 item(s) (price inclusive of discount)",
      Rating:"4.1",
      Reviews:"1,078",
      Status :"Fast delivery service",
      Image:"https://rukminim2.flixcart.com/image/714/857/kr3tj0w0/suitcase/w/j/0/amt-brandon-sp-75cm-blue-fn7-0-01-103-check-in-luggage-american-original-imag4yqeehrgjdsw.jpeg?q=50",
      Availableoffers : ["Special PriceGet extra 15% off",
                         "Bank Offer 10% off on SBI Credit Card, up to ₹1250. On orders of ₹5000 and above",
                         "Special PriceGet extra ₹4000 off (price inclusive of discount)",
                         "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                         "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                         "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                       ],
    DeliverBy:"Delivery by 21 march",
    Change:"40",
    Replacement:"14 Days Return Policy",
    Size:["55cm (small)","66cm (small)","75cm (large)"],
    ProductDetails : [
                      {type:"Style Code",value:"FN7 (0) 01 103"},
                      {type:"Pattern",value:"Solid"},
                      {type:"Locking mechanism",value:"Number Lock"},
                      {type:"Ideal for",value:"Men & Women"},
                      {type:"Number of wheels",value:"4"},
                      {type:"Water resistant",value:"No"},
                      {type:"Body type, material",value:"Hard Body, Polypropylene"},
                      {type:"Capacity",value:"59 L"},
                  ],
    SmallImages:["https://rukminim1.flixcart.com/image/128/128/kr3tj0w0/suitcase/w/j/0/amt-brandon-sp-75cm-blue-fn7-0-01-103-check-in-luggage-american-original-imag4yqeehrgjdsw.jpeg?q=70",
                 "https://rukminim1.flixcart.com/image/128/128/kr3tj0w0/suitcase/1/j/n/amt-brandon-sp-75cm-blue-fn7-0-01-103-check-in-luggage-american-original-imag4yqeer6y5sm5.jpeg?q=70",
                 "https://rukminim1.flixcart.com/image/128/128/kr3tj0w0/suitcase/q/f/a/amt-brandon-sp-75cm-blue-fn7-0-01-103-check-in-luggage-american-original-imag4yqemqegwznf.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/kr3tj0w0/suitcase/i/j/p/amt-brandon-sp-75cm-blue-fn7-0-01-103-check-in-luggage-american-original-imag4yqe9npafnpu.jpeg?q=70"],
    RatingReviewData :[

        {title:"Very nice",
        rating:"1",
        desc:"Looks sturdy and designer with a reasonable price. Comes with a 3 year guarantee from AT. I loved the colour. And very spacious inside. Ordered all sizes of this bag. Efficient buy.",
        images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202107/blobio-imr-202107_afdd46db5c844092babcb7c88fdd182c.jpeg?q=90"]
        },
        {title:"Best",
        rating:"5",
        desc:"I really liked this product. At this price range this one is perfect on every aspects.The best part of this luggage is looks. I really like the design and the textures",
         images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202106/blobio-imr-202106_4b88770cd74042a893e8af603a980e62.png?q=90"]
        },
        {
          title:"Good",
          rating:"5",
          desc:"Good American Tourister is great product bot handle is not too strong overall v good",
          images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202107/blobio-imr-202107_0b4eeb203c5c43dfb8e3f94a8309ccfe.jpeg?q=90"]
        },
       ],
    },
    {
      _id: uuid(),
      categoryName: "Top Offer",
      quntity:"1",
      title: "by Lenskart Polarized, UV Protection Rectangular Sunglasses (For Men, Blue)",
      costprice:"1,999",
      saleingprice: "669",
      extraOff : "200",
      percentOff:"66", 
      Coupon : "Special PriceGet extra 30% off upto ₹100 on 1 item(s) (price inclusive of discount)",
      Rating:"4.1",
      Reviews:"11",
      Status :"Sold Out",
      Replacement:"14 Days Return Policy",
      Image:"https://rukminim2.flixcart.com/image/714/857/kvjuufk0/sunglass/d/y/w/-original-imag8f9px9dn2cff.jpeg?q=50",
      Availableoffers : [],
      Size:[],
      ProductDetails : [
                      {type:"Size",value:"This product is sold as Free Size by the Brand"},
                      {type:"Ideal For",value:"Men"},
                      {type:"Purpose",value:"Style, Eye Protection, Driving, Biking, Running"},
                      {type:"Lens Color and Material",value:"Blue, Polycarbonate"},
                      {type:"Features",value:"Polarized, UV Protection"},
                      {type:"Frame Color",value:"Black"},
                      {type:"Model Name",value:"VC S11167"},
                      {type:"Type",value:"Rectangular"},
                  ],
    SmallImages:["https://rukminim1.flixcart.com/image/128/128/kvjuufk0/sunglass/y/r/r/-original-imag8f9pmsmyvmdg.jpeg?q=70",
                 "https://rukminim1.flixcart.com/image/128/128/kvjuufk0/sunglass/v/a/l/-original-imag8f9pntuycaem.jpeg?q=70",
                 "https://rukminim1.flixcart.com/image/128/128/kokdci80/sunglass/h/q/j/54-130815-vincent-chase-original-imag2zdnawzzq9vg.jpeg?q=70",
                 "https://rukminim1.flixcart.com/image/128/128/ko7idu80/sunglass/6/n/s/54-130815-vincent-chase-original-imag2pkenjjehrf8.jpeg?q=70",
                 "https://rukminim1.flixcart.com/image/128/128/kkzrpu80/sunglass/v/1/e/131371-m-vincent-chase-original-imagy7z4uksjtkv3.jpeg?q=70",
                 "https://rukminim1.flixcart.com/image/128/128/kkzrpu80/frame/4/l/f/48-na-131587-vincent-chase-original-imagy7wnwbhxahzd.jpeg?q=70",
                 "https://rukminim1.flixcart.com/image/128/128/kctf0cw0/sunglass/b/y/t/this-product-is-sold-as-free-size-by-the-brand-108543-vincent-original-imaeqsdzpugnrhhh.jpeg?q=70"
                ],
    RatingReviewData :[

        {title:"Very nice",
        rating:"1",
        desc:"Frame and glasses are made of plastic. But the polarization works. Being light tint and polarized, helps to reduce glare from incoming traffic headlights. Using as night driving glasses.",
        images:["https://rukminim1.flixcart.com/blobio/140/140/imr-202202/blobio-imr-202202_a99725279b3c4b7db15d468598494ebd.jpg?q=90"]
        },
        {title:"Best",
        rating:"5",
        desc:"Like it very much",
         images:["https://rukminim1.flixcart.com/blobio/140/140/imr-202109/blobio-imr-202109_b870f2517b824d9095157f48fd6809fa.jpg?q=90"]
        },
       ],
    },
    {
      _id: uuid(),
      categoryName: "Top Offer",
      quntity:"1",
      title: "WRG00066B Analog Watch - For Men (with a Manufacturer Warranty by Timex of 1 Year)",
      costprice:"2374",
      saleingprice: "499",
      extraOff : "200",
      percentOff:"79", 
      Coupon : "Special PriceGet extra 30% off upto ₹50 on 1 item(s) (price inclusive of discount)",
      Rating:"4.1",
      Reviews:"40",
      Status :"Available",
      Size:[],
      Image:"https://rukminim2.flixcart.com/image/880/1056/kmp7ngw0/watch/4/s/d/wrg00066b-wrogn-original-imagfjkrzsrhthjr.jpeg?q=50",
      Availableoffers : [
                        "Special PriceGet extra 26% off (price inclusive of discount)",
                        "Combo OfferBuy 2 items save 5%;Buy 3 or more save 10%",
                        "Bank Offer10% off on SBI Credit Card, up to ₹1250. On orders of ₹5000 and above",
                        "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                        "Bank OfferGet Extra 10%Off Upto ₹1500 On Watches",
                        "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                        "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                        "No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999",
                         "Bank OfferGet Extra 10%Off Upto ₹1500 On Watches"
                        ],
    DeliverBy:"Delivery by 21 Mar, Monday",
    Change:"40",
    Replacement:"10 Days Return Policy",
    ProductDetails : [
                   {type:"Water Resistant",value:"Yes"},
                   {type:"Display Type",value:"Analog"},
                   {type:"Style Code",value:"WRG00066B"},
                   {type:"Occasion",value:"Casual"},
                   {type:"Watch Type",value:"Wrist Watch"},
                   {type:"Pack of",value:"1"},
                   {type:"Mechanism",value:"Quartz"},
                   {type:"Strap Color",value:"Blue"},
                   
                  ],
    SmallImages:["https://rukminim1.flixcart.com/image/128/128/kmp7ngw0/watch/t/n/u/wrg00066b-wrogn-original-imagfjkr4bwb2gzz.jpeg?q=70",
                 "https://rukminim1.flixcart.com/image/128/128/kmp7ngw0/watch/m/l/s/wrg00066b-wrogn-original-imagfjkrshze4czn.jpeg?q=70",
                 "https://rukminim1.flixcart.com/image/128/128/kmp7ngw0/watch/g/1/d/wrg00066b-wrogn-original-imagfjkrrfxbrtzg.jpeg?q=70"],
    RatingReviewData :[

        {title:"It's good",
        rating:"4",
        desc:"It was like just wow....value for money , that build quality colour design look , liked it.",
        images:["https://rukminim1.flixcart.com/blobio/140/140/imr-202110/blobio-imr-202110_05fe5b813863494192f786d24eccac56.jpg?q=90",
                "https://rukminim1.flixcart.com/blobio/124/124/imr-202105/blobio-imr-202105_be67e583b96c4d01976e375f17d7e515.jpg?q=90"]
        },
        {title:"looks nice",
        rating:"5",
        desc:"it's look is just wow....its colour is very much attractive and best fit on wrist .....👌👌👌",
         images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202105/blobio-imr-202105_bebfbcd89d7e4bd8bc17e6e7f96196f2.jpg?q=90"]
        }
       ],
    },
    {
      _id: uuid(),
      categoryName: "Top Offer",
      quntity:"1",
      title: "Women Tan Tote - Mini bag for woman (Special PriceGet extra 30% off of this brand)",
      costprice:"4,099",
      saleingprice: "798",
      extraOff : "200",
      percentOff:"82", 
      Coupon : "Special PriceGet extra 30% off upto ₹200 on 2 item(s) (price inclusive of discount)",
      Rating:"4.1",
      Reviews:"5",
      Status :"Available",
      Size:[],
      Image:"https://rukminim2.flixcart.com/image/714/857/ktlu9ow0/hand-messenger-bag/j/8/y/paris-teparmdetan-tote-caprese-original-imag6wnsjen4k2pg.jpeg?q=50",
      Availableoffers : [
                        "Special PriceGet extra 26% off (price inclusive of discount)",
                        "Combo OfferBuy 2 items save 5%;Buy 3 or more save 10%",
                        "Bank Offer10% off on SBI Credit Card, up to ₹1250. On orders of ₹5000 and above",
                        "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                        "Bank OfferGet Extra 10%Off Upto ₹1500 On Watches",
                        "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                        "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                        "No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999",
                         "Bank OfferGet Extra 10%Off Upto ₹1500 On Watches"
                        ],
    DeliverBy:"Delivery by 20 Mar, Sunday",
    Change:"40",
    Replacement:"14 Days Return Policy",
    ProductDetails : [
                   {type:"Model Name",value:"PARIS"},
                   {type:"Bag Size",value:"Mini"},
                   {type:"Material",value:"Leatherette"},
                   {type:"Width",value:"9.7 cm"},
                   {type:"Height",value:"23.4 cm"},
                   {type:"Closure",value:"Zip"},
                   {type:"Other Features",value:"hand bags women style,ladies purse,ladies bag,purse for women hand bag party wear,purse,bag for women style,bags for girls,hand bag,hand bags,handbags for girls and ladies stylish"},
                   {type:"Strap Color",value:"Tan"},
                   
                  ],
    SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/ktlu9ow0/hand-messenger-bag/j/8/y/paris-teparmdetan-tote-caprese-original-imag6wnsjen4k2pg.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/ktlu9ow0/hand-messenger-bag/n/4/j/paris-teparmdetan-tote-caprese-original-imag6wnsrrk2yzje.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kzvlua80/hand-messenger-bag/o/x/0/-original-imagbscd8dyn7fqq.jpeg?q=70"
    ],
    RatingReviewData :[

        {title:"Worst bag",
        rating:"1",
        desc:"Worst bag",
        images:[]
        },
        {title:"looks nice",
        rating:"5",
        desc:"This Brand has a different Class",
         images:[]
        }
       ],
    },
    {
      _id: uuid(),
      categoryName: "Top Offer",
      quntity:"1",
      title: "Girls Below Knee Casual Dress  (Pink, Short Sleeve) (discount - Get extra 30% off)",
      costprice:"1,299",
      saleingprice: "262",
      extraOff : "100",
      percentOff:"79", 
      Coupon : "Special PriceGet extra 30% off upto ₹50 on 1 item(s) ",
      Rating:"4.4",
      Reviews:"50",
      Status :"Available",
      Image:"https://rukminim2.flixcart.com/image/880/1056/kyxb9u80/kids-dress/k/7/y/6-7-years-shorts-02aa-lariab-fashion-original-imagb2ygywqkhdkm.jpeg?q=50",
      Availableoffers : [
                        "Special PriceGet extra 26% off (price inclusive of discount)",
                        "Combo OfferBuy 2 items save 5%;Buy 3 or more save 10%",
                        "Bank Offer10% off on SBI Credit Card, up to ₹1250. On orders of ₹5000 and above",
                        "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                        "Bank OfferGet Extra 10%Off Upto ₹1500 On Watches",
                        "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                        "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                        "No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999",
                         "Bank OfferGet Extra 10%Off Upto ₹1500 On Watches"
                        ],
    DeliverBy:"Delivery by 20 Mar, Sunday",
    Change:"40",
    Replacement:"14 Days Return Policy",
    Size:["2-3 year","3-4 year","4-5 year","5-6 year","6-7 year","7-8 year","8-9 year","10 year"],
    ProductDetails : [
                   {type:"Brand",value:"Laraib Fashion"},
                   {type:"Style Code",value:"SHORTS 01LF"},
                   {type:"Brand Color",value:"PINK"},
                   {type:"Size",value:"3 - 4 Years"},
                   {type:"Type",value:"Fit and Flare Dress"},
                   {type:"Occasion",value:"Casual"},
                   {type:"Ideal For",value:"Girls"},
                   {type:"Primary Color",value:"Pink"},
                   
                  ],
    SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/kyxb9u80/kids-dress/k/7/y/6-7-years-shorts-02aa-lariab-fashion-original-imagb2ygywqkhdkm.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kyxb9u80/kids-dress/g/e/w/6-7-years-shorts-02aa-lariab-fashion-original-imagb2ygt6de5mxf.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kyxb9u80/kids-dress/b/5/g/6-7-years-shorts-02aa-lariab-fashion-original-imagb2yg7ggfpp4j.jpeg?q=70"
    ],
    RatingReviewData :[

        {title:"Very nice color",
        rating:"5",
        desc:"Highly reccomended.. Nz cloth&correct in size",
        images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202202/blobio-imr-202202_09c36aa658f84492883d31026fc866f2.jpg?q=90"]
        },
        {title:"looks nice",
        rating:"5",
        desc:"Super 👌 dress in this price. The material is soft but not cotton. Same as this picture",
         images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202202/blobio-imr-202202_3f83cacbed824438aea9a7100bd14e6d.jpg?q=90"]
        }
       ],
    },
    {
      _id: uuid(),
      categoryName: "Top Offer",
      quntity:"1",
      title: "Men Casual Blue Genuine Leather Wallet - Mini  (5 Card Slots) - Offer For today",
      costprice:"1,399",
      saleingprice: "573",
      extraOff : "100",
      percentOff:"79", 
      Coupon : "Special PriceGet extra 30% off upto ₹50 on 1 item(s) ",
      Rating:"3.9",
      Reviews:"875",
      Status :"Available",
      Size:[],
      Image:"https://rukminim2.flixcart.com/image/880/1056/kq8dua80/wallet-card-wallet/r/1/z/gift-set-for-all-occasion4-gift4-wallet-wildhorn-original-imag4abternrmqsa.jpeg?q=50",
      Availableoffers : [
                        "Special PriceGet extra 26% off (price inclusive of discount)",
                        "Combo OfferBuy 2 items save 5%;Buy 3 or more save 10%",
                        "Bank Offer10% off on SBI Credit Card, up to ₹1250. On orders of ₹5000 and above",
                        "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                        "Bank OfferGet Extra 10%Off Upto ₹1500 On Watches",
                        "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                        "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                        "No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999",
                         "Bank OfferGet Extra 10%Off Upto ₹1500 On Watches"
                        ],
    DeliverBy:"Delivery by 21 Mar, Monday",
    Change:"40",
    Replacement:"14 Days Return Policy",
    ProductDetails : [
                   {type:"Model Name",value:"Gift Set for all Occasion4"},
                   {type:"Bag Size",value:"Mini"},
                   {type:"Sales Package",value:"1 Leather Wallet"},
                   {type:"Other Body Features",value:"leather with nice and smooth texture, really soft to touch., : It is a decent basic wallet with vintage style., Without bulky, it slides into your pocket effortlessly and fits comfortably., ï This Classic wallet will show your style every time you pull it out., ï 100% customer satisfaction."},
                   {type:"Other Features",value:"Genuine Leather, 2 Cash compartment, 6 Credit Card Slot, 2 Slip Pocket, 1 Coin Pocket, Comes with Gift Box."},
                   {type:"Number of Card Slots",value:"5"},
                  ],
    SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/kq8dua80/wallet-card-wallet/r/1/z/gift-set-for-all-occasion4-gift4-wallet-wildhorn-original-imag4abternrmqsa.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kq8dua80/wallet-card-wallet/w/b/e/gift-set-for-all-occasion5-gift5-wallet-wildhorn-original-imag4a9kzqaybyhg.jpeg?q=70"
    ],
    RatingReviewData :[

        {title:"Very nice color",
        rating:"5",
        desc:"Good Product. Especially for giving gift and all. Nice wallet ,Key chain and pen. Good combo product.",
        images:["https://rukminim1.flixcart.com/blobio/140/140/imr-202102/blobio-imr-202102_66ef43a128b44aff88cb5947b0cce12a.jpg?q=90"]
        },
        {title:"looks nice",
        rating:"5",
        desc:"It is very good and the quality is also good 😊",
         images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202003/blobio-imr-202003_2188663b585341b6a1e2811263a5c7dd.jpg?q=90"]
        }
       ],
    },
    {
      _id: uuid(),
      categoryName: "Top Offer",
      quntity:"1",
      title: "Alloy, Silk Dori Gold-plated Jewel Set  (Gold, Silver) - Toriox brand - jwellery for girls ",
      costprice:"1,599",
      saleingprice: "139",
      extraOff : "50",
      percentOff:"91", 
      Coupon : "Special PriceGet extra 30% off upto ₹50 on 1 item(s) ",
      Rating:"2.5",
      Reviews:"0",
      Status :"Available",
      Size:[],
      Image:"https://rukminim2.flixcart.com/image/880/1056/kzx1a4w0/jewellery-set/s/n/w/na-na-oxidised-round-meena-choker-with-black-bahubali-earrings-original-imagbtd6wcfvcvqr.jpeg?q=50",
      Availableoffers : [
                        "Special PriceGet extra 26% off (price inclusive of discount)",
                        "Combo OfferBuy 2 items save 5%;Buy 3 or more save 10%",
                        "Bank Offer10% off on SBI Credit Card, up to ₹1250. On orders of ₹5000 and above",
                        "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                        "Bank OfferGet Extra 10%Off Upto ₹1500 On Watches",
                        "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                        "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                        "No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999",
                         "Bank OfferGet Extra 10%Off Upto ₹1500 On Watches"
                        ],
    DeliverBy:"Delivery by 21 Mar, Monday",
    Change:"80",
    Replacement:"No Return Policy",
    ProductDetails : [
                   {type:"Model Number",value:"Oxidised Round Meena Choker With Black Bahubali Earrings Combo"},
                   {type:"Base Material",value:"Alloy, Silk Dori"},
                   {type:"Color",value:"Gold, Silver"},
                   {type:"Type",value:"Earring & Necklace Set"},
                   {type:"Ideal For",value:"Women, Girls"},
                   {type:"Plating",value:"Gold-plated"},
                   {type:"Gemstone",value:"Crystal"},
                   {type:"Sales Package",value:"women alloy gold plated jewellery set, jwellery for girls neckless chain set combo, Jewellery Set, jewellery for girls necklace bridal set golden, jewellery"},
                  ],
    SmallImages:["https://rukminim2.flixcart.com/image/880/1056/kzx1a4w0/jewellery-set/s/n/w/na-na-oxidised-round-meena-choker-with-black-bahubali-earrings-original-imagbtd6wcfvcvqr.jpeg?q=50"],
    RatingReviewData :[],
    },
    ///////grosary
    {
      _id: uuid(),
      categoryName: "Grocery",
      quntity:"1",
      title: "Pillsbury Chakki Fresh Atta  (10 kg) ",
      costprice:"412",
      saleingprice: "385",
      extraOff : "10",
      percentOff:"6", 
      Coupon : "Buy More, Save MoreBuy worth ₹2-1000 save 10%;Buy worth ₹1001 save ₹100",
      Rating:"4.3",
      Status :"Available",
      SizePerKg : "38.5/kg",
      Quantity : ["500kg","1kg","2kg","5kg","10kg"],
      ExpiryDate : "Expiry Date 31 May 2022",
      ManufacturedDate :"Manufactured date 03 Mar 2022",
      Image:"https://rukminim2.flixcart.com/image/416/416/kohigsw0/flour/j/f/a/chakki-fresh-atta-whole-wheat-flour-pillsbury-original-imag2xggzcbnrchc.jpeg?q=70",
      Availableoffers : [
                        "Partner OfferNo min Order, Lowest Prices!",
                        "Bank Offer10% Instant Discount on IndusInd Bank Credit and Debit Cards",
                        "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                        "Unlock additional steal deals on orders above ₹800"
                        ],
    DeliverBy:"Delivery by23 Mar, Wednesday",
    Change:"75",
    Services:"Cash on Delivery available",
    Replacement:"No Return Policy for grossary",
    Brand:"Pillsbury",
    Type:"Whole-Wheat Flour",
    ProductDetails : [
                   {type:"In The Box Pack of",value:"1"},
                   {type:"Brand",value:"Pillsbury"},
                   {type:"Type",value:"Whole-Wheat Flour"},
                   {type:"Quantity",value:"10 kg"},
                   {type:"Maximum Shelf Life",value:"3 Months"},
                   {type:"Is Perishable",value:"No"},
                   {type:"Organic",value:"No"},
                   {type:"Used For",value:"Cooking"},
                   {type:"Model Name",value:"Chakki Fresh Atta"},
                   {type:"Nutrient Content",value:"NA"},
                    ],
    SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/kohigsw0/flour/r/7/h/chakki-fresh-atta-whole-wheat-flour-pillsbury-original-imag2xggggggd2r3.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kohigsw0/flour/x/u/n/chakki-fresh-atta-whole-wheat-flour-pillsbury-original-imag2xggzvwn64hd.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kohigsw0/flour/d/2/b/chakki-fresh-atta-whole-wheat-flour-pillsbury-original-imag2xgg6wcjwhwk.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kohigsw0/flour/j/c/u/chakki-fresh-atta-whole-wheat-flour-pillsbury-original-imag2xgg6zyjzhvs.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kohigsw0/flour/t/e/0/chakki-fresh-atta-whole-wheat-flour-pillsbury-original-imag2xgghzzd9cgp.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kohigsw0/flour/b/i/s/chakki-fresh-atta-whole-wheat-flour-pillsbury-original-imag2xggdynyvysk.jpeg?q=70",
  ],

  },
  {
    _id: uuid(),
    categoryName: "Grocery",
    quntity:"1",
    title: "Tata Iodized Salt  (1 kg) ",
    costprice:"24",
    saleingprice: "22",
    extraOff : "0",
    percentOff:"8", 
    Coupon : "Buy More, Save MoreBuy worth ₹2-1000 save 10%;Buy worth ₹1001 save ₹100",
    Rating:"4.6",
    Status :"Available",
    SizePerKg : "22/kg",
    Quantity : ["1kg"],
    ExpiryDate : "Expiry Date 21 Jan 2024",
    ManufacturedDate :"Manufactured date 01 Feb 2022",
    Image:"https://rukminim2.flixcart.com/image/416/416/kuof5ow0/salt/b/w/a/na-iodized-salt-tata-original-imag7qyapwcyntsj.jpeg?q=70",
    Availableoffers : [
                      "Partner OfferNo min Order, Lowest Prices!",
                      "Bank Offer10% Instant Discount on IndusInd Bank Credit and Debit Cards",
                      "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                      "Unlock additional steal deals on orders above ₹800"
                      ],
  DeliverBy:"Delivery by23 Mar, Wednesday",
  Change:"75",
  Services:"Cash on Delivery available",
  Replacement:"No Return Policy for grossary",
  Brand:"Tata",
  Type:"Iodized Salt",
  ProductDetails : [
                    {type:"In The Box Pack of",value:"1"},
                    {type:"Brand",value:"Tata"},
                    {type:"Type",value:"Iodized Salt"},
                    {type:"Quantity",value:"1 kg"},
                    {type:"Maximum Shelf Life",value:"24 Months"},
                    {type:"Organic",value:"No"},
                    {type:"Used For",value:"Cooking"},
                    {type:"Nutrient Content",value:"NA"},
                  ],
  SmallImages:[
    "https://rukminim1.flixcart.com/image/128/128/kuof5ow0/salt/g/a/j/na-iodized-salt-tata-original-imag7qyaygy3g4tp.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/kuof5ow0/salt/6/7/r/na-iodized-salt-tata-original-imag7qya46ehjhyj.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/kuof5ow0/salt/l/e/j/na-iodized-salt-tata-original-imag7qyaykgqhzen.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/kuof5ow0/salt/y/u/w/na-iodized-salt-tata-original-imag7qyayfty59zv.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/kuof5ow0/salt/y/a/r/na-iodized-salt-tata-original-imag7qya8zdgr8ks.jpeg?q=70",
],

},

{
  _id: uuid(),
  categoryName: "Grocery",
  quntity:"1",
  title: "Molsi's Nuts Tiny Delight Cashews  (500 g) ",
  costprice:"500",
  saleingprice: "389",
  extraOff : "10",
  percentOff:"22", 
  Coupon : "Buy More, Save MoreBuy worth ₹2-1000 save 10%;Buy worth ₹1001 save ₹100",
  Rating:"4.3",
  Status :"Available",
  SizePerKg : "194.5/250g",
  Quantity : ["500kg"],
  ExpiryDate : "Expiry Date 29 Jun 2022",
  ManufacturedDate :"Manufactured date 01 Jan 2022",
  Image:"https://rukminim2.flixcart.com/image/416/416/krdtlzk0/nut-dry-fruit/a/j/a/na-pouch-molsi-s-original-imag56t9ejufasfz.jpeg?q=70",
  Availableoffers : [
                    "Partner OfferNo min Order, Lowest Prices!",
                    "Bank Offer10% Instant Discount on IndusInd Bank Credit and Debit Cards",
                    "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                    "Unlock additional steal deals on orders above ₹800"
                    ],
DeliverBy:"Delivery by23 Mar, Wednesday",
Change:"75",
Services:"Cash on Delivery available",
Replacement:"No Return Policy for grossary",
Brand:"Molsi's",
Type:"Cashews",
ProductDetails : [
               {type:"In The Box Pack of",value:"1"},
               {type:"Brand",value:"Molsi's"},
               {type:"Type",value:"Cashews"},
               {type:"Quantity",value:"500g"},
               {type:"Maximum Shelf Life",value:"6 Months"},
               {type:"Is Perishable",value:"No"},
               {type:"Combo",value:"No"},
               {type:"Added Preservatives",value:"No"},
               {type:"Gift Pack",value:"No"},
               {type:"Model Name",value:"Nuts Tiny Delight"},
               {type:"Nutrient Content",value:"NA"},
                ],
SmallImages:[
  "https://rukminim1.flixcart.com/image/128/128/krdtlzk0/nut-dry-fruit/a/j/a/na-pouch-molsi-s-original-imag56t9ejufasfz.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/krdtlzk0/nut-dry-fruit/g/h/w/na-pouch-molsi-s-original-imag56t97xtwrbqg.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/krdtlzk0/nut-dry-fruit/d/i/p/na-pouch-molsi-s-original-imag56t9faxpdbge.jpeg?q=70"
 ],
},

{
  _id: uuid(),
  categoryName: "Grocery",
  quntity:"1",
  title: "Colgate Strong Teeth Anticavity Toothpaste, India's No. 1 Toothpaste, Amino Shakti Formula, Saver Pack Toothpaste  (600 g, Pack of 3) ",
  costprice:"222",
  saleingprice: "297",
  extraOff : "0",
  percentOff:"25", 
  Coupon : "Buy More, Save MoreBuy worth ₹2-1000 save 10%;Buy worth ₹1001 save ₹100",
  Rating:"4",
  Status :"Available",
  SizePerKg : "37/100g",
  Quantity : ["150g","200g","300g","600g"],
  ExpiryDate : "Expiry Date 29 Jun 2022",
  ManufacturedDate :"Manufactured date 01 Jan 2022",
  Image:"https://rukminim2.flixcart.com/image/416/416/kpu3frk0/toothpaste/j/b/i/1-strong-teeth-toothpaste-india-s-no-1-toothpaste-2x-stronger-original-imag3z3zehxtmvjg.jpeg?q=70",
  Availableoffers : [
                    "Partner OfferNo min Order, Lowest Prices!",
                    "Bank Offer10% Instant Discount on IndusInd Bank Credit and Debit Cards",
                    "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                    "Unlock additional steal deals on orders above ₹800"
                    ],
DeliverBy:"Delivery by23 Mar, Wednesday",
Change:"50",
Services:"Cash on Delivery available",
Replacement:"No Return Policy for grossary",
Brand:"Colgate",
Type:"Toothpaste",
ProductDetails : [
               {type:"In The Box Pack of",value:"1"},
               {type:"Brand",value:"Colgate"},
               {type:"Type",value:"Toothpaste"},
               {type:"Quantity",value:"600g"},
               {type:"Minimum Age",value:"5 Years"},
               {type:"Maximum Age",value:"80 Years"},
               {type:"Ideal For",value:"Adults"},
               {type:"Ingredient Type",value:"NA"},
               {type:"Pack of",value:"3"},
               {type:"Maximum Shelf Life",value:"23 Months"},
               {type:"Model Name",value:"Strong Teeth Anticavity Toothpaste, India's No. 1 Toothpaste, Amino Shakti Formula, Saver Pack"},
               {type:"Nutrient Content",value:"NA"},
                ],
SmallImages:[
  "https://rukminim1.flixcart.com/image/128/128/kpu3frk0/toothpaste/j/b/i/1-strong-teeth-toothpaste-india-s-no-1-toothpaste-2x-stronger-original-imag3z3zehxtmvjg.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/kpu3frk0/toothpaste/i/g/b/1-strong-teeth-toothpaste-india-s-no-1-toothpaste-2x-stronger-original-imag3z5nqskxejhh.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/kpu3frk0/toothpaste/7/h/3/1-strong-teeth-toothpaste-india-s-no-1-toothpaste-2x-stronger-original-imag3z3zurghmsh8.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/kpu3frk0/toothpaste/m/f/d/1-strong-teeth-toothpaste-india-s-no-1-toothpaste-2x-stronger-original-imag3z3zjzkwmwpk.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/kpu3frk0/toothpaste/c/2/1/1-strong-teeth-toothpaste-india-s-no-1-toothpaste-2x-stronger-original-imag3z3zg3dsggyu.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/kpu3frk0/toothpaste/s/w/b/1-strong-teeth-toothpaste-india-s-no-1-toothpaste-2x-stronger-original-imag3z3zfnyb6cxp.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/kupuljk0/toothpaste/e/a/d/strong-teeth-anticavity-toothpaste-india-s-no-1-toothpaste-amino-original-imag7sykyvykgrhj.jpeg?q=70"
 ],
},
{
  _id: uuid(),
  categoryName: "Grocery",
  quntity:"1",
  title: "Real Masala Pomegranate  (1 L)",
  costprice:"120",
  saleingprice: "60",
  extraOff : "0",
  percentOff:"50", 
  Coupon : "Buy More, Save MoreBuy worth ₹2-1000 save 10%;Buy worth ₹1001 save ₹100",
  Rating:"4.2",
  Status :"Available",
  SizePerKg : "60/L",
  Quantity : ["1L"],
  ExpiryDate : "Expiry Date 04 Jun 2022",
  ManufacturedDate :"Manufactured date 07 Dec 2021",
  Image:"https://rukminim2.flixcart.com/image/416/416/jievpu80/drinks-juice/5/6/p/1-masala-pomegranate-tetrapack-real-original-imaf67smhxehfetz.jpeg?q=70",
  Availableoffers : [
                    "Partner OfferNo min Order, Lowest Prices!",
                    "Bank Offer10% Instant Discount on IndusInd Bank Credit and Debit Cards",
                    "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                    "Unlock additional steal deals on orders above ₹800"
                    ],
DeliverBy:"Delivery by 23 Mar, Wednesday",
Change:"50",
Services:"Cash on Delivery available",
Replacement:"No Return Policy for grossary",
Brand:"Real",
Type:"Fruit",
ProductDetails : [
                  {type:"In The Box Pack of",value:"1"},
                  {type:"Brand",value:"Real"},
                  {type:"Model Name",value:"Masala Pomegranate"},
                  {type:"Quantity",value:"1L"},
                  {type:"Type",value:"Fruit"},
                  {type:"Flavor For Refiner",value:"Pomegranate"},
                  {type:"Container Type",value:"Tetrapack"},
                  {type:"Maximum Shelf Life",value:"6 Months"},
                  {type:"Organic",value:"No"},
                  {type:"Added Preservatives",value:"No"},
                  {type:"Alcoholic Content",value:"No"},
                  {type:"Ingredients",value:"Water, Pomegranate Pulp, Sugar, Salts, Acidity Regulator, Stabilizer, Antioxidant, Spice and Spice Extracts."},
                  {type:"Nutrient Content",value:"NA"},
                ],
SmallImages:[
  "https://rukminim1.flixcart.com/image/128/128/jievpu80/drinks-juice/5/6/p/1-masala-pomegranate-tetrapack-real-original-imaf67smhxehfetz.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/jievpu80/drinks-juice/5/6/p/1-masala-pomegranate-tetrapack-real-original-imaf67smzszr8wj2.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/jievpu80/drinks-juice/5/6/p/1-masala-pomegranate-tetrapack-real-original-imaf67smt9hyktm4.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/jievpu80/drinks-juice/5/6/p/1-masala-pomegranate-tetrapack-real-original-imaf67smr94jnhvu.jpeg?q=70"
    ],
},
{
  _id: uuid(),
  categoryName: "Grocery",
  quntity:"1",
  title: "Dukes Kaju Kukkies Cookies  (400 g)",
  costprice:"120",
  saleingprice: "60",
  extraOff : "0",
  percentOff:"50", 
  Coupon : "Buy More, Save MoreBuy worth ₹2-1000 save 10%;Buy worth ₹1001 save ₹100",
  Rating:"4.1",
  Status :"Available",
  SizePerKg : "37.5/250g",
  Quantity : ["37.5/250g"],
  ExpiryDate : "Expiry Date 19 Nov 2022",
  ManufacturedDate :"Manufactured date 23 Feb 2022",
  Image:"https://rukminim2.flixcart.com/image/416/416/kobspe80/cookie-biscuit/d/d/p/kaju-kukkies-dukes-original-imag2thhbvzyfrpm.jpeg?q=70",
  Availableoffers : [
                    "Partner OfferNo min Order, Lowest Prices!",
                    "Bank Offer10% Instant Discount on IndusInd Bank Credit and Debit Cards",
                    "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                    "Unlock additional steal deals on orders above ₹800"
                    ],
DeliverBy:"Delivery by 23 Mar, Wednesday",
Change:"50",
Services:"Cash on Delivery available",
Replacement:"No Return Policy for grossary",
Brand:"Dukes",
Type:"Cookies",
ProductDetails : [
                  {type:"In The Box Pack of",value:"1"},
                  {type:"Brand",value:"Dukes"},
                  {type:"Model Name",value:"Kaju Kukkies"},
                  {type:"Quantity",value:"400 g"},
                  {type:"Type",value:"Cookies"},
                  {type:"Base Flavors",value:"Cashew"},
                  {type:"Organic",value:"No"},
                  {type:"Food Preference",value:"Vegetarian"},
                  {type:"Container Type",value:"Pouch"},
                  {type:"Maximum Shelf Life",value:"9 Months"},
                  {type:"nutrient Content",value:"NA"},
                ],
SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/kobspe80/cookie-biscuit/d/d/p/kaju-kukkies-dukes-original-imag2thhbvzyfrpm.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kobspe80/cookie-biscuit/6/i/j/kaju-kukkies-dukes-original-imag2thhavzutqjx.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kobspe80/cookie-biscuit/m/l/h/kaju-kukkies-dukes-original-imag2thhdgymdhvw.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kobspe80/cookie-biscuit/i/j/1/kaju-kukkies-dukes-original-imag2thhzknw6dhn.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kobspe80/cookie-biscuit/k/w/q/kaju-kukkies-dukes-original-imag2thhw5xyz62n.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kobspe80/cookie-biscuit/q/q/g/kaju-kukkies-dukes-original-imag2thhvz2ft4y8.jpeg?q=70"
    ],
},
{
  _id: uuid(),
  categoryName: "Grocery",
  quntity:"1",
  title: "Morelight Extra Power Detergent Powder 4 kg",
  costprice:"410",
  saleingprice: "205",
  extraOff : "0",
  percentOff:"50", 
  Coupon : "Buy More, Save MoreBuy worth ₹2-1000 save 10%;Buy worth ₹1001 save ₹100",
  Rating:"4.1",
  Status :"Available",
  SizePerKg : "51.25/kg",
  Quantity : ["51.25/kg"],
  ExpiryDate : "",
  ManufacturedDate :"",
  Image:"https://rukminim2.flixcart.com/image/416/416/kiqbma80/washing-powder/d/d/z/4-extra-power-morelight-original-imafygf2b72tt9vn.jpeg?q=70",
  Availableoffers : [
                    "Partner OfferNo min Order, Lowest Prices!",
                    "Bank Offer10% Instant Discount on IndusInd Bank Credit and Debit Cards",
                    "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                    "Unlock additional steal deals on orders above ₹800"
                    ],
DeliverBy:"Delivery by 23 Mar, Wednesday",
Change:"50",
Services:"Cash on Delivery available",
Replacement:"No Return Policy for grossary",
Brand:"Morelight",
Type:"Machine Wash Detergent, Hand Wash Detergent",
ProductDetails : [
                  {type:"In The Box Pack of",value:"1"},
                  {type:"Brand",value:"Morelight"},
                  {type:"Model Name",value:"Extra Power"},
                  {type:"Quantity",value:"4 kg"},
                  {type:"Type",value:"Machine Wash Detergent, Hand Wash Detergent"},
                ],
SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/kiqbma80/washing-powder/d/d/z/4-extra-power-morelight-original-imafygf2b72tt9vn.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kiqbma80/washing-powder/d/d/z/4-extra-power-morelight-original-imafygf2sbeh7up9.jpeg?q=70"
    ],
},
{
  _id: uuid(),
  categoryName: "Grocery",
  quntity:"1",
  title: "Dukes Eclairs Chocolate Candy  (2 x 220 g)",
  costprice:"160",
  saleingprice: "80",
  extraOff : "0",
  percentOff:"50", 
  Coupon : "Buy More, Save MoreBuy worth ₹2-1000 save 10%;Buy worth ₹1001 save ₹100",
  Rating:"4.1",
  Status :"Available",
  SizePerKg : "18.182/100g",
  Quantity : ["2*200g"],
  ExpiryDate : "Expiry Date 07 Dec 2022",
  ManufacturedDate :"Manufactured date 13 Dec 2021",
  Image:"https://rukminim2.flixcart.com/image/416/416/ktx9si80/candy-mouth-freshener/d/q/p/eclairs-dukes-original-imag7569aeaugfxq.jpeg?q=70",
  Availableoffers : [
                    "Partner OfferNo min Order, Lowest Prices!",
                    "Bank Offer10% Instant Discount on IndusInd Bank Credit and Debit Cards",
                    "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                    "Unlock additional steal deals on orders above ₹800"
                    ],
DeliverBy:"Delivery by 23 Mar, Wednesday",
Change:"50",
Services:"Cash on Delivery available",
Replacement:"No Return Policy for grossary",
Brand:"Dukes",
Type:"Candy",
ProductDetails : [
                  {type:"In The Box Pack of",value:"2"},
                  {type:"Brand",value:"Dukes"},
                  {type:"Model Name",value:"Eclairs"},
                  {type:"Quantity",value:"440g"},
                  {type:"Flavor",value:"Chocolate"},
                  {type:"Type",value:"Candy"},
                  {type:"Maximum Shelf Life",value:"12 Months"},
                  {type:"Food Preference",value:"Vegetarian"},
                  {type:"Ingredients",value:"NA"},
                  {type:"Nutrient Content",value:"NA"},
                ],
SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/ktx9si80/candy-mouth-freshener/d/q/p/eclairs-dukes-original-imag7569aeaugfxq.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/ktx9si80/candy-mouth-freshener/f/h/h/eclairs-dukes-original-imag75699rbtvvuz.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/ktx9si80/candy-mouth-freshener/j/z/n/eclairs-dukes-original-imag7569ns6vg2uj.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/ktx9si80/candy-mouth-freshener/y/i/k/eclairs-dukes-original-imag7569bmvymc3g.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/ktx9si80/candy-mouth-freshener/z/2/j/eclairs-dukes-original-imag7569ds5kyy7m.jpeg?q=70",
      
    ],
},
{
  _id: uuid(),
  categoryName: "Grocery",
  quntity:"1",
  title: "Dukes Waffy Choco Wafer Rolls  (250 g)",
  costprice:"150",
  saleingprice: "75",
  extraOff : "0",
  percentOff:"50", 
  Coupon : "Buy More, Save MoreBuy worth ₹2-1000 save 10%;Buy worth ₹1001 save ₹100",
  Rating:"4.1",
  Status :"Available",
  SizePerKg : "30/100g",
  Quantity : ["250g"],
  ExpiryDate : "Expiry Date 15 Oct 2022",
  ManufacturedDate :"Manufactured date 19 Jan 2022",
  Image:"https://rukminim2.flixcart.com/image/416/416/jic0u4w0/wafer-waffle/u/8/9/250-choco-wafer-rolls-dukes-original-imaf65nq96nhgrzk.jpeg?q=70",
  Availableoffers : [
                    "Partner OfferNo min Order, Lowest Prices!",
                    "Bank Offer10% Instant Discount on IndusInd Bank Credit and Debit Cards",
                    "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                    "Unlock additional steal deals on orders above ₹800"
                    ],
DeliverBy:"Delivery by 23 Mar, Wednesday",
Change:"50",
Services:"Cash on Delivery available",
Replacement:"No Return Policy for grossary",
Brand:"Dukes",
Type:"Wafer Rolls",
ProductDetails : [
                  {type:"In The Box Pack of",value:"1"},
                  {type:"Brand",value:"Dukes"},
                  {type:"Model Name",value:"Waffy Choco"},
                  {type:"Type",value:"Wafer Rolls"},
                  {type:"Quantity",value:"250 g"},
                  {type:"Container Type",value:"Plastic Bottle"},
                  {type:"Flavor",value:"Chocolate"},
                  {type:"Food Preference",value:"Vegetarian"},
                  {type:"Maximum Shelf Life",value:"9 Months"},
                  {type:"Organic",value:"No"},
                  {type:"Ingredients",value:"NA"},
                  {type:"Nutrient Content",value:"NA"},
                ],
SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/jic0u4w0/wafer-waffle/u/8/9/250-choco-wafer-rolls-dukes-original-imaf65nq96nhgrzk.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/jic0u4w0/wafer-waffle/u/8/9/250-choco-wafer-rolls-dukes-original-imaf65nq5a6ewh2z.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/jic0u4w0/wafer-waffle/u/8/9/250-choco-wafer-rolls-dukes-original-imaf65nqfpaz7z3a.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/jic0u4w0/wafer-waffle/u/8/9/250-choco-wafer-rolls-dukes-original-imaf65nqf83dwgut.jpeg?q=70"
    ],
},
{
  _id: uuid(),
  categoryName: "Grocery",
  quntity:"1",
  title: "SET WET Cool, Charm and Swag Avatar Deodorant Spray - For Men  (450 ml, Pack of 3)",
  costprice:"298",
  saleingprice: "597",
  extraOff : "0",
  percentOff:"50", 
  Coupon : "Buy More, Save MoreBuy worth ₹2-1000 save 10%;Buy worth ₹1001 save ₹100",
  Rating:"4.1",
  Status :"Available",
  SizePerKg : "66.222/100ml",
  Quantity : ["3*150ml"],
  ExpiryDate : "Expiry Date 16 Oct 2024",
  ManufacturedDate :"Manufactured date 01 Jan 2022",
  Image:"https://rukminim2.flixcart.com/image/416/416/kxp0mfk0/deodorant/k/y/8/-original-imaga36aktvbsxmx.jpeg?q=70",
  Availableoffers : [
                    "Partner OfferNo min Order, Lowest Prices!",
                    "Bank Offer10% Instant Discount on IndusInd Bank Credit and Debit Cards",
                    "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                    "Unlock additional steal deals on orders above ₹800"
                    ],
DeliverBy:"Delivery by 23 Mar, Wednesday",
Change:"50",
Services:"Cash on Delivery available",
Replacement:"No Return Policy for grossary",
Brand:"SET WET",
Type:"Deodorant Spray",
ProductDetails : [
                  {type:"In The Box Pack of",value:"3"},
                  {type:"Brand",value:"SET WET"},
                  {type:"Model Name",value:"Cool, Charm and Swag Avatar"},
                  {type:"Ideal For",value:"Men"},
                  {type:"Type",value:"Deodorant Spray"},
                  {type:"Quantity",value:"450 ml"},
                  {type:"Maximum Shelf Life",value:"34 Months"},
                ],
SmallImages:[
     "https://rukminim1.flixcart.com/image/128/128/kxp0mfk0/deodorant/t/r/3/-original-imaga36afzbpamcw.jpeg?q=70",
     "https://rukminim1.flixcart.com/image/128/128/kxp0mfk0/deodorant/r/e/6/-original-imaga369jhwbsh9z.jpeg?q=70",
     "https://rukminim1.flixcart.com/image/128/128/kxp0mfk0/deodorant/s/3/j/-original-imaga369hscgmgqu.jpeg?q=70"
    ],
},
 //---fasion
 {
  _id: uuid(),
  categoryName: "Fashion",
  quntity:"1",
  title: "Casual Regular Sleeves Tie & Dye Women Multicolor Top",
  costprice:"1,199",
  saleingprice: "304",
  extraOff : "0",
  percentOff:"74", 
  Coupon : "Special PriceGet extra 30% off upto ₹75 on 1 item(s) (price inclusive of discount)",
  Rating:"4.1",
  Reviews:"1,935",
  Status :"Available",
  FashionType:"Top",
  Brand : "Selvia",
  Image:"https://rukminim2.flixcart.com/image/739/887/khcb7gw0/top/m/7/f/m-jb-tsh-td-babe-juneberry-original-imafxdfr9matwrbv.jpeg?q=50",
  Availableoffers : [
                     "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                     "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                     "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                    ],
DeliverBy:"Delivery by 24 Mar, Thursday",
Change:"40",
Services:"Cash on Delivery available",
Replacement:"14 Days Return Policy",
Color :"Multicolor",
Size:"M",
SizeList:["S","M","L","XL","XXL","3XL"],
ProductDetails : [
                  {type:"Neck",value:"Round Neck"},    
                  {type:"Sleeve Style",value:"Regular Sleeves"},  
                  {type:"Sleeve Length",value:"Half Sleeve"},  
                  {type:"Fit",value:"Regular"},  
                  {type:"Fabric",value:"Pure Cotton"},  
                  {type:"Type",value:"Regular Top"},  
                  {type:"Pattern",value:"Tie & Dye"},  
                  {type:"Color",value:"Multicolor"},     
                ],
SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/khcb7gw0/top/m/7/f/m-jb-tsh-td-babe-juneberry-original-imafxdfr9matwrbv.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/khcb7gw0/top/m/7/f/m-jb-tsh-td-babe-juneberry-original-imafxdfrhk9ykeaf.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/khcb7gw0/top/m/7/f/m-jb-tsh-td-babe-juneberry-original-imafxdfrytdpgztb.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/khcb7gw0/top/m/7/f/xxl-jb-tsh-td-babe-juneberry-original-imafxdfruhzfjzxm.jpeg?q=70",
    ],
RatingReviewData :[
      {title:"Excellent",
      rating:"4",
      desc:"It's really nice love it thank you felipkat",
      images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202102/blobio-imr-202102_9f6fb419146b4859bdeb93153e929f52.jpg?q=90"]
      },
      {title:"looks nice",
      rating:"5",
      desc:"Print is good but the quality of the product is little bit thin.👌👌👌",
       images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202103/blobio-imr-202103_365ffa8e59c0461a9229faa2e75a7479.jpg?q=90"]
      }
     ],
},
{
  _id: uuid(),
  categoryName: "Fashion",
  quntity:"1",
  title: "Casual Regular Sleeves Printed Women Red Top",
  costprice:"1,997",
  saleingprice: "284",
  extraOff : "0",
  percentOff:"85", 
  Coupon : "Special PriceGet extra 30% off upto ₹75 on 1 item(s) (price inclusive of discount)",
  Rating:"4.1",
  Reviews:"1,008",
  Status :"Available",
  FashionType:"Top",
  Brand : "Selvia",
  Image:"https://rukminim2.flixcart.com/image/880/1056/kkr72q80/top/h/p/1/l-112tkr2564-selvia-original-imagyffk8gvzbgu9.jpeg?q=50",
  Availableoffers : [
                     "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                     "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                     "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                    ],
DeliverBy:"Delivery by 24 Mar, Thursday",
Change:"40",
Services:"Cash on Delivery available",
Replacement:"14 Days Return Policy",
Color :"Red",
Size:"L",
SizeList:["S","M","L","XL","XXL","3XL"],
ProductDetails : [
                  {type:"Neck",value:"Round Neck"},    
                  {type:"Sleeve Style",value:"Regular Sleeves"},  
                  {type:"Sleeve Length",value:"3/4 Sleeve"},  
                  {type:"Fit",value:"Regular"},  
                  {type:"Fabric",value:"Net"},  
                  {type:"Type",value:"Ruffled Top"},  
                  {type:"Pattern",value:"Tie & Dye"},  
                  {type:"Color",value:"Red"},
                  {type:"Pattern",value:"Printed"}     
                ],
SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/kkr72q80/top/h/f/j/l-112tkr2564-selvia-original-imagyffkhukyetsp.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kkr72q80/top/7/0/l/l-112tkr2564-selvia-original-imagyffkymrqw7j2.jpeg?q=70"
    ],
    RatingReviewData :[
      {title:"Excellent",
      rating:"4",
      desc:"Superb dress,,,outstanding 😘😘",
      images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202102/blobio-imr-202102_7d694a0a56964fe0912c4a9efff4b568.jpg?q=90"]
      },
      {title:"looks nice",
      rating:"5",
      desc:"color is good but the quality of the product is little bit thin.👌👌👌",
       images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202105/blobio-imr-202105_011e28052147474fb8de7ac94c1ca56d.jpg?q=90"]
      }
     ],
},
{
  _id: uuid(),
  categoryName: "Fashion",
  quntity:"1",
  title: "Women Fit and Flare Yellow Dress",
  costprice:"1,799",
  saleingprice: "361",
  extraOff : "0",
  percentOff:"79", 
  Coupon : "Special PriceGet extra 30% off upto ₹75 on 1 item(s) (price inclusive of discount)",
  Rating:"2",
  Reviews:"4",
  Status :"Available",
  FashionType:"Fit and Flare",
  Brand : "Daevish",
  Image:"https://rukminim2.flixcart.com/image/880/1056/kwtkxow0/dress/g/a/o/m-dv349-daevish-original-imag9ep7pnfzf4tt.jpeg?q=50",
  Availableoffers : [
                     "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                     "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                     "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                    ],
DeliverBy:"Delivery in 6-8 days",
Change:"40",
Services:"Cash on Delivery available",
Replacement:"14 Days Return Policy",
Color :"Yellow",
Size:"XL",
SizeList:["S","M","L","XL","XXL","3XL"],
ProductDetails : [
                  {type:"Color",value:"Yellow"},    
                  {type:"Length",value:"Maxi/Full Length"}, 
                  {type:"Fabric",value:"Rayon"}, 
                  {type:"Pattern",value:"Argyle"}, 
                  {type:"Ideal For",value:"Women"}, 
                  {type:"Type",value:"Fit and Flare"}, 
                  {type:"Style Code",value:"DV349"}, 
                  {type:"Suitable For",value:"Western Wear"},
                  {type:"Sleeve Length",value:"Sleeveless"},  
                  {type:"Pack of",value:"1"},  
                  {type:"Neck",value:"Shoulder Straps"},  
                  {type:"Fabric Care",value:"Regular Machine Wash"},   
                  {type:"Sleeve",value:"No Sleeves"},                        
                ],
SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/kwtkxow0/dress/f/x/y/m-dv349-daevish-original-imag9ep7fybvdha3.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kwtkxow0/dress/d/9/4/m-dv349-daevish-original-imag9ep7szhvhrzd.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kwtkxow0/dress/g/a/o/m-dv349-daevish-original-imag9ep7pnfzf4tt.jpeg?q=70"
    ],
    RatingReviewData :[
      {title:"Good looking",
      rating:"2",
      desc:"Good",
      images:[]
      },
      {title:"looks nice",
      rating:"2",
      desc:"Very nice dress👌👌👌",
       images:[]
      }
     ],
},
{
  _id: uuid(),
  categoryName: "Fashion",
  quntity:"1",
  title: "Striped Men Polo Neck Blue T-Shirt",
  costprice:"1,299",
  saleingprice: "299",
  extraOff : "20",
  percentOff:"76", 
  Coupon : "Special PriceGet extra 30% off upto ₹75 on 1 item(s) (price inclusive of discount)",
  Rating:"3.5",
  Reviews:"59",
  Status :"Available",
  FashionType:"T-Shirt",
  Brand : "Eyebogler",
  Image:"https://rukminim2.flixcart.com/image/880/1056/kyeqjrk0/t-shirt/o/q/n/m-t414-as17ebmdnwh-eyebogler-original-imaganhmeewgfgyf.jpeg?q=50",
  Availableoffers : [
                     "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                     "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                     "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                    ],
DeliverBy:"Delivery in 6-8 days",
Change:"40",
Services:"Cash on Delivery available",
Replacement:"14 Days Return Policy",
Color :"Blue",
Size:"XL",
SizeList:["S","M","L","XL","XXL","3XL"],
ProductDetails : [
                  {type:"Type",value:"Polo Neck"},    
                  {type:"Sleeve",value:"Full Sleeve"},   
                  {type:"Fit",value:"Regular"},   
                  {type:"Fabric",value:"Cotton Blend"},   
                  {type:"Sales Package",value:"Pack Of 1"},   
                  {type:"Pack of",value:"1"},   
                  {type:"Style Code",value:"T414-AS17EBMDNWH"},   
                  {type:"Neck Type",value:"Polo Neck"},                         
                ],
SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/kyeqjrk0/t-shirt/o/q/n/m-t414-as17ebmdnwh-eyebogler-original-imaganhmeewgfgyf.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/ky0g58w0/t-shirt/c/p/m/xs-t414-as17ebmdnwh-eyebogler-original-imagac7x8gfdhcqx.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kvsfhjk0/t-shirt/d/x/2/xs-t414-as17ebmdnwh-eyebogler-original-imag8m3zmg76yvwh.jpeg?q=70"
    ],
    RatingReviewData :[
      {title:"Not good",
      rating:"2",
      desc:"Fabric quality is not good it's very thin feels cheap when you grab in hands.",
      images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202112/blobio-imr-202112_202e9640bcd84aa4b393057a1b8e7caf.jpg?q=90"]
      },
      {title:"wohhh",
      rating:"5",
      desc:"Great feeting",
       images:[]
      },
      {title:"looks nice",
      rating:"3",
      desc:"Nice",
       images:[]
      }
     ],
},
{
  _id: uuid(),
  categoryName: "Fashion",
  quntity:"1",
  title: "Men Printed Cotton Blend Straight Kurta  (Yellow)",
  costprice:"999",
  saleingprice: "399",
  extraOff : "20",
  percentOff:"60", 
  Coupon : "Special PriceGet extra 30% off upto ₹75 on 1 item(s) (price inclusive of discount)",
  Rating:"3.9",
  Reviews:"0",
  Status :"Available",
  FashionType:"Kurta",
  Brand : "FRELURO ",
  Image:"https://rukminim2.flixcart.com/image/880/1056/l08gsy80/kurta/u/v/m/l-grey-106-yellow-freluro-original-imagc26vdpwxgztu.jpeg?q=50",
  Availableoffers : [
                     "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                     "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                     "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                    ],
DeliverBy:"Delivery in 6-8 days",
Change:"75",
Services:"Cash on Delivery available",
Replacement:"14 Days Return Policy",
Color :"Yellow",
Size:"XL",
SizeList:["S","M","L","XL","XXL","3XL"],
ProductDetails : [
                  {type:"Ideal For",value:"Men"},    
                  {type:"Length Type",value:"Above Knee"},  
                  {type:"Color",value:"Yellow"}, 
                  {type:"Occasion",value:"Festive & Party"}, 
                  {type:"Pattern",value:"Printed"}, 
                  {type:"Type",value:"Straight"}, 
                  {type:"Fabric",value:"Cotton Blend"}, 
                  {type:"Neck",value:"Mandarin/Chinese Neck"},                          
                ],
SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/l08gsy80/kurta/u/v/m/l-grey-106-yellow-freluro-original-imagc26vdpwxgztu.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/l08gsy80/kurta/4/y/g/l-grey-106-yellow-freluro-original-imagc26vuqmzgbt2.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/l08gsy80/kurta/x/w/7/l-grey-106-yellow-freluro-original-imagc26vvxb9fzwg.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/l08gsy80/kurta/k/y/v/l-grey-106-yellow-freluro-original-imagc26vxzctqygv.jpeg?q=70"
    ],
    RatingReviewData :[],
},
{
  _id: uuid(),
  categoryName: "Fashion",
  quntity:"1",
  title: "Unstitched Cotton Kurta & Churidar Material Embroidered  (Unstitched)",
  costprice:"2,199",
  saleingprice: "324",
  extraOff : "50",
  percentOff:"85", 
  Coupon : "Special PriceGet extra 30% off upto ₹75 on 1 item(s) (price inclusive of discount)",
  Rating:"0",
  Reviews:"be the first to review this product",
  Status :"Available",
  FashionType:"Material",
  Brand : "shankhpushpi",
  Image:"https://rukminim2.flixcart.com/image/739/887/kxrvi4w0/fabric/s/7/k/yes-2-m-unstitched-2-m-2-5-m-metro-green-eratica-fab-original-imaga5pbzzgefugg.jpeg?q=50",
  Availableoffers : [
                     "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                     "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                     "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                    ],
DeliverBy:"Delivery in 6-8 days",
Change:"40",
Services:"Cash on Delivery available",
Replacement:"14 Days Return Policy",
Color :"Green",
Size:"Free",
SizeList:["S","M","L","XL","XXL","3XL"],
ProductDetails : [
                  {type:"Type",value:"Kurta & Churidar Material"},    
                  {type:"Sales Package",value:"1 Top,1 Bottom With 1 Dupatta"}, 
                  {type:"Ideal For",value:"Women"}, 
                  {type:"Occasion",value:"Party & Festive"},  
                  {type:"Fabric Care",value:"Hand wash"},  
                  {type:"Other Details",value:"This Fancy Churidar material,Salwar Suit Material Have Self Design,Embroidered,Floral Pattern With Button and Aari Work Embroidery suit, Top Fabric - Cotton, Bottom Fabric - Cotton, Dupatta Fabric - Najmeen with Four Side Lace.Top Cut Size : 2.10 Meter,Bottom Cut Size : 2 Meter and Dupatta : 2.10 Mtr"},                        
                ],
SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/kxrvi4w0/fabric/e/v/9/yes-2-m-unstitched-2-m-2-5-m-metro-green-eratica-fab-original-imaga5pbqzxwgjfu.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kxrvi4w0/fabric/s/7/k/yes-2-m-unstitched-2-m-2-5-m-metro-green-eratica-fab-original-imaga5pbzzgefugg.jpeg?q=70"
    ],
    RatingReviewData :[],
},
{
  _id: uuid(),
  categoryName: "Fashion",
  quntity:"1",
  title: "Unstitched Cotton Salwar Suit Material Embroidered  (Unstitched)",
  costprice:"1,299",
  saleingprice: "277",
  extraOff : "10",
  percentOff:"78", 
  Coupon : "Special PriceGet extra 30% off upto ₹75 on 1 item(s) (price inclusive of discount)",
  Rating:"4",
  Reviews:"621",
  Status :"Available",
  FashionType:"Material",
  Brand : "vasundhra fashion ",
  Image:"https://rukminim2.flixcart.com/image/880/1056/ksuowi80/fabric/s/x/v/yes-2-m-unstitched-2-2-m-daliya-babypink-vasundhra-fashion-original-imag6bwvv4zpacwz.jpeg?q=50",
  Availableoffers : [
                     "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                     "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                     "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                    ],
DeliverBy:"Delivery in 6-8 days",
Change:"40",
Services:"Cash on Delivery available",
Replacement:"14 Days Return Policy",
Color :"Green",
Size:"Free",
SizeList:["S","M","L","XL","XXL","3XL"],
ProductDetails : [
                  {type:"Type",value:"Kurta & Churidar Material"},    
                  {type:"Sales Package",value:"1 Top,1 Bottom With 1 Dupatta"}, 
                  {type:"Ideal For",value:"Women"}, 
                  {type:"Occasion",value:"Party & Festive"},  
                  {type:"Fabric Care",value:"Hand wash"},  
                  {type:"Other Details",value:"This Fancy Churidar material,Salwar Suit Material Have Self Design,Embroidered,Floral Pattern With Button and Aari Work Embroidery suit, Top Fabric - Cotton, Bottom Fabric - Cotton, Dupatta Fabric - Najmeen with Four Side Lace.Top Cut Size : 2.10 Meter,Bottom Cut Size : 2 Meter and Dupatta : 2.10 Mtr"},                        
                ],
SmallImages:[
              "https://rukminim1.flixcart.com/image/128/128/ksuowi80/fabric/s/x/v/yes-2-m-unstitched-2-2-m-daliya-babypink-vasundhra-fashion-original-imag6bwvv4zpacwz.jpeg?q=70",
              "https://rukminim1.flixcart.com/image/128/128/ksuowi80/fabric/i/j/u/yes-2-m-unstitched-2-2-m-daliya-babypink-vasundhra-fashion-original-imag6bwvkeuqtqav.jpeg?q=70"
            ],
RatingReviewData :[
      {title:"Good",
      rating:"2",
      desc:"Good sam as picture but quality is not good",
      images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202201/blobio-imr-202201_ea494e3c22c84012acc9817628ec04d0.jpg?q=90"]
      },
      {title:"Vary good",
      rating:"3",
      desc:"Very nice dress👌👌👌",
       images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202202/blobio-imr-202202_ac09da5552134639a2ce11e726404c56.jpg?q=90"]
      }
     ],
},
{
  _id: uuid(),
  categoryName: "Fashion",
  quntity:"1",
  title: "Digital Print Semi Stitched Lehenga Choli  (Blue)",
  costprice:"2,999",
  saleingprice: "824",
  extraOff : "100",
  percentOff:"72", 
  Coupon : "Special PriceGet extra 30% off upto ₹75 on 1 item(s) (price inclusive of discount)",
  Rating:"4.2",
  Reviews:"423",
  Status :"Available",
  FashionType:"Lehenga Choli",
  Brand : "anara",
  Image:"https://rukminim2.flixcart.com/image/880/1056/kt7jv680/lehenga-choli/f/n/i/free-sleeveless-l8097-fashionuma-original-imag6hxffsx8hkgh.jpeg?q=50",
  Availableoffers : [
                     "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                     "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                     "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                    ],
DeliverBy:"Delivery in 6-8 days",
Change:"40",
Services:"Cash on Delivery available",
Replacement:"14 Days Return Policy",
Color :"Blue",
Size:"XL",
SizeList:["S","M","L","XL","XXL","3XL"],
ProductDetails : [
                  {type:"Ideal For",value:"Women"},  
                  {type:"Occasion",value:"Party & Festive, Wedding, Casual, Wedding & Festive"}, 
                  {type:"Lehenga Fabric",value:"Art Silk"},
                  {type:"Choli Fabric",value:"Net"},
                  {type:"Type",value:"Lehenga Choli"},
                  {type:"Dupatta Fabric",value:"Net"},
                  {type:"Neck",value:"V-Neck"},
                  {type:"Sleeve",value:"Sleeveless"},

                  ],
SmallImages:[
  "https://rukminim1.flixcart.com/image/128/128/kt7jv680/lehenga-choli/f/n/i/free-sleeveless-l8097-fashionuma-original-imag6hxffsx8hkgh.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/kt7jv680/lehenga-choli/r/h/a/free-sleeveless-l8097-fashionuma-original-imag6hxfawazw8yd.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/kt8zb0w0/lehenga-choli/p/9/l/free-sleeveless-l8097-fashion-basket-original-imag6mmkecqexzhz.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/kt7jv680/lehenga-choli/q/w/o/free-sleeveless-l8097-fashionuma-original-imag6hxfrtc4v8zz.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/kt7jv680/lehenga-choli/y/y/o/free-sleeveless-l8097-fashionuma-original-imag6hxfqchectxe.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/kt7jv680/lehenga-choli/g/r/g/free-sleeveless-l8097-fashionuma-original-imag6hxfzncvyug4.jpeg?q=70"
            ],
RatingReviewData :[
      {title:"Good",
      rating:"4",
      desc:"It's osm I like the fabric of this dress. The colour is very attractive. Thank you flipkart ❤️",
      images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202202/blobio-imr-202202_7caf168a283045578f0f0dda0de81d4c.jpg?q=90",
               "https://rukminim1.flixcart.com/blobio/124/124/imr-202202/blobio-imr-202202_4383b45d1e124d21823d2d0b74c754aa.jpg?q=90"]
      },
      {title:"Vary good",
      rating:"3",
      desc:"So pretty..i just loved it",
       images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202202/blobio-imr-202202_7f1dad0e6fef462db62a1d16a7e548d8.jpg?q=90"]
      }
     ],
},
{
  _id: uuid(),
  categoryName: "Fashion",
  quntity:"1",
  title: "Indi Boys Festive & Party, Wedding Sherwani and Churidar Set  (Blue Pack of 1)",
  costprice:"2,999",
  saleingprice: "849",
  extraOff : "100",
  percentOff:"71", 
  Coupon : "Special PriceGet extra 30% off upto ₹75 on 1 item(s) (price inclusive of discount)",
  Rating:"4.2",
  Reviews:"823",
  Status :"Available",
  FashionType:"Churidar Set",
  Brand : "AJ Dezines",
  Image:"https://rukminim2.flixcart.com/image/880/1056/kdnf98w0hlty2aw-0/kids-ethnic-set/g/q/v/6-7-years-1-7001-blue-aj-dezines-original-imafuhzzz8zjb7mt.jpeg?q=50",
  Availableoffers : [
                     "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                     "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                     "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                    ],
DeliverBy:"Delivery in 6-8 days",
Change:"40",
Services:"Cash on Delivery available",
Replacement:"14 Days Return Policy",
Color :"Blue",
Size:"S",
SizeList:["S"],
ProductDetails : [
                  {type:"Brand",value:"AJ Dezines"},  
                  {type:"Style Code",value:"7001-BLUE"},
                  {type:"Size",value:"7 - 8 Years"},
                  {type:"Brand Color",value:"Blue"},
                  {type:"Ideal For",value:"Boys"},
                  {type:"Label Size",value:"7"},
                  {type:"Type",value:"Churidar Set"},
                  ],
SmallImages:[
          "https://rukminim1.flixcart.com/image/128/128/kdnf98w0hlty2aw-0/kids-ethnic-set/g/q/v/6-7-years-1-7001-blue-aj-dezines-original-imafuhzzz8zjb7mt.jpeg?q=70",
          "https://rukminim1.flixcart.com/image/128/128/kdnf98w0hlty2aw-0/kids-ethnic-set/e/j/b/18-24-months-1-7001-blue-aj-dezines-original-imafumybcwanqkvt.jpeg?q=70",
          "https://rukminim1.flixcart.com/image/128/128/kdnf98w0hlty2aw-0/kids-ethnic-set/u/o/c/6-7-years-1-7001-blue-aj-dezines-original-imafuhzzjzttzxtm.jpeg?q=70",
          "https://rukminim1.flixcart.com/image/128/128/kdnf98w0hlty2aw-0/kids-ethnic-set/y/g/o/6-7-years-1-7001-blue-aj-dezines-original-imafuhzzfyhk7an3.jpeg?q=70"
            ],
RatingReviewData :[
      {title:"Good",
      rating:"4",
      desc:"product fabric is good for money worthy. delivery is good thanks flipkart ❤️",
      images:["https://rukminim1.flixcart.com/blobio/124/124/imr-201910/blobio-imr-201910_5ac394a839b042fd943f9fae13101114.jpg?q=90"]
      },
      {title:"Vary good",
      rating:"3",
      desc:"good product",
       images:[
         "https://rukminim1.flixcart.com/blobio/124/124/imr-202009/blobio-imr-202009_47ce50c21af64b1fac8eab5cde4dbbc5.jpg?q=90",
         "https://rukminim1.flixcart.com/blobio/124/124/imr-202009/blobio-imr-202009_8e04a46e85e741deaf22b54a579504c0.jpg?q=90",
         "https://rukminim1.flixcart.com/blobio/124/124/imr-202009/blobio-imr-202009_9ecde6e41cc444cdbb80b46fe58dfb94.jpg?q=90"
       ]
      }
     ],
},
{
  _id: uuid(),
  categoryName: "Fashion",
  quntity:"1",
  title: "Floral Print, Geometric Print, Printed Banarasi Poly Silk Saree  (White, Red)",
  costprice:"1,497",
  saleingprice: "184",
  extraOff : "0",
  percentOff:"87", 
  Coupon : "Special PriceGet extra 30% off upto ₹75 on 1 item(s) (price inclusive of discount)",
  Rating:"3",
  Reviews:"3",
  Status :"Available",
  FashionType:"Saree",
  Brand : "Siril",
  Image:"https://rukminim2.flixcart.com/image/739/887/l02r1jk0/sari/0/1/p/free-2329sj781-siril-unstitched-original-imagbxxwcjqgyvzu.jpeg?q=50",
  Availableoffers : [
                     "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                     "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                     "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                    ],
DeliverBy:"Delivery in 6-8 days",
Change:"40",
Services:"Cash on Delivery available",
Replacement:"14 Days Return Policy",
Color :"Red",
Size:"Free",
SizeList:[],
ProductDetails : [
                  {type:"Style Code",value:"2329SJ781"},  
                  {type:"Pattern",value:"Floral Print, Geometric Print, Printed"},  
                  {type:"Pack of",value:"1"},  
                  {type:"Occasion",value:"Casual, Party & Festive, Wedding, Wedding & Festive"},  
                  {type:"Fabric Care",value:"Dry Clean Only"},  
                  {type:"Other Details",value:"Saree Length: 5.30Mtr, Blouse Length: 0.70Mtr"},  
                  {type:"Fabric",value:"Poly Silk"},  
                  {type:"Type",value:"Banarasi"},  
                  ],
SmallImages:[
  "https://rukminim1.flixcart.com/image/128/128/l02r1jk0/sari/0/1/p/free-2329sj781-siril-unstitched-original-imagbxxwcjqgyvzu.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/l09w8sw0/sari/j/2/7/free-2329sj781-siril-unstitched-original-imagc3zvdcaqcjch.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/l02r1jk0/sari/6/u/9/free-2329sj781-siril-unstitched-original-imagbxxwjd673epr.jpeg?q=70"
             ],
RatingReviewData :[
      {title:"Not good",
      rating:"1",
      desc:"Not good , don't buy ",
      images:[]
      },
      {title:"ok ok product",
      rating:"2",
      desc:"not good , but color is nice",
       images:[]
      }
     ],
},
//Electronics
{
  _id: uuid(),
  categoryName: "Electronics",
  quntity:"1",
  title: "APPLE iPad (9th Gen) 64 GB ROM 10.2 inch with Wi-Fi Only (Space Grey)",
  Electronics_type:"iPad",
  costprice:"30,900",
  saleingprice: "30,900",
  extraOff : "5000",
  percentOff:"0", 
  packagingCharges : "free",
  Rating:"4.7",
  Reviews:"2,634",
  Image:"https://rukminim2.flixcart.com/image/316/316/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
  Availableoffers : [
        "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
        "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
        "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
        "Partner OfferPurchase now using GST Invoice feature. Get 5% off up to Rs500 on electronics items from 1-15th Apri"
  ],
BuywithoutExchange : "30,900",
BuywithExchange : "Up to 13,200 off",
Warranty:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box Accessories",
RAM:"64GB",
DeliverBy:"Delivery by 25 Mar, Friday",
Change:"Free",
Highlights:[
            "64 GB ROM",
            "25.91 cm (10.2 inch) Display",
            "8 MP Primary Camera | 12 MP Front",
            "iOS 15 | Battery: Lithium Polymer",
            "Processor: A13 Bionic Chip with 64-bit Architecture"
          ] ,
EasyPaymentOptions:[
           "EMI starting from ₹1,057/month",
           "Cash on Delivery",
           "Net banking & Credit/ Debit/ ATM card"
        ],
Replacement:"No Returns Applicable",
Specifications:[
  {Name:"General",
  SubItem:[ 
            {type:"Model Number",value:"MK2K3HN/A"}  , 
            {type:"Model Name",value:"iPad (9th Gen)"}  , 
            {type:"Color",value:"Space Grey"}  , 
            {type:"Connectivity",value:"Wi-Fi Only"}  , 
            {type:"OS",value:"iOS"}  , 
            {type:"Operating System Version",value:"15"}  , 
            {type:"Voice Call",value:"No"}  , 
            {type:"Video Call",value:"Yes"}  , 
            {type:"Processor Type",value:"A13 Bionic Chip with 64-bit Architecture"}  , 
            {type:"Additional Features",value:"Video Calling: FaceTime Video, Centre Stage, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Audio Calling: FaceTime Audio, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Stereo Speakers, Dual Microphones for Calls, Video Recording and Audio Recording, Digital Compass, iBeacon Micro-location"}  , 
         ]
  },
  {
    Name:"Product Details",
    SubItem:[
      {type:"Display Size",value:"25.91 cm (10.2 inch)"},
      {type:"Sales Package",value:"iPad, Lightning to USB-C Cable, 20W USB-C Power Adapter"},
      {type:"Display Resolution",value:"2160 x 1620 Pixels"},
      {type:"Primary Camera",value:"8 Megapixels"},
      {type:"Internal Storage",value:"64 GB"},
      {type:"Multi-touch",value:"Yes"},
      {type:"Sensors",value:"Touch ID Sensor, Three-axis Gyro Sensor, Accelerometer, Barometer, Ambient Light Sensor"},
      {type:"Sim Type",value:"No Sim"},
     
     ]
  },
  {
    Name:"Battery Features",
    SubItem:[
      {type:"Battery Type",value:"Lithium Polymer"},
           ]
  },
  {
    Name:"Business Features",
    SubItem:[
      {type:"Document Viewer",value:"Yes"},
      {type:"E-mail",value:"Yes"},
      {type:"Other Business Features",value:"DOC, DOCX, Keynote, PDF, PPT, PPTX, TXT, XLS, XLSX"},
    ]
  },
  {
    Name:"Camera Features",
    SubItem:[
        {type:"Secondary Camera",value:"12 Megapixels"},
        {type:"Video Recording Resolution",value:"Rear Camera: 1080p (at 25 fps and 30 fps), 720p (at 30 fps), Slow-motion (at 720p at 120 fps), Front Camera: 1080p (at 25 fps, 30 fps or 60 fps) pixels"},
        {type:"Video Recording",value:"Yes"},
        {type:"Full HD Recording",value:"Yes"},
        {type:"HD Recording",value:"Yes"},
        {type:"Other Camera Features",value:"Rear Camera: 8MP Wide Camera, f/2.4 Aperture, Five-element Lens, Panorama (up to 43MP), HDR for Photos, Photo Geotagging, Auto Image Stabilisation, Burst Mode, 3x Video Zoom, Time-lapse Video with Stabilisation, Video Image Stabilisation, Cinematic Video Stabilisation (1080p and 720p), Continuous Autofocus Video, Playback Zoom, Video Formats Recorded: HEVC and H.264, FaceTime HD Camera: 12MP Ultra Wide Camera, 122 Degree Field of View, f/2.4 Aperture, HDR for Photos, Time-lapse Video with Stabilisation, Extended Dynamic Range for Video up to 30 fps, Cinematic Video Stabilisation (1080p and 720p), Lens Correction, Retina Flash, Auto Image Stabilisation, Burst Mode"},
        {type:"Digital Zoom",value:"5x"},
      ]
  },
  {
    Name:"Connectivity Features", 
    SubItem:[
        {type:"Bluetooth Version",value:"v4.2"},
        {type:"Browser",value:"Safari"},
        {type:"Wi-fi Version",value:"802.11 a/b/g/n/ac"},
        {type:"Other Connectivity Features",value:"Video Calling through FaceTime Application"},
      ]
  },
  {
    Name:"Display Features", 
    SubItem:[
        {type:"Other Display Features",value:"Retina Display, LED-backlit Multi-Touch Display with IPS Technology, True Tone Display, Fingerprint-resistant Oleophobic Coating, Supports Apple Pencil (1st Generation)"},
        {type:"Display PPI",value:"264 PPI"},
      ]
  },
  {
    Name:"Multimedia Features", 
    SubItem:[
        {type:"Video Formats Supported",value:"H.264, MPEG-4, Motion JPEG (M-JPEG)"},
        {type:"Full HD Playback",value:"Yes"},
        {type:"HD Playback",value:"Yes"},
        {type:"Video Playback",value:"Yes"},
        {type:"Audio Formats Supported",value:"AAC (8 to 320 Kbps), Protected AAC (from iTunes Store), HE-AAC, MP3 (8 to 320 Kbps), MP3 VBR, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+), Apple Lossless, AIFF and WAV"},
      ]
  },
  {
    Name:"Navigation Features", 
    SubItem:[
        {type:"Map Support",value:"Maps"},
      ]
  },
  {
    Name:"Warranty", 
    SubItem:[
        {type:"Warranty",value:"1 Year"},
        {type:"Warranty Summary",value:"1 Year Warranty"},
        {type:"Warranty Period",value:"1 Year"},
      ]
  },
],

SmallImages:[
"https://rukminim1.flixcart.com/image/128/128/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/ktop5e80/tablet/v/r/t/mk473hn-a-apple-original-imag6yy7j2hnktfz.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/ktop5e80/tablet/s/l/b/mk2k3hn-a-apple-original-imag6yy7wn9are6s.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/ktop5e80/tablet/k/k/k/mk2k3hn-a-apple-original-imag6yy7yxawz4gy.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/ktop5e80/tablet/z/p/p/mk473hn-a-apple-original-imag6yy7rsevhdah.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/ktop5e80/tablet/y/e/5/mk473hn-a-apple-original-imag6yy7kxnd5ewn.jpeg?q=70"
],
RatingReviewData :[
    {title:"Must buy",
     rating:"5",
     desc:"I bought silver colour which is really awesome 🤗.",
     images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202112/blobio-imr-202112_3a8c00e6d66845119412392014194b22.jpg?q=90"]
    },
    {title:"Terrific purchase",
    rating:"4",
    desc:"Its Very Good Ipad. Its Too much big sreen.You can edit any big size videos easily like 4K. I have purchased this device for BGMI (PUBG). This is a Big powerhouse device ever at low prize.At Bgmi playing time no lag no frame drop play like god as smooth as you think.No one can beat you else Hacker in the lobby. Its great choice for gaming.",
    images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202110/blobio-imr-202110_90948df9e8434f8c838ae5f763f5820d.jpg?q=90"]
    },
    {title:"Wonderful",
    rating:"5",
    desc:"Did apple ever make u unhappy! No right? So what are u waiting for!! Please go for it really great performance in this price range, I love it .lastly thank you alot Flipkart 💜.",
    images:[
         "https://rukminim1.flixcart.com/blobio/124/124/imr-202110/blobio-imr-202110_f54f92c4eec642f384d8cb2bd3d82bb4.jpeg?q=90"
       ]
    }
   ],
},
{
  _id: uuid(),
  categoryName: "Electronics",
  quntity:"1",
  title: "Mi 3i 20000 mAh Power Bank (Fast Charging, 18W)  (Black, Lithium Polymer)",
  Electronics_type:"Power Bank",
  costprice:"2,199",
  saleingprice: "1,799",
  extraOff : "200",
  percentOff:"18", 
  packagingCharges : "free",
  Rating:"4.3",
  Reviews:"13,398",
  Image:"https://rukminim2.flixcart.com/image/316/316/kfcv6vk0/power-bank/r/f/5/power-bank-20000-plm18zm-mi-original-imafvtc7x9zgrzbz.jpeg?q=70",
  Availableoffers : [
        "Bank Offer10% off on Federal Bank Cards, up to ₹1500. On orders of ₹5000 and above",
        "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
        "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
  ],
BuywithoutExchange : "",
BuywithExchange : "",
Warranty:"1 Year Manufacturer Warranty",
RAM:"",
DeliverBy:"Delivery by 25 Mar, Friday",
Change:"Free",
Highlights:[
           "Port- Type C and Micro USB",
           "Cable- Type C",
           "Recharging time- 6.9 hours (with 18 W charger and USB cable)",
           "Weight: 434 g | Capacity: 20000 mAh",
           "Lithium Polymer Battery | Type-C Connector",
           "Power Source: Battery",
           "Charging Cable Included"
          ] ,
EasyPaymentOptions:[
           "Cash on Delivery",
           "Net banking & Credit/ Debit/ ATM card"
        ],
Replacement:"7 days Returns Applicable",
Specifications:[
  {Name:"General",
  SubItem:[ 
            {type:"Sales Package",value:"1 Power Bank, 1 USB Cable and 1 User Manual"}  , 
            {type:"Model Name",value:"Power Bank"},
            {type:"Suitable Device",value:"Mobile"},
            {type:"Number of Output Ports",value:"2"},
            {type:"Charging Cable Included",value:"Yes"},
            {type:"Power Supply",value:"USB-C: 5 V/3 A, 9 V/2 A, 12 V/1.5 A, Micro-USB: 5 V/2 A, 9 V/2 A, 12 V/1.5 A"},
            {type:"Output Power",value:"USB-A: 5 V/2.4 A, 9 V/2 A, 12 V/1.5 A, USB-C: 5 V/3 A, 9 V/2 A, 12 V/1.5 A, Triple Port: 5 V/3.6 A"},
            {type:"Other Features",value:"Power Delivery, Smart Power Management"},
            {type:"Width",value:"72.2 mm"},
            {type:"Height",value:"150.6 mm"},
            {type:"Depth",value:"26.3 mm"},
            {type:"Weight",value:"434 g"},
          ]
  },
  {
    Name:"Warranty", 
    SubItem:[
        {type:"Warranty Summary",value:"Domestic warranty"},
        {type:"Warranty Service Type",value:"Carry in"},
        {type:"Covered in Warranty",value:"Manufacturing defect"},
        {type:"Not Covered in Warranty",value:"Physical Damages, Wear and Tear"},
        {type:"Domestic Warranty",value:"6 Months"},
      ]
  },
],

SmallImages:[
"https://rukminim1.flixcart.com/image/128/128/kfcv6vk0/power-bank/r/f/5/power-bank-20000-plm18zm-mi-original-imafvtc7x9zgrzbz.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/kfcv6vk0/power-bank/r/f/5/power-bank-20000-plm18zm-mi-original-imafvtc7zzxgrfhe.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/kfcv6vk0/power-bank/r/f/5/power-bank-20000-plm18zm-mi-original-imafvtc7uvrkykv9.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/kfcv6vk0/power-bank/r/f/5/power-bank-20000-plm18zm-mi-original-imafvtc7p8fwk7pt.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/kfcv6vk0/power-bank/r/f/5/power-bank-20000-plm18zm-mi-original-imafvtc7fxjup2e6.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/kfcv6vk0/power-bank/r/f/5/power-bank-20000-plm18zm-mi-original-imafvtc7kz9baxxt.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/kfcv6vk0/power-bank/r/f/5/power-bank-20000-plm18zm-mi-original-imafvtc7cutvhngq.jpeg?q=70"
],
RatingReviewData :[
    {title:"Nice product",
     rating:"5",
     desc:"Charging time with 18W charger is 7 hours. With 10 watt charger it takes 10.5 hours to charge completely.(If your charger is 15W , it will still take 10.5 hours to charge).",
     images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202010/blobio-imr-202010_79e04f3d1bba477f958a26e2e4c86865.jpg?q=90",
    "https://rukminim1.flixcart.com/blobio/124/124/imr-202010/blobio-imr-202010_933f0589b15840a1b1f2173d783e6f14.jpg?q=90"]
    },
    {title:"Good product",
    rating:"4",
    desc:"* best battery life * good performance * value for money * nice fast chargering",
    images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202010/blobio-imr-202010_933f0589b15840a1b1f2173d783e6f14.jpg?q=90"]
    },
    {title:"Fabulous!",
    rating:"5",
    desc:"Best power and fast charging i love this product as safe delivery",
    images:[
         "https://rukminim1.flixcart.com/blobio/124/124/imr-202101/blobio-imr-202101_f4454d651c354245bd56b6b93fb22760.jpg?q=90",
         "https://rukminim1.flixcart.com/blobio/124/124/imr-202101/blobio-imr-202101_f70f6fa2512d45a3b41681e0b7588dd7.jpg?q=90"
       ]
    }
   ],
},
{
  _id: uuid(),
  categoryName: "Electronics",
  quntity:"1",
  title: "Dr. Morepen BP02 BP02 Bp Monitor  (White)",
  Electronics_type:"Bp Monitor",
  costprice:"1,455",
  saleingprice: "1,055",
  extraOff : "50",
  percentOff:"27", 
  packagingCharges : "free",
  Rating:"4.3",
  Reviews:"13,398",
  Image:"https://rukminim2.flixcart.com/image/216/216/kgpg5u80pkrrdj/health-care-appliances/h/v/5/bp02-dr-morepen-original-imafwxyum5ursedm.jpeg?q=70",
  Availableoffers : [
        "Bank Offer10% off on Federal Bank Cards, up to ₹1500. On orders of ₹5000 and above",
        "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
        "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
  ],
BuywithoutExchange : "",
BuywithExchange : "",
Warranty:"One Year Warranty Against Manufacturing Defects*",
RAM:"",
DeliverBy:"Delivery by 25 Mar, Friday",
Change:"Free",
Highlights:[
             "Upper Arm, Blood Pressure Machine, BPMBP Monitor Device",
             "4 AA Alkaline Batteries",
             "Pulse Rate Indicator",
             "Memory Function"
          ] ,
EasyPaymentOptions:[
           "Cash on Delivery",
           "Net banking & Credit/ Debit/ ATM card"
        ],
Replacement:"No Returns Applicable",
Specifications:[
  {Name:"General",
  SubItem:[ 
            {type:"Type",value:"Upper Arm, Blood Pressure Machine, BPM"}  , 
            {type:"Display",value:"LCD"}  ,
            {type:"Date and Time",value:"Yes"}  ,
            {type:"Battery Type",value:"AAA Alkaline"}  ,
            {type:"Number of Batteries Required",value:"4"}  ,
            {type:"Measurement Method",value:"Digital"}  ,
            {type:"Minimum Pressure Measurement Range",value:"40 mmHg"}  , 
            {type:"Maximum Pressure Measurement Range",value:"230 mmHg"}  ,
            {type:"Minimum Pulse Measurement Range",value:"40 beats/min"}  ,
            {type:"Maximum Pulse Measurement Range",value:"199 beats/min"}  ,
            {type:"Pulse Measurement Accuracy",value:"(+/-) 5%"}  ,
            {type:"Pressure Measurement Accuracy",value:"(+/-) 3 mmHg"}  ,
            {type:"Sales Package",value:"Main Unit, Cuff, Batteries, Instruction Manual"}  ,
          ]
  },
  {
    Name:"Warranty", 
    SubItem:[
        {type:"Warranty Summary",value:"One Year Warranty Against Manufacturing Defects*"},
        {type:"Warranty Service Type",value:"Customer Need To Contact Customer Care Centre"},
        {type:"Covered in Warranty",value:"One Year Warranty on BP Monitor, Against Manufacturing Defects"},
        {type:"Not Covered in Warranty",value:"Warranty does not cover any accessories (such as cuff, batteries) or damage caused to the product due to improper use."},
        {type:"Domestic Warranty",value:"2 Year"},
      ]
  },
],

SmallImages:[
"https://rukminim1.flixcart.com/image/128/128/kgpg5u80pkrrdj/health-care-appliances/h/v/5/bp02-dr-morepen-original-imafwxyum5ursedm.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/kuh9yfk0/bp-monitor/2/i/c/bp02-bp02-dr-morepen-original-imag7knf4jzmjsnx.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/kuh9yfk0/bp-monitor/v/d/l/bp02-bp02-dr-morepen-original-imafys7zfk25xzhd.jpeg?q=70"
],
RatingReviewData :[
    {title:"Great product",
     rating:"4",
     desc:"Been using Dr. Morepen old machine for last 10 years. Bought new one of different brand but didn't like that then I saw Dr. Morepen new machine is available on Flipkart and ordered it instantly. I am totally satisfied with it.",
     images:[]
    },
    {title:"Wonderful",
    rating:"3.5",
    desc:"The product is absolutely worth the price. It serves pretty good, the readings vary a bit when measured by traditional sphygmomanometer, but considering the easy usage and time consciousness, that is a very negligible issue. A good buy. Thanks Flipkart!!",
    images:[]
    },
    {title:"Bad quality",
    rating:"2",
    desc:"Super machine by looks but it would be really good if it was showing good results its not working everytime i check its showing 125/49 which means a person should be in coma when i checked with doctor results were 200/90 i know machine cant tell exact but it should be nearly average results rather than fake results after test in my idealogy waste of money on this product i suggesy dr. Trust brand which might be useful finally dont buy dr. Morepen products",
    images:[]
    }
   ],
},
{
  _id: uuid(),
  categoryName: "Electronics",
  quntity:"1",
  title: "APPLE Watch Series 3 GPS - MTF32HN/A 42 mm Space Grey Aluminium Case with Black Sport Band  (Black Strap, Regular)",
  Electronics_type:"Watch",
  costprice:"23,900",
  saleingprice: "22,900",
  extraOff : "500",
  percentOff:"4", 
  packagingCharges : "free",
  Rating:"4.6",
  Reviews:"4,504",
  Image:"https://rukminim2.flixcart.com/image/316/316/jmi22kw0/smartwatch/y/d/j/mtf32hn-a-apple-original-imaf9ec8ssmfcuxf.jpeg?q=70",
  Availableoffers : [
        "Bank Offer10% off on Federal Bank Cards, up to ₹1500. On orders of ₹5000 and above",
        "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
        "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
        "Special PriceGet extra 4% off (price inclusive of discount)"
  ],
  
BuywithoutExchange : "",
BuywithExchange : "",
Warranty:"One Year Warranty",
RAM:"",
DeliverBy:"Delivery by 25 Mar, Friday",
Change:"Free",
Highlights:[
             "GPS and Altimeter",
             "Swimproof",
             "Voice Based Siri",
             "3 Activity Rings Tracking - Move, Exercise, Stand",
             "Smart Coaching",
             "Activity Sharing and Achievements",
             "Heart Rate Monitor",
             "Breathe App",
             "Notifications",
             "Touchscreen",
             "Notifier, Fitness & Outdoor",
             "Battery Runtime: Upto 18 hrs"
          ] ,
EasyPaymentOptions:[
           "Cash on Delivery",
           "Net banking & Credit/ Debit/ ATM card"
        ],
Replacement:"No Returns Applicable",
Specifications:[
  {Name:"General",
  SubItem:[ 
            {type:"Sales Package",value:"Smartwatch, Magnetic Charging Cable (1 m), Band, Quick Start Guide"} , 
            {type:"Model Number",value:"MTF32HN/A"} ,
            {type:"Model Name",value:"Watch Series 3 GPS -"} ,
            {type:"Dial Color",value:"Space Grey"} ,
            {type:"Dial Shape",value:"Rectangle"} ,
            {type:"Strap Color",value:"Black"} ,
            {type:"Strap Material",value:"Silicone"} ,
            {type:"Size",value:"Regular"} ,
            {type:"Touchscreen",value:"Yes"} ,
            {type:"Water Resistant",value:"Yes"} ,
            {type:"Water Resistance Depth",value:"50 m"} ,
            {type:"Usage",value:"Notifier, Fitness & Outdoor"} ,
            {type:"Dial Material",value:"Aluminium Case"} ,
            {type:"Ideal For",value:"Men & Women"} ,
          ]
  },
  {
    Name:"Product Details", 
    SubItem:[
        {type:"Sensor",value:"Barometric Altimeter, Heart Rate Sensor, Accelerometer, Gyroscope, Ambient Light Sensor, Built-in GPS and GLONASS"},
        {type:"Compatible Device",value:"iPhone 6s or later with iOS 14 or later"},
        {type:"Notification",value:"Messages, Calendar, Mail"},
        {type:"Battery Type",value:"Lithium Ion"},
        {type:"Charge Time",value:"90 min"},
        {type:"Battery Life",value:"Upto 18 hours"},
        {type:"Rechargeable Battery",value:"Yes"},
      ]
  },
  {
    Name:"Platform And Storage Features", 
    SubItem:[
        {type:"Operating System",value:"watchOS 4"},
        {type:"Compatible Operating System",value:"iOS 10 and Above"},
        {type:"Number of Cores",value:"Dual Core"},
        {type:"Processor Name",value:"S3"},
        {type:"Internal Memory",value:"8 GB"},
      ]
  },
  {
    Name:"Connectivity Features", 
    SubItem:[
        {type:"Call Function",value:"No"},
        {type:"Bluetooth",value:"Yes"},
        {type:"Wi-Fi",value:"Yes"},
        {type:"GPS",value:"Yes"},
        {type:"Bluetooth Version",value:"v4.2"},
        {type:"Other Connectivity Features",value:"Wi-Fi (802.11b/g/n 2.4 GHz)"},
      ]
  },
  {
    Name:"Camera And Display Features", 
    SubItem:[
        {type:"Display Resolution",value:"312 x 390 Pixels"},
        {type:"Display Size",value:"42 mm"},
        {type:"Display Type",value:"OLED Retina Display"},
        {type:"Scratch Resistant",value:"Yes"},
        {type:"Other Display Features",value:"Ion-X (Strengthened Glass), Support Force Touch"},
      ]
  },
  {
    Name:"Fitness And Watch Functions", 
    SubItem:[
      {type:"Calorie Count",value:"Yes"},
      {type:"Step Count",value:"Yes"},
      {type:"Heart Rate Monitor",value:"Yes"},
      {type:"Altimeter",value:"Yes"},
      {type:"Other Fitness Features",value:"Built in Fitness Tracker: Steps Count, Distance and Calories Burned"},
      {type:"Date & Time Display",value:"Yes"},
      {type:"Calendar",value:"Yes"},
      {type:"Alarm Clock",value:"Yes"},
      {type:"Number of Buttons",value:"2"},
      ]
  },
  {
    Name:"Warranty", 
    SubItem:[
      {type:"Warranty Summary",value:"1 Year Warranty"},
      {type:"Warranty Service Type",value:"Carry In"},
      {type:"Covered in Warranty",value:"Manufacturing Defects"},
      {type:"Not Covered in Warranty",value:"Physical Damage"},
      ]
  },
],

SmallImages:[
"https://rukminim1.flixcart.com/image/128/128/jmi22kw0/smartwatch/y/d/j/mtf32hn-a-apple-original-imaf9ec8ssmfcuxf.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/jmi22kw0/smartwatch/y/d/j/mtf32hn-a-apple-original-imaf5zuyjghynk6p.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/k4rcmfk0pkrrdj/smartwatch-refurbished/x/j/r/c-mtf32hn-a-apple-original-imafkpynt9jzqzda.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/ka2tmkw0/smartwatch/y/d/j/mtf32hn-a-ios-apple-original-imafrq4mhrcghyzw.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/ka2tmkw0/smartwatch/y/d/j/mtf32hn-a-ios-apple-original-imafrq4mggz4fhrr.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/ka2tmkw0/smartwatch/y/d/j/mtf32hn-a-ios-apple-original-imafrq4mzdb4kfsn.jpeg?q=70"
],
RatingReviewData :[
    {title:"Perfect product!",
     rating:"4",
     desc:"Thank you for delivery it just in one day . I loved this watch .Sharing few pics of my watch . It feels so good too wear it . A gentle look ",
     images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202003/blobio-imr-202003_469f61bb0fe6411ba016247936d10d67.jpg?q=90"]
    },
    {title:"Classy product",
    rating:"3.5",
    desc:"Superb Quality , Nothing like apple , No need to go for iwatch 4 or 5 if don't have requirement of cellular version.",
    images:["https://rukminim1.flixcart.com/blobio/124/124/imr-201910/blobio-imr-201910_52b40aeb799347268fd3b0b5700e2d12.jpeg?q=90",
            "https://rukminim1.flixcart.com/blobio/124/124/imr-202003/blobio-imr-202003_0aca812b564f413f87506ffe71499f4b.jpg?q=90"]
    },
    {title:"Simply awesome",
    rating:"5",
    desc:"Just just amazing and fall in love at firs glance. Truly love at first sight..! Apple you are amazing..! Incredible Flipkart for discount and fast delivery. Got delivered one day before my Europe trip... So much happy...! Guys go for it..!Classsss is here..!",
    images:["https://rukminim1.flixcart.com/blobio/124/124/imr-201907/blobio-imr-201907_992761c26b104ae99bb41f4b1c3c0526.jpeg?q=90"]
    }
   ],
},
{
  _id: uuid(),
  categoryName: "Electronics",
  quntity:"1",
  title: "HP 100 Wired Optical Mouse  (USB 2.0, Black)",
  Electronics_type:"Mouse",
  costprice:"399",
  saleingprice: "374",
  extraOff : "0",
  percentOff:"0", 
  packagingCharges : "free",
  Rating:"4.4",
  Reviews:"330",
  Image:"https://rukminim2.flixcart.com/image/216/216/k4irzbk0/mouse/e/y/n/hp-wired-mouse-100-original-imafnehefyqx8cmb.jpeg?q=70",
  Availableoffers : [
        "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
        "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
        "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
        "Partner OfferPurchase now using GST Invoice feature. Get 5% off up to Rs500 on electronics items from 1-15th Apri"
  ],
BuywithoutExchange : " ",
BuywithExchange : " ",
Warranty:"1 Manufacturer Warranty ",
RAM:" ",
DeliverBy:"Delivery by 25 Mar, Friday",
Change:"40",
Highlights:[
            "Wired",
            "Interface: USB 2.0",
            "Optical Mouse"
          ] ,
EasyPaymentOptions:[
           "Cash on Delivery",
           "Net banking & Credit/ Debit/ ATM card"
        ],
Replacement:"7 days Returns Applicable",
Specifications:[
  {Name:"General",
  SubItem:[ 
            {type:"Model Number",value:"100"}  , 
            {type:"Color",value:"Black"}  , 
            {type:"Sales Package",value:"1 Mouse"} ,
            {type:"System Requirements",value:"Windows 10"} ,
            {type:"Part Number",value:"6VY96AA#UUF / 6VY96AA#ACJ"} ,
          ]
  },
  {
    Name:"Connectivity And Power Features",
    SubItem:[
        {type:"Surface Tracking",value:"No"} , 
        {type:"Bluetooth",value:"No"} ,
     ]
  },
  {
    Name:"Warranty", 
    SubItem:[
        {type:"Domestic Warranty",value:"1 Year"},
      ]
  },
],

SmallImages:[
"https://rukminim1.flixcart.com/image/128/128/k4irzbk0/mouse/e/y/n/hp-wired-mouse-100-original-imafnehefyqx8cmb.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/k4irzbk0/mouse/e/y/n/hp-wired-mouse-100-original-imafnehew3fytrxu.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/k4irzbk0/mouse/e/y/n/hp-wired-mouse-100-original-imafnehefuhfxemk.jpeg?q=70",
"https://rukminim1.flixcart.com/image/128/128/k4irzbk0/mouse/e/y/n/hp-wired-mouse-100-original-imafnehevcdh5ezy.jpeg?q=70"
],
RatingReviewData :[
    {title:"Wonderful",
     rating:"5",
     desc:"Very nice I am Very Happy to buy hp mouse He works smooth and easy to use Thank you Flipkart🌟🌟🌟🌟😉",
     images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202107/blobio-imr-202107_6452bbb3b9c54298bbb21a40420c6c92.jpg?q=90",
            "https://rukminim1.flixcart.com/blobio/124/124/imr-202107/blobio-imr-202107_6452bbb3b9c54298bbb21a40420c6c92.jpg?q=90",
            "https://rukminim1.flixcart.com/blobio/124/124/imr-202107/blobio-imr-202107_6452bbb3b9c54298bbb21a40420c6c92.jpg?q=90"]
    },
    {title:"Worth the money",
    rating:"4",
    desc:"Best mouse under Rs300",
    images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202109/blobio-imr-202109_a1cfe52e38724d45b733fb64d97b30ef.jpeg?q=90",
            "https://rukminim1.flixcart.com/blobio/124/124/imr-202109/blobio-imr-202109_6d8b4dbac4b84a6bbc8a3430ff6b2b80.jpeg?q=90"]
    },
   ],
  },
  {
    _id: uuid(),
    categoryName: "Electronics",
    quntity:"1",
    title: "HP V236w 64 GB Pen Drive  (Silver)",
    Electronics_type:"Pen Drive",
    costprice:"1,500",
    saleingprice: "1,450",
    extraOff : "200",
    percentOff:"3", 
    packagingCharges : "free",
    Rating:"4.2",
    Reviews:"1,778",
    Image:"https://rukminim2.flixcart.com/image/316/316/khz693k0-0/pendrive/pendrive/i/r/x/v236w-hp-original-imafxvf93gh7axat.jpeg?q=70",
    Availableoffers : [
          "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
          "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
          "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
          "Partner OfferPurchase now using GST Invoice feature. Get 5% off up to Rs500 on electronics items from 1-15th Apri"
    ],
  BuywithoutExchange : " ",
  BuywithExchange : " ",
  Warranty:"1 Manufacturer Warranty ",
  RAM:" ",
  DeliverBy:"Delivery in 6-8 days",
  Change:"40",
  Highlights:[
              "USB 2.0|64 GB",
              "Metal",
              "For Laptop, Desktop Computer, Laptop",
              "Color:Silver"
            ] ,
  EasyPaymentOptions:[
             "Cash on Delivery",
             "Net banking & Credit/ Debit/ ATM card"
          ],
  Replacement:"7 Days Replacement Policy",
  Specifications:[
    {Name:"General",
    SubItem:[ 
              {type:"Sales Package",value:"1"}  , 
              {type:"Model Name",value:"V236w"}  , 
            ]
    },
  ],
  
  SmallImages:[
    "https://rukminim1.flixcart.com/image/128/128/khz693k0-0/pendrive/pendrive/i/r/x/v236w-hp-original-imafxvf93gh7axat.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/khz693k0-0/pendrive/pendrive/j/y/x/v236w-hp-original-imafxvf9xv8bcz2w.jpeg?q=70"
  ],
  RatingReviewData :[
      {title:"Worth the money",
       rating:"5",
       desc:"Very good pen drive work is very good and mobile support very well",
       images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202106/blobio-imr-202106_a83104979a684fbab852bbb4e67dcd9a.jpg?q=90",
              "https://rukminim1.flixcart.com/blobio/124/124/imr-202106/blobio-imr-202106_4ab0dd9a99a0483ab8332bf8d7f1c2fd.jpg?q=90"]
      },
      {title:"Terrific",
      rating:"4",
      desc:"Just awesome good colour and good look with awesome performance",
      images:[
        "https://rukminim1.flixcart.com/blobio/124/124/imr-202106/blobio-imr-202106_abd8d4fe46644f04b43470c0ca98e8dc.jpg?q=90",
        "https://rukminim1.flixcart.com/blobio/124/124/imr-202109/blobio-imr-202109_f73ee68b722a4bb790dc631eaa530ee2.jpg?q=90"
      ]
      },
     ],
    },
    {
      _id: uuid(),
      categoryName: "Electronics",
      quntity:"1",
      title: "Canon EOS 1500D DSLR Camera Body+ 18-55 mm IS II Lens  (Black)",
      Electronics_type:"Camera",
      costprice:"39,995",
      saleingprice: "36,499",
      extraOff : "2000",
      percentOff:"8", 
      packagingCharges : "free",
      Rating:"4.2",
      Reviews:"3,734",
      Image:"https://rukminim2.flixcart.com/image/216/216/kk01pjk0/dslr-camera/f/v/o/eos-1500d-canon-original-imafzfugydh2mjgf.jpeg?q=70",
      Availableoffers : [
            "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
            "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
            "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
            "Partner OfferPurchase now using GST Invoice feature. Get 5% off up to Rs500 on electronics items from 1-15th Apri"
      ],
    BuywithoutExchange : " ",
    BuywithExchange : " ",
    Warranty:"2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.)",
    RAM:" ",
    DeliverBy:"Delivery by 25 Mar, Friday",
    Change:"Free",
    Highlights:[
                "Effective Pixels: 24.1 MP",
                "Sensor Type: CMOS",
                "WiFi Available",
                "1080p recording at 30p"
              ] ,
    EasyPaymentOptions:[
               "2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.)",
                "7 day seller replacement policy/brand assistance for device issues*",
                "Cash on Delivery available"
            ],
    Replacement:"7 day seller replacement policy",
    Specifications:[
      {Name:"General",
      SubItem:[ 
                {type:"In The Box",value:"1 Camera Body, 18 - 55 mm Lens, Battery, Battery Charger"} , 
                {type:"Brand",value:"Canon"} ,
                {type:"Model Number",value:"1500D"} ,
                {type:"Series",value:"EOS"} ,
                {type:"Model Name",value:"EOS"} ,
                {type:"SLR Variant",value:"Body+ 18-55 mm IS II Lens"} ,
                {type:"Brand Color",value:"Black"} ,
                {type:"Type",value:"DSLR"} ,
                {type:"Color",value:"Black"} ,
                {type:"Effective Pixels",value:"24.1 MP"} ,
                {type:"Tripod Socket",value:"Yes"} ,
                {type:"Wifi",value:"Yes"} 
              ]
      },
      {
        Name:"Sensor Features",
        SubItem:[
            {type:"Sensor Type",value:"CMOS"},
            {type:"Image Sensor Size",value:"22.3 x 14.9 mm"},
            {type:"ISO Rating",value:"100 - 6400 (Max up to 12800)"},
         ]
      },
      {
        Name:"Lens Features",
        SubItem:[
            {type:"Lens Mount",value:"EF-S and EF"},
            {type:"Dust Reduction",value:"Yes"},
         ]
      },
      {
        Name:"Focus Features",
        SubItem:[
            {type:"Focus Points",value:"9-Point Af"},
         ]
      },
      {
        Name:"Shutter Features",
        SubItem:[
            {type:"Shutter Speed",value:"1/4000 sec"},
            {type:"Self-timer",value:"Yes"},
            {type:"Continuous Shots",value:"3fps shooting"},
         ]
      },
      {
        Name:"Image Features",
        SubItem:[
            {type:"Image Format",value:"JPEG"},
         ]
      },
      {
        Name:"Video Features",
        SubItem:[
            {type:"Video Resolution",value:"1920 x 1080"},
            {type:"Video Quality",value:"1080p recording at 30p"},
         ]
      },
      {
        Name:"Display Features", 
        SubItem:[
          {type:"Display Type",value:"LCD"},
          {type:"Display Size",value:"3 inch"},
          {type:"Touch Screen",value:"No"},
          ]
      },
      {
        Name:"Storage Features",
        SubItem:[
            {type:"Compatible Card",value:"SD Card"},
         ]
      },
      {
        Name:"Power Features",
        SubItem:[
            {type:"Battery Type",value:"Lithium"},
         ]
      },
      {
        Name:"Dimensions",
        SubItem:[
            {type:"Width",value:"129 mm"},
            {type:"Height",value:"101 mm"},
            {type:"Depth",value:"77 mm"},
            {type:"Weight",value:"427 g"},
         ]
      },
      {
        Name:"Warranty", 
        SubItem:[
            {type:"Warranty Summary",value:"2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.)"},
            {type:"Service Type",value:"Service Centre"},
            {type:"Covered in Warranty",value:"Warranty of the product is limited to only manufacturing defect on camera body & lens."},
            {type:"Not Covered in Warranty",value:"Warranty does not cover any external accessories (such as battery, cable, carrying bag), damage caused to the product due to improper installation by customer."},
          ]
      },
    ],
    
    SmallImages:[
          "https://rukminim1.flixcart.com/image/128/128/kk01pjk0/dslr-camera/f/v/o/eos-1500d-canon-original-imafzfugydh2mjgf.jpeg?q=70",
          "https://rukminim1.flixcart.com/image/128/128/kc3p30w0/dslr-camera/d/g/p/eos-eos-1500d-canon-original-imafta9rtu4wxj8h.jpeg?q=70",
          "https://rukminim1.flixcart.com/image/128/128/kk01pjk0/dslr-camera/n/t/q/eos-1500d-canon-original-imafzfugrcz6e3xy.jpeg?q=70",
          "https://rukminim1.flixcart.com/image/128/128/kk01pjk0/dslr-camera/s/q/k/eos-1500d-canon-original-imafzfughbzn7tmg.jpeg?q=70",
          "https://rukminim1.flixcart.com/image/128/128/kk01pjk0/dslr-camera/w/f/q/eos-1500d-canon-original-imafzfugm7yaxf6b.jpeg?q=70",
          "https://rukminim1.flixcart.com/image/128/128/kc3p30w0/dslr-camera/d/g/p/eos-eos-1500d-canon-original-imafta9rswfqk3yz.jpeg?q=70"
    ],
    RatingReviewData :[
        {title:"Really Nice",
         rating:"5",
         desc:"Best Camera For the Beginners... Totally Loved it... Better experience.. Happy with the Service... Get the Product on time... Thanks..🙏☺️",
         images:["https://rukminim1.flixcart.com/blobio/124/124/imr-201912/blobio-imr-201912_e8634b51e05742a3b878b8a59f4157ec.jpg?q=90",
                 "https://rukminim1.flixcart.com/blobio/124/124/imr-201912/blobio-imr-201912_839c90370eee46969ef4a8445a8e0927.jpg?q=90"]
        },
        {title:"Best in the market!",
        rating:"4",
        desc:"This is my first Canon eos 1500d Camera and I'm very satisfied with this camera. Thank you so much to the flipkart for nice services.",
        images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202001/blobio-imr-202001_7665705af4234992b6f75e26223f6092.jpg?q=90",
                "https://rukminim1.flixcart.com/blobio/124/124/imr-202001/blobio-imr-202001_c34ecfb3d24c40e6920ac15c79380238.jpg?q=90"]
        },
        {title:"Great product",
        rating:"5",
        desc:"I am reviewing this product after two years of usage : Camara is awesome for personal use, if you are beginner and looking for Camara only to use personal use and for small use at professional level then it is more than perfect.I love this product and thanks Canon to make my valuable memories alive.",
        images:[
             "https://rukminim1.flixcart.com/blobio/124/124/imr-202010/blobio-imr-202010_cf94a249e7bd4d03871f9631e23c9e5f.jpg?q=90",
             "https://rukminim1.flixcart.com/blobio/124/124/imr-202010/blobio-imr-202010_5ea4bd1d550f4178a845f5e850ef01d3.jpg?q=90"
           ]
        }
       ],
    },
    {
      _id: uuid(),
      categoryName: "Electronics",
      quntity:"1",
      title: "Lenovo IdeaPad 3 Core i3 10th Gen - (8 GB/256 GB SSD/Windows 11 Home) 15IML05 Thin and Light Laptop  (15.6 Inch, Platinum Grey, 1.7 kg, With MS Office)",
      Electronics_type:"Laptop",
      costprice:"56,590",
      saleingprice: "37,990",
      extraOff : "1000",
      percentOff:"32", 
      packagingCharges : "free",
      Rating:"4.7",
      Reviews:"2,634",
      Image:"https://rukminim2.flixcart.com/image/216/216/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=70",
      Availableoffers : [
            "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
            "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
            "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
            "Partner OfferPurchase now using GST Invoice feature. Get 5% off up to Rs500 on electronics items from 1-15th Apri"
      ],
    BuywithoutExchange : "₹37,990",
    BuywithExchange : "up to ₹18,100 off",
    Warranty:"2 Years Warranty",
    RAM:"8GB",
    DeliverBy:"Delivery by 25 Mar, Friday",
    Change:"Free",
    Highlights:[
                "Stylish & Portable Thin and Light Laptop",
                "15.6 Inch Full HD TN 220nits Anti-glare",
                "Light Laptop without Optical Disk Drive",
              ] ,
    EasyPaymentOptions:[
               "No cost EMI starting from ₹6,332/month",
               "Cash on Delivery",
               "Net banking & Credit/ Debit/ ATM card"
            ],
    Replacement:"7 Days Replacement Policy",
    Specifications:[
      {Name:"General",
      SubItem:[ 
                {type:"Sales Package",value:"Laptop, battery, adapter, cables and user manuals"},
                {type:"Model Number",value:"15IML05"}  ,
                {type:"Part Number",value:"81WB0193IN, 81WB01BNIN, 81WB01EAIN, 81WB018EIN"},
                {type:"Model Name",value:"15IML05"}, 
                {type:"Series",value:"IdeaPad 3"}, 
                {type:"Color",value:"Platinum Grey"}, 
                {type:"Type",value:"Thin and Light Laptop"}, 
                {type:"Suitable For",value:"Processing & Multitasking"}, 
                {type:"Battery Backup",value:"Upto 11.5 hours"}, 
                {type:"Power Supply",value:"45W Round Tip"},  
                {type:"MS Office Provided",value:"Yes"}, 
              ]
      },
      {
        Name:"Processor And Memory Features",
        SubItem:[
          {type:"Processor Brand",value:"Intel"}, 
          {type:"Processor Name",value:"Core i3"}, 
          {type:"Processor Generation",value:"10th Gen"}, 
          {type:"SSD",value:"Yes"}, 
          {type:"SSD Capacity",value:"256 GB"}, 
          {type:"RAM",value:"8 GB"}, 
          {type:"RAM Type",value:"DDR4"}, 
          {type:"Processor Variant",value:"10110U"}, 
          {type:"Clock Speed",value:"Max Frequency Up to 4.1 GHz"}, 
          {type:"Graphic Processor",value:"Intel Integrated UHD"}, 
         ]
      },
      {
        Name:"Operating System",
        SubItem:[
                {type:"Operating System",value:"Windows 11 Home"},
                {type:"Supported Operating System",value:"Windows 10 Home"},
               ]
      },
      {
        Name:"Port And Slot Features",
        SubItem:[
                {type:"Mic In",value:"Yes"},
                {type:"USB Port",value:"1 x USB 2.0, 2 x USB 3.2 Gen 1"},
                {type:"HDMI Port",value:"1 x HDMI 1.4 b"},
                {type:"Multi Card Slot",value:"1 x card reader"},
               ]
      },
      {
        Name:"Display And Audio Features",
        SubItem:[
                {type:"Touchscreen",value:"No"},
                {type:"Screen Size",value:"39.62 cm (15.6 Inch)"},
                {type:"Screen Resolution",value:"1920 x 1080 Pixel"},
                {type:"Screen Type",value:"Full HD TN 220nits Anti-glare"},
                {type:"Speakers",value:"Built-in Stereo Speakers"},
                {type:"Internal Mic",value:"Built-in array microphone"},
                {type:"Sound Properties",value:"2 x 1.5W Stereo Speakers with Dolby Audio"},
               ]
      }, 
      {
        Name:"Connectivity Features",
        SubItem:[
                {type:"Wireless LAN",value:"11ac, 2x2"},
                {type:"Bluetooth",value:"v5.0"},
               ]
      },
      {
        Name:"Dimensions",
        SubItem:[
                {type:"Dimensions",value:"362.2 x 253.4 x 19.9 mm"},
                {type:"Weight",value:"1.7 kg"},
               ]
      },
      {
        Name:"Additional Features",
        SubItem:[
                {type:"Disk Drive",value:"Not Available"},
                {type:"Web Camera",value:"720p with Privacy Shutter"},
                {type:"Finger Print Sensor",value:"No"},
                {type:"Keyboard",value:"Non-backlit, English"},
                {type:"Backlit Keyboard",value:"No"},
                {type:"Included Software",value:"Microsoft Office Home & Student 2019"},
                {type:"Additional Features",value:"45Wh"},
               ]
      },
      {
        Name:"Warranty", 
        SubItem:[
            {type:"Warranty Summary",value:"2 Year Warranty"},
            {type:"Warranty Service Type",value:"Carry-in"},
            {type:"Covered in Warranty",value:"Manufacturing Defects"},
            {type:"Not Covered in Warranty",value:"Physical Damage"},
            {type:"Domestic Warranty",value:"1 Year"},
          ]
      },
    ],
    
    SmallImages:[
        "https://rukminim1.flixcart.com/image/128/128/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/kbb49zk0/computer/x/m/y/lenovo-na-laptop-original-imafsnkx2tkh6vgm.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/kbb49zk0/computer/x/m/y/lenovo-na-laptop-original-imafsnkx2tkh6vgm.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/kruyw7k0/computer/v/d/n/na-thin-and-light-laptop-lenovo-original-imag5k4qqfvz3yhb.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/kebpqq80/computer/p/h/d/lenovo-na-laptop-original-imafvyqwfzn8euu5.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/kc29n680/computer/4/e/2/lenovo-na-laptop-original-imaft9uxtwxnraez.jpeg?q=70"
    ],
    RatingReviewData :[
        {title:"Mind-blowing purchase",
         rating:"5",
         desc:"Lapt lennovo is very good excellent product heavy body smooth running fast working with ,8gb ram 256 GB SSD looking good display good battery back up I try this product in this rate no products available in this rate so pls purchase don't take any tenson . Cheap rate good performance excellent working smart looking laptop",
         images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202111/blobio-imr-202111_1d740fc247874a7e8bcb1c40119772fc.jpg?q=90"]
        },
        {title:"Perfect product!",
        rating:"4",
        desc:"One of the best Laptop in the market for home usage. Mind-blowing display, Crystal clear sound quality, Smooth touch experience,Run 4k video , Built with Windows 11 and MS Office along with many other useful softwares. If you are looking for a budget laptop then just go for it. I bet you will definitely like this.",
        images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202201/blobio-imr-202201_811466bc2e674f95bcbdab4772a716c2.jpg?q=90"]
        },
        {title:"Wonderful",
        rating:"5",
        desc:"Best budget laptop if u are student then this laptop is best for you. it starts and shutdown very quickly the body is very slim 8 gb ram and 256gb ssd makes it fast but still it depends on your use overall it's nice laptop",
        images:[
             "https://rukminim1.flixcart.com/blobio/178/178/imr-202111/blobio-imr-202111_10bbf4b0542f4f9f91977746d44eefe6.jpg?q=90"
           ]
        }
       ],
    },
    {
      _id: uuid(),
      categoryName: "Electronics",
      quntity:"1",
      title: "Mivi Play 5 W Portable Bluetooth Speaker  (Black, Mono Channel)",
      Electronics_type:"Bluetooth Speaker",
      costprice:"1,999",
      saleingprice: "899",
      extraOff : "50",
      percentOff:"55", 
      packagingCharges : "free",
      Rating:"3.9",
      Reviews:"6,034",
      Image:"https://rukminim2.flixcart.com/image/216/216/kplisnk0/speaker/mobile-tablet-speaker/8/k/e/bs5pl-bk-mivi-original-imag3sgmv9hzrncf.jpeg?q=70",
      Availableoffers : [
            "Bank Offer10% off on Federal Bank Cards, up to ₹1500. On orders of ₹5000 and above",
            "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
            "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
            "Special PriceGet extra 4% off (price inclusive of discount)"
      ],
      
    BuywithoutExchange : "",
    BuywithExchange : "",
    Warranty:"1 year warranty provided by the manufacturer from date of purchase",
    RAM:"",
    DeliverBy:"Delivery by 25 Mar, Friday",
    Change:"Free",
    Highlights:[
                 "Power Output(RMS): 5 W",
                 "Power Source: Battery",
                 "Battery life: 12 hr | Charging time: 2 hr",
                 "Bluetooth Version: 5",
                 "Wireless range: 10 m",
                 "Wireless music streaming via Bluetooth"
              ] ,
    EasyPaymentOptions:[
               "Cash on Delivery",
               "Net banking & Credit/ Debit/ ATM card"
            ],
    Replacement:"7 Days Replacement Policy",
    Specifications:[
      {Name:"General",
      SubItem:[ 
                {type:"Sales Package",value:"1 Speaker"} , 
                {type:"Model Number",value:"BS5PL-BK"} ,
                {type:"Model Name",value:"Play"} ,
                {type:"Type",value:"Mobile/Tablet Speaker"},
                {type:"Portable",value:"Yes"},
                {type:"Bluetooth",value:"Yes"},
                {type:"Memory Card Slot",value:"No"},
                {type:"Configuration",value:"Mono"},
                {type:"Power Source",value:"Battery"},
                {type:"Power Output (RMS)",value:"5 W"},
                {type:"Frequency Response",value:"20Hz to 20Khz"},
                {type:"Impedance",value:"4 Ohms"},
                {type:"Color",value:"Black"},
                {type:"Wired/Wireless",value:"Wireless"},
                {type:"Outdoor Usage",value:"Yes"},  
              ]
      },
      {
        Name:"Product Details", 
        SubItem:[
            {type:"Configuration",value:"Mono Channel"},
            {type:"Compatible Devices",value:"Mobiles, Laptop, Tablet"},
            {type:"Charging Time",value:"2 hr"},
            {type:"Battery",value:"Li-Polymer, Use Time 12 hr"},
            {type:"Battery Capacity",value:"1000 mAh"},
            {type:"Bluetooth",value:"5"},
            {type:"Bluetooth Range",value:"10 m"},
          ]
      },
      {
        Name:"Audio Features", 
        SubItem:[
            {type:"Amplifier",value:"Yes"},
            {type:"Other Audio Features",value:"HD sound"},
          ]
      },
      {
        Name:"Other Details", 
        SubItem:[
            {type:"Driver Size",value:"2 Inch"},
            {type:"Power Input",value:"5V"},
            {type:"Other Features",value:"Battery Life : Mid volume 12 hrs, IPX4 rating, Easy responsive controls change music tracks and control volume, Built-in mic for hands free calling"},
          ]
      },
      {
        Name:"Dimensions", 
        SubItem:[
            {type:"Width",value:"8 cm"},
            {type:"Height",value:"7 cm"},
            {type:"Depth",value:"6.8 cm"},
          ]
      }, 
      {
        Name:"Warranty", 
        SubItem:[
          {type:"Warranty Service Type",value:"1 Year Warranty. For claims please send email to support@mivi.in or call 8099973333"},
          {type:"Warranty Summary",value:"1 year warranty provided by the manufacturer from date of purchase"},
          {type:"Domestic Warranty",value:"1 Year"},
          ]
      },
    ],
    
    SmallImages:[
      "https://rukminim1.flixcart.com/image/128/128/kplisnk0/speaker/mobile-tablet-speaker/8/k/e/bs5pl-bk-mivi-original-imag3sgmv9hzrncf.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kplisnk0/speaker/mobile-tablet-speaker/0/x/s/bs5pl-bk-mivi-original-imag3sgmnbxgqdm5.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kplisnk0/speaker/mobile-tablet-speaker/c/b/q/bs5pl-bk-mivi-original-imag3sgmx9gzqcjt.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kplisnk0/speaker/mobile-tablet-speaker/z/v/7/bs5pl-bk-mivi-original-imag3sgmmgxkhefd.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/kplisnk0/speaker/mobile-tablet-speaker/l/2/8/bs5pl-bk-mivi-original-imag3sgmftykbsgv.jpeg?q=70"
    ],
    RatingReviewData :[
        {title:"Worth every penny",
         rating:"5",
         desc:"Design & portability : Perfect(5 star)",
         images:[]
        },
        {title:"Simply awesome",
        rating:"3.5",
        desc:"Best quality sound and affordable price..Also battery backup so good I love this product",
        images:[]
        },
        {title:"Value-for-money",
        rating:"4",
        desc:"I am buy first time blutooth speaker for home so I am very very happy with this product.This mivi blutooth speaker quality is better than any brands sound quality. I thanks to mivi my heart because you are Indian and your product is made in india. All guys I recommend to you please you all buy this blutooth speaker and enjoy full day full night every time. In last thanks to mivi and flipkart",
        images:[]
        }
       ],
    },
    {
      _id: uuid(),
      categoryName: "Electronics",
      quntity:"1",
      title: "boAt Airdopes 131 Bluetooth Headset  (Cherry Blossom, True Wireless)",
      Electronics_type:"Bluetooth Headset",
      costprice:"2,990",
      saleingprice: "1,299",
      extraOff : "200",
      percentOff:"56", 
      packagingCharges : "free",
      Rating:"4.3",
      Reviews:"70,398",
      Image:"https://rukminim2.flixcart.com/image/316/316/ksdjma80/headphone/u/4/o/airdopes-131-airdopes-138-boat-original-imag5yzacvxdzu6p.jpeg?q=70",
      Availableoffers : [
            "Bank Offer10% off on Federal Bank Cards, up to ₹1500. On orders of ₹5000 and above",
            "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
            "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
      ],
    BuywithoutExchange : "",
    BuywithExchange : "",
    Warranty:"1 Year Warranty",
    RAM:"",
    DeliverBy:"Delivery by 25 Mar, Friday",
    Change:"Free",
    Highlights:[
               "With Mic:Yes",
               "Bluetooth version: 5",
               "Wireless range: 10 m",
               "Charging time: 2 Hours",
               "Instant Voice Assistant",
               "Type-C Charging Port | Upto 15 hours of total playtime",
               "IWP Technology(Earbuds power on automatically as one opens the case)"
              ] ,
    EasyPaymentOptions:[
               "Cash on Delivery",
               "Net banking & Credit/ Debit/ ATM card"
            ],
    Replacement:"7 days Returns Applicable",
    Specifications:[
      {Name:"General",
      SubItem:[ 
                {type:"Model Name",value:"Airdopes 131 / Airdopes 138"},
                {type:"Color",value:"Cherry Blossom"},
                {type:"Headphone Type",value:"True Wireless"},
                {type:"Inline Remote",value:"No"},
                {type:"Sales Package",value:"Airdopes 131,Charging Case, Type-c Charging, User Manual, Warranty Card"},
                {type:"Connectivity",value:"Bluetooth"},
                {type:"Headphone Design",value:"Earbud"},
              ]
      },
      {Name:"Product Details",
      SubItem:[ 
                {type:"Sweat Proof",value:"No"},
                {type:"Foldable/Collapsible",value:"No"},
                {type:"Deep Bass",value:"Yes"},
                {type:"Designed For",value:"Apple, Android, Windows"},
                {type:"Other Features",value:"Up-to 12 hrs Playback with Carrying Case (Up-to 4x Charge), Type-C Charging Port, Insta wake N' Pair"},
                {type:"Headphone Driver Units",value:"13 mm"},
                {type:"With Microphone",value:"Yes"},
              ]
      },
      {Name:"Connectivity Features",
      SubItem:[ 
                {type:"Bluetooth Version",value:"5"},
                {type:"Bluetooth Range",value:"10 m"},
                {type:"Charging Time",value:"2"},
                {type:"Play Time",value:"15 Hours"},
                {type:"Standby Time",value:"100 Hours"},
              ]
      },
      {
        Name:"Warranty", 
        SubItem:[
            {type:"Warranty Summary",value:"1 Year"},
            {type:"Warranty Service Type",value:"Reach out to us at info@imaginemarketingindia.com/+912249461882/support.boat-lifestyle.com. Alternatively you can activate your warranty by giving a missed call on 9223032222"},
            {type:"Covered in Warranty",value:"Manufacturing Defects"},
            {type:"Not Covered in Warranty",value:"Physical Damages"},
            {type:"Domestic Warranty",value:"1 Year"},
          ]
      },
    ],
    
    SmallImages:[
            "https://rukminim1.flixcart.com/image/128/128/ksdjma80/headphone/u/4/o/airdopes-131-airdopes-138-boat-original-imag5yzacvxdzu6p.jpeg?q=70",
            "https://rukminim1.flixcart.com/image/128/128/kvba7bk0/headphone/9/6/i/-original-imag88h4gxetgjzg.jpeg?q=70",
            "https://rukminim1.flixcart.com/image/128/128/kvba7bk0/headphone/r/9/p/-original-imag88h4kzdq5quw.jpeg?q=70",
            "https://rukminim1.flixcart.com/image/128/128/kvba7bk0/headphone/r/d/c/-original-imag88h4y5fhb2qg.jpeg?q=70",
            "https://rukminim1.flixcart.com/image/128/128/kvba7bk0/headphone/b/k/m/-original-imag88h4uxw4dqpk.jpeg?q=70"
    ],
    RatingReviewData :[
        {title:"Mind-blowing purchase",
         rating:"5",
         desc:"I hope you guys find this review helpful, well it's too soon for a review but I think it's worth every penny,",
         images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202110/blobio-imr-202110_2532d013e6734ed8bc5553f05a962f76.jpg?q=90"]
        },
        {title:"Good choice",
        rating:"4",
        desc:"Nice and smooth quality earbuds of boats. I am like this products sound quality good",
        images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202008/blobio-imr-202008_5ab9e0871f1f4becb440c4a97963c972.jpg?q=90"]
        },
       ],
    },
     //Home
  {
    _id: uuid(),
    categoryName: "Home",
    quntity:"1",
    title: "LooMantha Rectangular Pack of 6 Table Placemat  (Multicolor, PVC)",
    type:"Table Placemat",
    costprice:"500",
    saleingprice: "99",
    extraOff : "0",
    percentOff:"80", 
    Rating:"4",
    Reviews:"873",
    Status:"Sold Out",
    Image:"https://rukminim2.flixcart.com/image/216/216/kfmv9u80/table-placemat/g/v/g/l-3-table-placemat-loomantha-original-imafwfz8abhyc9mh.jpeg?q=70",
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
              {type:"Sales Package",value:"Table mats: 6 Pc"} ,
              {type:"Number of Contents in Sales Package",value:"Pack of 6"} ,  
            ]
    },
    {
      Name:"General", 
      SubItem:[
          {type:"Brand",value:"LooMantha"},
          {type:"Color",value:"Multicolor"},
          {type:"Material",value:"PVC"},
          {type:"Shape",value:"Rectangular"},
          {type:"Heat Proof",value:"Yes"},
          {type:"Handmade",value:"No"},
          {type:"Style Code",value:"L-3 Table Placemat"},
        ]
    },
    {
      Name:"Fabric Care", 
      SubItem:[
          {type:"Fabric Care",value:"Wipe with a wet cloth"},
        ]
    },
    {
      Name:"Additional Features", 
      SubItem:[
                {type:"Reversible",value:"No"},
            ]
    },
    {
      Name:"Dimensions", 
      SubItem:[
          {type:"Width",value:"11 inch / 30 cm"},
          {type:"Height",value:"17 inch / 45 cm"},
        ]
    }, 
  ],
  SmallImages:[
    "https://rukminim1.flixcart.com/image/128/128/kfmv9u80/table-placemat/g/v/g/l-3-table-placemat-loomantha-original-imafwfz8abhyc9mh.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/kfmv9u80/table-placemat/g/v/g/l-3-table-placemat-loomantha-original-imafwfz8bcjrhzeu.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/kg5fzww0/table-placemat/g/v/g/l-3-table-placemat-loomantha-original-imafwg6gzyyv2qw4.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/kg5fzww0/table-placemat/g/v/g/l-3-table-placemat-loomantha-original-imafwg6gyu2tqkec.jpeg?q=70"
              ],
  RatingReviewData :[

      {title:"Good choice",
      rating:"1",
      desc:"Best",
      images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202102/blobio-imr-202102_c0dd8c6525cc4ca8b76fa036fd0c624d.jpeg?q=90"]
      },
      {title:"Terrific purchase",
      rating:"5",
      desc:"Nice looking product",
       images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202101/blobio-imr-202101_87e60d771bd04ff999b688c107ea3d85.jpg?q=90",
               "https://rukminim1.flixcart.com/blobio/124/124/imr-202101/blobio-imr-202101_0ba41121a24648b5a994bf13c7f98f39.jpg?q=90"]
      },
      {
        title:"Perfect product!",
        rating:"5",
        desc:"Nice item Quality is good",
        images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202109/blobio-imr-202109_8994185d52234637ab7541839b91cb2f.jpeg?q=90"]
      },
     ],
  },
  {
    _id: uuid(),
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
  {
    _id: uuid(),
    categoryName: "Home",
    quntity:"1",
    title: "Adimanav 213.36 cm (7 ft) Polyester Door Curtain (Pack Of 3)  (Floral, Green, Off White)",
    type:"Door Curtain",
    costprice:"499",
    saleingprice: "1499",
    extraOff : "20",
    percentOff:"66", 
    Rating:"4",
    Reviews:"744",
    Status:"Available",
    Image:"https://rukminim2.flixcart.com/image/216/216/kkzrpu80/curtain/b/k/r/floral-design-set-of-4-window-curtains-152-4-window-adi073-original-imagy7hzdczp2fby.jpeg?q=70",
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
    {Name:"Details",
    SubItem:[ 
              {type:"Model Name",value:"FLORAL DESIGN DOOR CURTAINS"} ,
              {type:"Model Number",value:"ADI079"} ,
              {type:"Lining",value:"No"} ,
              {type:"Reversible",value:"No"} ,
              {type:"Transparency",value:"Blackout"} ,
              {type:"Fabric Care",value:"Normal Hand Wash.Do Not Bleach"} ,
              {type:"Sales Package",value:"3 Door Curtains"} ,
            ]
    },
  ],
  SmallImages:[
    "https://rukminim1.flixcart.com/image/128/128/kkzrpu80/curtain/b/k/r/floral-design-set-of-4-window-curtains-152-4-window-adi073-original-imagy7hzdczp2fby.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/kkzrpu80/curtain/x/4/j/floral-design-set-of-4-window-curtains-152-4-window-adi073-original-imagy7hzdyubaqfy.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/kkzrpu80/curtain/d/r/a/floral-design-set-of-4-window-curtains-152-4-window-adi073-original-imagy7hz3b6g42hu.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/kkzrpu80/curtain/j/f/6/floral-design-set-of-4-window-curtains-152-4-window-adi073-original-imagy7hzc7zq6nyu.jpeg?q=70"
        ],
  RatingReviewData :[
      {title:"Good choice",
      rating:"4",
      desc:"Good",
      images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202106/blobio-imr-202106_a2057f356fc240b1abc529db0596feea.jpg?q=90"]
      },
      {title:"Nice",
      rating:"5",
      desc:"Best quality best colour and very nice product 👌",
       images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202112/blobio-imr-202112_1fb6c3d339df48a49d6f3dc77a6bd4a5.jpg?q=90"]
      },
      {
        title:"Classy product",
        rating:"5",
        desc:"Shandar, Value for money... 😊",
        images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202112/blobio-imr-202112_04d70d7b8cab4fffb310c2ce7eb8bafe.jpg?q=90"]
      },
     ],
  },
  {
    _id: uuid(),
    categoryName: "Home",
    quntity:"1",
    title: "Flipkart SmartBuy Microfibre Stripes Cushion Pack of 5  (White)",
    type:"Cushion",
    costprice:"499",
    saleingprice: "2299",
    extraOff : "20",
    percentOff:"78", 
    Rating:"4",
    Reviews:"1,244",
    Status:"Available",
    Image:"https://rukminim2.flixcart.com/image/216/216/khqllzk0/pillow/j/v/h/big-fcush-05-big-fcush-05-flipkart-smartbuy-original-imafxzks8sx7hnuu.jpeg?q=70",
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
              {type:"Sales Package",value:"5 Pcs 18X18 inch Cushion Filler"} ,
              {type:"Number of Contents in Sales Package",value:"5"} ,
            ]
    },
    {Name:"General",
    SubItem:[ 
              {type:"Brand",value:"Flipkart SmartBuy"} ,
              {type:"Color",value:"White"} ,
              {type:"Type",value:"Cushion"} ,
              {type:"External Material",value:"Polyester"} ,
              {type:"Filling Material",value:"Microfibre"} ,
              {type:"Model Name",value:"BIG-FCUSH-05"} ,
              {type:"Model ID",value:"BIG-FCUSH-05"} ,
            ]
    },
    {Name:"Additional Features",
    SubItem:[ 
              {type:"Additional Features",value:"18X18 Inch Cushion Filler"} ,
            ]
    },
    {Name:"Dimensions",
    SubItem:[ 
              {type:"Width",value:"46 cm"} ,
              {type:"Length",value:"46 cm"} ,
              {type:"Depth",value:"20 cm"} ,
              {type:"Weight",value:"400 g"} ,
            ]
    },
  ],
  SmallImages:[
              "https://rukminim1.flixcart.com/image/128/128/khqllzk0/pillow/j/v/h/big-fcush-05-big-fcush-05-flipkart-smartbuy-original-imafxzks8sx7hnuu.jpeg?q=70",
              "https://rukminim1.flixcart.com/image/128/128/khqllzk0/pillow/j/v/h/big-fcush-05-big-fcush-05-flipkart-smartbuy-original-imafxzksugpgnggb.jpeg?q=70",
              "https://rukminim1.flixcart.com/image/128/128/khuvxjk0/pillow/j/v/h/big-fcush-05-big-fcush-05-flipkart-smartbuy-original-imafxsfnj8wq3xus.jpeg?q=70",
              "https://rukminim1.flixcart.com/image/128/128/k0bbb0w0/pillow/s/h/h/fcush-03-fcush-03-flipkart-smartbuy-original-imafk49fasgue6a9.jpeg?q=70",
              "https://rukminim1.flixcart.com/image/128/128/kzn17680/allen-key-set/2/i/5/-original-imagbhwtwcgs7ufq.jpeg?q=70"
            ],
  RatingReviewData :[
      {title:"Good choice",
      rating:"4",
      desc:"Finely packed .. Some stiches are not good .. But product s simply superb .. Material too as shown in the fig .. happy with the product and delivery ..",
      images:[]
      },
      {title:"Not good",
      rating:"2",
      desc:"Quality is good but size size is small...it is 48 cm but after opening the cushion because of fluffyness the size reduced to 38 cm",
       images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202103/blobio-imr-202103_9c0eb285b9fb48e984422d879d6a3bfc.jpg?q=90"]
      },
      {
        title:"Super se uper",
        rating:"5",
        desc:"very nice cushions ,and also in affordable range which u never find in market .must buy for those who are looking for good quality cushions.",
        images:[]
      },
     ],
  },
  {
    _id: uuid(),
    categoryName: "Home",
    quntity:"1",
    title: "pooshu Red Study lamp Desk Light for School and College Students Table Lamp  (22 cm, Red)",
    type:"Table Lamp",
    costprice:"259",
    saleingprice: "576",
    extraOff : "0",
    percentOff:"55", 
    Rating:"2.4",
    Reviews:"1,044",
    Status:"Available",
    Image:"https://rukminim2.flixcart.com/image/216/216/keaaavk0/table-lamp/x/f/z/table-lamp-table-lamp-25-cm-red-red-study-lamp-satish-electrinic-original-imafuzwyzuyfjhfr.jpeg?q=70",
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
    {Name:"General",
    SubItem:[ 
              {type:"Sales Package",value:"table lamp"} ,
              {type:"Model Number",value:"STUDY-LAMP-RED 3"} ,
              {type:"Model Name",value:"Red Study lamp Desk Light for School and College Students"} ,
            ]
    },
    {Name:"Product Details",
    SubItem:[ 
              {type:"Light Color",value:"White"} ,
              {type:"Other Features",value:"Pen Stand"} ,
            ]
    },
    {Name:"Dimensions",
    SubItem:[ 
              {type:"Width",value:"6 cm"} ,
              {type:"Height",value:"22 cm"} ,
            ]
    },
    {Name:"More Details",
    SubItem:[ 
              {type:"Generic Name",value:"Table Lamp"} ,
              {type:"Country of Origin",value:"India"} ,
            ]
    },
  
  ],
  SmallImages:[
    "https://rukminim2.flixcart.com/image/416/416/keaaavk0/table-lamp/x/f/z/table-lamp-table-lamp-25-cm-red-red-study-lamp-satish-electrinic-original-imafuzwyzuyfjhfr.jpeg?q=70"
              ],
  RatingReviewData :[
      {title:"Brilliant",
      rating:"4",
      desc:"The product is very good the build quality is awesome and plastic used in the bottom is very good quality plastic and the top of the cap is fully metal so I Happy this product this is totally value for money and made in India also and the best part is I saw sticker on the product feedback sticker I am very impressed with this",
      images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202104/blobio-imr-202104_bfd2673008454102a2883a13a5b36b3b.jpg?q=90",
              "https://rukminim1.flixcart.com/blobio/124/124/imr-202104/blobio-imr-202104_46faa514c2f74eeebec312ddadd585a6.jpg?q=90",
              "https://rukminim1.flixcart.com/blobio/124/124/imr-202104/blobio-imr-202104_d7b1f961764d4e43978dcfcd0d710c54.jpg?q=90"]
      },
      {title:"Pretty good",
      rating:"2",
      desc:"Value for money 👍.. must buy it..",
       images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202105/blobio-imr-202105_be7cd649b739461f84716918ce1b0dd6.jpg?q=90",
               "https://rukminim1.flixcart.com/blobio/124/124/imr-202105/blobio-imr-202105_2026782a97fb402c802d504e0aa521e0.jpeg?q=90"]
      },
      {
        title:"Good choice",
        rating:"5",
        desc:"Nice product ☺️",
        images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202105/blobio-imr-202105_bd4491bd434047c39f0ff8687d96cc50.jpeg?q=90"]
      },
     ],
  },
  {
    _id: uuid(),
    categoryName: "Home",
    quntity:"1",
    title: "Sigaram Analog Multicolor Clock",
    type:"Clock",
    costprice:"245",
    saleingprice: "699",
    extraOff : "0",
    percentOff:"64", 
    Rating:"3.9",
    Reviews:"1,374",
    Status:"Available",
    Image:"https://rukminim2.flixcart.com/image/216/216/ktuewsw0/table-clock/u/t/l/stylish-elegant-designer-table-alarm-clock-k921-sigaram-original-imag73tamhffx83j.jpeg?q=70",
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
    {Name:"General",
    SubItem:[ 
              {type:"Model Number",value:"K921"} ,
              {type:"Model Name",value:"Stylish Elegant Designer Table-Alarm Clock"} ,
              {type:"Material",value:"Polymer"} ,
              {type:"Pack of",value:"1"} ,
              {type:"Sales Package",value:"1 Table Clock"} ,
            ]
    },
    {Name:"Product Details",
    SubItem:[ 
              {type:"Number of Batteries",value:"1"} ,
              {type:"Number of Display Hands",value:"3Display Hands"} ,
              {type:"Power Source",value:"A4 Battery"} ,
              {type:"Dial Color",value:"White"} ,
            ]
    },
    {Name:"Dimensions",
    SubItem:[ 
              {type:"Width",value:"165 mm"} ,
              {type:"Height",value:"180 mm"} ,
              {type:"Depth",value:"65 mm"} ,
            ]
    },
    {Name:"Warranty",
    SubItem:[ 
              {type:"Warranty Summary",value:"6 Months Warrenty Manufacture Warrenty"} ,
            ]
    },
    {Name:"More Details",
    SubItem:[ 
              {type:"Generic Name",value:"Table Clocks"} ,
              {type:"Country of Origin",value:"China"} ,
            ]
    },
   

  ],
  SmallImages:[
              "https://rukminim1.flixcart.com/image/128/128/ktuewsw0/table-clock/u/t/l/stylish-elegant-designer-table-alarm-clock-k921-sigaram-original-imag73tamhffx83j.jpeg?q=70",
              "https://rukminim1.flixcart.com/image/128/128/ktuewsw0/table-clock/z/0/f/stylish-elegant-designer-table-alarm-clock-k921-sigaram-original-imag73tazjnggg4s.jpeg?q=70",
              "https://rukminim1.flixcart.com/image/128/128/ktuewsw0/table-clock/6/j/k/stylish-elegant-designer-table-alarm-clock-k921-sigaram-original-imag73tagfpt9uhy.jpeg?q=70"
              ],
  RatingReviewData :[
      {title:"Simply awesome",
      rating:"5",
      desc:"Very beautiful 😍..my brother gifted it in Rakshabandhan and I just loved it.. working properly as it have been 2-3 months...look is fantastic!!",
      images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202010/blobio-imr-202010_002a3c6fdfee410599ac952fed0c457d.jpeg?q=90"]
      },
      {title:"Excellent",
      rating:"5",
      desc:"one of the best product in Flipkart good quality and very very good product thank you Flipkart",
       images:[]
      },
      {
        title:"Really Nice",
        rating:"4",
        desc:"Awesome",
        images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202101/blobio-imr-202101_a489910f6f864b729069607008e0ec7a.jpg?q=90"]
      },
     ],
  },
  {
    _id: uuid(),
    categoryName: "Home",
    quntity:"1",
    title: "uberlyfe Jute Double Sofa Bed  (Finish Color - Grey Mechanism Type - Fold Out Delivery Condition - Pre-assembled)",
    type:"Clock",
    costprice:"13,000",
    saleingprice: "7,964",
    extraOff : "500",
    percentOff:"38", 
    Rating:"3.9",
    Reviews:"1,374",
    Status:"Available",
    Image:"https://rukminim2.flixcart.com/image/216/216/l09w8sw0/sofa-bed/c/h/y/-original-imagc3ryca2d5ths.jpeg?q=70",
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
    {Name:"Important Note",
    SubItem:[ 
              {type:"Cancellation",value:"Cancellation NOT allowed for this product after 24 hrs of order booking."} ,
              {type:"Warranty",value:"1 years Warranty from the date of purchase"} ,
            ]
    },
    {Name:"General",
    SubItem:[ 
              {type:"In The Box",value:"1 Sofa cum Bed with 2 Cushions(Zigzag Pattern)"} ,
              {type:"Brand",value:"uberlyfe"} ,
              {type:"Model Number",value:"SCB-001732-BK_New"} ,
              {type:"Filling Material",value:"Foam"} ,
              {type:"Bed Size",value:"Double"} ,
              {type:"Type",value:"Sofa Bed"} ,
              {type:"Finish Type",value:"Matte"} ,
              {type:"Seating Capacity",value:"2 Seater"} ,
              {type:"Shape",value:"Rectangular"} ,
              {type:"Mattress Included",value:"Yes"} ,
              {type:"Style",value:"Contemporary & Modern"} ,
              {type:"Storage Included",value:"No"} ,
              {type:"Mechanism Type",value:"Fold Out"} ,
              {type:"Care Instructions",value:"Do not Jump, Covers are machine washable, Clean with a wet cloth"} ,
              {type:"Upholstery Included",value:"Yes"} ,
              {type:"Upholstery Type",value:"Cushion"} ,
              {type:"Delivery Condition",value:"Pre-assembled"} ,
              {type:"Suitable For",value:"Living Room, Seating, Bedroom"} ,
              {type:"Model Series Name",value:"Jute"} ,
              {type:"Mattress Type",value:"Foam Mattress 4 X 6"} ,
              {type:"Floor Clearance",value:"0 cm"} ,
              {type:"Removable Leg",value:"No"} ,
              {type:"Storage Type",value:"N/A"} ,
            ]
    },
    {Name:"Material & Color",
    SubItem:[ 
              {type:"Upholstery Material",value:"Fabric"} ,
              {type:"Upholstery Material Subtype",value:"Jute"} ,
              {type:"Frame Material Subtype",value:"Foam"} ,
              {type:"Primary Color",value:"Grey"} ,
              {type:"Finish Color",value:"Grey"} ,
              {type:"Upholstery Color",value:"Black"} ,
            ]
    },
    {Name:"Additional Features",
    SubItem:[ 
              {type:"Accessories Included",value:"2 Cushions(Zigzag Pattern)"} ,
              {type:"Origin of Manufacture",value:"India"} ,
            ]
    },
    {Name:"Dimensions",
    SubItem:[ 
              {type:"Width",value:"119.38 cm"} ,
              {type:"Height",value:"20.32 cm"} ,
              {type:"Depth",value:"186.7 cm"} ,
              {type:"Weight",value:"13 kg"} ,
              {type:"Mattress Height",value:"182.88 cm"} ,
              {type:"Mattress Thickness",value:"20.32 cm"} ,
              {type:"Other Dimensions",value:"72 X 47 X 8 Inch"} ,
            ]
    },
    {Name:"Warranty",
    SubItem:[ 
              {type:"Warranty Summary",value:"1 years Warranty from the date of purchase"} ,
              {type:"Covered in Warranty",value:"1 years warranty"} ,
            ]
    },
   
  ],
  SmallImages:[
    "https://rukminim1.flixcart.com/image/128/128/l09w8sw0/sofa-bed/c/h/y/-original-imagc3ryca2d5ths.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/k1tm1e80/sofa-bed/b/m/e/double-black-jute-scb-001732-bk-new-uberlyfe-black-original-imafhaj4sy7ytgxz.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/k1tm1e80/sofa-bed/b/m/e/double-black-jute-scb-001732-bk-new-uberlyfe-black-original-imafh6sz93dtqscn.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/k1tm1e80/sofa-bed/b/m/e/double-black-jute-scb-001732-bk-new-uberlyfe-black-original-imafh7ajsysczayb.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/k1tm1e80/sofa-bed/b/m/e/double-black-jute-scb-001732-bk-new-uberlyfe-black-original-imafhaj4f8qnuzdm.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/k1tm1e80/sofa-bed/m/y/x/double-dark-grey-with-striped-black-pattern-cushion-jute-scb-original-imafh6szbpeha8tg.jpeg?q=70"
              ],
  RatingReviewData :[
      {title:"Really nice one",
      rating:"3.5",
      desc:"Overall it's a good product. Looks simple and nice. I have used it for a week only so would edit my review after 6 month's to update regarding durability.",
      images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202002/blobio-imr-202002_2bb4c951aee94d9f88e86f50a6771c1d.jpg?q=90"]
      },
      {title:"Delightful",
      rating:"4",
      desc:"Its definitely a 5* product. Except the dimension mentioned for width is 2 inches less.",
       images:[]
      },
      {
        title:"Best in the market!",
        rating:"4",
        desc:"Totally satisfied! Zero complaints. Beautiful finish... Comfortable and lightweight. The inside is made of high-quality foam. I hope it lasts long. A mat is suggested to purchase makes the sofa more flexible and dirt-free bottom. The bed conversion is superb & very thick and seems like an expensive mattress when open. Nicely packaged delivery within 4 Days. The cushions come vacuumed and no air inside but it inflates as soon as unpacked. MUST BUY!",
        images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202005/blobio-imr-202005_c7c1e2c33cfd47d9bc1e2dfae9b2dd2a.jpg?q=90"]
      },
     ],
  },
  {
    _id: uuid(),
    categoryName: "Home",
    quntity:"1",
    title: "MILTON Executive 3 Containers Lunch Box  (1010 ml)",
    type:"Clock",
    costprice:"385",
    saleingprice: "304",
    extraOff : "0",
    percentOff:"21", 
    Rating:"3.8",
    Reviews:"28,374",
    Status:"Available",
    Image:"https://rukminim2.flixcart.com/image/216/216/k0flmkw0/lunch-box/x/j/y/executive-milton-3-original-imafk8faa9hkxuzr.jpeg?q=70",
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
    {Name:"Description",
    SubItem:[ 
              {type:"Lunch Box Material",value:"Lunch Box Material: Stainless Steel Ideal Usage: Office, College, School Thermoware Capacity: 1300 Number of Containers: 3"} ,
            ]
    },
    {Name:"General",
    SubItem:[ 
              {type:"In The Box",value:"1 Lunch Box with 3 Containers 2 spoons"} ,
              {type:"Series",value:"Executive"},
              {type:"Safety Features",value:"Dishwasher Safe"},
              {type:"Leak Resistant",value:"Yes"},
              {type:"Other Lunch Box Features",value:"AIR TIGHT CONTAINER"},
            ]
    },
   
  ],
  SmallImages:[
    "https://rukminim1.flixcart.com/image/128/128/k0flmkw0/lunch-box/x/j/y/executive-milton-3-original-imafk8faa9hkxuzr.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/k0flmkw0/lunch-box/x/j/y/executive-milton-3-original-imafk8fahzfsbjmb.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/k0flmkw0/lunch-box/u/8/j/executive-milton-3-original-imafk8fayharup9c.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/k0flmkw0/lunch-box/u/8/j/executive-milton-3-original-imafk8faazyzpezn.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/k0flmkw0/lunch-box/u/8/j/executive-milton-3-original-imafk8faz9dth5yn.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/k0flmkw0/lunch-box/u/8/j/executive-milton-3-original-imafk8faz9dth5yn.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/128/128/k0flmkw0/lunch-box/u/8/j/executive-milton-3-original-imafk8f9gr8gmwyj.jpeg?q=70"
              ],
  RatingReviewData :[
      {title:"Fabulous!",
      rating:"4",
      desc:"Very easy to handel and that bag is like a very good protector. Love this product with this price. The brand is actually trustable.",
      images:["https://rukminim1.flixcart.com/blobio/124/124/imr-201911/blobio-imr-201911_3ffca3cbb8914548b2c32004fe75b21f.jpg?q=90"]
      },
      {title:"Worth every penny",
      rating:"4",
      desc:"Nice and genuine product as mentioned. It will be better if the bottom rectangle box provided with stainless steel.",
       images:["https://rukminim1.flixcart.com/blobio/124/124/imr-201912/blobio-imr-201912_818238790e984981817045cccb41b4f1.jpg?q=90",
               "https://rukminim1.flixcart.com/blobio/124/124/imr-201912/blobio-imr-201912_077da40c52ee4c999c3c1490bbec81c8.jpg?q=90"]
      },
      {
        title:"Perfect product!",
        rating:"5",
        desc:"overall size is bigger than expected.",
        images:["https://rukminim1.flixcart.com/blobio/124/124/20181026/blobio-20181026_gfv35a75.jpg?q=90",
                "https://rukminim1.flixcart.com/blobio/124/124/20181026/blobio-20181026_e7d18k7f.jpg?q=90",
                "https://rukminim1.flixcart.com/blobio/124/124/20181026/blobio-20181026_d5orjnev.jpg?q=90",
                "https://rukminim1.flixcart.com/blobio/124/124/20181026/blobio-20181026_i575fo1i.jpg?q=90"
              ]
      },
     ],
  },
  {
    _id: uuid(),
    categoryName: "Home",
    quntity:"1",
    title: "Starbucks Color Changing Cold Cups Plastic Tumbler  (709 ml, Pack of 5)",
    type:"Tumbler",
    costprice:"1,800",
    saleingprice: "1,647",
    extraOff : "200",
    percentOff:"8", 
    Rating:"4.9",
    Reviews:"8,374",
    Status:"Available",
    Image:"https://rukminim2.flixcart.com/image/216/216/kfzq8i80/mug/g/v/g/color-changing-cold-cups-5-starbucks-original-imafwbwgrzh9hnxf.jpeg?q=70",
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
    {Name:"General",
    SubItem:[ 
              {type:"Opacity",value:"Translucent"} ,
              {type:"Occasion",value:"Festival"} ,
              {type:"Ideal For",value:"Friend"} ,
              {type:"With Handle",value:"No"} ,
              {type:"Handle Material",value:"NA"} ,
              {type:"Weight",value:"203 g"} ,
              {type:"Diameter",value:"100 mm"} ,
              {type:"Other Features",value:"Care & Usage : - Do not microwave - Top rack dishwasher safe - For cold beverage use only - Wash before use -Do not expose to the sun too long - Please read Care & Usage instructions carefully"} ,
              {type:"Width x Height x Depth",value:"106 mm x 174 mm x 173 mm"} ,
            ]
    },
   
  ],
  SmallImages:[
            "https://rukminim1.flixcart.com/image/128/128/kgsb1jk0/mug/g/v/g/color-changing-cold-cups-5-starbucks-original-imafwyb29hpxgh6s.jpeg?q=70",
            "https://rukminim1.flixcart.com/image/128/128/kgsb1jk0/mug/g/v/g/color-changing-cold-cups-5-starbucks-original-imafwyb2qrfgh5z8.jpeg?q=70",
            "https://rukminim1.flixcart.com/image/128/128/kgsb1jk0/mug/g/v/g/color-changing-cold-cups-5-starbucks-original-imafwyb2kqabab9s.jpeg?q=70",
            "https://rukminim1.flixcart.com/image/128/128/kgsb1jk0/mug/g/v/g/color-changing-cold-cups-5-starbucks-original-imafwyb2yjxwwwnc.jpeg?q=70",
            "https://rukminim1.flixcart.com/image/128/128/kgsb1jk0/mug/g/v/g/color-changing-cold-cups-5-starbucks-original-imafwyb2zxecqfgx.jpeg?q=70",
            "https://rukminim1.flixcart.com/image/128/128/kgsb1jk0/mug/g/v/g/color-changing-cold-cups-5-starbucks-original-imafwyb2qgfrchzq.jpeg?q=70"
              ],
  RatingReviewData :[
      {title:"Mind-blowing purchase!",
      rating:"4",
      desc:"Amazing stuff ! Super cool to drink my daily juices in varied colorful cups - new color daily .. love it , especially being a Starbucks fan!",
      images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202108/blobio-imr-202108_6d7f5debb15c4bec86d8694dfd3ddcf9.jpg?q=90"]
      },
      {title:"Simply awesome",
      rating:"4",
      desc:"I love the cups, get them",
       images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202111/blobio-imr-202111_7428c29243694c48bfdcb2a962103087.jpg?q=90"]
      },
     ],
  },
  {
    _id: uuid(),
    categoryName: "Home",
    quntity:"1",
    title: "IWS 144 TC Microfiber Double Geometric Bedsheet  (Pack of 1, Multicolor)",
    type:"Clock",
    costprice:"1,199",
    saleingprice: "249",
    extraOff : "0",
    percentOff:"79", 
    Rating:"3.9",
    Reviews:"18,374",
    Status:"Available",
    Image:"https://rukminim2.flixcart.com/image/216/216/k0463rk0/bedsheet/h/b/h/designer-3d1014-flat-iws-original-imafjz82cudnunjr.jpeg?q=70",
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
    {Name:"Important Note",
    SubItem:[ 
              {type:"Cancellation",value:"Cancellation NOT allowed for this product after 24 hrs of order booking."} ,
              {type:"Warranty",value:"1 years Warranty from the date of purchase"} ,
            ]
    },
    {Name:"General",
    SubItem:[ 
              {type:"In The Box",value:"2 Pillow Covers, 1 Bedsheet"} ,
              {type:"Brand",value:"IWS"} ,
              {type:"Color",value:"Multicolor"} ,
              {type:"Type",value:"Flat"} ,
              {type:"Size",value:"Double"} ,
              {type:"Material",value:"Microfiber"} ,
              {type:"Thread Count",value:"144"} ,
              {type:"Model Name",value:"Designer"} ,
              {type:"Model ID",value:"3d1014"} ,
            ]
    },
    {Name:"Fabric Care",
    SubItem:[ 
              {type:"Fabric Care",value:"Machine wash in normal water, Do not bleach, Tumble dry"} ,
              {type:"Machine Washable",value:"Yes"} ,
            ]
    },
    {Name:"Additional Features",
    SubItem:[ 
              {type:"Ideal for",value:"Adults"} ,
              {type:"Other Features",value:"Comes with 2 Pillow covers, 3d Bedsheet, Double Bed Size, Made in India"} ,
            ]
    },
    {Name:"Dimensions",
    SubItem:[ 
              {type:"Flat Sheet Width",value:"86 inch / 220 cm"} ,
              {type:"Flat Sheet Length",value:"92 inch / 235 cm"} ,
              {type:"Pillow Cover Width",value:"17 inch / 45 cm"} ,
              {type:"Pillow Cover Length",value:"27 inch / 69 cm"} ,
            ]
    },
   
  ],
  SmallImages:[
             "https://rukminim1.flixcart.com/image/128/128/k0463rk0/bedsheet/h/b/h/designer-3d1014-flat-iws-original-imafjz82cudnunjr.jpeg?q=70",
             "https://rukminim1.flixcart.com/image/128/128/k0463rk0/bedsheet/h/b/h/designer-3d1014-flat-iws-original-imafjz82xdgbuhqx.jpeg?q=70",
             "https://rukminim1.flixcart.com/image/128/128/kbdz5ow0/bedsheet/z/k/u/triple-border-dtp312-flat-dormir-tex-print-original-imafsr73pubawrzv.jpeg?q=70"
               ],
  RatingReviewData :[
      {title:"Really nice one",
      rating:"3.9",
      desc:"Everything fine except that the fabric is not pure cotton. It's a blend. Hope that doesn't feel too hot during summers. Will update after use.",
      images:["https://rukminim1.flixcart.com/blobio/124/124/201811/blobio-201811_gcoskvfi.jpg?q=90"]
      },
      {title:"Just okay",
      rating:"2.5",
      desc:"good quality but in size it should be big.....m happy i love it 👍",
       images:["https://rukminim1.flixcart.com/blobio/124/124/201811/blobio-201811_a9f6c16h.jpg?q=90"]
      },
      {
        title:"Best in the market!",
        rating:"4",
        desc:"Love with this bedsheet....simple superb one.....Good quality and d length is perfect all i need to check is colour after 1 wash....will update u aft washing and best one for best price.....Thank u flipcart😘😘",
        images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202001/blobio-imr-202001_4662accd882c4317b6187ab04dad2c86.jpg?q=90"]
      },
     ],
  },
   //Appliances
   {
    _id: uuid(),
    categoryName: "Appliances",
    quntity:"1",
    title: "AGARO Rapid 1000-Watt, 10-Litre Wet & Dry Vacuum Cleaner, with Blower Function Wet & Dry Vacuum Cleaner  (Red & Black)",
    type:"Vacuum Cleaner",
    costprice:"5,999",
    saleingprice: "3,491",
    extraOff : "408",
    percentOff:"41", 
    packagingCharges : "49",
    Rating:"4.2",
    Reviews:"1,234",
    Image:"https://rukminim2.flixcart.com/image/216/216/k7285u80/vacuum-cleaner/h/j/f/agaro-rapid-1000-watt-10-litre-wet-dry-vacuum-cleaner-with-original-imafpd9kadgsmtds.jpeg?q=70",
    Availableoffers : [
                "Bank Offer10% off on Federal Bank Cards, up to ₹1500. On orders of ₹5000 and above",
                "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                "Special PriceGet extra ₹408 off (price inclusive of discount)",
                "Partner OfferBuy this product and get upto ₹500 off on Flipkart Furniture",
                "EMI starting from ₹122/month"
    ],
  BuywithoutExchange : " Not applicable for this product ",
  BuywithExchange : " Not applicable for this product ",
  Warranty:"1 Year Manufacturer Warranty",
  RAM:"6GB",
  DeliverBy:"Delivery by21 Mar, Monday",
  Change:"Free",
  Highlights:["Wet & Dry Cleaner"] ,
  EasyPaymentOptions:["EMI starting from ₹122/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
  Replacement:"7 Days Replacement Policy",
  Specifications:[
    {Name:"In The Box",
    SubItem:[ 
              {type:"Sales Package",value:"1 Vacuum Cleaner"},
           ]
    },
    {Name:"General",
    SubItem:[ 
              {type:"Type",value:"Wet & Dry Cleaner"},
              {type:"WiFi Connectivity",value:"No"},
           ]
    },
    {Name:"Dimensions",
    SubItem:[ 
              {type:"W x H x D",value:"37 x 30 x 32 cm"},
              {type:"Net Weight",value:"4.2 kg"},
           ]
    },
    {Name:"More Details",
    SubItem:[ 
              {type:"Generic Name",value:"Vacuum Cleaners"},
              {type:"Country of Origin",value:"China"},
           ]
    },
  ],

  SmallImages:[
     "https://rukminim1.flixcart.com/image/128/128/k7285u80/vacuum-cleaner/h/j/f/agaro-rapid-1000-watt-10-litre-wet-dry-vacuum-cleaner-with-original-imafpd9kadgsmtds.jpeg?q=70",
     "https://rukminim1.flixcart.com/image/128/128/k7285u80/vacuum-cleaner/h/j/f/agaro-rapid-1000-watt-10-litre-wet-dry-vacuum-cleaner-with-original-imafpd9kgyg73z6v.jpeg?q=70",
     "https://rukminim1.flixcart.com/image/128/128/k7285u80/vacuum-cleaner/h/j/f/agaro-rapid-1000-watt-10-litre-wet-dry-vacuum-cleaner-with-original-imafpd9jhbpaaz5v.jpeg?q=70",
     "https://rukminim1.flixcart.com/image/128/128/k7285u80/vacuum-cleaner/h/j/f/agaro-rapid-1000-watt-10-litre-wet-dry-vacuum-cleaner-with-original-imafpd9km3pxbh5b.jpeg?q=70",
     "https://rukminim1.flixcart.com/image/128/128/k7285u80/vacuum-cleaner/h/j/f/agaro-rapid-1000-watt-10-litre-wet-dry-vacuum-cleaner-with-original-imafpd9k3gvgccbx.jpeg?q=70"
  ],
  RatingReviewData :[
      {title:"Good choice",
       rating:"4",
       desc:"Within this cost effective product, I have used this product last 5 days good build quality and easy to use and not so heavy, if you want an affordable vacuum cleaner go an buy this without any hesitation",
       images:[
            "https://rukminim1.flixcart.com/blobio/124/124/202108/blobio-202108_voep7jr1.jpeg?q=90"
          ]
      },
      {title:"Simply awesome",
      rating:"4",
      desc:"Its well and good for office use as well as home use and product have many features as well as long heavy wire attached to it so invest in this product was a good decision",
      images:[]
      },
      {title:"Simply awesome",
      rating:"5",
      desc:"I use this vaccume cleaner, realy nice product Light weight, and best in working.I recommended for use this vaccume cleaner",
      images:[]
      }
     ],
  },
  {
    _id: uuid(),
    categoryName: "Appliances",
    quntity:"1",
    title: "Whirlpool 6 kg With Hard water wash Fully Automatic Top Load Grey  (WM ROYAL 6.0 GENX GREY 5YMW)",
    type:"Whirlpool",
    costprice:"16,800",
    saleingprice: "14,490",
    extraOff : "400",
    percentOff:"13", 
    packagingCharges : "49",
    Rating:"4.2",
    Reviews:"877",
    Image:"https://rukminim2.flixcart.com/image/216/216/km57hjk0/washing-machine-new/b/9/x/wm-royal-6-0-genx-grey-5ymw-whirlpool-original-imagf3xfms7xrtzk.jpeg?q=70",
    Availableoffers : [
                "Bank Offer10% off on Federal Bank Cards, up to ₹1500. On orders of ₹5000 and above",
                "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                "Special PriceGet extra ₹408 off (price inclusive of discount)",
                "Partner OfferBuy this product and get upto ₹500 off on Flipkart Furniture",
                "No cost EMI ₹1,208/month. Standard EMI also available"
    ],
  BuywithoutExchange : " ₹14,490",
  BuywithExchange : " up to ₹2,200 off",
  Warranty:"2 Years Comprehensive Warranty and 5 Years on Motor from Whirlpool",
  RAM:"",
  DeliverBy:"Delivery by1 Apr, Friday,Installation & Demo by 4 Apr (Schedule delivery & Installation at your convenience)",
  Change:"Free",
  Highlights:[
         "Fully Automatic Top Load Washing Machines are ergonomically friendly and provide great wash quality",
         "740 rpm : Higher the spin speed, lower the drying time",
         "Number of wash programs - 12" ,
         "5 Star Rating",
         "6 kg"
  ] ,
  EasyPaymentOptions:["No cost EMI ₹1,208/month. Standard EMI also available","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
  Replacement:"10 Days Replacement Policy",
  Specifications:[
    {Name:"General",
    SubItem:[ 
              {type:"In The Box",value:"1 Washing Machine, Water Inlet Pipe, Detergent Cup, User Manual with Warranty, Drain Hose with Clamp, Rat Mesh"},
              {type:"Brand",value:"Whirlpool"},
              {type:"Model Name",value:"WM ROYAL 6.0 GENX GREY 5YMW"},
              {type:"Function Type",value:"Fully Automatic Top Load"},
              {type:"Energy Rating",value:"5"},
              {type:"Washing Capacity",value:"6 kg"},
              {type:"Washing Method",value:"Agipeller"},
              {type:"Maximum Spin Speed",value:"740 rpm"},
              {type:"In-built Heater",value:"No"},
              {type:"Color",value:"Grey"},
              {type:"Shade",value:"Grey"},
           ]
    },
    {Name:"Installation & Demo",
    SubItem:[ 
              {type:"Installation & Demo",value:"Authorised Service Engineer will install the Washing Machine, make it operational and explain the below details. 1. How to Use, 2. Features,3. Do's and Dont's."},
           ]
    },
    {Name:"Warranty",
    SubItem:[ 
              {type:"Warranty Summary",value:"2 Years Comprehensive Warranty and 5 Years on Motor from Whirlpool"},
              {type:"Covered in Warranty",value:"All Parts Excluding Outer Cabinet and Plastic Parts from the Date of Purchase will be Covered Under Warranty. This also Covers all Manufacturing Defects"},
              {type:"Not Covered in Warranty",value:"Parts: Outer Cabinet and Plastic Parts. Any Accessories External to the Product. The Product is Not Used according to the Instructions Given in the Instructions Manual. Defects Caused By Improper Use as Determined By the Company Personnel. Modification or Alteration of any Nature Made in the Electrical Circuitry/or Physical Construction of the Set. Site (Where the Premises is Kept) Conditions that Do not Confirm to the Recommended Operating Conditions of the Machine. The Serial Number is Removed, Altered or Obliterated from the Machine. Defects Due to Cause Beyond Control Like Lightning, Abnormal Voltage, Acts of God or While in Transit to the Service Centers or Purchaser's Residence"},
           ]
    },
    {Name:"Wash Modes",
    SubItem:[ 
              {type:"Wash Program Types",value:"12 - Daily, Heavy, Delicate, White, Stainwash, Eco, Woolens, Bedsheet, Rinse+Dry, Dry, Wash, Aqua Store"},
              {type:"Fuzzy Logic",value:"Yes"},
              {type:"Hot Wash",value:"No"},
              {type:"Quick Wash",value:"Yes"},
              {type:"Spin Only",value:"Yes"},
              {type:"Other Wash Modes",value:"Hard Water Wash, Zero Pressure Fill, 6th Sense Smart Sensors, Smart Detergent Dosage"},
           ]
    },
    {Name:"Body Features",
    SubItem:[ 
              {type:"Outer Body Material",value:"Metal"},
              {type:"Tub Material",value:"Steel"},
           ]
    },
    {Name:"Convenience Features",
    SubItem:[ 
              {type:"Digital Display",value:"Yes"},
              {type:"Tub Self-clean",value:"Yes"},
              {type:"Lint Filter",value:"Yes"},
              {type:"Memory Backup",value:"Yes"},
           ]
    },
    {Name:"Power Features",
    SubItem:[ 
              {type:"Power Requirement",value:"AC 220 - 230 V, 50 Hz"},
              {type:"Operating Current",value:"6 A"},
              {type:"Other Power Features",value:"Eco Cycle"},
           ]
    },
    {Name:"Additional Features",
    SubItem:[ 
              {type:"Child Lock",value:"Yes"},
              {type:"Door Lock",value:"Yes"},
              {type:"Other Features",value:"Spiro Wash, 6th Sense Voltage and Water Check Sensors, Smart Detergent Recommendation, Child Lock, Magic Lint Filter, Auto Tub Clean"},
           ]
    },
    {Name:"Dimensions",
    SubItem:[ 
              {type:"Width",value:"54 cm"},
              {type:"Height",value:"87 cm"},
              {type:"Depth",value:"56 cm"},
              {type:"Weight",value:"27 kg"},
           ]
    }, 
  ],

  SmallImages:[
        "https://rukminim1.flixcart.com/image/128/128/km57hjk0/washing-machine-new/b/9/x/wm-royal-6-0-genx-grey-5ymw-whirlpool-original-imagf3xfms7xrtzk.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/ks3jjbk0/washing-machine-new/d/6/q/wm-royal-6-0-genx-grey-5ymw-whirlpool-original-imag5qp3n26jg4rb.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/kltryq80/washing-machine-new/a/w/k/wm-royal-6-0-genx-grey-5ymw-whirlpool-original-imagyv9semfczhzz.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/kltryq80/washing-machine-new/a/g/d/wm-royal-6-0-genx-grey-5ymw-whirlpool-original-imagyv9sfqxyyggq.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/kltryq80/washing-machine-new/b/8/h/wm-royal-6-0-genx-grey-5ymw-whirlpool-original-imagyv9sqsgphmfr.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/kltryq80/washing-machine-new/k/5/k/wm-royal-6-0-genx-grey-5ymw-whirlpool-original-imagyv9shzgnmxtg.jpeg?q=70"
       ],
  RatingReviewData :[
      {title:"Fabulous!",
       rating:"4",
       desc:"Excellent washing machine with great features, Whirlpool is a clear winner in the variety of wash function it offers, very powerful motor and a five star rating.",
       images:[
            "https://rukminim1.flixcart.com/blobio/124/124/imr-202108/blobio-imr-202108_aa17e106e77240e6a553e38295d14b15.jpg?q=90"
          ]
      },
      {title:"Terrific",
      rating:"4",
      desc:"Very good product and wash quality is excellent with less power use and water use. Electricity consumption is really low with powerful motor. You can also operate thus machine through your inverter.",
      images:[]
      },
      {title:"Terrible product",
      rating:"1",
      desc:"Wast of money",
      images:[]
      }
     ],
  },
  {
    _id: uuid(),
    categoryName: "Appliances",
    quntity:"1",
    title: "ONIDA 1 Ton 3 Star Split Inverter AC - White  (IR123IVR, Copper Condenser)",
    type:"AC",
    costprice:"44,990",
    saleingprice: "26,999",
    extraOff : "400",
    percentOff:"39", 
    packagingCharges : "49",
    Rating:"4.2",
    Reviews:"1,077",
           
    Image:"https://rukminim1.flixcart.com/image/128/128/kv450280/air-conditioner-new/v/z/q/ir123ivr-split-onida-inverter-original-imag838tpt3rgp3t.jpeg?q=70",
    
    Availableoffers : [
                "Bank OfferGet 10% instant discount on SBI Credit Card, up to ₹1250",
                "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                "Special PriceGet extra ₹408 off (price inclusive of discount)",
                "Partner OfferBuy this product and get upto ₹500 off on Flipkart Furniture",
                "No cost EMI ₹1,208/month. Standard EMI also available"
    ],
  BuywithoutExchange : "Not applicable for this product",
  BuywithExchange : "Not applicable for this product",
  Warranty:"1 Year Warranty on Product and 5 Years on Compressor from Onida",
  RAM:"",
  DeliverBy:"Delivery by1 Apr, Friday,Installation & Demo by 4 Apr (Schedule delivery & Installation at your convenience)",
  Change:"Free",
  Highlights:[
        "1 Ton",
        "3 Star BEE Rating 2021 : For energy savings upto 15% (compared to Non-Inverter 1 Star)",
        "Auto Restart: No need to manually reset the settings post power-cut",
        "Copper : Energy efficient, best in class cooling with easy maintenance.",
        "Sleep Mode: Auto-adjusts the temperature to ensure comfort during your sleep"
  ] ,
  EasyPaymentOptions:["No cost EMI ₹324/month. Standard EMI also available","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
  Replacement:"10 Days Replacement Policy",
  Specifications:[
    {Name:"General",
    SubItem:[ 
              {type:"In The Box",value:"1 Washing Machine, Water Inlet Pipe, Detergent Cup, User Manual with Warranty, Drain Hose with Clamp, Rat Mesh"},
              {type:"Brand",value:"ONIDA"},
              {type:"Model Name",value:"IR123IVR"},
              {type:"Type",value:"Split"},
              {type:"Capacity in Tons",value:"1 Ton"},
              {type:"Star Rating",value:"3 Star BEE Rating"},
              {type:"BEE Rating Year",value:"2021"},
              {type:"Color",value:"White"},
              {type:"Cooling Capacity",value:"3520 W"},
              {type:"Compressor",value:"Rotary"},
              {type:"Dehumidification",value:"Yes"},
              {type:"Remote Control",value:"Yes"},
              {type:"Operating Modes",value:"Fan Mode"},
              {type:"Condenser Coil",value:"Copper"},
           ]
    },
    {
      Name:"Dimensions",
      SubItem:[ 
              {type:"Indoor W x H x D",value:"773 mm x 250 mm x 185 mm"},
              {type:"Indoor Unit Weight",value:"8.5 kg"},
              {type:"Outdoor W x H x D",value:"732 mm x 550 mm x 330 mm"},
              {type:"Outdoor Unit Weight",value:"23 kg"},
            ]
    },
    {
      Name:"Performance Features",
      SubItem:[ 
              {type:"Indoor Noise Level",value:"Low - 27 dB"},
              {type:"Cooling Coverage Area",value:"200 sq ft sq ft"},
            ]
    },
    {
      Name:"Body And Design Features",
      SubItem:[ 
              {type:"Condenser Fin Type",value:"Aluminium Fin Bare"},
            ]
    },
    {
      Name:"Air Flow & Filter Features",
      SubItem:[ 
              {type:"Anti-bacteria Filter",value:"No"},
              {type:"Dust Filter",value:"Yes"},
            ]
    },
    {
      Name:"Convenience Features",
      SubItem:[ 
              {type:"Auto Restart",value:"Yes"},
              {type:"Child Lock",value:"Yes"},
              {type:"Sleep Mode",value:"Yes"},
            ]
    },
    {
      Name:"Power Features",
      SubItem:[ 
              {type:"Power Requirement",value:"AC 230 V, 50 Hz"},
              {type:"Power Consumption",value:"1220 W"},
            ]
    },
    {
      Name:"Services",
      SubItem:[ 
              {type:"Installation Details",value:"The standard installation charges are Rs. 1599 and need to be paid directly to the service engineer. Please check the offer details to know about any installation offers that are available. Standard installation of air-conditioners covers only: 1) Drilling of holes into a brick wall for taking out the pipes. 2) Fixing a hole sleeve & cap. 3) Fixing the indoor and outdoor unit. 4) Connecting indoor and outdoor units using the standard Kit provided by the manufacturer (at additional cost, unless specified otherwise). 5) Wrapping the pipe with seasoning tape. Not covered as part of standard Installation charges are: 1) Outdoor unit stand - Rs. 750-1000. 2) Extra copper wire - Rs. 600-800 per metre. 3) Drain pipe extension, if any - Rs. 100 per metre. 4) Wiring extension from the meter to the installation site - Rs. 100 per metre. 5) Stabilizer, if needed, is chargeable. 6) Plumbing and masonry work. 7) Power-point/MCB fitting and any other electrical work. 8) Carpentry work. 9) Dismantling/shifting of the old AC's masonry - Rs. 1000-1500. 10) Core cutting fabrication and electrical."},
              {type:"Technician Visit Details",value:"Authorized Service Engineer will do the followin , Provide replacement to the customer in case part / product not repairable (only after replacement request approved) , Repair Services, Repair/change the defective part"},
              {type:"Uninstallation Details",value:"In case of returns , Uninstall , Pick-up the product , Flipkart's team will visit the customers location Pack"},
            ]
    },
    {
      Name:"Warranty",
      SubItem:[ 
              {type:"Warranty Summary",value:"1 Year Warranty on Product and 5 Years on Compressor from Onida"},
              {type:"Covered in Warranty",value:"Warranty of the Product is Limited to Manufacturing Defects Only."},
              {type:"Not Covered in Warranty",value:"Parts: Air Filter or Front Grill is Not Covered in the Warranty. The Warranty Does not Cover Installation or Demonstration. Accessories External to the System. The Product is not Used According to the Instructions Given in the Instruction Manual. Defects Caused by Improper Use as Determined by the Company Personnel. Modification or Alteration of Any Nature is made in the Electrical Circuitry or Physical Construction of the Set. Site (Premises where the Product is Kept) Conditions that Do not Confirm to the Recommended Operating Conditions of the Machine. Defects Due to Cause Beyond Control Like Lightning, Abnormal Voltage, Acts of God, While in Transit to Service Centers or Purchaser's Residence."},
              {type:"Warranty Service Type",value:"Technician Visit"},
            ]
    },
         
  ],

  SmallImages:[
        "https://rukminim1.flixcart.com/image/128/128/kv450280/air-conditioner-new/7/j/z/ir123ivr-split-onida-inverter-original-imag838te9g3m9tr.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/kv450280/air-conditioner-new/6/l/n/ir123ivr-split-onida-inverter-original-imag838tkbwyn3e7.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/kv450280/air-conditioner-new/v/z/q/ir123ivr-split-onida-inverter-original-imag838tpt3rgp3t.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/kv450280/air-conditioner-new/l/t/1/ir123ivr-split-onida-inverter-original-imag838tsvjmqyux.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/kv450280/air-conditioner-new/3/v/0/ir123ivr-split-onida-inverter-original-imag838tuwgfzunx.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/kv450280/air-conditioner-new/1/r/7/ir123ivr-split-onida-inverter-original-imag838tuad2amdc.jpeg?q=70"
       ],
  RatingReviewData :[
      {title:"Simply awesome!",
       rating:"4",
       desc:"Nice product",
       images:[]
      },
      {title:"Wonderful",
      rating:"4",
      desc:"Liked the product...quick delivery and installation",
      images:[]
      },
      {title:"Excellent",
      rating:"3.5",
      desc:"Efficient cooling within budget inverter AC at this price is actually very good. Satisfied with the product till jow rest will be known using after month and year.",
      images:[]
      }
     ],
  },
  {
    _id: uuid(),
    categoryName: "Appliances",
    quntity:"1",
    title: "Butterfly Plus Rapid 750 W Mixer Grinder (5 Jars, Ink Blue)#JustHere",
    type:"Mixer Grinder",
    costprice:"6,499",
    saleingprice: "2,949",
    extraOff : "300",
    percentOff:"54", 
    packagingCharges : "49",
    Rating:"4.2",
    Reviews:"1,234",
    Image:"https://rukminim2.flixcart.com/image/216/216/ko0d6kw0/mixer-grinder-juicer/0/h/u/plus-butterfly-original-imag2kadbfjzzayj.jpeg?q=70",
    Availableoffers : [
                "Bank Offer10% off on Federal Bank Cards, up to ₹1500. On orders of ₹5000 and above",
                "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                "Special PriceGet extra ₹408 off (price inclusive of discount)",
                "Partner OfferBuy this product and get upto ₹500 off on Flipkart Furniture",
                "EMI starting from ₹122/month"
    ],
  BuywithoutExchange : " ₹2,949 ",
  BuywithExchange : " Up to 600 off ",
  Warranty:"2 Years Warranty for Manufacturing Defects",
  RAM:"",
  DeliverBy:"Delivery by24 Mar, Thursday",
  Change:"Free",
  Highlights:["Centrifugal Juicer" , "750 W"] ,
  EasyPaymentOptions:["EMI starting from ₹103/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
  Replacement:"7 Days Replacement Policy",
  Specifications:[
    {Name:"General",
    SubItem:[ 
              {type:"Sales Package",value:"1 Mixer Grinder, Multi Purpose Jar (1.5 L), Juicer Jar (1.5 L), Grinding Jar (0.75 L), Chutney Jar (400 ml), Smart Grind and Store Jar, Storage Container, Spatula, User Manual with Warranty Card"},
              {type:"Power Required",value:"AC 230 V, 50 Hz"},
              {type:"Revolutions",value:"20000 RPM"},
              {type:"Auto Switch Off",value:"Yes"},
              {type:"Locking System",value:"No"},
              {type:"Material",value:"Acrylonitrile Butadiene Styrene Body"},
              {type:"Juicer Type",value:"Centrifugal Juicer"},
              {type:"Non-slip Feet",value:"No"},
              {type:"Seed Collector",value:"No"},
              {type:"Dry Grinding",value:"Yes"},
              {type:"Blending",value:"Yes"},
              {type:"Grating",value:"No"},
              {type:"Mincing",value:"No"},
              {type:"Chutney Grinding",value:"Yes"},
              {type:"Grinding Jar Capacity",value:"0.75 L"},
              {type:"Liquidizing Jar Capacity",value:"1.5 L"},
              {type:"Chutney Jar Capacity",value:"0.4 L"},
              {type:"Juice Extractor Jar Capacity",value:"1.5 L"},
              {type:"Other Features",value:"750 W Heavy Duty Motor for Tough Grinding Operations, 3 Speed Rotary Knobs for Various Operations"},
           ]
    },
    {Name:"Warranty",
    SubItem:[ 
              {type:"Warranty Summary",value:"2 Years Warranty for Manufacturing Defects"},
              {type:"Warranty Service Type",value:"Customer Needs to Call the Customer Care on 9362-01-9362 and Register the Complaints, Then Take the Product to the Nearby Authorized Service Center and Get the Service Done"},
              {type:"Covered in Warranty",value:"Manufacturing Defects"},
              {type:"Not Covered in Warranty",value:"Warranty Excludes Damage Caused to the Product Due to Normal Wear and Tear, Damages, Improper Handling, Adaptations or Adjustments which may be Made to the Product"},
              {type:"Domestic Warranty",value:"2 Year"},
           ]
    },
    {Name:"Dimensions",
    SubItem:[ 
              {type:"Depth",value:"39 cm"},
              {type:"Height",value:"31 cm"},
              {type:"Width",value:"24 cm"},
              {type:"Weight",value:"5.5 kg"},
           ]
    },

  ],

  SmallImages:[
        "https://rukminim1.flixcart.com/image/128/128/ko0d6kw0/mixer-grinder-juicer/0/h/u/plus-butterfly-original-imag2kadbfjzzayj.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/ko0d6kw0/mixer-grinder-juicer/7/j/u/plus-butterfly-original-imag2kadpx9d75zj.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/ko0d6kw0/mixer-grinder-juicer/v/a/o/plus-butterfly-original-imag2kadgbtsz9t2.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/ko0d6kw0/mixer-grinder-juicer/1/x/g/plus-butterfly-original-imag2kadrwh3cskn.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/ko0d6kw0/mixer-grinder-juicer/h/p/e/plus-butterfly-original-imag2kad9whpjzhg.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/ko0d6kw0/mixer-grinder-juicer/u/f/s/plus-butterfly-original-imag2kadm2g9zrtr.jpeg?q=70"
       ],
  RatingReviewData :[
      {title:"Perfect product!",
       rating:"4",
       desc:"Looking gud quality is gud no damages. Cost is worth of this item tq tqsomuch. Fastest delivery 👌i am very happy 😊😊😊",
       images:[
            "https://rukminim1.flixcart.com/blobio/178/178/imr-202105/blobio-imr-202105_f0b92d02e80b44399a2e1af90edc2bed.jpg?q=90"
          ]
      },
      {title:"Good quality product",
      rating:"4",
      desc:"Writing this review after first impression!Overall build quality is good! Stainless Steel of jars are top class! And overall look is nice! And that chutney jars are plus point! As I am writing review after unboxing so lookwise it is unique and classy! Build quality is also good! Not used too much but uptill now good in performance as well!Note: writing this review after unboxing so for performance read other reviews as well ! For look and build quality just go for it!Removed one star just ...",
      images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202107/blobio-imr-202107_6810c6da387d49eb9ccd35f6dfd944fb.jpg?q=90"]
      },
      {title:"Simply awesome",
      rating:"5",
      desc:"Very smooth motor.. 5 jar option is very nice for this price. We purchased it to replace our previous Butterfly mixer. In comparison the jar size in new model is bit smaller than older one. Otherwise everything is perfect",
      images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202105/blobio-imr-202105_744eea4d0fb541db8c37c5476b319c16.jpg?q=90"]
      }
     ],
  },
  {
    _id: uuid(),
    categoryName: "Appliances",
    quntity:"1",
    title: "SAMSUNG 28 L Slim Fry Convection Microwave Oven  (CE1041DSB2, Black)",
    type:"Microwave",
    costprice:"14,990",
    saleingprice: "11,589",
    extraOff : "301",
    percentOff:"22", 
    packagingCharges : "49",
    Rating:"4.2",
    Reviews:"1,977",
    Image:"https://rukminim2.flixcart.com/image/216/216/l09w8sw0/microwave-new/l/s/b/-original-imagc3ka2u9k8rqy.jpeg?q=70",
    Availableoffers : [
                "Bank OfferGet 10% instant discount on SBI Credit Card, up to ₹1250",
                "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                "Special PriceGet extra ₹408 off (price inclusive of discount)",
                "Partner OfferBuy this product and get upto ₹500 off on Flipkart Furniture",
                "No cost EMI ₹208/month. Standard EMI also available"
    ],
  BuywithoutExchange : " ₹11,589",
  BuywithExchange : " up to ₹800 off",
  Warranty:"1 year on Product and 4 years extended on Magnetron",
  RAM:"",
  DeliverBy:"Delivery by1 Apr, Friday,Installation & Demo by 4 Apr (Schedule delivery & Installation at your convenience)",
  Change:"Free",
  Highlights:[
         "28 L",
         "Convection",
         "Touch Key Pad (Membrane)" ,
         "5 Star Rating",
         "Child Lock "
  ] ,
  EasyPaymentOptions:["No cost EMI ₹208/month. Standard EMI also available","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
  Replacement:"10 Days Replacement Policy",
  Specifications:[
    {Name:"General",
    SubItem:[ 
              {type:"In The Box",value:"1 Roller Ring ,1 Microwave Oven , 1 Glass Turn Table , 1 Multispit and 1 User Manual with Warranty Card ,1 Wire Rack"},
              {type:"Brand",value:"SAMSUNG"},
              {type:"Model Name",value:"CE1041DSB2"},
              {type:"Type",value:"Convection"},
              {type:"Capacity",value:"28 L"},
              {type:"Color",value:"Black"},
              {type:"Shade",value:"Black"},
              {type:"Control Type",value:"Touch Key Pad (Membrane)"},
              {type:"Mount Type",value:"CMO"},
              {type:"Frequency",value:"2450 MHz"},
              {type:"Display Type",value:"LED"},
           ]
    },
    {Name:"Installation And Demo",
    SubItem:[ 
              {type:"Demo Details",value:"Explain all the functionality of the product , facilitate Demo service at time of your convenience from an brand authorized service engineer ,Flipkart will communicate the day and time slot of the scheduled Demo service through a SMS and the same information will also be available in your order details page Usage of the product The Demo service will be provided free of cost. All additional accessories not part of the the package will be charged separately The authorized service engineer will be providing detailed demo that includes Preventive maintenance action to be taken"},
           ]
    },
    {Name:"Warranty",
    SubItem:[ 
              {type:"Warranty Summary",value:"1 year on Product and 4 years extended on Magnetron"},
              {type:"Covered in Warranty",value:"Parts & Labour: Covered under Warranty against any Defect arising out of Faulty or Defective Material or Workmanship."},
           ]
    },
    {Name:"Performance Features",
    SubItem:[ 
              {type:"Preheat",value:"Yes"},
              {type:"Timer",value:"Yes"},
              {type:"Defrost",value:"Yes"},
              {type:"Power Levels",value:"6"},
              {type:"Steam Cook",value:"No"},
              {type:"Control Features",value:"30 sec Plus"},
              {type:"Other Performance Features",value:"Auto Programs, Auto Cook, Child lock"},
           ]
    },
    {Name:"Cooking Features",
    SubItem:[ 
              {type:"Maximum Cooking Time",value:"99 min"},
              {type:"Auto Cook Menu",value:"134"},
              {type:"Auto Cook Menu Available",value:"Yes"},
              {type:"Cooking Modes",value:"Convection"},
              {type:"Other Cooking Features",value:"Various Cooking Mode"},
           ]
    },
    {Name:"Body And Design Features",
    SubItem:[ 
              {type:"Cavity Material",value:"Ceramic Enamel"},
              {type:"Cavity Features",value:"Anti Bacterial Activity, Scratch Resistant"},
              {type:"Door Opening Mechanism",value:"Handle"},
              {type:"Turntable",value:"Yes"},
              {type:"Other Body and Design Features",value:"Ceramic Enamel Interior Hygienic"},
           ]
    },
    {Name:"Convenience Features",
    SubItem:[ 
              {type:"Alarm",value:"Yes"},
              {type:"Deodorizer",value:"Yes"},
              {type:"Child Lock",value:"Yes"},
           ]
    },
    {Name:"Power Features",
    SubItem:[ 
              {type:"Power Output",value:"900 W"},
              {type:"Power Requirement",value:"50 Hz, AC 230 V"},
              {type:"Power Consumption - Grill",value:"1500 W"},
              {type:"Power Consumption - Convection",value:"2100 W"},
              {type:"Power Consumption - Microwave",value:"1400 W"},
              {type:"Other Power Features",value:"Maximum Power: 2900 W"},
           ]
    },
    {Name:"Dimensions",
    SubItem:[ 
              {type:"Width",value:"51.7 cm"},
              {type:"Height",value:"31 cm"},
              {type:"Depth",value:"47.5 cm"},
              {type:"Turntable Diameter",value:"316 mm"},
              {type:"Cavity Width",value:"358 cm"},
              {type:"Cavity Height",value:"235.5 cm"},
              {type:"Cavity Depth",value:"327 cm"},
              {type:"Weight",value:"17.5 kg"},
           ]
    },
 
  ],

  SmallImages:[
                "https://rukminim1.flixcart.com/image/128/128/l09w8sw0/microwave-new/l/s/b/-original-imagc3ka2u9k8rqy.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/l09w8sw0/microwave-new/l/q/1/-original-imagc3kafx5rzetr.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/l09w8sw0/microwave-new/o/a/q/-original-imagc3kaexbtyzur.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/l09w8sw0/microwave-new/t/q/m/-original-imagc3kaybxjzra3.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/l09w8sw0/microwave-new/9/u/d/-original-imagc3kasavhzscy.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/l09w8sw0/microwave-new/g/r/x/-original-imagc3kag5zgfavy.jpeg?q=70"
           ],
  RatingReviewData :[
      {title:"Best in the market!!",
       rating:"4",
       desc:"Guys, microwave is awesome, you can fullfill all your fooding dreams with this product. I am writing my comments after 9 months of using it. Almost I have tried all possible dishes in this microwave.",
       images:[
           "https://rukminim1.flixcart.com/blobio/124/124/imr-202008/blobio-imr-202008_482e800e1ced40c286adbf6f75144e49.jpg?q=90"
          ]
      },
      {title:"Worth every penny",
      rating:"4",
      desc:"Awesome Product, Quick heating in Microwave Option, interior ceramic is very nice, but you might need knowledge of using options for cooking, cause if u use the preset options it will more time rather than manual settings.... Overall it's build, interior and exterior and touch panel are very good and the brand name itself tells about guarantee. I have a TV, AC, mobiles all of Samsung. Even if prices are high, quality and performance are very good ....",
      images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202008/blobio-imr-202008_ba2f80f6abc143ce83c5e7a19c10449c.jpg?q=90"]
      },
      {title:"Terrible product",
      rating:"1",
      desc:"Wast of money",
      images:[]
      }
     ],
  },
  {
    _id: uuid(),
    categoryName: "Appliances",
    quntity:"1",
    title: "BAJAJ 10 L Storage Water Geyser (Popular Plus 10 L, White)",
    type:"Geyser",
    costprice:"7,380",
    saleingprice: "6,450",
    extraOff : "400",
    percentOff:"12", 
    packagingCharges : "49",
    Rating:"4.2",
    Reviews:"779",
    Image:"https://rukminim2.flixcart.com/image/216/216/k0plpjk0/water-geyser/q/h/x/popular-plus-2000-bajaj-10-original-imafkg8cthvkshut.jpeg?q=70",
    Availableoffers : [
                "Bank OfferGet 10% instant discount on SBI Credit Card, up to ₹1250",
                "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                "Special PriceGet extra ₹408 off (price inclusive of discount)",
                "Partner OfferBuy this product and get upto ₹500 off on Flipkart Furniture",
                "No cost EMI ₹324/month. Standard EMI also available"
    ],
  BuywithoutExchange : "Not applicable for this product",
  BuywithExchange : "Not applicable for this product",
  Warranty:"Tank-5 Years,Heating Element-2 Years,Product-1 Years",
  RAM:"",
  DeliverBy:"Delivery by8 Apr, Friday (Schedule delivery & Installation at your convenience)",
  Change:"Free",
  Highlights:[
         "Storage Useful for Bathroom, can store heated water",
         "10 L Greater the Capacity, more the users can be served for bath/wash",
         "8 bar : Pressure rating >8 bar is suitable for High Rise buildings",
         "Vertical : Suitable for large wall spaces"
  ] ,
  EasyPaymentOptions:["No cost EMI ₹324/month. Standard EMI also available","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
  Replacement:"10 Days Replacement Policy",
  Specifications:[
    {Name:"General",
    SubItem:[ 
              {type:"In The Box",value:"1 Water Geyser"},
              {type:"Brand",value:"BAJAJ"},
              {type:"Model Name",value:"Popular Plus 10 L"},
              {type:"Capacity",value:"10 L"},
              {type:"Color",value:"White"},
              {type:"Type",value:"Storage"},
              {type:"Mount Type",value:"Vertical"},
              {type:"Star Rating",value:"4"},
              {type:"Suitable For",value:"High-rise Buildings, High Pressure"},
              {type:"Technology Used",value:"Titanium Armour Technology, Swirl Flow Technology"},
              {type:" ",value:" "},
              {type:" ",value:" "},
              {type:" ",value:" "},
           ]
    },
    {
      Name:"Performance Features",
      SubItem:[ 
              {type:"Rated Pressure",value:"8 bar"},
              {type:"Multi Function Valve",value:"Yes"},
            ]
    },
    {
      Name:"Body And Design Features",
      SubItem:[ 
              {type:"Body Material",value:"Powder Coated Metal"},
            ]
    },
    {
      Name:"Convenience Features",
      SubItem:[ 
              {type:"Adjustable Temperature Knob",value:"Yes"},
              {type:"Other Convenience Features",value:"PUF Insulation"},
            ]
    },
    {
      Name:"Power Features",
      SubItem:[ 
              {type:"Power Consumption",value:"2000 W"},
            ]
    },
    {
      Name:"Additional Features",
      SubItem:[ 
              {type:"Rust Resistant",value:"Yes"},
              {type:"Other Features",value:"Magnesium Anode, Adjustable Thermostat, Multiple Safety Systems"},
            ]
    },
    {
      Name:"Dimensions",
      SubItem:[ 
              {type:"Width",value:"37.8 cm"},
              {type:"Height",value:"40.5 cm"},
              {type:"Depth",value:"38.6 cm"},
              {type:"Weight",value:"8.2 kg"},
            ]
    },
    {
      Name:"Warranty",
      SubItem:[ 
              {type:"Warranty Summary",value:"Tank-5 Years,Heating Element-2 Years,Product-1 Years"},
              {type:"Covered in Warranty",value:"Manufacturing Defects"},
              {type:"Not Covered in Warranty",value:"Warranty does not Cover Accessories External to the Product, It does not Cover Demonstration/Installation of the Product Purchased"},
              {type:"Warranty Service Type",value:"Customer Need to Call at - 18001025963/022-41280000"},
            ]
    },
    {
      Name:"More Details",
      SubItem:[ 
              {type:"Generic Name",value:"Water Geysers"},
              {type:"Country of Origin",value:"India"},
            ]
    },
         
  ],

  SmallImages:[
         "https://rukminim1.flixcart.com/image/128/128/k0plpjk0/water-geyser/q/h/x/popular-plus-2000-bajaj-10-original-imafkg8cthvkshut.jpeg?q=70",
         "https://rukminim1.flixcart.com/image/128/128/krz97rk0/water-geyser/u/i/7/2021-25l-new-shakti-neo-150874-2000-bajaj-25-original-imag5nc8vyg94r2p.jpeg?q=70",
         "https://rukminim1.flixcart.com/image/128/128/ku2zjww0/water-geyser/g/6/y/2021-popular-plus-25-l-2000-bajaj-25-original-imag7akezdnkgbnz.jpeg?q=70"
       ],
  RatingReviewData :[
      {title:"Wonderful",
       rating:"4",
       desc:"i am giving four stars because of the courier system. they refused to deliver doorstep. Other than the product is good well pacakge. relevant, less electricity consumption. but u have to wait at least 5-6 mint to get perfect desirable heated water.",
       images:[]
      },
      {title:"just wohhh",
      rating:"4",
      desc:"Very good product. 100/100 always on bajaj products. really useful. low in cost. Totally best purchase from flipkart. one more thing I want to thank all the flipkart customer care and concern team who helped me to get my money back in time as I have an issue while buying this product. You can trust them with close eyes. Thank you all. (I just want to aware you on that if you select COD then don't change your payment mode frequently. you may be on trouble). otherwise all good. Thank you flipkart",
      images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202001/blobio-imr-202001_88bd91654c4b47bcb2cfb2ae389752cb.jpg?q=90"]
      },
      {title:"Good quality product",
      rating:"4.5",
      desc:"Working fine and installation is so easy. The only thing is it's taking 8-10 minutes of time to hot water and it's not for 4-5 people's use. If want to use for max 3 people's you can go for it. This is the best product in the market at this range of price.I am giving 4.5 🌟 star.",
      images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202008/blobio-imr-202008_61b486c844564ae7bbead0e3e1cb13f9.jpg?q=90"]
      }
     ],
  },
  {
    _id: uuid(),
    categoryName: "Appliances",
    quntity:"1",
    title: "Sansui 102 cm (40 inch) Full HD LED Smart Android TV  (JSW40ASFHD)",
    type:"TV",
    costprice:"25,999",
    saleingprice: "21,999",
    extraOff : "2991",
    percentOff:"24", 
    packagingCharges : "0",
    Rating:"3.8",
    Reviews:"7",
    Image:"https://rukminim2.flixcart.com/image/216/216/khmbafk0/television/6/d/z/sansui-jsw40asfhd-original-imafxkn5nzmpdfsy.jpeg?q=70",
    Availableoffers : [
                "Bank Offer10% off on Federal Bank Cards, up to ₹1500. On orders of ₹5000 and above",
                "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                "Special PriceGet extra ₹408 off (price inclusive of discount)",
                "Partner OfferBuy this product and get upto ₹500 off on Flipkart Furniture",
                "EMI starting from ₹122/month"
    ],
  BuywithoutExchange : " ₹21,999 ",
  BuywithExchange : " Up to ₹11,000 off ",
  Warranty:"1 Year Comprehensive Warranty on Product and Additional 1 Year Warranty on Panel",
  RAM:"6GB",
  DeliverBy:"Delivery by 21 Mar, Monday",
  Change:"Free",
  Highlights:[
      "Supported Apps: Netflix|Disney+Hotstar|Youtube",
      "Operating System: Android (Google Assistant & Chromecast in-built)",
      "Resolution: Full HD 1920 x 1080 Pixels",
      "Sound Output: 20 W",
      "Refresh Rate: 60 Hz"
  ] ,
  EasyPaymentOptions:["EMI starting from ₹5,333/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
  Replacement:"10 Days Replacement Policy",
  Specifications:[
    {Name:"General",
    SubItem:[ 
              {type:"In The Box",value:"1N TV, 1N User Manual, 1N Warranty Card, 1N Remote Control, 2N Base stand, 4N Screws, 2N Batteries, 1N Power Cord, 1N Mini AV Cable, 1N Wall Mounting Set"},
              {type:"Model Name",value:"JSW40ASFHD"},
              {type:"Display Size",value:"102 cm (40 inch)"},
              {type:"Screen Type",value:"LED"},
              {type:"HD Technology & Resolution",value:"Full HD, 1920 x 1080"},
              {type:"Smart Tv",value:"Yes"},
              {type:"Motion Sensor",value:"No"},
              {type:"HDMI",value:"2"},
              {type:"USB",value:"2"},
              {type:"Built In Wi-Fi",value:"Yes"},
              {type:"Launch Year",value:"2020"},
              {type:"Wall Mount Included",value:"Yes"},
           ]
    },
    {Name:"Video Features",
    SubItem:[ 
              {type:"LED Display Type",value:"DLED"},
              {type:"Refresh Rate",value:"60 Hz"},
           ]
    },
    {Name:"Audio Features",
    SubItem:[ 
              {type:"Number of Speakers",value:"2"},
              {type:"Sound Technology",value:"Dolby Audio"},
              {type:"Speaker Output RMS",value:"20 W"},
           ]
    },
    {Name:"Smart Tv Features",
    SubItem:[ 
              {type:"Number of Cores",value:"4"},
              {type:"Processor",value:"CA53"},
              {type:"Ram Capacity",value:"1 GB"},
              {type:"Storage Memory",value:"8 GB"},
              {type:"Supported App - Netflix",value:"Yes"},
              {type:"Supported App - Youtube",value:"Yes"},
              {type:"Supported App - Disney+Hotstar",value:"Yes"},
              {type:"Supported App - Others",value:"Prime Video"},
              {type:"Operating System Present",value:"Yes"},
              {type:"Operating System",value:"Android"},
              {type:"Screen Mirroring",value:"Yes"},
              {type:"App Store Type",value:"Google Play Store"},
              {type:"Pre Installed Browser",value:"Yes"},
              {type:"Bluetooth",value:"Yes"},
              {type:"Built In Wi-Fi",value:"Yes"},
              {type:"Ethernet (RJ45)",value:"1"},
           ]
    },
    {Name:"Connectivity Features",
    SubItem:[ 
              {type:"HDMI",value:"2 Side"},
              {type:"USB",value:"2 Side"},
              {type:"NFC Support",value:"No"},
           ]
    },
    {Name:"Remote Control Features",
    SubItem:[ 
              {type:"Smart Remote",value:"Yes"},
              {type:"Color Screen",value:"Yes"},
              {type:"Internet Access",value:"Yes"},
           ]
    },
    {Name:"Power Features",
    SubItem:[ 
              {type:"Power Requirement",value:"AC 100 - 240 V, 50/60 Hz"},
              {type:"Power Consumption",value:"0.5 W (Standby)"},
           ]
    },
    {Name:"Dimensions",
    SubItem:[ 
              {type:"Width x Height x Depth (without stand)",value:"89.3 cm x 8.63 cm"},
           ]
    },
    {Name:"Warranty",
    SubItem:[ 
              {type:"Warranty Summary",value:"1 Year Comprehensive Warranty on Product and Additional 1 Year Warranty on Panel"},
              {type:"Covered in Warranty",value:"Defect Arising Out of Faulty, Defective Material or Workmanship are Covered in Warranty"},
              {type:"Not Covered in Warranty",value:"Warranty Does Not Cover Any External Accessories (Such as Battery, Cable, Carrying Bag), Damage Caused to the Product Due to Improper Installation by Customer, Normal Wear and Tear to Magnetic Heads, Audio, Video, Laser Pick-ups and TV Picture Tubes, Panel, Damages Caused to the Product by Accident, Lightening, Ingress of Water, Fire, Dropping or Excessive Shock, Any Damage Caused Due to Tampering of the Product by an Unauthorized Agent, Liability for Loss of Data, Recorded Images or Business Opportunity Loss."},
              {type:"Warranty Service Type",value:"On-site"},
           ]
    },
    {Name:"Installation & Demo",
    SubItem:[ 
              {type:"Installation & Demo Details",value:"We'll facilitate the installation and demo through authorized service engineer at your convenience The installation will be done within 48 hours of delivery of the TV.The service engineer will install your new TV, either on wall mount or on table top. Installation and demo are provided free of cost.The engineer will also help you understand your new TV's features.The process generally covers:Wall-mounted or table-top installation, as requested.Physical check of all ports, including power and USB ports. Accessories also checked.Demonstration of features and settingsQuick run-through on how to operate the TV"},
         
           ]
    },

  ],

  SmallImages:[
          "https://rukminim1.flixcart.com/image/128/128/khmbafk0/television/6/d/z/sansui-jsw40asfhd-original-imafxkn5nzmpdfsy.jpeg?q=70",
          "https://rukminim1.flixcart.com/image/128/128/khmbafk0/television/6/d/z/sansui-jsw40asfhd-original-imafxkn5jpgvvyvn.jpeg?q=70",
          "https://rukminim1.flixcart.com/image/128/128/khmbafk0/television/6/d/z/sansui-jsw40asfhd-original-imafxkn5c83faq3u.jpeg?q=70",
          "https://rukminim1.flixcart.com/image/128/128/khmbafk0/television/k/p/f/sansui-jsw43asfhd-original-imafxkn4qchszvea.jpeg?q=70",
          "https://rukminim1.flixcart.com/image/128/128/khmbafk0/television/6/d/z/sansui-jsw40asfhd-original-imafxkn5tgtygdfb.jpeg?q=70",
          "https://rukminim1.flixcart.com/image/128/128/khmbafk0/television/6/d/z/sansui-jsw40asfhd-original-imafxkn5vgfbqtfg.jpeg?q=70",
          "https://rukminim1.flixcart.com/image/128/128/khmbafk0/television/6/d/z/sansui-jsw40asfhd-original-imafxkn5yx8vzb4j.jpeg?q=70"
       ],
  RatingReviewData :[
      {title:"Simply awesome",
       rating:"4",
       desc:"For the time only tv running ok but let us see in long run how it's performance.Also how services giving by Sansui Ltd in long run & in waranty too.",
       images:[
           
          ]
      },
      {title:"Perfect product!",
      rating:"4",
      desc:"I Had Ordered Sansui 40 TV On Nov10 & Installation Was done On 16 Nov by Jeeves,My Experience is very good. This Product is of Excellent Quality,. Picture Sharpness is Good, Sound Quality is very good. I have been using this TV For long hours, There is no Doubt in my Mind About the Overall Performance of this TV. I Thank Flipkart for the Excellent Service from Purchasing the Product to the Delivery & Installation/ Demo Everything Was very Nice.",
      images:[]
      },
      {title:"Brilliant",
      rating:"5",
      desc:"Best TV",
      images:[]
      }
     ],
  },
  {
    _id: uuid(),
    categoryName: "Appliances",
    quntity:"1",
    title: "MOTOROLA ZX2 100 cm (40 inch) Full HD LED Smart Android TV with Dolby Atmos and Dolby Vision  (40SAFHDME)",
    type:"TV",
    costprice:"24,999",
    saleingprice: "39,999",
    extraOff : "2991",
    percentOff:"37", 
    packagingCharges : "0",
    Rating:"3.8",
    Reviews:"3060",
    Image:"https://rukminim2.flixcart.com/image/216/216/kfzq8i80/television/h/r/5/motorola-40safhdme-original-imafwc58fun9ebzp.jpeg?q=70",
    Availableoffers : [
                "Bank Offer10% off on Federal Bank Cards, up to ₹1500. On orders of ₹5000 and above",
                "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                "Special PriceGet extra ₹408 off (price inclusive of discount)",
                "Partner OfferBuy this product and get upto ₹500 off on Flipkart Furniture",
                "EMI starting from ₹122/month"
    ],
  BuywithoutExchange : " ₹24,999 ",
  BuywithExchange : " Up to ₹11,000 off ",
  Warranty:"1 Year Comprehensive Warranty on Product and Additional 1 Year Warranty on Panel",
  RAM:"6GB",
  DeliverBy:"Delivery by 21 Mar, Monday",
  Change:"Free",
  Highlights:[
      "Supported Apps: Netflix|Disney+Hotstar|Youtube",
      "Operating System: Android (Google Assistant & Chromecast in-built)",
      "Resolution: Full HD 1920 x 1080 Pixels",
      "Sound Output: 40 W",
      "Refresh Rate: 60 Hz"
  ] ,
  EasyPaymentOptions:["EMI starting from ₹8,333/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
  Replacement:"10 Days Replacement Policy",
  Specifications:[
    {Name:"General",
    SubItem:[ 
              {type:"In The Box",value:"1 Television Set, Remote Control, Wallmount Stand, 2 AAA Batteries, Desktop Stand, 2 Stand Support Screws, Quick Setup Guide, Power Cord, AV Converting Cable"},
              {type:"Model Name",value:"40SAFHDME"},
              {type:"Display Size",value:"100 cm (40 inch)"},
              {type:"Screen Type",value:"LED"},
              {type:"HD Technology & Resolution",value:"Full HD, 1920 x 1080"},
              {type:"Series",value:"ZX2"},
              {type:"Smart Tv",value:"Yes"},
              {type:"Motion Sensor",value:"No"},
              {type:"HDMI",value:"2"},
              {type:"USB",value:"2"},
              {type:"Wi-Fi Type",value:"Dual Band Wi-Fi (5 GHz / 2.4 GHz)"},
              {type:"Built In Wi-Fi",value:"Yes"},
              {type:"Launch Year",value:"2020"},
              {type:"Wall Mount Included",value:"Yes"},
           ]
    },
    {Name:"Video Features",
    SubItem:[ 
              {type:"LED Display Type",value:"DLED"},
              {type:"Refresh Rate",value:"60 Hz"},
              {type:"Brightness",value:"320 nits"},
              {type:"Contrast Ratio",value:"5000:1 (Static)"},
              {type:"Picture And Picture (PAP)",value:"No"},
              {type:"Analog TV Reception",value:"Yes"},
              {type:"Digital TV Reception",value:"No"},
              {type:"View Angle",value:"178 Degree"},
              {type:"Panel Type",value:"VA Panel"},
              {type:"Digital Noise Filter",value:"Yes"},
              {type:"LED Display Type",value:"LED"},
              {type:"Aspect Ratio",value:"16:9"},
              {type:"Refresh Rate",value:"60 Hz"},
              {type:"Other Video Features",value:"Picture Mode (User/Standard/Vivid/Sport/Movie)"},            
           ]
    },
    {Name:"Audio Features",
    SubItem:[ 
              {type:"Number of Speakers",value:"2"},
              {type:"Sound Technology",value:"Dolby Atmos, DTS Studio Sound, Dolby Audio"},
              {type:"Speaker Output RMS",value:"40 W"},
              {type:"Surround Sound",value:"Yes"},
              {type:"Other Audio Features",value:"360 Degree Surround Sound Feel with Dolby Atmos, 20 W High Bass Speakers, 20 W High Octave Tweeters, 4 Unit Setup, Amphisoundx Pro Soundbar"},
           ]
    },
    {Name:"Smart Tv Features",
    SubItem:[ 
              {type:"Number of Cores",value:"4"},
              {type:"Processor",value:"CA53"},
              {type:"Ram Capacity",value:"2 GB"},
              {type:"Storage Memory",value:"8 GB"},
              {type:"Supported App - Netflix",value:"Yes"},
              {type:"Supported App - Youtube",value:"Yes"},
              {type:"Supported App - Disney+Hotstar",value:"Yes"},
              {type:"Supported App - Others",value:"Prime Video"},
              {type:"Operating System Present",value:"Yes"},
              {type:"Operating System",value:"Android"},
              {type:"Screen Mirroring",value:"Yes"},
              {type:"App Store Type",value:"Google Play Store"},
              {type:"Pre Installed Browser",value:"Yes"},
              {type:"Bluetooth",value:"Yes"},
              {type:"Built In Wi-Fi",value:"Yes"},
              {type:"Ethernet (RJ45)",value:"1"},
           ]
    },
    {Name:"Connectivity Features",
    SubItem:[ 
              {type:"HDMI",value:"2 Side"},
              {type:"USB",value:"2 Side"},
              {type:"NFC Support",value:"No"},
           ]
    },
    {Name:"Remote Control Features",
    SubItem:[ 
              {type:"Smart Remote",value:"Yes"},
              {type:"Color Screen",value:"Yes"},
              {type:"Internet Access",value:"Yes"},
           ]
    },
    {Name:"Power Features",
    SubItem:[ 
              {type:"Power Requirement",value:"AC 100 - 240 V, 50/60 Hz"},
              {type:"Power Consumption",value:"0.5 W (Standby)"},
           ]
    },
    {Name:"Dimensions",
    SubItem:[ 
              {type:"Width x Height x Depth (without stand)",value:"89.3 cm x 8.63 cm"},
           ]
    },
    {Name:"Warranty",
    SubItem:[ 
              {type:"Warranty Summary",value:"1 Year Comprehensive Warranty on Product and Additional 1 Year Warranty on Panel"},
              {type:"Covered in Warranty",value:"Defect Arising Out of Faulty, Defective Material or Workmanship are Covered in Warranty"},
              {type:"Not Covered in Warranty",value:"Warranty Does Not Cover Any External Accessories (Such as Battery, Cable, Carrying Bag), Damage Caused to the Product Due to Improper Installation by Customer, Normal Wear and Tear to Magnetic Heads, Audio, Video, Laser Pick-ups and TV Picture Tubes, Panel, Damages Caused to the Product by Accident, Lightening, Ingress of Water, Fire, Dropping or Excessive Shock, Any Damage Caused Due to Tampering of the Product by an Unauthorized Agent, Liability for Loss of Data, Recorded Images or Business Opportunity Loss."},
              {type:"Warranty Service Type",value:"On-site"},
           ]
    },
    {Name:"Installation & Demo",
    SubItem:[ 
              {type:"Installation & Demo Details",value:"We'll facilitate the installation and demo through authorized service engineer at your convenience The installation will be done within 48 hours of delivery of the TV.The service engineer will install your new TV, either on wall mount or on table top. Installation and demo are provided free of cost.The engineer will also help you understand your new TV's features.The process generally covers:Wall-mounted or table-top installation, as requested.Physical check of all ports, including power and USB ports. Accessories also checked.Demonstration of features and settingsQuick run-through on how to operate the TV"},
         
           ]
    },

  ],

  SmallImages:[
         "https://rukminim1.flixcart.com/image/128/128/kfzq8i80/television/h/r/5/motorola-40safhdme-original-imafwc58fun9ebzp.jpeg?q=70",
         "https://rukminim1.flixcart.com/image/128/128/kfzq8i80/television/h/r/5/motorola-40safhdme-original-imafwc58euse6xne.jpeg?q=70",
         "https://rukminim1.flixcart.com/image/128/128/kfzq8i80/television/h/r/5/motorola-40safhdme-original-imafwc58wgyyvzbw.jpeg?q=70",
         "https://rukminim1.flixcart.com/image/128/128/kfzq8i80/television/h/r/5/motorola-40safhdme-original-imafwc58fun9ebzp.jpeg?q=70"
       ],
  RatingReviewData :[
      {title:"Best in the market!",
       rating:"4",
       desc:"Excellent Led Smart Tv this Range",
       images:[
           
          ]
      },
      {title:"Good quality product",
      rating:"4",
      desc:"I am writing this review for Motorola ZX2 40inch after almost 45days of use.",
      images:[]
      },
      {title:"Brilliant",
      rating:"5",
      desc:"Best TV",
      images:[]
      }
     ],
  },
  {
    _id: uuid(),
    categoryName: "Appliances",
    quntity:"1",
    title: "Thomson 9A Series 102 cm (40 inch) Full HD LED Smart Android TV  (40PATH7777)",
    type:"TV",
    costprice:"16,999",
    saleingprice: "21,999",
    extraOff : "2991",
    percentOff:"20", 
    packagingCharges : "500",
    Rating:"4.3",
    Reviews:"11,060",
    Image:"https://rukminim2.flixcart.com/image/216/216/kj0bp8w0-0/television/z/0/3/40path7777-thomson-original-imafyz3fnzbfaadg.jpeg?q=70",
    Availableoffers : [
                "Bank Offer10% off on Federal Bank Cards, up to ₹1500. On orders of ₹5000 and above",
                "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                "Special PriceGet extra ₹408 off (price inclusive of discount)",
                "Partner OfferBuy this product and get upto ₹500 off on Flipkart Furniture",
                "EMI starting from ₹2,834/month"
    ],
  BuywithoutExchange : " ₹16,999 ",
  BuywithExchange : " Up to ₹11,000 off ",
  Warranty:"1 Year Comprehensive Warranty on Product and Additional 1 Year Warranty on Panel",
  RAM:"6GB",
  DeliverBy:"Delivery by 21 Mar, Monday",
  Change:"Free",
  Highlights:[
      "Supported Apps: Netflix|Disney+Hotstar|Youtube",
      "Operating System: Android (Google Assistant & Chromecast in-built)",
      "Resolution: Full HD 1920 x 1080 Pixels",
      "Sound Output: 40 W",
      "Refresh Rate: 60 Hz"
  ] ,
  EasyPaymentOptions:["EMI starting from ₹2,834/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
  Replacement:"10 Days Replacement Policy",
  Specifications:[
    {Name:"General",
    SubItem:[ 
              {type:"In The Box",value:"1 Television Set, Remote Control, Wallmount Stand, 2 AAA Batteries, Desktop Stand, 2 Stand Support Screws, Quick Setup Guide, Power Cord, AV Converting Cable"},
              {type:"Model Name",value:"40PATH7777"},
              {type:"Display Size",value:"100 cm (40 inch)"},
              {type:"Screen Type",value:"LED"},
              {type:"HD Technology & Resolution",value:"Full HD, 1920 x 1080"},
              {type:"Series",value:"9A Series"},
              {type:"Smart Tv",value:"Yes"},
              {type:"Motion Sensor",value:"No"},
              {type:"HDMI",value:"2"},
              {type:"USB",value:"2"},
              {type:"Wi-Fi Type",value:"802.11a/b/g/n"},
              {type:"Built In Wi-Fi",value:"Yes"},
              {type:"Launch Year",value:"2020"},
              {type:"Wall Mount Included",value:"Yes"},
           ]
    },
    {Name:"Video Features",
    SubItem:[ 
              {type:"LED Display Type",value:"DLED"},
              {type:"Refresh Rate",value:"60 Hz"},
              {type:"Brightness",value:"320 nits"},
              {type:"Contrast Ratio",value:"5000:1 (Static)"},
              {type:"Picture And Picture (PAP)",value:"No"},
              {type:"Analog TV Reception",value:"Yes"},
              {type:"Digital TV Reception",value:"No"},
              {type:"View Angle",value:"178 Degree"},
              {type:"Panel Type",value:"VA Panel"},
              {type:"Digital Noise Filter",value:"Yes"},
              {type:"LED Display Type",value:"LED"},
              {type:"Aspect Ratio",value:"16:9"},
              {type:"Refresh Rate",value:"60 Hz"},
              {type:"Other Video Features",value:"Picture Mode (User/Standard/Vivid/Sport/Movie)"},            
           ]
    },
    {Name:"Audio Features",
    SubItem:[ 
              {type:"Number of Speakers",value:"2"},
              {type:"Sound Technology",value:"Dolby Atmos, DTS Studio Sound, Dolby Audio"},
              {type:"Speaker Output RMS",value:"40 W"},
              {type:"Sound Mode",value:"Standard, Music, News, Movie, Game, User"},
              {type:"Surround Sound",value:"Yes"},
              {type:"Other Audio Features",value:"360 Degree Surround Sound Feel with Dolby Atmos, 20 W High Bass Speakers, 20 W High Octave Tweeters, 4 Unit Setup, Amphisoundx Pro Soundbar"},
           ]
    },
    {Name:"Smart Tv Features",
    SubItem:[ 
              {type:"Number of Cores",value:"4"},
              {type:"Processor",value:"CA53"},
              {type:"Ram Capacity",value:"2 GB"},
              {type:"Storage Memory",value:"8 GB"},
              {type:"Supported App - Netflix",value:"Yes"},
              {type:"Supported App - Youtube",value:"Yes"},
              {type:"Supported App - Disney+Hotstar",value:"Yes"},
              {type:"Supported App - Others",value:"Prime Video"},
              {type:"Operating System Present",value:"Yes"},
              {type:"Operating System",value:"Android"},
              {type:"Screen Mirroring",value:"Yes"},
              {type:"App Store Type",value:"Google Play Store"},
              {type:"Pre Installed Browser",value:"Yes"},
              {type:"Bluetooth",value:"Yes"},
              {type:"Built In Wi-Fi",value:"Yes"},
              {type:"Ethernet (RJ45)",value:"1"},
           ]
    },
    {Name:"Connectivity Features",
    SubItem:[ 
              {type:"HDMI",value:"3 Side"},
              {type:"USB",value:"2 Side"},
              {type:"NFC Support",value:"No"},
              {type:"Other Connectivity Features",value:"Network PM44-11BP 100M Ethernet Support (10/100M, DHCP), Browser, Support HDMI-ARC"},
              {type:"RF Connectivity Input",value:"Yes"},
              {type:"RF Connectivity Output",value:"No"},
              {type:"Digital Audio Output",value:"Yes"},
           ]
    },
    {Name:"Remote Control Features",
    SubItem:[ 
              {type:"Smart Remote",value:"Yes"},
              {type:"Color Screen",value:"Yes"},
              {type:"Internet Access",value:"Yes"},
              {type:"Other Remote Control Features",value:"Google Assistant Enabled Remote, Hot Keys of Prime Video, YouTube, Sony LIV, Sleek, Sylish and Smart Remote"},
              {type:"Battery Type",value:"2 AAA Batteries"},
              {type:"RF Capable",value:"Yes"},
           ]
    },
    {Name:"Power Features",
    SubItem:[ 
              {type:"Power Requirement",value:"AC 100 - 240 V, 50/60 Hz"},
              {type:"Power Consumption",value:"0.5 W (Standby)"},
           ]
    },
    {Name:"Dimensions",
    SubItem:[ 
              {type:"Width x Height x Depth (without stand)",value:"89.3 cm x 8.63 cm"},
           ]
    },
    {Name:"Warranty",
    SubItem:[ 
              {type:"Warranty Summary",value:"1 Year Comprehensive Warranty on Product and Additional 1 Year Warranty on Panel"},
              {type:"Covered in Warranty",value:"Defect Arising Out of Faulty, Defective Material or Workmanship are Covered in Warranty"},
              {type:"Not Covered in Warranty",value:"The Product is Not Used According to Instructions given in the Instruction Manual. Defects Caused by Improper Use as Determined by the Company Personnel. Modification or Alteration of Any Nature is Made in the Electrical Circuitry or Physical Construction of the Set. Installation or Repair Work is Carried Out by Persons or Agency Other than Authorized by the Company. Site (Premises Where the Product is Kept) Conditions that do not Confirm to the Recommended Operating Conditions of the Machine. Original Serial Number is Removed, Obliterated or Altered from the Machine or Cabinet. Defects due to Cause Beyond Control Like Lightning, Abnormal Voltage, Acts of God or While in Transit to Service Centre or Purchaser's Residence. The Warranty does not Cover Any External Accessories (Such as Battery, Cable, Carrying Bag Etc). Dust appearing on television panel after 10 days of usage, mentioned in the Operating Instruction Manual Supplied with this Product or Any Cosmetic Parts"},
              {type:"Warranty Service Type",value:"On-site"},
           ]
    },
    {Name:"Installation & Demo",
    SubItem:[ 
              {type:"Installation & Demo Details",value:"We'll facilitate the installation and demo through authorized service engineer at your convenience The installation will be done within 48 hours of delivery of the TV. The service engineer will install your new TV, either on wall mount or on table top. Installation and demo are provided free of cost.The engineer will also help you understand your new TV's features.The process generally covers:Wall-mounted or table-top installation, as requested. Physical check of all ports, including power and USB ports. Accessories also checked.Demonstration of features and settingsQuick run-through on how to operate the TV"},
         
           ]
    },

  ],

  SmallImages:[
         "https://rukminim1.flixcart.com/image/128/128/kj0bp8w0-0/television/z/0/3/40path7777-thomson-original-imafyz3fnzbfaadg.jpeg?q=70",
         "https://rukminim1.flixcart.com/image/128/128/kuvkcy80/television/8/v/9/40path7777-thomson-original-imag7wctvfyzgsur.jpeg?q=70",
         "https://rukminim1.flixcart.com/image/128/128/kuvkcy80/television/g/b/h/40path7777-thomson-original-imag7wctjvjpk8mb.jpeg?q=70",
         "https://rukminim1.flixcart.com/image/128/128/kuvkcy80/television/c/i/z/40path7777-thomson-original-imag7wctc5qvgnhy.jpeg?q=70",
         "https://rukminim1.flixcart.com/image/128/128/kuvkcy80/television/z/x/m/40path7777-thomson-original-imag7wctbpehzeyv.jpeg?q=70",
         "https://rukminim1.flixcart.com/image/128/128/kuvkcy80/television/k/q/2/40path7777-thomson-original-imag7wctynq2tbd4.jpeg?q=70"
       ],
  RatingReviewData :[
      {title:"Best in the market!",
       rating:"4",
       desc:"Excellent Led Smart Tv this Range",
       images:[
           
          ]
      },
      {title:"Good quality product",
      rating:"4",
      desc:"oh so sweet Thomson 9A series is awesome and your choice one of the best budget price TV .me and my wife personally like this TV and digital remote style is very stylish and very nice look remote.pure Android experience Android one TV (4.7 STAR) it",
      images:["https://rukminim1.flixcart.com/blobio/124/124/202008/blobio-202008_7a7athb2.jpeg?q=90"]
      },
      {title:"Brilliant",
      rating:"5",
      desc:"Best TV",
      images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202008/blobio-imr-202008_d1ea796cf47445c18b5e4234cdce308b.jpg?q=90"]
      }
     ],
  },
  {
    _id: uuid(),
    categoryName: "Appliances",
    quntity:"1",
    title: "OnePlus U1S 164 cm (65 inch) Ultra HD (4K) LED Smart Android TV  (65UC1A00)",
    type:"TV",
    costprice:"66,999",
    saleingprice: "69,999",
    extraOff : "3991",
    percentOff:"4", 
    packagingCharges : "500",
    Rating:"4.3",
    Reviews:"1,060",
    Image:"https://rukminim2.flixcart.com/image/216/216/kuwzssw0/television/u/i/r/u-series-65-u1s-65uc1a00-oneplus-original-imag7xtnmnkyz7je.jpeg?q=70",
    Availableoffers : [
                "Bank Offer10% off on Federal Bank Cards, up to ₹1500. On orders of ₹5000 and above",
                "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction",
                "Special PriceGet extra ₹408 off (price inclusive of discount)",
                "Partner OfferBuy this product and get upto ₹500 off on Flipkart Furniture",
                "EMI starting from ₹6,000/month"
    ],
  BuywithoutExchange : " ₹66,999 ",
  BuywithExchange : " Up to ₹49,000 off ",
  Warranty:"1 year warranty on product and 1 year warranty on panel",
  RAM:"6GB",
  DeliverBy:"Delivery by 21 Mar, Monday",
  Change:"Free",
  Highlights:[
      "Supported Apps: Netflix|Disney+Hotstar|Youtube",
      "Operating System: Android (Google Assistant & Chromecast in-built)",
      "Resolution: Ultra HD (4K) 3840 x 2160 Pixels",
      "Sound Output: 40 W",
      "Refresh Rate: 60 Hz"
  ] ,
  EasyPaymentOptions:["EMI starting from ₹7,445/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
  Replacement:"10 Days Replacement Policy",
  Specifications:[
    {Name:"General",
    SubItem:[ 
              {type:"In The Box",value:"1N TELEVISION SET, 1N REMOTE CONTROLLER ,2N AAA BATTERY, 2N STAND BASE, 1N POWER CORD, 1N USER MANUAL, 1N WARRANTY CARD, 1N WALL-MOUNT BRACKET, 1N AV-IN ADAPTER, 4N SCREWS"},
              {type:"Model Name",value:"65UC1A00"},
              {type:"Display Size",value:"164 cm (65 inch)"},
              {type:"Screen Type",value:"LED"},
              {type:"HD Technology & Resolution",value:"Ultra HD (4K), 3840 x 2160"},
              {type:"Series",value:"U1S"},
              {type:"Smart Tv",value:"Yes"},
              {type:"Motion Sensor",value:"No"},
              {type:"HDMI",value:"3"},
              {type:"USB",value:"2"},
              {type:"Wi-Fi Type",value:"802.11a/b/g/n"},
              {type:"Built In Wi-Fi",value:"Yes"},
              {type:"Launch Year",value:"2021"},
              {type:"Wall Mount Included",value:"Yes"},
           ]
    },
    {Name:"Video Features",
    SubItem:[ 
              {type:"LED Display Type",value:"DLED"},
              {type:"Refresh Rate",value:"60 Hz"},
              {type:"Brightness",value:"320 nits"},
              {type:"Contrast Ratio",value:"5000:1 (Static)"},
              {type:"Picture And Picture (PAP)",value:"No"},
              {type:"Analog TV Reception",value:"Yes"},
              {type:"Digital TV Reception",value:"No"},
              {type:"View Angle",value:"178 Degree"},
              {type:"Panel Type",value:"VA Panel"},
              {type:"Digital Noise Filter",value:"Yes"},
              {type:"LED Display Type",value:"LED"},
              {type:"Aspect Ratio",value:"16:9"},
              {type:"Refresh Rate",value:"60 Hz"},
              {type:"Other Video Features",value:"Picture Mode (User/Standard/Vivid/Sport/Movie)"},            
           ]
    },
    {Name:"Audio Features",
    SubItem:[ 
              {type:"Number of Speakers",value:"2"},
              {type:"Sound Technology",value:"Dolby Atmos, DTS Studio Sound, Dolby Audio"},
              {type:"Speaker Output RMS",value:"30 W"},
              {type:"Sound Mode",value:"Standard, Music, News, Movie, Game, User"},
              {type:"Surround Sound",value:"Yes"},
              {type:"Other Audio Features",value:"360 Degree Surround Sound Feel with Dolby Atmos, 20 W High Bass Speakers, 20 W High Octave Tweeters, 4 Unit Setup, Amphisoundx Pro Soundbar"},
           ]
    },
    {Name:"Smart Tv Features",
    SubItem:[ 
              {type:"Number of Cores",value:"4"},
              {type:"Processor",value:"CA53"},
              {type:"Ram Capacity",value:"2 GB"},
              {type:"Storage Memory",value:"8 GB"},
              {type:"Supported App - Netflix",value:"Yes"},
              {type:"Supported App - Youtube",value:"Yes"},
              {type:"Supported App - Disney+Hotstar",value:"Yes"},
              {type:"Supported App - Others",value:"Prime Video"},
              {type:"Operating System Present",value:"Yes"},
              {type:"Operating System",value:"Android"},
              {type:"Screen Mirroring",value:"Yes"},
              {type:"App Store Type",value:"Google Play Store"},
              {type:"Pre Installed Browser",value:"Yes"},
              {type:"Bluetooth",value:"Yes"},
              {type:"Built In Wi-Fi",value:"Yes"},
              {type:"Ethernet (RJ45)",value:"1"},
           ]
    },
    {Name:"Connectivity Features",
    SubItem:[ 
              {type:"HDMI",value:"3 Side"},
              {type:"USB",value:"2 Side"},
              {type:"NFC Support",value:"No"},
              {type:"Other Connectivity Features",value:"Network PM44-11BP 100M Ethernet Support (10/100M, DHCP), Browser, Support HDMI-ARC"},
              {type:"RF Connectivity Input",value:"Yes"},
              {type:"RF Connectivity Output",value:"No"},
              {type:"Digital Audio Output",value:"Yes"},
           ]
    },
    {Name:"Remote Control Features",
    SubItem:[ 
              {type:"Smart Remote",value:"Yes"},
              {type:"Color Screen",value:"Yes"},
              {type:"Internet Access",value:"Yes"},
              {type:"Other Remote Control Features",value:"Google Assistant Enabled Remote, Hot Keys of Prime Video, YouTube, Sony LIV, Sleek, Sylish and Smart Remote"},
              {type:"Battery Type",value:"2 AAA Batteries"},
              {type:"RF Capable",value:"Yes"},
           ]
    },
    {Name:"Power Features",
    SubItem:[ 
              {type:"Power Requirement",value:"AC 100 - 240 V, 50/60 Hz"},
              {type:"Power Consumption",value:"0.5 W (Standby)"},
           ]
    },
    {Name:"Dimensions",
    SubItem:[ 
              {type:"Width x Height x Depth (without stand)",value:"89.3 cm x 8.63 cm"},
           ]
    },
    {Name:"Warranty",
    SubItem:[ 
              {type:"Warranty Summary",value:"1 Year Comprehensive Warranty on Product and Additional 1 Year Warranty on Panel"},
              {type:"Covered in Warranty",value:"Defect Arising Out of Faulty, Defective Material or Workmanship are Covered in Warranty"},
              {type:"Not Covered in Warranty",value:"The Product is Not Used According to Instructions given in the Instruction Manual. Defects Caused by Improper Use as Determined by the Company Personnel. Modification or Alteration of Any Nature is Made in the Electrical Circuitry or Physical Construction of the Set. Installation or Repair Work is Carried Out by Persons or Agency Other than Authorized by the Company. Site (Premises Where the Product is Kept) Conditions that do not Confirm to the Recommended Operating Conditions of the Machine. Original Serial Number is Removed, Obliterated or Altered from the Machine or Cabinet. Defects due to Cause Beyond Control Like Lightning, Abnormal Voltage, Acts of God or While in Transit to Service Centre or Purchaser's Residence. The Warranty does not Cover Any External Accessories (Such as Battery, Cable, Carrying Bag Etc). Dust appearing on television panel after 10 days of usage, mentioned in the Operating Instruction Manual Supplied with this Product or Any Cosmetic Parts"},
              {type:"Warranty Service Type",value:"On-site"},
           ]
    },
    {Name:"Installation & Demo",
    SubItem:[ 
              {type:"Installation & Demo Details",value:"We'll facilitate the installation and demo through authorized service engineer at your convenience The installation will be done within 48 hours of delivery of the TV. The service engineer will install your new TV, either on wall mount or on table top. Installation and demo are provided free of cost.The engineer will also help you understand your new TV's features.The process generally covers:Wall-mounted or table-top installation, as requested. Physical check of all ports, including power and USB ports. Accessories also checked.Demonstration of features and settingsQuick run-through on how to operate the TV"},
         
           ]
    },

  ],

  SmallImages:[
         "https://rukminim1.flixcart.com/image/128/128/kuwzssw0/television/u/i/r/u-series-65-u1s-65uc1a00-oneplus-original-imag7xtnmnkyz7je.jpeg?q=70",
         "https://rukminim1.flixcart.com/image/128/128/kuwzssw0/television/b/a/l/u-series-65-u1s-65uc1a00-oneplus-original-imag7xtnp2nyjyqp.jpeg?q=70",
         "https://rukminim1.flixcart.com/image/128/128/kuwzssw0/television/a/o/h/u-series-55-u1s-55uc1a00-oneplus-original-imag7xtnf4pfb64f.jpeg?q=70",
         "https://rukminim1.flixcart.com/image/128/128/kuwzssw0/television/0/a/9/u-series-65-u1s-65uc1a00-oneplus-original-imag7xtnm7hjhdrd.jpeg?q=70",
         "https://rukminim1.flixcart.com/image/128/128/kuwzssw0/television/1/i/q/u-series-55-u1s-55uc1a00-oneplus-original-imag7xtnh8vmtmmm.jpeg?q=70",
         "https://rukminim1.flixcart.com/image/128/128/kuwzssw0/television/8/u/n/u-series-50-u1s-50uc1a00-oneplus-original-imag7xtnn47dexvz.jpeg?q=70"
       ],
  RatingReviewData :[
      {title:"Best in the market!",
       rating:"4",
       desc:"Such a good picture quality and gorgeous sound quality and the installation person is very humble gorgeous installation in next day of the delivery installation completed in 30-50 mins.but the cons is this OnePlus tv doesn't support Dolby vision",
       images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202106/blobio-imr-202106_d85083f8b61f4b09bd950d06372bc6c7.jpg?q=90"]
      },
      {title:"Good quality product",
      rating:"4",
      desc:"I purchased this OnePlus TV yesterday. The picture quality is immaculate as well as the sound quality. The brightness and color contrast of the TV is amazing. The installation for the stand setup can be done by yourself as it is pretty simple. Operating the TV is very user-friendly and connecting to wireless platforms like Wi-Fi and Bluetooth are simple. Overall performance is brilliant and the price tag is justified. Outstanding job by OnePlus.",
      images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202106/blobio-imr-202106_c3feeba1e73046208e9a51791a201eab.jpg?q=90"]
      },
      {title:"Brilliant",
      rating:"5",
      desc:"Best For money and super quality that oneplus has given customer support is very good quick installation not expected delivery within 2 days so very best and the equality of the TV is also best the picture and clarity of the TV is also very good and sound quality is likely differ with various songs on the standard mode",
      images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202106/blobio-imr-202106_c0436648a7534ab19a105a60a7c97236.jpg?q=90"]
      }
     ],
  },
    //Beauty, Toys & More
    {
      _id: uuid(),
      categoryName:"Beauty, Toys & More",
      quntity:"1",
      title: "Lakme Absolute Perfect Radiance Skin Brightening Day Creme  (50 g)",
      type:"Creme",
      costprice:"299",
      saleingprice: "189",
      extraOff : "0",
      percentOff:"36", 
      Coupon : "Special PriceGet extra 30% off upto ₹50 on 1 item(s)",
      Rating:"4.1",
      Reviews:"1,008",
      Status :"Available",
      Brand : "Lakme",
      Image:"https://rukminim2.flixcart.com/image/416/416/k8ndrww0/moisturizer-cream/r/y/w/50-absolute-perfect-radiance-skin-brightening-day-creme-lakme-original-imafqm9at4agapkb.jpeg?q=70",
      Availableoffers : [
                         "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                         "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                         "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                        ],
    DeliverBy:"Delivery in2 Days, Wednesday",
    Change:"40",
    Services:"Cash on Delivery available",
    Replacement:"7 Days Return Policy",
    ProductDetails : [
                      {type:"Model Name",value:"Absolute Perfect Radiance Skin Brightening Day Creme"}, 
                      {type:"Quantity",value:"50 g"}, 
                      {type:"Ideal For",value:"Women"}, 
                      {type:"Form",value:"Cream"},  
                      {type:"Application Area",value:"Face"}, 
                      {type:"Applied For (Face)",value:"Moisturization & Nourishment"}, 
                      {type:"Applied For (Body)",value:"Moisturization & Nourishment"}, 
                      {type:"Skin Type",value:"All Skin Types"},
                      {type:"Maximum Shelf Life",value:"24 Months"}, 
                      {type:"Instruction",value:"Instruction refers to the detailed information about how something should be done or operated."}, 
                    ],
    SmallImages:[
          "https://rukminim1.flixcart.com/image/128/128/k8ndrww0/moisturizer-cream/r/y/w/50-absolute-perfect-radiance-skin-brightening-day-creme-lakme-original-imafqm9at4agapkb.jpeg?q=70",
          "https://rukminim1.flixcart.com/image/128/128/k8ndrww0/moisturizer-cream/r/y/w/50-absolute-perfect-radiance-skin-brightening-day-creme-lakme-original-imafqm9awzezzf56.jpeg?q=70",
          "https://rukminim1.flixcart.com/image/128/128/k2krekw0/moisturizer-cream/v/p/c/28-absolute-perfect-radiance-skin-brightening-day-crme-lakme-original-imafhwfzguphxw5z.jpeg?q=70",
          "https://rukminim1.flixcart.com/image/128/128/k2krekw0/moisturizer-cream/v/p/c/28-absolute-perfect-radiance-skin-brightening-day-crme-lakme-original-imafhwfz8edzyx4z.jpeg?q=70",
          "https://rukminim1.flixcart.com/image/128/128/k8ndrww0/moisturizer-cream/r/y/w/50-absolute-perfect-radiance-skin-brightening-day-creme-lakme-original-imafqm9bsqmx5emg.jpeg?q=70"
        ],
        RatingReviewData :[
          {title:"Excellent",
          rating:"4",
          desc:"Really awesome product. Super fast delivery. Very good I recccommend Flipkart to all.",
          images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202101/blobio-imr-202101_d4970c333be94634bae13951f400ac78.jpg?q=90"]
          },
          {title:"don't try this",
          rating:"1",
          desc:"I purchased this item by seeing all the below reviews which seems to be very positive.But when I tried this cream, I personally didn't like it.",
           images:[]
          },
         
        {title:"Not good for skin",
        rating:"1.5",
        desc:"1I purchased this item by seeing all the below reviews which seems to be very positive. But when I tried this cream, I personally didn't like it. It doesn't contain any moisturizer. It will get dry with in 1 sec.When u have dried skin and if you want to moisturize your face, it doesn't happen. I don't recommend day care cream product. But lakme absolute radiance night cream is too good.",
         images:[]
        },
       ]
      },
      {
        _id: uuid(),
        categoryName:"Beauty, Toys & More",
        quntity:"1",
        title: "GARNIER Color Naturals Creme , Shade 1, Natural Black",
        type:"Creme",
        costprice:"180",
        saleingprice: "101",
        extraOff : "0",
        percentOff:"43", 
        Coupon : "Special PriceGet extra 30% off upto ₹50 on 1 item(s)",
        Rating:"4.1",
        Reviews:"89",
        Status :"Available",
        Brand : "Garnier",
        Image:"https://rukminim2.flixcart.com/image/416/416/kv5kfww0/hair-color/e/l/e/color-naturals-creme-garnier-original-imag849qbp5cnwwg.jpeg?q=70",
        Availableoffers : [
                           "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                           "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                           "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                          ],
      DeliverBy:"Delivery in 2 Days, Wednesday",
      Change:"86",
      Services:"Cash on Delivery available",
      Replacement:"7 Days Return Policy",
      ProductDetails : [
                        {type:"Pack of",value:"1"}, 
                        {type:"Brand",value:"GARNIER"}, 
                        {type:"Model Name",value:"Color Naturals Creme"}, 
                        {type:"Quantity",value:"70 ml, 60 g"}, 
                        {type:"Brand Color",value:"Shade 1, Natural Black"}, 
                        {type:"Ammonia Free",value:"Yes"}, 
                        {type:"Ideal For",value:"Men & Women"}, 
                        {type:"Color",value:"Black"}, 
                        {type:"Container Type",value:"Box"}, 
                        {type:"Organic",value:"No"},
                        {type:"Type",value:"Permanent"}, 
                        {type:"Bleach",value:"No"}, 
                        {type:"Hair Color Form",value:"Cream"}, 
                        {type:"Maximum Shelf Life",value:"33 Months"}, 
                        {type:"Instruction",value:"Perform Patch test, Wear Gloves and apply directly on roots and hair, Do Not use comb. Use Hands to spread the Color on desired length for applying color to hair., Leave for 60-90 minutes for best results, Wash with Surya Brasil Shampoo, Conditioner and Hair mask"},
                        {type:"Other Features",value:"100% Vegan, Cruelty Free, Made with Natural Plant Ingredients"},
                        {type:"Country of Origin",value:"India"}, 
                        {type:"Width",value:"6 cm"}, 
                        {type:"Depth",value:"4 cm"}, 
                        {type:"Weight",value:"50g"}, 
                      ],
      SmallImages:[
           "https://rukminim1.flixcart.com/image/128/128/kv5kfww0/hair-color/e/l/e/color-naturals-creme-garnier-original-imag849qbp5cnwwg.jpeg?q=70",
           "https://rukminim1.flixcart.com/image/128/128/kv5kfww0/hair-color/h/u/m/color-naturals-creme-garnier-original-imag849qt3pmchub.jpeg?q=70",
           "https://rukminim1.flixcart.com/image/128/128/kv5kfww0/hair-color/o/y/e/color-naturals-creme-garnier-original-imag849qjbvxmcha.jpeg?q=70",
           "https://rukminim1.flixcart.com/image/128/128/kv5kfww0/hair-color/d/3/v/color-naturals-creme-garnier-original-imag849qkep4g4cn.jpeg?q=70",
           "https://rukminim1.flixcart.com/image/128/128/kv5kfww0/hair-color/f/v/o/color-naturals-creme-garnier-original-imag849qgkh2zskt.jpeg?q=70"
                 ],
          RatingReviewData :[
            {title:"Wonderful",
            rating:"4",
            desc:"good product + good company + good delivery network + politly behaviour of courier boy + best seller's + very good response by customer care =FLIPKART That comes lot's of challenge in field, so always prepare for customer satisfaction because customer satisfaction is most important things in Busness",
            images:["https://rukminim1.flixcart.com/blobio/178/178/imr-201907/blobio-imr-201907_d7a38843034c48ab943b2357d551b744.jpg?q=90"]
            },
            {title:"Brilliant",
            rating:"1",
            desc:"Wonderful SHINY WOWWW MY BOYFRIEND WAS SOOOO HAPPY .just 30 minutes i applied because I dont wanted TOOOOO dark BUT I WAS ALSO SCARED OF SMELL ETC BUT I WAS SURPRISED TO SEE THE QUALITY WAS SOOO THICK NO WATERY,PLUS SMELL WAS SOOOO BEAUTIFUL NOTHING STRONG..VERY VERY SHINY HAIR STILL CAMERA NOT CAPTURING PROPER PICTURE ..BF WAS ON CLOUD NINE :-) BUDGET FRIENDLY AND WONDERFUL PRODUCT QUICK DELIVERY",
             images:["https://rukminim1.flixcart.com/blobio/178/178/imr-201907/blobio-imr-201907_b96af0e1ee0d4bafb1c9051e57d881e3.jpg?q=90"]
            },
           
          {title:"Fabulous",
          rating:"1.5",
          desc:"Good satisfied 😆",
           images:[]
          },
         ]
      },
      {
          _id: uuid(),
          categoryName:"Beauty, Toys & More",
          quntity:"1",
          title: "WOW SKIN SCIENCE Foaming Ubtan For Dry Skin Face Wash  (150 ml)",
          type:"Face Wash",
          costprice:"339",
          saleingprice: "216",
          extraOff : "0",
          percentOff:"36", 
          Coupon : "Special PriceGet extra 30% off upto ₹50 on 1 item(s)",
          Rating:"3.1",
          Reviews:"1,890",
          Status :"Available",
          Brand : "Wow",
          Image:"https://rukminim2.flixcart.com/image/416/416/kiow6fk0-0/face-wash/7/c/m/150-ubtan-foaming-face-wash-with-built-in-face-brush-for-deep-original-imafyfezuqngygxb.jpeg?q=70",
          Availableoffers : [
                             "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                             "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                             "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                            ],
        DeliverBy:"Delivery in 2 Days, Wednesday",
        Change:"150",
        Services:"Cash on Delivery available",
        Replacement:"7 Days Return Policy",
        ProductDetails : [
                          {type:"Pack of",value:"1"},
                          {type:"Brand",value:"WOW SKIN SCIENCE"}, 
                          {type:"Model Name",value:"Foaming Ubtan Face Wash For Dry Skin"}, 
                          {type:"Quantity",value:"150 ml"}, 
                          {type:"Ideal For",value:"Men & Women"}, 
                          {type:"Face Wash Type",value:"Foam"}, 
                          {type:"Ingredient Type",value:"Natural"}, 
                          {type:"Maximum Shelf Life",value:"24 Months"}, 
                          {type:"Applied For",value:"Anti-acne & Pimples, Oil Control, Uneven Skin Tone, Refreshing, Anti-dullness, Deep Cleansing, Nourishment & Moisturization"},
                          {type:"Skin Type",value:"All Skin Types"}, 
                          {type:"Container Type",value:"Bottle"}, 
                          {type:"Sales Package",value:"1 FACE WASH"}, 
                          {type:"Country of Origin",value:"India"},  
                        ],
        SmallImages:[
                 "https://rukminim2.flixcart.com/image/416/416/kiow6fk0-0/face-wash/7/c/m/150-ubtan-foaming-face-wash-with-built-in-face-brush-for-deep-original-imafyfezuqngygxb.jpeg?q=70"
                   ],
            RatingReviewData :[
              {title:"don't buy",
              rating:"1",
              desc:"I suggest don't buy this product because this is not works like other wow products I used so many times but result is not satisfactory, patanjali Sandal soap is much more effective rather than this.......thanks",
              images:[]
              },
              {title:"Brilliant",
              rating:"5",
              desc:"This face wash is so awesome after using this face wash my face feels so refreshing and soft I recommend you guys to use wow skin science ubtan face wash quantity is also more little quantity spreads throughout the face and brush works so well on face I love this product thanks flipkart for speedy delivery😄😄",
               images:[]
              },
           ]
      },
      {
            _id: uuid(),
            categoryName:"Beauty, Toys & More",
            quntity:"1",
            title: "MamaEarth Rice Water Shampoo With Rice Water & Keratin For Damaged, Dry and Frizzy Hair  (250 ml)",
            type:"Shampoo",
            costprice:"349",
            saleingprice: "250",
            extraOff : "0",
            percentOff:"38", 
            Coupon : "Special PriceGet extra 30% off upto ₹50 on 1 item(s)",
            Rating:"3.1",
            Reviews:"1,890",
            Status :"Available",
            Brand : "MamaEarth",
            Image:"https://rukminim2.flixcart.com/image/416/416/kzu6efk0/shampoo/3/4/0/250-rice-water-shampoo-with-rice-water-keratin-for-damaged-dry-original-imagbrqjhs3dj7gf.jpeg?q=70",
            Availableoffers : [
                               "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                               "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                               "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                              ],
          DeliverBy:"Delivery in 4 Days, Wednesday",
          Change:"150",
          Services:"Cash on Delivery available",
          Replacement:"7 Days Return Policy",
          ProductDetails : [
                            {type:"Applied For",value:"Damage Repair"},
                            {type:"Hair Type",value:"All Hair Types"},
                            {type:"Ideal For",value:"Men & Women"},
                          ],
          SmallImages:[
                   "https://rukminim1.flixcart.com/image/128/128/kzu6efk0/shampoo/3/4/0/250-rice-water-shampoo-with-rice-water-keratin-for-damaged-dry-original-imagbrqjhs3dj7gf.jpeg?q=70",
                   "https://rukminim1.flixcart.com/image/128/128/kmns7m80/shampoo/0/l/i/250-rice-water-shampoo-with-rice-water-keratin-for-damaged-dry-original-imagfgbqffdjqnaf.jpeg?q=70",
                   "https://rukminim1.flixcart.com/image/128/128/kmns7m80/shampoo/u/a/h/250-rice-water-shampoo-with-rice-water-keratin-for-damaged-dry-original-imagfgbqbgdunyf6.jpeg?q=70",
                   "https://rukminim1.flixcart.com/image/128/128/kmns7m80/shampoo/s/7/j/250-rice-water-shampoo-with-rice-water-keratin-for-damaged-dry-original-imagfgbq4egekuep.jpeg?q=70"
                      ],
              RatingReviewData :[
                {title:"nice product",
                rating:"1",
                desc:"After using almost a month I can confidently say that if u r also having rough dull dry and frizzy hairs then just go for it blindly.😉😉😉 It has prevented my hair breakages and given such a smooth and silky soft texture to my hairs just can't explain it...It is the best ever chemical free shampoo I had ever tried...Loved it❤",
                images:[]
                },
                {title:"Brilliant",
                rating:"5",
                desc:"Smells really good and the delivery was before time",
                 images:[]
                },
                {title:"Happy with this product",
                rating:"5",
                desc:"Mama earth rice water shampoo excellent 💯 its work magically in first wash my hair becomes so smooth and shining. Thanku flipcart and mama earth 🤗🤗",
                 images:[]
                },
             ]
      },
      {
              _id: uuid(),
              categoryName:"Beauty, Toys & More",
              quntity:"1",
              title: "FTAFAT 100% Best - Kids Puzzle Assembling Building Unbreakable 20+ Activities Kids Toy Set  (Multicolor)",
              type:"kids game",
              costprice:"999",
              saleingprice: "212",
              extraOff : "0",
              percentOff:"78", 
              Coupon : "Special PriceGet extra 30% off upto ₹50 on 1 item(s)",
              Rating:"3.1",
              Reviews:"1,890",
              Status :"Available",
              Brand : "FTAFAT",
              Image:"https://rukminim2.flixcart.com/image/416/416/krjjde80/block-construction/p/h/o/100-best-quality-gift-100-pcs-building-blocks-creative-learning-original-imag5byubgdgz9gk.jpeg?q=70",
              Availableoffers : [
                                 "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                                 "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                                 "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                                ],
            DeliverBy:"Delivery in 4 Days, Wednesday",
            Change:"90",
            Services:"Cash on Delivery available",
            Replacement:"7 Days Return Policy",
            ProductDetails : [
                              {type:"Sales Package",value:"100 pcs Building Block"},
                              {type:"Ideal For",value:"Boys & Girls"},
                              {type:"Minimum Age",value:"2 years"},
                              {type:"Material",value:"Plastic"},
                              {type:"Battery Type",value:"No batteries"},
                              {type:"Other Features",value:"A good choice as a gift for baby Good for your kids educational. Hundreds of bricks and no rules! Fits any child's or adult's building level. The value of this set goes beyond the pieces issue and really encourages kids to create their own masterpieces. It comes in eight colors: Blue, Red, Yellow, Green and Orange Smaller little hand bag can be put inside it to store other things as well."},
                              {type:"Non Toxic",value:"Yes"},
                              {type:"Weight",value:"300g"},
                              {type:"Important Note",value:"The color of some product parts may vary from what is shown in the image"},
                            ],
            SmallImages:[
              "https://rukminim1.flixcart.com/image/128/128/krjjde80/block-construction/p/h/o/100-best-quality-gift-100-pcs-building-blocks-creative-learning-original-imag5byubgdgz9gk.jpeg?q=70",
              "https://rukminim1.flixcart.com/image/128/128/k3lwuq80/block-construction/z/4/u/building-blocks-100pcs-interlocking-connection-child-building-original-imaffp8nzdszrcdu.jpeg?q=70",
              "https://rukminim1.flixcart.com/image/128/128/k47cgi80/block-construction/h/u/h/educational-learning-kids-100-pcs-plastic-building-blocks-original-imafepuhs4jzxbxm.jpeg?q=70",
              "https://rukminim1.flixcart.com/image/128/128/jur9nrk0/puzzle/m/8/q/100-interlocking-building-blocks-toy-colorful-plastic-puzzle-original-imaffp8kshfrgvfh.jpeg?q=70",
              "https://rukminim1.flixcart.com/image/128/128/jxxkvww0/block-construction/6/n/u/12block-construction-ferons-original-imaffp8avuudbmd9.jpeg?q=70"
                          ],
                RatingReviewData :[
                  {title:"Mind-blowing purchase",
                  rating:"5",
                  desc:"Fatafat best quality toys my baby happy thank you delivery boy thank you Flipkart value for money",
                  images:[]
                  },
                  {title:"value of money ",
                  rating:"5",
                  desc:"Good product and block is very nyc colour ful",
                   images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202202/blobio-imr-202202_e8489ebe40fb4e11a5940d2b21d32f80.jpg?q=90"]
                  },
                  {title:"Classy product",
                  rating:"5",
                  desc:"Nice product , value for money. Strongly recommend for buy.",
                   images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202201/blobio-imr-202201_971d3970487042eebad3df5217657bfd.jpg?q=90"]
                  },
               ]
      },
      {
        _id: uuid(),
        categoryName:"Beauty, Toys & More",
        quntity:"1",
        title: "Nerf Disruptor Elite Blaster,6-Dart Rotating Drum,Slam Fire Guns & Darts  (Multicolor)",
        type:"kids game",
        costprice:"610",
        saleingprice: "1,212",
        extraOff : "100",
        percentOff:"53", 
        Coupon : "Special PriceGet extra 30% off upto ₹50 on 1 item(s)",
        Rating:"3.9",
        Reviews:"890",
        Status :"Available",
        Brand : "Nerf Disruptor",
        Image:"https://rukminim2.flixcart.com/image/416/416/jzu60sw0/toy-weapon/m/r/y/n-strike-elite-disruptor-nerf-original-imafjrm5mzn2k689.jpeg?q=70",
        Availableoffers : [
                           "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                           "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                           "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                          ],
      DeliverBy:"Delivery in 4 Days, Wednesday",
      Change:"190",
      Services:"Cash on Delivery available",
      Replacement:"7 Days Return Policy",
      ProductDetails : [
                        {type:"In The Box",value:"1 Blaster, 6 Elite Darts, Manual"},
                        {type:"Type",value:"Guns & Darts"},
                        {type:"Material",value:"Plastic, Foam"},
                        {type:"Minimum Age",value:"8 years"},
                        {type:"Model Name",value:"Disruptor Elite Blaster,6-Dart Rotating Drum,Slam Fire"},
                        {type:"Battery Type",value:"0 No batteries Battery"},
                        {type:"Rechargeable",value:"No"},
                        {type:"Width",value:"32 cm"},
                        {type:"Height",value:"22 cm"},
                        {type:"Depth",value:"7 cm"},
                        {type:"Weight",value:"499 g"},
                        {type:"Important Note",value:"The color of some product parts may vary from what is shown in the image"},
                      ],
      SmallImages:[
                "https://rukminim1.flixcart.com/image/128/128/jzu60sw0/toy-weapon/m/r/y/n-strike-elite-disruptor-nerf-original-imafjrm5mzn2k689.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/jzu60sw0/toy-weapon/m/r/y/n-strike-elite-disruptor-nerf-original-imafjrm5n74ycpvg.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/jzu60sw0/toy-weapon/m/r/y/n-strike-elite-disruptor-nerf-original-imafjrm5ghecsh2v.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/jzu60sw0/toy-weapon/m/r/y/n-strike-elite-disruptor-nerf-original-imafjrm5rat6kytj.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/jzu60sw0/toy-weapon/m/r/y/n-strike-elite-disruptor-nerf-original-imafjrm5rgqngj2e.jpeg?q=70"
                  ],
          RatingReviewData :[
            {title:"Super",
            rating:"5",
            desc:"best gun ever thank you flipkat great power range but when we do slam fire it stuck anyway it's a nice gun",
            images:[]
            },
            {title:"nice game",
            rating:"5",
            desc:"nice gun and nice range it's amazing 😍 love it use it but it about gun as shown in the picture",
             images:[]
            },
            {title:"very good",
            rating:"5",
            desc:"Nice product and this gun was very powerful.Each and every shot is very fast ,But the darts are less quality anyway this was a very nice gun.Thank you Flipkart for the fast delivery",
             images:[]
            },
         ]
      },
      {
        _id: uuid(),
        categoryName:"Beauty, Toys & More",
        quntity:"1",
        title: "Little Olive Tikes 4 Level Height Adjustable Scooter for Kids with LED Lights  (Blue)",
        type:"Scooter",
        costprice:"1079",
        saleingprice: "2999",
        extraOff : "100",
        percentOff:"64", 
        Coupon : "Special PriceGet extra 30% off upto ₹50 on 1 item(s)",
        Rating:"3.9",
        Reviews:"790",
        Status :"Available",
        Brand : "Little Olive",
        Image:"https://rukminim2.flixcart.com/image/416/416/kxqg2a80/outdoor-toy/7/h/m/4-tikes-4-level-height-adjustable-scooter-for-kids-with-led-original-imaga4mv8xqtmu9d.jpeg?q=70",
        Availableoffers : [
                           "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                           "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                           "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                          ],
      DeliverBy:"Delivery in 4 Days, Wednesday",
      Change:"190",
      Services:"Cash on Delivery available",
      Replacement:"7 Days Return Policy",
      ProductDetails : [
                        {type:"In The Box",value:"1 kidsScooter"},
                        {type:"Type",value:"Kids Scooter"},
                        {type:"Ideal for",value:"Boys and Girls"},
                        {type:"Minimum Age",value:"4 years"},
                        {type:"Material",value:"Plastic, Steel"},
                        {type:"Battery Type",value:"0 No batteries Battery"},
                        {type:"Important Note",value:"The color of some product parts may vary from what is shown in the image"},
                        {type:"Product Width",value:"24 cm"},
                        {type:"Product Height",value:"80 cm"},
                        {type:"Product Weight",value:"2 kg"},
                        {type:"Important Note",value:"The color of some product parts may vary from what is shown in the image"},
                      ],
      SmallImages:[
                 "https://rukminim1.flixcart.com/image/128/128/kxqg2a80/outdoor-toy/7/h/m/4-tikes-4-level-height-adjustable-scooter-for-kids-with-led-original-imaga4mv8xqtmu9d.jpeg?q=70",
                 "https://rukminim1.flixcart.com/image/128/128/kzrbiq80/outdoor-toy/b/u/l/-original-imagbp2hufgqy3gj.jpeg?q=70",
                 "https://rukminim1.flixcart.com/image/128/128/kxqg2a80/outdoor-toy/y/f/4/4-tikes-4-level-height-adjustable-scooter-for-kids-with-led-original-imaga4mv8mbzmnef.jpeg?q=70",
                 "https://rukminim1.flixcart.com/image/128/128/kzrbiq80/outdoor-toy/c/x/e/-original-imagbp2hgmebg7zz.jpeg?q=70",
                 "https://rukminim1.flixcart.com/image/128/128/kxqg2a80/outdoor-toy/y/e/g/4-tikes-4-level-height-adjustable-scooter-for-kids-with-led-original-imaga4mvbxd5b8wn.jpeg?q=70"
                    ],
          RatingReviewData :[
            {title:"Best Best Best",
            rating:"5",
            desc:"Best scooter for kids.very strong material..nice attractive colour. Performance of scooter is very good.Break is comfortable.Quality of scooter is very high. My both daughter are very happy after riding it",
            images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202202/blobio-imr-202202_3a3505f95162454e8920ec3d86dd8fc7.jpeg?q=90"]
            },
            {title:"nice",
            rating:"5",
            desc:"This scooter exceeded my every expectation. It is attractive, colorful, sturdy, and well built. The wheels have built in LED lights when turning. The tread is good non slip material. Built to grow with the child. We are very happy",
             images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202202/blobio-imr-202202_f30e66f8cb5c4e07bfc44b37c016edd9.jpg?q=90"]
            },
            {title:"love it with this one",
            rating:"5",
            desc:"This scooter is definitely the best thing you want for a child. The overall quality of the material is quite ,it will last long. The design and the look of the scooter is quite attractive. The cushion given to the handle for little is also impressive. And lastly, the wheels have got lights which makes it worth a buy . The adjustable handle also is also the reason it will last for a couple of years!!!",
             images:["https://rukminim1.flixcart.com/blobio/178/178/imr-202202/blobio-imr-202202_2fff144c90694501aa75a3735d638a72.jpg?q=90"]
            },
         ]
      },
      {
        _id: uuid(),
        categoryName:"Beauty, Toys & More",
        quntity:"1",
        title: "Learning How To Fly - Life Lessons for the Youth  (English, Paperback, Kalam Abdul A. P. J.)",
        type:"Book",
        costprice:"195",
        saleingprice: "128",
        extraOff : "0",
        percentOff:"34", 
        Coupon : "Special PriceGet extra 30% off upto ₹50 on 1 item(s)",
        Rating:"4.9",
        Reviews:"1,089",
        Status :"Available",
        Brand : "NAN",
        Author:"Kalam Abdul A. P. J.",
        Image:"https://rukminim2.flixcart.com/image/416/416/kjbr8280-0/book/z/r/9/learning-how-to-fly-original-imafyx6zuhvfhv94.jpeg?q=70",
        Availableoffers : [
                           "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                           "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                           "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                          ],
      DeliverBy:"Delivery in 2 Days, Wednesday",
      Change:"86",
      Services:"Cash on Delivery available",
      Replacement:"7 Days Return Policy",
      ProductDetails : [
                        {type:"Imprint",value:"Rupa & Co"},  
                        {type:"Publication Year",value:"October"},
                        {type:"Author Info",value:"Born on 15 October 1931, at Rameswaram in Tamil Nadu, Dr Avul Pakir Jainulabdeen Abdul Kalam specialized in Aeronautical Engineering from Madras Institute of Technology. Dr Kalam was one of the most distinguished scientists of India and was awarded the Padma Bhushan (1981), the Padma Vibhushan (1990) and Indiaâs highest civilian award, the Bharat Ratna (1997). Dr Kalam became the eleventh President of India on 25 July 2002. His focus and greatest ambition was finding ways to transform India into a developed nation."},
                      ],
      SmallImages:[
               "https://rukminim2.flixcart.com/image/416/416/kjbr8280-0/book/z/r/9/learning-how-to-fly-original-imafyx6zuhvfhv94.jpeg?q=70"
                 ],
          RatingReviewData :[
            {title:"Lectures to be Read",
            rating:"4",
            desc:"Some books tend to invite inspiration within our hearts on reading out some passages but here is another book that drew inspiration into the minds right from the title of the book. This book contains 18 lectures of his made during his last days to the students of India.The lectures given by him are broke down into points like he does and makes it easy for the readers to understand things like the speech or the lecture. ",
            images:[]
            },
            {title:"Brilliant",
            rating:"5",
            desc:"ANOTHER AWESOME BOOK BY ABDUL KALAMJI.TRY AND TRY,BUT NEVER CRY.YOUTH IS FULL OF ENERGY AND ENTHUSIASM BUT SHORT IN EXPERIENCE.THEY SHOULD BENEFIT THEMSELVES AND OTHERS THROUGH THE EXPERIENCE OF THEIR ELDERS AND VISIONARY LIKE ABDUL KALAMJI.DEFITELY AN AMAZING BOOK.😊😊😊",
             images:[]
            },
           
          {title:"Fabulous ! 5 stars is less rating for this book",
          rating:"3.5",
          desc:"Best packaging!!❤️",
           images:[]
          },
         ]
      },
      {
        _id: uuid(),
        categoryName:"Beauty, Toys & More",
        quntity:"1",
        title: "The Psychology of Money  (English, Paperback, Housel Morgan)",
        type:"Book",
        costprice:"399",
        saleingprice: "232",
        extraOff : "0",
        percentOff:"41", 
        Coupon : "Special PriceGet extra 30% off upto ₹50 on 1 item(s)",
        Rating:"4.8",
        Reviews:"21,089",
        Status :"Available",
        Brand : "NAN",
        Author:"Housel Morgan",
        Image:"https://rukminim2.flixcart.com/image/416/416/kjom6q80-0/regionalbooks/o/i/t/the-psychology-of-money-original-imafvb5vbgcczykj.jpeg?q=70",
        Availableoffers : [
                           "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
                           "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*",
                           "Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction"
                          ],
      DeliverBy:"Delivery in 2 Days, Wednesday",
      Change:"86",
      Services:"Cash on Delivery available",
      Replacement:"7 Days Return Policy",
      ProductDetails : [
                        {type:"Language",value:"English"}, 
                        {type:"Binding",value:"Paperback"}, 
                        {type:"Publisher",value:"Jaico Publishing House"}, 
                        {type:"Genre",value:"Self-Help, self transformation, stategy"}, 
                        {type:"ISBN",value:"9789390166268, 9390166268"}, 
                        {type:"Edition",value:"latest, 2020"} ,
                        {type:"Pages",value:"252"} ,
                        {type:"Author",value:"Housel Morgan"} ,
                        ],
      SmallImages:[
                  "https://rukminim2.flixcart.com/image/416/416/kjom6q80-0/regionalbooks/o/i/t/the-psychology-of-money-original-imafvb5vbgcczykj.jpeg?q=70"
                 ],
          RatingReviewData :[
            {title:"have a time , read this book . Simply awesome !",
            rating:"4",
            desc:"This book is awesome. I was skeptical at first thinking - here's another book on finance. But this is not just finance. Its way more than that. There couldn't possibly be a better title for this book. Truly the psychology of money",
            images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202101/blobio-imr-202101_90fbcda4c04643ac8ce6a573908c789c.jpg?q=90"]
            },
            {title:"Brilliant",
            rating:"5",
            desc:"Morgan Housel is a gifted author. He explained so much of complexicity in such simplicity that a rookie will be able to gain virtue of a much higher level. Don't miss out on this masterpiece",
             images:["https://rukminim1.flixcart.com/blobio/124/124/imr-202012/blobio-imr-202012_00e2d2096a7e45679d1ba0f0587fcd25.jpg?q=90"]
            },
           
          {title:"just woh...",
          rating:"4.5",
          desc:"Best seller, Book was in very Good condition Also The book has very outstanding concepts as i have read rich dad poor dad so i can relate.",
           images:[]
          },
         ]
      },
      {
        _id: uuid(),
        categoryName:"Beauty, Toys & More",
        quntity:"1",
        title: "Nea N95 Mask Washable Reusable Mask (White, Free Size, Pack of 25)",
        type:"Mask",
        costprice:"111",
        saleingprice: "999",
        extraOff : "10",
        percentOff:"88", 
        Coupon : "Special PriceGet extra 30% off upto ₹50 on 1 item(s)",
        Rating:"3.9",
        Reviews:"190",
        Status :"Available",
        Brand : "Nea N95 Mask",
        Image:"https://rukminim2.flixcart.com/image/416/416/l0h1g280/mask-respirator/9/2/4/free-size-25-mask-respirator-gv601-002-respirator-nea-original-imagc93z6qkrawxa.jpeg?q=70",
        Availableoffers : [
                           "Combo OfferBuy 3 items save 5%;Buy 4 save 7%;Buy 5+ save 10%",
                           "Special PriceGet extra ₹51 off (price inclusive of discount)",
                           "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*"
                          ],
      DeliverBy:"Delivery in 4 Days, Wednesday",
      Change:"190",
      Services:"Cash on Delivery available",
      Replacement:"7 Days Return Policy",
      ProductDetails : [
                        {type:"Sales Package",value:"25 Mask Pack"},
                        {type:"Pack of",value:"25"},
                        {type:"Brand",value:"Nea"},
                        {type:"Model Number",value:"mask respirator GV601 -002"},
                        {type:"Type",value:"Respirator"},
                        {type:"Mask Type",value:"Half Mask"},
                        {type:"Respirator Type",value:"Air-purifying Respirator"},
                        {type:"Mounting Type",value:"Ear"},
                        {type:"Suitable For",value:"Pollution"},
                        {type:"Size",value:"Free Size"},
                        {type:"Model Name",value:"N95 Mask Washable Reusable Mask BIS Certified FFPS Mask Face Mask"},
                        {type:"Color",value:"White"},
                        {type:"Straps",value:"Elastic"},
                        {type:"Exhalation Valve Cover",value:"No"},
                        {type:"Melt Blown Fabric Used",value:"Yes"},
                        {type:"Standard",value:"N95"},
                        {type:"Certifications",value:"FDA CERTIFIED, CE CERTIFIED, FFP2, ISO"}
                      ],
      SmallImages:[
        "https://rukminim1.flixcart.com/image/128/128/l0h1g280/mask-respirator/9/2/4/free-size-25-mask-respirator-gv601-002-respirator-nea-original-imagc93z6qkrawxa.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/krtjgcw0/mask-respirator/w/j/x/free-size-10-mask-respirator-gv601-respirator-nea-original-imag5gu42ufyugdh.jpeg?q=70"
      ],
          RatingReviewData :[
            {title:"Best in the market!",
            rating:"5",
            desc:"Wow these Mask are really so good",
            images:[]
            },
            {title:"Wonderful",
            rating:"5",
            desc:"Good quality mask for daily use.easy to breathe while wearing this mask,it's a complete protection,fully comfortable.",
             images:[]
            },
            {title:"Super",
            rating:"5",
            desc:"Good product .. Nice masks",
             images:[]
            },
         ]
      },
];
