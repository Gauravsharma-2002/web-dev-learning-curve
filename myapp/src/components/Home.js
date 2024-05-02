import React from "react";
import Julia from "./Juliachallange.js";
import MapFilterReduce from "./MapFilterReduce.js";
import ComputingUserName from "./ComputingUserName.js";

const Home = () => {
  //concat method
  const arr1 = ["a", "b", "c", "d", "e", "f"];
  const arr2 = ["g", "h", "i"];
  console.log(arr1);
  //makes shallow copy of the arrays

  console.log(arr1.concat(arr2).concat(["1", "2", "3", "4"]));
  //can also give same result with spread operator
  console.log([...arr1, ...arr2]);
  // reverse method
  //do mutate the original array
  console.log(arr1);
  console.log(arr1.reverse().concat(arr2));
  console.log(arr1); // see the result :original array has been mutated
  arr1.reverse();
  //slice method
  console.log(arr1.slice());
  console.log(arr1.slice(4));
  console.log(arr1.slice(3, 5));
  console.log(arr1.slice(4, arr1.length));
  console.log(arr1.slice(-1)); // -1 from 0
  console.log(arr1.slice(-2)); // -1 from 0
  console.log(arr1.slice(-3)); // -1 from 0
  console.log(arr1.slice(3, -1)); //start from 3 but does not include -1 element of arr1
  console.log("slice don't mutate the array ");

  //splice method
  console.log(arr1);
  // console.log(arr1.splice(arr1.length-4,arr1.length))
  console.log(arr1.splice(2, -1));

  //at method
  //to get the index of the value and thats all
  console.log(arr1.at(0));
  console.log(arr2.at(-1)); // - means reading the array from last
  //works on strings as well
  console.log("gaurav".at(1));

  const movements = [200, 450, -400, 3000, -650, -130, 70, 130];
  const sampel = [200, 232, 312];

  // for (const i in movements){
  //   console.log(movements[i])
  // }

  //for each loop
  //this accepts three argument which is item index and the same   array{ accessibel for each item of the iterated array }
  movements.forEach((item, ids, sampel) => {
    // console.log(sampel);
    // sampel.reverse();
    // console.log(sampel)
    console.log(item, ids, sampel.at(ids));
    // ids === 4 ? break:null :doesnot be breaked in between
  });
  console.log(movements); // also this for each doesnot modify{mutate} the array

  //foreach works same for the sets and map too
  const currencies = new Map([
    ["inr", "india"],
    ["usd", "america"],
    ["yen", "japan"],
  ]);
  currencies.forEach(function (val, key, map) {
    console.log(map); //entire map
    console.log(`${key}:${val}`); //each value of map  where index == key and val is the element
  });

  return (
    <div>
      Home
      <Julia />
      <MapFilterReduce />
      <ComputingUserName/>
    </div>
  );
};

export default Home;
