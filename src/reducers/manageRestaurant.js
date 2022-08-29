import cuid from 'cuid';
export const cuidFn = cuid;
 
export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
    console.log("reducer received this action:", action)
   
    switch(action.type) {

        case 'ADD_RESTAURANT':
            const restaurant = {
                text: action.text,
                id: cuidFn()
            }
            return {...state, restaurants: [...state.restaurants, restaurant]}
        
        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
            return {...state, restaurants};

        case 'ADD_REVIEW':
            debugger
            // create review object
            const review = {
                text: action.review.text,
                restaurantId: action.review.restaurantId,
                id: cuid()
            }

            // return array of reviews + most recently created review
            return { ...state,
                reviews: [...state.reviews, review]
            }

        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(review => review.id !== action.id);
            return {...state, reviews};

        default:
            return state;
    }
};
