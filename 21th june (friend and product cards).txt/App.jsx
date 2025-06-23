// import React from 'react';
// import TaskCard from './TaskCard';

// const tasks = [
//   { name: "Learn React", description: "Study components, props, and hooks." },
//   { name: "Build Todo App", description: "Use React to create a simple todo application." },
//   { name: "Practice JavaScript", description: "Solve problems on loops, arrays, and objects." }
// ];

// const App = () => {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Task List</h1>
//       {tasks.map((task, index) => (
//         <TaskCard
//           key={index}
//           name={task.name}
//           description={task.description}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;
import React from "react";
import FriendCard from "./FriendCard";
import ProductCard from "./ProductCard";
import friendsData from "./friendsData";
import productsData from "./productsData";

const App = () => (
  <div style={{ padding: "20px", fontFamily: "Arial" }}>
    <h1>👫 Friends List</h1>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {friendsData.map((friend, index) => (
        <FriendCard key={index} {...friend} />
      ))}
    </div>

    <h1 style={{ marginTop: "40px" }}>🛍️ Products</h1>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {productsData.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </div>
);

export default App;
