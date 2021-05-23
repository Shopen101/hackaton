const initialState = {
    allCategoreis: [],
    currentCategory: [],
}

const categories = (state = initialState, action) => {
    switch (action.type) {
        case 'SETCATEGORIES':
            return {
                ...state,
                allCategoreis: action.payload,
            }

        case 'SETCURRENTCATEGORY':
            return {
                ...state,
                currentCategory: [...action.payload],
            }

        default:
            return {
                ...state,
            }
    }
}

export default categories
