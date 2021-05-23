import { combineReducers } from 'redux'
import main from './main'
import categories from './categories'
import userInfo from './userClick'

const rootReducer = combineReducers({
    user: main,
    categories,
    userInfo
})

export default rootReducer
