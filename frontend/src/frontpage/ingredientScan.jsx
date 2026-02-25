import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, ProgressBar, Alert, Badge } from 'react-bootstrap';
import ThemeToggleButton from './ThemeToggleButton';
import { useTheme } from './nightmode';


const IngredientScanner = () => {
   const { currentTheme } = useTheme();
   let color="dark";
   if(currentTheme==="light"){
        color="dark";
   }else{
    color="light";
   }
   console.log(currentTheme);
   console.log(color);
  const [analyzing, setAnalyzing] = useState(false);
  const [report, setReport] = useState(null);

  const handleUpload = () => {
    setAnalyzing(true);
    // Simulating an API call to an OCR/Food Database
    setTimeout(() => {
      setReport({
        safetyScore: 65,
        additives: ["Aspartame", "Red 40", "Sodium Benzoate"],
        riskLevel: "Moderate",
        longTerm: "Frequent consumption linked to metabolic disruption and gut microbiome imbalance."
      });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <section className={`py-5 bg-${currentTheme} border-top`}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h2 className={`fw-bold text-${color}`}>
              AI Ingredient Analyzer</h2>
            <p className="text-muted">Upload a photo of any food label to reveal the hidden chemistry.</p>
            
            <div className="p-5 border-dashed rounded-3 bg-light mb-4" style={{ border: '2px dashed #dee2e6' }}>
              <input type="file" className="form-control mb-3" />
              <Button variant="dark" onClick={handleUpload} disabled={analyzing}>
                {analyzing ? 'Analyzing Lab Results...' : 'Analyze Safety'}
              </Button>
            </div>

            {report && (
              <Card className="text-start shadow-sm border-0 animate-fade-in">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="mb-0">Safety Report</h4>
                    <Badge bg={report.safetyScore > 70 ? "success" : "warning"} size="lg">
                      Score: {report.safetyScore}/100
                    </Badge>
                  </div>
                  
                  <Row>
                    <Col md={6}>
                      <h6>Detected Additives:</h6>
                      <ul className="text-danger">
                        {report.additives.map(item => <li key={item}>{item}</li>)}
                      </ul>
                    </Col>
                    <Col md={6}>
                      <h6>Long-term Impact:</h6>
                      <p className="small text-muted">{report.longTerm}</p>
                    </Col>
                  </Row>
                  <div className="alert alert-info mt-2 mb-0">
                    <strong>Note:</strong> This analysis is based on current WHO guidelines for ultra-processed foods.
                  </div>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IngredientScanner;