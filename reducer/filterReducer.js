const filterReducer = (state,action) => {
    switch(action.type){



        case "LOAD_FILTER_PRODUCTS":
            return{
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            };

            case "GET_SORT_VALUE":
                // let userSortValue = document.getElementById("sort");
                // let sort_value = userSortValue.options[userSortValue.selectedIndex].value
                // console.log(sort_value)
                return {
                    ...state,
                    sorting_value: action.payload,
                }
                case "SORTING_PRODUCTS":
                    let newSortData;
                    const { filter_products  } = state;
                    let tempSortProduct = [...filter_products];

                    if(state.sorting_value === "a-z"){
                        newSortData = tempSortProduct.sort((a,b) =>     a.title.localeCompare(b.title))
                    }
                    if(state.sorting_value === "z-a"){
                        newSortData = tempSortProduct.sort((a,b) =>     b.title.localeCompare(a.title))
                    }
                   
                    if(state.sorting_value === "lowest"){
                        const sortingProducts = (a,b) => {
                            return a.price - b.price
                        };
                        newSortData = tempSortProduct.sort(sortingProducts);
                    }
                    if(state.sorting_value === "higest"){
                        const sortingProducts = (a,b) => {
                            return b.price - a.price
                        };
                        newSortData = tempSortProduct.sort(sortingProducts);
                    }
                    if(state.sorting_value === "recent"){
                        let { all_products } = state;
                        let product = tempSortProduct
                        
                        newSortData = product 
                    }
                    return {
                        ...state,
                        filter_products : newSortData ,
                    };

                    case "UPDATE_FILTERS_VALUE":
                    const { name,value } = action.payload;

                    return {
                        ...state,
                        filter: {
                            ...state.filters,
                            [name]:value,
                        },                        
                    };
                    case "FILTER_PRODUCTS":
                        let { all_products } = state;
                        let tempFilterProducts = [...all_products];

                        const {text , category} = state.filter;

                        if(text) {
                            tempFilterProducts = tempFilterProducts.filter((curElem) => {
                                return curElem.title.toLowerCase().includes(text);
                            })
                        }
                        if(category) {
                            tempFilterProducts = tempFilterProducts.filter((curElem)=> {
                                if(category === curElem.category ) {
                                return curElem.category === category
                                }
                                else if (category !== curElem.category) {

                                }
                            })

                        }


                        return {
                            ...state,
                            filter_products:tempFilterProducts
                        }
            default:
                return state;
                
        }

};

export default filterReducer