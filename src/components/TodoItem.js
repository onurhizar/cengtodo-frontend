import { Card, Form, Badge, Container, Row, Col } from "react-bootstrap";

export default function TodoItem(props){
    const title = props.title
    const type = props.type
    return (
        <Card>
            <Container>
                <Row>
                    <Col xs={8}>
                    <Card.Body>
                        <Card.Title>{title} <Badge bg="secondary">{type}</Badge></Card.Title>
                        <Card.Text>card bodyy</Card.Text>
                        <Card.Text>Due to: 01/01/2022</Card.Text>
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