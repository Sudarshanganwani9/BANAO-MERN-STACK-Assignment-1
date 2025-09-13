import React from "react";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";

const groupData = [
  {
    name: "Developers Community",
    desc: "A group for developers to share projects and ideas.",
    img: "https://via.placeholder.com/100",
  },
  {
    name: "Design Lovers",
    desc: "A creative group for designers and artists.",
    img: "https://via.placeholder.com/100",
  },
  {
    name: "Music Hub",
    desc: "A place for music lovers to collaborate and share tunes.",
    img: "https://via.placeholder.com/100",
  },
  {
    name: "Travel Explorers",
    desc: "Join us to share your travel experiences and adventures.",
    img: "https://via.placeholder.com/100",
  },
  {
    name: "Tech Enthusiasts",
    desc: "Latest updates, gadgets, and technology discussions.",
    img: "https://via.placeholder.com/100",
  },
  {
    name: "Foodies Club",
    desc: "For people who love to eat, cook, and share recipes.",
    img: "https://via.placeholder.com/100",
  },
];

const GroupsPage = () => {
  return (
    <Container fluid className="p-3">
      {/* Header */}
      <Row className="align-items-center mb-4">
        <Col xs={6} md={8}>
          <h2 className="fw-bold">Groups</h2>
        </Col>
        <Col xs={6} md={4} className="text-end">
          <Button variant="primary" className="rounded-pill px-4">
            Create Group
          </Button>
        </Col>
      </Row>

      {/* Groups List */}
      <Row>
        {groupData.map((group, index) => (
          <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
            <Card className="shadow-sm h-100">
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <Image
                  src={group.img}
                  roundedCircle
                  className="mb-3"
                  width={100}
                  height={100}
                  alt={group.name}
                />
                <Card.Title className="fw-bold">{group.name}</Card.Title>
                <Card.Text className="text-muted">{group.desc}</Card.Text>
                <Button variant="outline-primary" className="mt-auto">
                  Join Group
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GroupsPage;
