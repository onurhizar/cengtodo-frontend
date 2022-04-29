import { Tabs, Tab } from "react-bootstrap";
import TodoItem from "./TodoItem";

export default function MyTabs(){
    return (
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Aktif">
                <TodoItem  title="CENG112" type="midterm" /> <br />
                <TodoItem  title="ECON106" type="homework" /> <br />
                <TodoItem  title="MATH142" type="homework" /> <br />
                <TodoItem  title="MATH144" type="quiz" /> <br />

            </Tab>
            <Tab eventKey="profile" title="Geçmiş">
                <p>Tarihi geçen ödev ve sınavlar.</p>
                <TodoItem  title="MATH142" type="homework" /> <br />
                <TodoItem  title="MATH142" type="homework" /> <br />
                
            </Tab>
        </Tabs>
    )
}