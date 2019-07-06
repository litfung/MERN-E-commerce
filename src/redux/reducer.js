import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer from '../storeModules/auth/authReducer'
import uiReducer from '../storeModules/ui/uiReducer'
import cartReducer from '../storeModules/cart/cartReducer'
import history from '../history'

export default combineReducers({
  auth: authReducer,
  ui: uiReducer,
  cart: cartReducer,
  router: connectRouter(history)
})
