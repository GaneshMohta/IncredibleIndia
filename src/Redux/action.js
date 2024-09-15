import axios from axios

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

const fetchDataRequest =() => {
    return {
        type: FETCH_DATA_REQUEST,
    }
}

const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload : data,
    }
}
const fetchDataFailure = (error) =>{
    return {
        type : FETCH_DATA_FAILURE,
        payload : error,
    }
}

export const fetchData = () => {
    return (dispatch)=>{
        dispatch(fetchDataRequest());
        axios.get('http://localhost:3000/product/get')
        .then(res => {const data = res.data;
            dispatch(fetchDataSuccess(data));
        }).catch(error => {
            dispatch(fetchDataFailure(error.message));
        });
    };
};
