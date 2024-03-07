import React, { useState } from "react";
import * as c  from "./item";
import  {Item}  from "../Types/ItemType";
type Props={
    item:Item
}


 export const ListItem = ({item}:Props)=>{
     const [ischecked,setIsChecked] = useState(item.done)
    return(
<c.Container done={ischecked} > 


<input type="checkbox"
checked={ischecked}

onChange={e =>setIsChecked(e.target.checked)} />
<label>{item.Nome}</label>
</c.Container>
    )


 }