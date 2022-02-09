import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Home({type}) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type ? "?type=" + type : ""}`,
        {
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmEyMWVhMTBiOTI4YzYwYTMxYzRjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDM4MzMyMCwiZXhwIjoxNjQ0ODE1MzIwfQ.NjmQW_wl8Orqb0s_JGsBlzcMAWobtrqAqvnTjQCYkcY"
          },
        });
        console.log(res.data);
        setLists(res.data)

      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type])
  return (
      <div className="home">
          <Navbar />
          <Featured type={type}/>
          {lists.map((list) => (
            <List list={list} />
          ))}
          
          
      </div>


  ); 
};

