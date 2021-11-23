import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import "./styles.css";
// :hover
// :placeholder
// const newObj = {
//   a: 1,
//   b: 2
// }

function User(name) {
  this.name = name;
}
User.prototype.sayHi = function() {
  console.log(`${this.name} says Hi!`);
}
const user1 = new User('John');
user1.sayHi();

const APIURL = "https://jsonplaceholder.typicode.com/users";
const DEFAULT = "DEFAULT";
const ASC_USER_LENGTH = "ASC_USER_LENGTH";
const DEC_USER_LENGTH = "DEC_USER_LENGTH";

function App() {
  const [toggle, setToggle] = useState(DEFAULT);
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  // promise =>
  // setTimeout => 
  const getUsers = () => {
    axios(APIURL).then((data) => {
      setData(data.data);
      setDisplayData(data.data);
    });
  };

  useEffect(() => {
    if(toggle === DEFAULT) {
      setDisplayData(data);
    } else if(toggle === ASC_USER_LENGTH) {
      const newArr = JSON.parse(JSON.stringify(data));
      setDisplayData(
        newArr.sort(
          (person1, person2) => {
            return (person1.name.length - person2.name.length)
          }));
    } else if(toggle === DEC_USER_LENGTH) {
      const newArr = JSON.parse(JSON.stringify(data));
      setDisplayData(
        newArr.sort(
          (person1, person2) => {
            return (person2.name.length - person1.name.length)
          }));
    }
  }, [toggle]);

  const sortList = () => {
    switch (toggle) {
      case DEFAULT:
        setToggle(ASC_USER_LENGTH);
        break;
      case ASC_USER_LENGTH:
        setToggle(DEC_USER_LENGTH);
        break;
      case DEC_USER_LENGTH:
        setToggle(DEFAULT);
        break;
      default:
      // do nothing
    }
  };
  return (
    <main>
      <h1>User List</h1>
      <div>
        <button onClick={(e) => {
          e.stopPropagation();
          getUsers();
        }}>Get Users</button>
        <button onClick={sortList}>Sort list by name's length</button>
      </div>
      <ul>
        {displayData.map((person) => {
          return <li key={person.id}>{person.name}</li>;
        })}
      </ul>
    </main>
  );
}

export default App;
