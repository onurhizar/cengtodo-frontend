import { Card, Form, Badge } from "react-bootstrap";

export default function TodoItem(props){
    const title = props.title
    const type = props.type
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title} <Badge bg="secondary">{type}</Badge></Card.Title>
                <Card.Text>card bodyy</Card.Text>
                <Card.Text>Due to: 01/01/2022</Card.Text>

                <Form>
                    <Form.Check type="checkbox" label="done" />
                </Form>
            </Card.Body>
        </Card>
    )
}