import axios from "axios";
import { server } from "./index";
import { useState, useEffect } from "react";

function App() {
  // const length=0;
  const [date, setData] = useState([]);
  const [usrId, setUsrId] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${server}/posts?userId=${usrId}`);
        console.log(data, typeof data);

        // setData(data);
        // setData((previosData) => [...previosData, ...data]);
        setData(data);

        // JSON.stringify()
      } catch (error) {}
    };
    fetchData();
  }, [usrId]);

  return (
    <div className="App">
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

      {date.map((i, index) => (
        <div key={index}>
          <h4>{i.title}</h4>
          <p>{i.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
