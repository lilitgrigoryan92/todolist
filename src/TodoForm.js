import { useState } from "react";

function TodoForm({onAdd}){
 const[text,setText]=useState("");

    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            onAdd(text);
            setText("");
            //preventDefault() նշանակում է բրաուզերին ասում ենք,էն ինչ որ դու անում էիր ,երբ որ ֆորման submit-է արվում(ստեղծում էր http post ուղարկում և նոր լինկ բացում) ,մի արա,մենք կանենք ինչ պետք է 
        }}>
            <input type="text" value={text} onChange={(e)=>{
                setText(e.target.value)
                //target-ը այն էլեմենտն է ,որը ստեղծել է այդ event-ը
            }} />
            <button> Add</button>
        </form>
    )
}

export default TodoForm;