


const state = {
    items: [
        // {
        //     id: "323sa680b32497dsfdsgga21rt47",
        //     imgUrl: require('@/assets/images/products/audio/earbuds.png'),
        //     price: 324,
        //     totalUnit: 100,
        //     details: 'Enjoy Premium Sound',
        //     title: "Steelseries Speaker Venue 8",
        //     category: "audio",
        //     brand: "Microlab",
        //     rating: 5,
        //     qty: 1,
        //     freeShipping: false,
        //     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        //   },
        //   {
        //     id: "323sa680b324976dfgga21rt47",
        //     imgUrl: require('@/assets/images/products/audio/earphone.png'),
        //     price: 454,
        //     totalUnit: 100,
        //     details: '6G , 4k FPS',
        //     title: "Razer Speaker",
        //     category: "audio",
        //     brand: "Microlab",
        //     rating: 3,
        //     qty: 1,
        //     freeShipping: true,
        //     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        //   },
    ],
    
}

const getters = {
    getCartList: state => state.items,
    
    
}

const actions = {
    addCart ({ commit }, data) {
        commit('ADD_CART', data)
    },
    

}

const mutations = {
    
    ADD_CART (state, data) {  
        
        let findId = state.items.find(product => product.id == data.id)
        
        if(findId) {
            data.qty += 1
           
        }else {
            data.qty = 1
            state.items.push(data)
         
        }
        // const findId = state.addedToCart.find(product => product.id == data.id)
        // if (findId) {
        //     // console.log(findId)
        //     state.totalCart += data.productPrice
        //     data.qty += 1
        //     // console.log(data);
        // } else {
        //     state.totalCart += data.productPrice
        //     data.qty = 1
        //     state.addedToCart.push(data)
        // }
    },
    

}
export default {
    state,
    getters,
    actions,
    mutations,
}
