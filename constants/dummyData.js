const myProfile = {
    name: "Priyanshu Kapadia",
    profile_image: require("../assets/images/profile.png"),
    address: "No. 88, Jln Padungan, Kuching",
    phone_number: "111-222-3333",
    user_id: '1111 2222',
    dob: '03/03/1990',
    gender: 'Male',
    joined: 'March 2017',
    email: 'priyanshu@gmail.com',
}

const myRider = {
    name: "Priyanshu Kapadia",
    profile_image: require("../assets/images/profile.png"),
    contact: "+91 1234567890",
    rating: 4,
    tips: [
        {
            id: 1,
            label: 'No Tips'
        },
        {
            id: 2,
            label: '$5'
        },
        {
            id: 3,
            label: '$10'
        },
        {
            id: 4,
            label: '$15'
        },
        {
            id: 5,
            label: '$20'
        }
    ]
}

const categories = [
    {
        id: 1,
        name: "Fast Food",
        icon: require("../assets/icons/burger.png")
    },
    {
        id: 2,
        name: "Fruit Item",
        icon: require("../assets/icons/cherry.png")
    },
    {
        id: 3,
        name: "Rice Item",
        icon: require("../assets/icons/rice.png")
    }
]

const hamburger = {
    id: 1,
    name: "Hamburger",
    description: "Chicken patty hamburger",
    categories: [1, 2],
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/hamburger.png")
}

const hotTacos = {
    id: 2,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    categories: [1, 3],
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: require("../assets/dummyData/hot_tacos.png")
}

const vegBiryani = {
    id: 3,
    name: "Veg Biryani",
    description: "A popular spice and vegetables mixed favoured rice dish which is typically prepared by layering the biryani gravy and basmati rice in flat bottom vessel.",
    categories: [1, 2, 3],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/veg_biryani.png")
}

const wrapSandwich = {
    id: 4,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
    categories: [1, 2],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/wrap_sandwich.png")
}

const menu = [
    {
        id: 1,
        name: "Featured",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 2,
        name: "Nearby you",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 3,
        name: "Popular",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },
    {
        id: 4,
        name: "Newest",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 5,
        name: "Trending",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 6,
        name: "Recommended",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },

]

const sizes = [
    {
        id: 1,
        label: '12"'
    },
    {
        id: 2,
        label: '14"'
    },
    {
        id: 3,
        label: '16"'
    },
    {
        id: 4,
        label: '18"'
    }
]

const myCart = [
    {
        ...hamburger,
        qty: 1
    },
    {
        ...hotTacos,
        qty: 1
    },
    {
        ...vegBiryani,
        qty: 1
    }
]

const myCards = [
    {
        id: 1,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
        card_no: "1234"
    },
    {
        id: 2,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
        card_no: "1234"
    },
]

const allCards = [
    {
        id: 1,
        name: "Apple Pay",
        icon: require("../assets/icons/apple.png"),
    },
    {
        id: 2,
        name: "Visa",
        icon: require("../assets/icons/visa.png"),
    },
    {
        id: 3,
        name: "PayPal",
        icon: require("../assets/icons/paypal.png"),
    },
    {
        id: 4,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
    },
    {
        id: 5,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
    },
]


const fromLocs = [
    {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
    },
    {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
    },
    {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
    },
    {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
    },
    {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
    },
    {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
    }
]

const MyOrders = [
    {
        id: 1,
        name: 'Pizza Hut',
        orderDate: '19 Sep, 2022',
        time: '14:30',
        image: require("../assets/images/Pizza-Hut-Logo.png"),
        items: [
            {
                id: 1,
                name: "Hamburger",
                description: "Chicken patty hamburger",
                categories: [1, 2],
                price: 15.99,
                calories: 78,
                isFavourite: true,
                image: require("../assets/dummyData/hamburger.png")
            },
            {
                id: 2,
                name: "Hot Tacos",
                description: "Mexican tortilla & tacos",
                categories: [1, 3],
                price: 10.99,
                calories: 78,
                isFavourite: false,
                image: require("../assets/dummyData/hot_tacos.png")
            },
        ],
        price: 35.30,
        orderStatus: 'Order Delivered',
        foodIsOnWay: false
    },
    {
        id: 2,
        name: 'KFC',
        orderDate: '19 Sep, 2022',
        time: '14:30',
        image: require("../assets/images/KFC-Logo.png"),
        items: [
            {
                id: 1,
                name: "Hamburger",
                description: "Chicken patty hamburger",
                categories: [1, 2],
                price: 15.99,
                calories: 78,
                isFavourite: true,
                image: require("../assets/dummyData/hamburger.png")
            },
            {
                id: 4,
                name: "Wrap Sandwich",
                description: "Grilled vegetables sandwich",
                categories: [1, 2],
                price: 10.99,
                calories: 78,
                isFavourite: true,
                image: require("../assets/dummyData/wrap_sandwich.png")
            },
        ],
        price: 55.30,
        orderStatus: 'Order Cancelled',
        foodIsOnWay: false
    },
    {
        id: 3,
        name: "Burger King",
        orderDate: '15 Sep, 2022',
        time: '14:30',
        image: require("../assets/images/Burger-King-Logo.png"),
        items: [
            {
                id: 1,
                name: "Hamburger",
                description: "Chicken patty hamburger",
                categories: [1, 2],
                price: 15.99,
                calories: 78,
                isFavourite: true,
                image: require("../assets/dummyData/hamburger.png")
            },
        ],
        price: 15.30,
        orderStatus: 'Order Delivered',
        foodIsOnWay: false
    },
    {
        id: 4,
        name: 'Starbucks',
        orderDate: '23 Jan, 2022',
        time: '14:30',
        image: require("../assets/images/Starbucks-Logo.png"),
        items: [
            {
                id: 4,
                name: "Wrap Sandwich",
                description: "Grilled vegetables sandwich",
                categories: [1, 2],
                price: 10.99,
                calories: 78,
                isFavourite: true,
                image: require("../assets/dummyData/wrap_sandwich.png")
            },
            {
                id: 2,
                name: "Hot Tacos",
                description: "Mexican tortilla & tacos",
                categories: [1, 3],
                price: 10.99,
                calories: 78,
                isFavourite: false,
                image: require("../assets/dummyData/hot_tacos.png")
            }
        ],
        price: 90.30,
        orderStatus: 'Food is on the way',
        foodIsOnWay: true
    },
    {
        id: 5,
        name: 'McDonald',
        orderDate: '23 Jan, 2023',
        image: require("../assets/images/McDonalds-Logo.png"),
        time: '14:30',
        items: [
            {
                id: 1,
                name: "Hamburger",
                description: "Chicken patty hamburger",
                categories: [1, 2],
                price: 15.99,
                calories: 78,
                isFavourite: true,
                image: require("../assets/dummyData/hamburger.png")
            },
            {
                id: 4,
                name: "Wrap Sandwich",
                description: "Grilled vegetables sandwich",
                categories: [1, 2],
                price: 10.99,
                calories: 78,
                isFavourite: true,
                image: require("../assets/dummyData/wrap_sandwich.png")
            },
            {
                id: 3,
                name: "Veg Biryani",
                description: "A popular spice and vegetables mixed favoured rice dish which is typically prepared by layering the biryani gravy and basmati rice in flat bottom vessel.",
                categories: [1, 2, 3],
                price: 10.99,
                calories: 78,
                isFavourite: true,
                image: require("../assets/dummyData/veg_biryani.png")
            }
        ],
        price: 55.30,
        orderStatus: 'Food is on the way',
        foodIsOnWay: true
    }
]

const MyCoupons = [
    {
        id: 1,
        name: 'Burger King',
        validDate: '01 Jan, 2024',
        offer: '20% Off',
        image: require("../assets/images/Burger-King-Logo.png"),
        avaliable: true
    },
    {
        id: 2,
        name: 'KFC',
        validDate: '01 Jan, 2024',
        offer: '10% Off',
        image: require("../assets/images/KFC-Logo.png"),
        avaliable: true
    },
    {
        id: 3,
        name: 'Pizza Hut',
        validDate: '01 Feb, 2024',
        offer: '35% Off',
        image: require("../assets/images/Pizza-Hut-Logo.png"),
        avaliable: true
    },
    {
        id: 4,
        name: 'Starbucks',
        validDate: '01 Feb, 2024',
        offer: '15% Off',
        image: require("../assets/images/Starbucks-Logo.png"),
        avaliable: true
    },
    {
        id: 5,
        name: 'Burger King',
        validDate: '02 Jan, 2023',
        offer: '20% Off',
        image: require("../assets/images/Burger-King-Logo.png"),
        avaliable: false
    },
    {
        id: 6,
        name: 'Starbucks',
        validDate: '01 Jan, 2023',
        offer: '15% Off',
        image: require("../assets/images/Starbucks-Logo.png"),
        avaliable: false
    },
]
export default {
    vegBiryani,

    myProfile,
    myRider,
    categories,
    menu,
    sizes,

    myCart,

    myCards,
    allCards,
    
    fromLocs,

    MyOrders,
    MyCoupons
}