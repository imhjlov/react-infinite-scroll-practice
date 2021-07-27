import React,{useState, useEffect} from 'react';
import axios from 'axios';


const InfiniteScrollList = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const callDataAPI = `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`;
    
    //데이터 최초 한번만 불러옴, 그렇지 않으면 무한으로 받아옴..
    useEffect(()=>{
        axios.get(callDataAPI)
        .then(response =>{
            setData(response.data); 
        });
    },[]);
   
    return (
        <div>
            <div>
                {data.map((item, index)=>(
                    <div>
                        <p><span>comment id : </span><span>{item.id}</span></p>
                        <p><span>email : </span><span>{item.email}</span></p>
                        <p><span>comment : </span><span>{item.body}</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScrollList;