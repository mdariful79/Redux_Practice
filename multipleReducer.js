const { createStore, combineReducers } = require("redux");

//products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

//cart constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS";

//Product state
const initialProductSate = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

//Cart state
const initialCartSate = {
    cart: ["Mouse", "Monitor", "Key Board"],
    numberOfProducts: 3,
  };

 //Product Action 
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProducts = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};

 //Cart Action 
 const getCart = () => {
    return {
      type: GET_CART_ITEMS,
    };
  };
  
  const addCart = (product) => {
    return {
      type: ADD_CART_ITEMS,
      payload: product,
    };
  };

// product Reducer
const productReducer = (state = initialProductSate, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

//cart Reducer
const cartReducer = (state = initialCartSate, action) => {
    switch (action.type) {
      case GET_CART_ITEMS:
        return {
          ...state,
        };
  
      case ADD_CART_ITEMS:
        return {
          cart: [...state.cart, action.payload],
          numberOfProducts: state.numberOfProducts + 1,
        };
  
      default:
        return state;
    }
  };

  const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
  })

// Store
const store = createStore(rootReducer);
store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(getProducts())
store.dispatch(addProducts("Oil"))

store.dispatch(getCart())
store.dispatch(addCart("Laptop"))
