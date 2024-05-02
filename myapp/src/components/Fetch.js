import axios from "axios";
import { server } from "../index";
import { useState, useEffect } from "react";

const Fetch = () => {
  const [data, setData] = useState();
  const [usrId, setUsrId] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { date } = await axios.get(`${server}/posts?userId=${usrId}`);
        console.log(date);
        setData(date);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, [usrId]);

  if(error) return <h2>there is error </h2>
  
  return (
    <div>
      <h2>
        hey this is the useEffect using axios to fetch data from provided link
      </h2>
      <h1>User posts</h1>
      <div>
        <button
          onClick={() => {
            if (usrId > 0) {
              setUsrId((previousValu) => previousValu - 1);
            }
          }}
        >
          -
        </button>
        <h4>{usrId}</h4>
        <button
          onClick={() => {
            setUsrId((previousValu) => previousValu + 1);
          }}
        >
          +
        </button>
      </div>

      {data.map((i, index) => (
        <div key={index}>
          <h4>{i.title}</h4>
          <p>{i.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Fetch;
