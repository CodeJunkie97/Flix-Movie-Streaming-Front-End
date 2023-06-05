import Featured from '../../featured/Featured';
import Navbar from '../../navbar/Navbar';
import List from '../../list/List';
import './home.scss';
import { useEffect, useState } from 'react';
import axios from "axios";

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzYzMzc2OWI4NDFhNDliYWVmMmU1NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NTk5MjY2NCwiZXhwIjoxNjg2NDI0NjY0fQ.9kfZpzIxnMzgsORQlizDpaXKSUNR3hYgPvs0ycaQz1w"
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  
  
  return (
    <div className = "home">
        <Navbar/>
        <Featured type = {type}/>
        <List />
        <List />
        <List />
        <List />
    </div>
  )
}

export default Home