import { Tabs, Tab } from "react-bootstrap";
import TodoItem from "./TodoItem";
import axios from "axios";
import { useState, useEffect } from "react";

export default function MyTabs(){
    const [todoList, setTodoList] = useState([])

    // API Request when component mount, 
    // second parameter [] is for only call once, at the beginning
    useEffect(()=>{
        axios.get("/api/todo/").then((response)=>{
            setTodoList(response.data)
        })
    }, [])


    const listItems = todoList.map((singleData)=>
        <TodoItem data={singleData} key={singleData.id} />)

    return (
        <Tabs defaultActiveKey="activeTodos" 
        id="uncontrolled-tab-example" className="mb-3">
            
            <Tab eventKey="activeTodos" title="Aktif">
                {listItems}
            </Tab>
            <Tab eventKey="passedTodos" title="Geçmiş">
                {listItems}
            </Tab>
        </Tabs>
    )
}