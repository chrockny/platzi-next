import React,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar';

const Home = () =>{
    const [productList,setProductList] = useState([]);

    useEffect(()=>{
        window.fetch('/api/avo')
        .then(response=>response.json())
        .then(({data,length})=>setProductList(data))
        .catch(err=>console.error(err));
    },[])

    return(
        <div>
        <h1>
            Hola Rockny JAJAJA
            {productList.map(product =>(
                <div>
                    <h6>{product.image}</h6>
                </div>
            ))}
        </h1>
        </div>
    )
}

export default Home;