import React, { useState } from "react";
import "./TodoList.css";
const TodoList = () => {
  const [TodoData, setTodoData] = useState("");

  const [AllData, setAllData] = useState([]);

  const AddData = () => {
    if( TodoData.trim() !=="" ){
      setAllData([...AllData, TodoData]);
      setTodoData("");
    }
  };

  const Remove = (index) => {
    const UpdatedData = AllData.filter((arrEle, Id) => {
      return Id !== index;
    });
    setAllData(UpdatedData);
  };
  return (
    <>
      <div className="container">
        <div className="header">Todo List</div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Add Activity :)"
          value={TodoData}
          onChange={(e) => {
            setTodoData(e.target.value);
          }}
        />

        <button className="Button1" onClick={AddData}>
          Add
        </button>

        <ul>
          {AllData.map((Items, index) => {
            return (
              <li>
                {Items}
                <button
                  className="Button2"
                  onClick={() => {
                    Remove(index);
                  }}
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
