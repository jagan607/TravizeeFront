import { userConstants } from './../constants/user.constants';

const initialState = {
  id:'',
  confirm_token:"",
  isLoading:false
}
export function registration(state = initialState, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true,
                isLoading:true
      };
    case userConstants.REGISTER_SUCCESS:
      return{
        id:action.user.id,
        confirm_token:action.user.token,
        isLoading:false
      };
    case userConstants.REGISTER_FAILURE:
      return {
        isLoading:false
      };
    default:
      return state
  }
}