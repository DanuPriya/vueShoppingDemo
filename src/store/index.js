import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
items:[
      {id:1,name:'T-Shirts',image:'//placehold.it/200',price:200},
       {id:2,name:'Leggings',image:'//placehold.it/200',price:400},
       {id:3,name:'Slippers',image:'//placehold.it/200',price:2800},
       {id:4,name:'Pants',image:'//placehold.it/200',price:500},
       {id:5,name:'Suits',image:'//placehold.it/200',price:800},
       {id:6,name:'Shirts',image:'//placehold.it/200',price:900},
       {id:7,name:'Trousers',image:'//placehold.it/200',price:1000},
       {id:8,name:'Dresses',image:'//placehold.it/200',price:1200},
    ],
     inCart: [],
  },

  getters: {

    items: state => state.items,
    inCart: state => state.inCart,

  },
actions: {

  cart(context,id){
    context.commit('ADD_TO_CART',id);
  }
    
  },

  mutations: {
    ADD_TO_CART(state,id){
      state.inCart.push(id);

    },
    
  },
  
})
