import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import ThemeToggleButton from './ThemeToggleButton';
import { useTheme } from './nightmode';

const EatHealthyLanding = ({onOpenLogin}) => {
  const { currentTheme } = useTheme();
   let color="dark";
   if(currentTheme==="light"){
        color="dark";
   }else{
    color="light";
   }
  return (
    <div className="bg-light">
     
      {/* Hero Section */}
      <header className={`py-5 bg-${currentTheme}`}>
        <Container className="py-5">
          <Row className="align-items-center">
            <Col lg={6}>
              <Badge bg="success" className="mb-2">Competition 2026</Badge>
              <h1 className={`display-4 fw-bold mb-3 text-${color}`}>Fuel Your Future with <span className="text-success">Precision Nutrition.</span></h1>
              <p className="lead text-muted mb-4">
                Bridging the gap between plate and health. We are dedicated to solving global nutritional challenges through diversity and balance.
              </p>
              <Button variant="success" size="lg" className="me-2" onClick={onOpenLogin}>Login to dashboard</Button>
              <p variant="link" className="text-decoration-none text-white w-20 border p-2 m-3">Prototype Email:"rituraj@gmail.com" Passowrd:password</p>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" 
                alt="Healthy Bowl" 
                className="img-fluid rounded-circle shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Competition Themes Section */}
      <section id="themes" className={`py-5 bg-${currentTheme}`}>
        <Container>
          <div className="text-center mb-5">
            <h2 className={`fw-bold text-${color}`}>Our Core Pillars</h2>
            <p className="text-muted">Targeting global health through two critical lenses.</p>
          </div>
          <Row className="g-4">
            {/* Theme 3 */}
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm hover-shadow">
                <Card.Body className={`p-4 text-center bg-${color} text-${currentTheme}`}>
                  <div className="display-5 mb-3 text-primary">🥗</div>
                  <h3 className="h4 fw-bold">Diet Diversity & Balanced Nutrition</h3>
                  <p className={``}>
                    Promoting the "Rainbow Plate." Research shows that eating across food groups
                    is the primary defense against micro-nutrient deficiencies.
                  </p>
                  <ul className="list-unstyled text-start d-inline-block mx-auto">
                    <li>✅ Macronutrient Ratios</li>
                    <li>✅ Micronutrient Density</li>
                    <li>✅ Local & Seasonal Sourcing</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Theme 4 */}
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className={`p-4 text-center bg-${color} text-${currentTheme}`}>
                  <div className="display-5 mb-3 text-danger">⚖️</div>
                  <h3 className="h4 fw-bold">Combating Malnutrition & Obesity</h3>
                  <p className="">
                    The "Double Burden" of nutrition. We tackle the paradox of over-processed
                    empty calories and the lack of access to essential sustenance.
                  </p>
                  <ul className="list-unstyled text-start d-inline-block mx-auto">
                    <li>✅ Sugar Reduction Strategies</li>
                    <li>✅ Fortified Food Solutions</li>
                    <li>✅ Community Education</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
     
    </div>
  );
};

export default EatHealthyLanding;