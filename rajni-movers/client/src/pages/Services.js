import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Services.css';
const serviceList = [
  { icon: '🏠', title: 'Home Shifting' },
  { icon: '🏢', title: 'Office Relocation' },
  { icon: '📦', title: 'Packing & Unpacking' },
  { icon: '🚛', title: 'Transport Services' },
  { icon: '🔐', title: 'Warehousing & Storage' },
];

const Services = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Our Services</h1>
      <Row className="justify-content-center">
        {serviceList.map((service, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <Card className="text-center shadow-sm h-100 service-card border-0">
              <Card.Body>
                <div style={{ fontSize: '2.5rem' }}>{service.icon}</div>
                <Card.Title className="mt-3">{service.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
