import React,{useState, useEffect} from 'react';
import axios from 'axios';


const InfiniteScrollList = () => {
    const [data, setData] = useState(null);
    //데이터 최초 한번만 불러옴, 그렇지 않으면 무한으로 받아옴..
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response =>{
            setData(response.data);  
        });
    },[]);
   
    return (
        <div>
            {console.log(data)}
        </div>
    );
};

export default InfiniteScrollList;