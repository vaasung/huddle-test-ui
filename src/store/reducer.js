

export default function postReducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return { ...state, isLoading: action.payload }
        case 'GET_POST':
            return { ...state, posts: action.payload }
        case 'GET_COMMENTS':
            return { ...state, comments: action.payload }
        case 'ERRORS':
            return { errors: action.payload }
        case 'VISIBLE_SEARCH':
            return { visible: action.payload }
        default:
            return state
    }
};

