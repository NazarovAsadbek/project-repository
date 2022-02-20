import Mock from '../mock'

const EcommerceDB = {
    productList: [
        {
            id: '323sa680b32497dsfdsgga21rt47',
            imgUrl: require('@/assets/images/products/audio/earbuds.png'),
            price: 324,
            totalUnit: 100,
            details: '6G , 4k FPS',
            title: 'Steelseries Speaker Venue 8',
            category: 'audio',
            brand: 'Microlab',
            rating: 5,
            qty: 0,
            freeShipping: false,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        },
        {
            id: '323sa680b324976dfgga21rt47',
            imgUrl: require('@/assets/images/products/audio/earphone.png'),
            price: 454,
            totalUnit: 100,
            details: '6G , 4k FPS',
            title: 'Razer Speaker',
            category: 'audio',
            brand: 'Microlab',
            rating: 3,
            qty: 0,
            freeShipping: true,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        },
        {
            id: '323sa680bdf4976dfgga21rt4',
            imgUrl: require('@/assets/images/products/audio/microphone.png'),
            price: 134,
            totalUnit: 100,
            details: '6G , 4k FPS',
            title: 'Bass Speaker',
            category: 'audio',
            brand: 'Sony',
            rating: 4,
            qty: 0,
            freeShipping: true,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        },
        {
            id: '333sa680bdf4976dfgga21rt4',
            imgUrl: require('@/assets/images/products/audio/speaker.png'),
            price: 987,
            totalUnit: 100,
            details: '6G , 4k FPS',
            title: 'Bit Bass Headphone',
            category: 'audio',
            brand: 'Sony',
            rating: 5,
            qty: 0,
            freeShipping: true,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        },
        {
            id: 'ec4id',
            imgUrl: require('@/assets/images/products/mobile/samsung.png'),
            price: 978,
            totalUnit: 100,
            details: '6G , 4k FPS',
            title: 'Iphone 11 Max Pro',
            category: 'cellphone',
            brand: 'Iphone',
            rating: 2,
            qty: 0,
            freeShipping: true,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        },
        {
            id: 'ec5id',
            imgUrl: require('@/assets/images/products/accessories/wireless.png'),
            price: 12,
            totalUnit: 100,
            details: '6G , 4k FPS',
            title: 'IPhone 11 Max Pro Case',
            category: 'accessories',
            brand: 'Iphone',
            rating: 4,
            qty: 0,
            freeShipping: true,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        },
        {
            id: 'ec6id',
            imgUrl: require('@/assets/images/products/fashion/t-shirt.png'),
            price: 23,
            totalUnit: 100,
            details: '6G , 4k FPS',
            title: 'Comlion Watch',
            category: 'fashion',
            brand: 'Comlion',
            rating: 1,
            qty: 0,
            freeShipping: true,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        },
        {
            id: 'ec7id',
            imgUrl: require('@/assets/images/products/fashion/t-shirt-2.png'),
            price: 75,
            totalUnit: 100,
            details: '6G , 4k FPS',
            title: 'Kurren Watch',
            category: 'fashion',
            brand: 'Kurren',
            rating: 3,
            qty: 0,
            freeShipping: true,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        },
        {
            id: 'ec7id',
            imgUrl: require('@/assets/images/products/fashion/t-shirt-2.png'),
            price: 75,
            totalUnit: 100,
            details: '6G , 4k FPS',
            title: 'Kurren Watch',
            category: 'fashion',
            brand: 'Kurren',
            rating: 3,
            qty: 0,
            freeShipping: true,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        },
        {
            id: 'ec7id',
            imgUrl: require('@/assets/images/products/fashion/t-shirt-3.png'),
            price: 75,
            totalUnit: 100,
            details: '6G , 4k FPS',
            title: 'Kurren Watch',
            category: 'fashion',
            brand: 'Kurren',
            rating: 3,
            qty: 0,
            freeShipping: true,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        },
        {
            id: 'ec7id',
            imgUrl: require('@/assets/images/products/fashion/t-shirt-4.png'),
            price: 75,
            totalUnit: 100,
            details: '6G , 4k FPS',
            title: 'Kurren Watch',
            category: 'fashion',
            brand: 'Kurren',
            rating: 3,
            qty: 0,
            freeShipping: true,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        },
        {
            id: 'ec7id',
            imgUrl: require('@/assets/images/products/fashion/t-shirt-5.png'),
            price: 75,
            totalUnit: 100,
            details: '6G , 4k FPS',
            title: 'Kurren Watch',
            category: 'fashion',
            brand: 'Kurren',
            rating: 3,
            qty: 0,
            freeShipping: true,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        },
        {
            id: 'ec7id',
            imgUrl: require('@/assets/images/products/fashion/t-shirt-3.png'),
            price: 75,
            totalUnit: 100,
            details: '6G , 4k FPS',
            title: 'Kurren Watch',
            category: 'fashion',
            brand: 'Kurren',
            rating: 3,
            qty: 0,
            freeShipping: true,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        },
        {
            id: 'ec8id',
            imgUrl: require('@/assets/images/products/mobile/samsung.png'),
            price: 978,
            totalUnit: 100,
            details: '6G , 4k FPS',
            title: 'Iphone 11 Max Pro',
            category: 'cellphone',
            brand: 'Iphone',
            rating: 5,
            qty: 0,
            freeShipping: true,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        },
        {
            id: 'ec8id',
            imgUrl: require('@/assets/images/products/mobile/samsung.png'),
            price: 978,
            totalUnit: 100,
            details: '6G , 4k FPS',
            title: 'Iphone 11 Max Pro',
            category: 'cellphone',
            brand: 'Iphone',
            rating: 4,
            qty: 0,
            freeShipping: true,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        }
    ],

    category: [
        {
            checkbox: false,
            title: 'audio',
            product: 321
        },
        {
            checkbox: false,
            title: 'fashion',
            product: 123
        },
        {
            checkbox: false,
            title: 'cellphone',
            product: 546
        },
        {
            checkbox: false,
            title: 'accessories',
            product: 76
        }
    ],

    brand: [
        {
            checkbox: false,
            title: 'Microlab',
            product: 32
        },
        {
            checkbox: false,
            title: 'Sony',
            product: 534
        },
        {
            checkbox: false,
            title: 'Beats',
            product: 23
        },
        {
            checkbox: false,
            title: 'Iphone',
            product: 65
        },
        {
            checkbox: false,
            title: 'Comlion',
            product: 198
        }
    ],

    rating: [
        {
            rates: 5,
            product: 345
        },
        {
            rates: 4,
            product: 53
        },
        {
            rates: 3,
            product: 765
        },
        {
            rates: 2,
            product: 32
        },
        {
            rates: 1,
            product: 64
        }
    ],

    cart: [
        {
            uid: '1',
            list: [
                {
                    productId: '323sa680b32497dsfdsgga21rt47',
                    amount: 1
                },
                {
                    productId: '323sa680b324976dfgga21rt47',
                    amount: 1
                },
                {
                    productId: '323sa680bdf4976dfgga21rt4',
                    amount: 1
                },
                {
                    productId: '333sa680bdf4976dfgga21rt4',
                    amount: 1
                }
            ]
        }
    ],

    userList: [
        {
            id: '1',
            name: 'John Doe',
            avatar: '/assets/images/face-7.jpg'
        },
        {
            id: '323sa680b3249760ea21rt47',
            name: 'Frank Powell',
            avatar: '/assets/images/faces/13.jpg'
        },
        {
            id: '7863a6802ez0e277a0f98534',
            name: 'John Doe',
            avatar: '/assets/images/face-1.jpg'
        }
    ]
}

const getDetailedCartList = (uid) => {
    let cartList = EcommerceDB.cart.find((userCart) => userCart.uid === uid)
        .list
    return cartList.map((product) => ({
        amount: product.amount,
        ...EcommerceDB.productList.find((item) => item.id === product.productId)
    }))
}

Mock.onGet('/api/ecommerce/get-product-list').reply((config) => {
    const response = EcommerceDB.productList
    return [200, response]
})

Mock.onGet('/api/ecommerce/get-category-list').reply((config) => {
    const response = EcommerceDB.category
    return [200, response]
})

Mock.onGet('/api/ecommerce/get-rating-list').reply((config) => {
    const response = EcommerceDB.rating
    return [200, response]
})

Mock.onGet('/api/ecommerce/get-brand-list').reply((config) => {
    const response = EcommerceDB.brand
    return [200, response]
})

Mock.onGet('/api/ecommerce/get-cart-list').reply((config) => {
    let uid = config.data
    let response = []

    if (uid) {
        response = getDetailedCartList(uid)
    }

    return [200, response]
})

Mock.onPost('/api/ecommerce/add-to-cart').reply((config) => {
    let {uid, productId} = JSON.parse(config.data)

    let cartList = EcommerceDB.cart.map((userCart) => {
        if (userCart.uid === uid) {
            let product = userCart.list.find(
                (product) => product.productId === productId
            )
            if (product) {
                return {
                    ...userCart,
                    list: userCart.list.map((product) => {
                        if (product.productId === productId) {
                            return {
                                ...product,
                                amount: product.amount + 1
                            }
                        } else return product
                    })
                }
            } else {
                userCart.list.push({
                    productId,
                    amount: 1
                })
                return userCart
            }
        } else return userCart
    })

    EcommerceDB.cart = cartList

    const response = getDetailedCartList(uid)

    return [200, response]
})

Mock.onPost('/api/ecommerce/delete-from-cart').reply((config) => {
    let {uid, productId} = JSON.parse(config.data)

    let cartList = EcommerceDB.cart.map((userCart) => {
        if (userCart.uid === uid) {
            return {
                ...userCart,
                list: userCart.list.filter(
                    (product) => product.productId !== productId
                )
            }
        } else return userCart
    })

    EcommerceDB.cart = cartList

    const response = getDetailedCartList(uid)

    return [200, response]
})

Mock.onPost('/api/ecommerce/update-cart-amount').reply((config) => {
    let {uid, productId, amount} = JSON.parse(config.data)

    let cartList = EcommerceDB.cart.map((userCart) => {
        if (userCart.uid === uid) {
            return {
                ...userCart,
                list: userCart.list.map((product) => {
                    if (product.productId === productId) {
                        console.log('found')
                        product.amount = amount
                    }
                    return product
                })
            }
        } else return userCart
    })

    EcommerceDB.cart = cartList

    const response = getDetailedCartList(uid)

    return [200, response]
})
