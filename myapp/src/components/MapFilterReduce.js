import React from "react";

const MapFilterReduce = () => {
  //map method
  // similar to forEach method except it returns an array of the resulting array after the operation
  const sampleArray = [8, 3, 5, 31, 23, 53, 20];
  //   console.log(sampleArray);
  const mapData = new Map([
    [1, 2],
    [3, 4],
    [5, 6],
  ]);
  //   console.log(mapData)
  function impMethods(data) {
    // const tempData = [...data];
    const obtainedVal = data.map((val, ind, arr) => {
      // also take same 3 inputs as forEach
      //   val -= 1;
      //   console.log(val);
      return val * 2;
    });
    console.log(obtainedVal);
  }
  console.log(sampleArray);
  impMethods(sampleArray);

  //polyfil for map method

  function mapPolyfil(data) {
    const ansArray = new Array([]);
    let i = 0;
    for (i in data) {
      ansArray.push(data[i] * 2);
    }
    return ansArray;
  }
  const result = mapPolyfil(sampleArray); /// this has returned a more value in array which i Array[0]
  console.log(result);

  // map do not  mutate the original array || instead return the new array with required modifications

  // filter method
  // new array is obtained
  //return satatement condition only contains the boolean and only values those satisfying those condition are made to new array
  // new array only contains those elements which satisfies certain conditions
  function isFilter(data) {
    return data.filter((elem, ind) => elem < 10 || elem % 2 === 0);
  }
  console.log(isFilter(sampleArray));

  //polyfill for the filter method

  function filterPolyfil(arr) {
    const newFilterArray = new Array([]);
    let i = 0;
    for (i in arr) {
      if (arr[i] < 10 || arr[i] % 2 === 0) {
        newFilterArray.push(arr[i]);
      }
    }
    return newFilterArray;
  }
  console.log("---filterPolyfil------");
  console.log(filterPolyfil(sampleArray));

  return <div>MapFilterReduce</div>;
};

export default MapFilterReduce;
