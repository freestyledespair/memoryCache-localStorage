import axios from 'axios';
import cache from 'memory-cache';
import { useEffect, useState } from 'react';
const MemoryCache = () => {
const [koko, setKoko] = useState(null)
    const fetchData = async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            const data = response.data
            cache.put('usersData', data, 5 * 60 * 1000)
            console.log('Данные кэшированы');
        setKoko(data);
        }
    useEffect(() => {
        const cacheData = cache.get('usersData')
        console.log('Содержимое кэша', cacheData);
        if (cacheData) {
            console.log('Данные уже кэшированы');
            setKoko(cacheData)
        } else {
        fetchData()
        }
    },[])


    return (
        <div>
             {
            koko ? 
            koko.map(el => (
                    <div key={el.id}>
                        <h2>{el.name}</h2>
                    </div>
                    )): <h1>Loading...</h1>
        }
        </div>
    );
};

export default MemoryCache;