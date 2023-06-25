// import { useCallback, useMemo, useState } from "react";
import MemoryCache from "./Components/MemoryCache/MemoryCache";
// import CallBack from "./Components/CallBack";
import Cache from "./Components/Cache/Cache";

const App = () => {
  // const [word, setWord] = useState('callBack already happen')

  //   const handleConsole = useCallback(() => {
  //     console.log(word);
  //   }, [word])

  // fetch
  // setData(response)
  // const cachedData = useMemo(()=>{data},[data])


  //   <div >
  // {
  // cachedData ? 
  //   cachedData.map()
  //   : null
  // data.map()
  // }
  // </div>
  return (
    <div>
      {/* <button onClick={()=> setWord('Callback rewrote')}>Change Word</button> */}
      {/* <CallBack handleConsole={handleConsole} /> */}




      {/* Cache - хранение и получение через localStorage */}
      {/* <Cache /> */}

      {/* MemoreCache - хранение и получение через cache (библиотека memory-cache)*/}
      <MemoryCache />
    </div>
  );
};

export default App;