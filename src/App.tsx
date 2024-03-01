import React from 'react';
import { useState } from "react";
import * as C  from "./App.stiled";
import   {ListItem}  from "./components/itemStiled";

function App() {

const [list,setList]= useState<Item[]>([
  {
    Id:1,Nome:"jose",Done:false
  },
  {
    Id:2,Nome:"Maria",Done:false
  }
])


  return (
  <C.Container>
<C.Header>Tarefas</C.Header>
<C.Area>
<ListItem></ListItem>
</C.Area>

  </C.Container>
  );
}

export default App;
