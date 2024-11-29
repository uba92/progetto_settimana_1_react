import { Component } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
class MySlider extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <Container>
            <Row className='justify-content-between'>
              <Col sm={12} md={6} lg={3}>
                boh
              </Col>
            </Row>
          </Container>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row className='justify-content-between'>
              <Col sm={12} md={6} lg={3}>
                funziona?
              </Col>
            </Row>
          </Container>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row className='justify-content-between'>
              <Col sm={12} md={6} lg={3}>
                vediamo
              </Col>
            </Row>
          </Container>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default MySlider
