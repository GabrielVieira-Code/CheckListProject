import React from 'react';
import { useState } from "react";
import * as C  from "./App.stiled";
import   {ListItem}  from "./components/itemStiled";
import { Item } from "./Types/ItemType";
import { AddArea } from './components/areaComponent/index';

function App() {

const [list,setList]= useState<Item[]>([
  {
    Id:1,Nome:"jose",done:false
  },
  {
    Id:2,Nome:"Maria",done:false
  }
])
const handleAddTask = (taskName: string) => {
  let newList = [...list];
  newList.push({
    Id: list.length + 1,
    Nome: taskName,
    done: false
  });
  setList(newList);
}
  return (
  <C.Container>
<C.Area >
  <AddArea onEnter={handleAddTask}></AddArea>
<C.Header>Tarefas</C.Header>
  {list.map((item,index)=>(

<ListItem key={index}item={item}></ListItem>

  ))}
</C.Area  >

  </C.Container>
  );
}

export default App;
