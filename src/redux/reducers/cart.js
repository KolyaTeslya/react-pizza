const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};


const pizzas = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TOTAL_PRICE':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            };
        default: 
            return state;
    }
}

export default pizzas;