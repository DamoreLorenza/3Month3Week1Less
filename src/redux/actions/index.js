export const ADD_TO_FAVORITE='ADD_TO_FAVORITE'
export const REMOVE_FROM_FAVORITE='REMOVE_FROM_FAVORITE'
export const GET_SEARCH='GET_SEARCH'




const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

export const addToFavoriteAction=(company_name)=>{
 
return{
    type: ADD_TO_FAVORITE,
    payload: company_name
}
}

export const removeFromFavoriteAction=(i)=>{
    return{
        type: REMOVE_FROM_FAVORITE,
        payload: i
    }
}

export const getSearchAction=()=>{


    return async (dispatch)=>{
        try {
          const response = await fetch(baseEndpoint);
          if (response.ok) {
            const { data } = await response.json();
            dispatch({
                type: GET_SEARCH,
                payload: data
            })
          } else {
            alert("Error fetching results");
          }
        } catch (error) {
          console.log(error);
        }
      }

}