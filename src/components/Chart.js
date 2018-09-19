import "react-bootstrap/dist/react-bootstrap";
import React, { Component } from 'react';
//import { Row, Col } from 'react-bootstrap';
import { Button, Form, FormGroup } from 'reactstrap';
import { Line , Bar} from 'react-chartjs-2';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';

//import './App.css';

var data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: "Measles",
    borderColor: 'rgb(255, 99, 132)',
    data: [4, 14, 12, 2, 1, 5, 13],
  },
  {
    label: "Rubella",
    borderColor: '#0000FF',
    data: [3, 10, 5, 2, 20, 16, 10],
  }]
}

class Chart extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className = "row">
      <Nav tabs>
          <NavItem>
            <NavLink
              className={({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              CREATE CHARTS
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink
              className={({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Moar Tabs
            </NavLink>
          </NavItem> */}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
            <div className="col-10" id="chart_section">
            <Form>
          <FormGroup>
              <Row>
                  <Col md={5}>
                  <select class="selectpicker form-control input-place"  name="select_option" id="disease" onChange="setCode(this)" required>
                  {/* multiple data-live-search="true" */}
                  <option value="">Select Region</option>
                  <option value="44">Central</option>
                  <option value="55">Coast</option>
                  <option value="33">Eastern</option>
                  <option value="22">Nairobi</option>
                  <option value="11">N/Eastern</option>
                  <option value="32">Nyanza</option>
                  <option value="34">Western</option>
                  </select>
                  </Col>
                  <Col md={5}>
                  <select class="form-control" id="county">
                  <option>Select County</option>
                  </select>
                  </Col>
                  <Col md={2}>
                  <Button>Generate Chart</Button>
                  </Col>
                  
              </Row>
              
          </FormGroup>
          
      </Form>
          <Bar data={data} className="fullsize" />
        </div>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      <div className="row">
       
      </div>
      </div>
    )
  }
}

export default Chart;