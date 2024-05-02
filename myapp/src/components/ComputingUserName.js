import React from "react";

const computingUserName = () => {
  const accounts = [
    {
      owner: "Chitresh kumar gupta",
      movments: [300, 40, 23, -21, -300, 31, 345],
      intrestRate: 1.2,
      pin: 1000,
    },
    {
      owner: "Saksham kumar Singhania",
      movments: [-200, -200, -300, 5000, -400, -300],
      intrestRate: 1.1,
      pin: 2000,
    },
    {
      owner: "Lokesh Suwalka",
      movments: [10, 32, 21, 20, 20, 20, 12, 12, 12, 12],
      intrestRate: 0.9,
      pin: 3000,
    },
    {
      owner: "Ankit kumar Jha",
      movments: [3000, 3000, 2000, -1200, -1000, 500],
      intrestRate: 1.3,
      pin: 4000,
    },
  ];

  function makeUserName(acc) {
    acc.forEach((element, ind) => {
      // console.log(element.userName)
      element.userName = element.owner
        .toLowerCase()
        .split(" ")
        .map((ele, ind) => ele[0])
        .join("");

      // console.log(element.owner.toLowerCase().split(" ").map((ele,ind)=>ele[0]).join(""))
      // console.log(element)
    });
  }
  makeUserName(accounts); /// added user name to each data value
  // console.log(accounts);
  return <div>computingUserName</div>;
};

export default computingUserName;
