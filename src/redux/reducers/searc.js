const initialState={
    stockResearch: []
}

const searchReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_SEARCH':
        
        return {
          ...state, 
          stockResearch: action.payload,
            
          }
    
      
        default : return state

    } }

export default searchReducer