import React from 'react'
import { useState } from 'react'


const App = () => {

  let [count , setCount] = useState(0)

  let handleAdd = () => {
    if (count < 0 ){
      setCount(count + 1)
    }
    console.log(count , "count");
  }

  let handleremove = () =>{
    if (count > -10 ){
      setCount(count - 1)
    }
  }

  return (
    <div>
      <p>
        {count}
      </p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleremove}>-</button>
    </div>
  )
}

export default App

// import React from 'react';
// import { useState } from 'react';

// const App = () => {
//   let [count, setCount] = useState(0);

//   let handleAdd = () => {
//     if (count >= 0) {
//       setCount(count + 1);
//     }
//     else{
//       alert("your limits ends")
//     }
//     console.log(count, "count");
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={handleAdd}>+</button>
//     </div>
//   );
// };

// export default App;
