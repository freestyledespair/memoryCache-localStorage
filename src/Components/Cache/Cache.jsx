import axios from "axios";
import { useEffect, useState } from "react";

const Cache = () => {
  const [users, setUsers] = useState([]);
  const fetchData = () => {
    try {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        console.log("axios get >>", res.data);
        localStorage.setItem("users", JSON.stringify(res.data));
        setUsers(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("users"));
    if (local) {
      setUsers(local);
      console.log("localData >>", local);
    } else {
      fetchData();
    }
  }, []);
    return <div>
        {
            users ? 
                users.map(el => (
                    <div key={el.id}>
                        <h2>{el.name}</h2>
                    </div>
                    )): <h1>Loading...</h1>
        }
  </div>;
};

export default Cache;
