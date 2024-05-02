import React from "react";

const juliachallange = () => {
  // console.log("julia")

  const juliaDogs = [3, 2, 5, 12, 7];
  const kateDogs = [9, 16, 6, 8, 3];
  function isDog(data) {
    const tempData = [...data];
    const checkVal = tempData.splice(1, tempData.length - 3);
    checkVal.forEach((val, ind) => {
      val >= 3
        ? console.log(`dog ${ind} is adult and is ${val} years old`)
        : console.log(`dog ${ind} is puppy and is ${val} years old`);
    });
  }
  console.log("first call");
  isDog(juliaDogs);
  console.log("second call");
  isDog(kateDogs);

  return <div>juliachallange</div>;
};

export default juliachallange;
