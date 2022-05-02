import { Card, Form, Badge, Container, Row, Col } from "react-bootstrap";

export default function TodoItem(props){
    const {course_code,title,type,info,end_date} = props.data
    // id, use later when add/remove completed task using sessions

    return (
        <Card>
            <Container>
                <Row>
                    <Col xs={8}>
                    <Card.Body>
                        <Card.Title>{course_code} - {title} <Badge bg="secondary">{type}</Badge></Card.Title>
                        <Card.Text>{info}</Card.Text>
                        <Card.Text>Due to: {end_date}</Card.Text>
                    </Card.Body>
                    </Col>

                    <Col xs={4}>
                    <Form>
                        <Form.Check type="checkbox" label="done" />
                    </Form>
                    </Col>
                </Row>
            </Container>

            
        </Card>
    )
}