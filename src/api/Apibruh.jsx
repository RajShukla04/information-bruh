import { useState, useEffect } from "react";
const Apibruh = () => {
  const [data, setData] = useState([]);
  const fet = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const resp = await res.json();
      setData(resp);
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   fet();
  // });
  return (
    <div>
      <button onClick={fet}>lol</button>
      {console.log(data)}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Apibruh;
// import { useState, useEffect } from "react";

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/todos"
//       );
//       const jsonData = await response.json();
//       setTodos(jsonData);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Todos:</h2>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {/* {todo.title} - {todo.completed ? 'Completed' : 'Not Completed'} */}
//             {todo.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;
