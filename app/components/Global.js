import React from 'react';
import { Component } from 'react';
import { FormGroup, FormControl, InputGroup,wellStyles,ControlLabel, Glyphicon,Checkbox,ButtonGroup,Button } from 'react-bootstrap';
import Gallery from './Gallery';

class Global extends Component{
  render() {
    return (
        <div className="Global">
        <h2>Garbage Data Generators</h2>
        <div className="Container">
          <div className="row">
              <div className="col-sm-6">
                <FormGroup>
                  <Checkbox bsSize="large">Numeric</Checkbox><br/>
                  <Checkbox bsSize="large">Alphanumeric</Checkbox><br/>
                  <Checkbox bsSize="large">Float</Checkbox>
                </FormGroup>
              </div>
              <div className="col-sm-6">
              <FormGroup bsSize="small">
                <ControlLabel>Size "of" the output file(KB)</ControlLabel>
                <FormControl type="text" placeholder="Enter size of output" />
              </FormGroup>
              </div>
          </div>
        </div>
        <div className="Container">
          <div className="row" >
            <div className="col-sm-6">
              <div className="well" style={wellStyles}>
                <Button bsStyle="primary" bsSize="large" block>Start</Button>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="well" style={wellStyles}>
                <Button bsStyle="primary" bsSize="large" block>Stop</Button>
              </div>
            </div>
          </div>
        </div>
        <br/><br/>
        <div className="Container">
          <div className="row" >
            <div className="col-sm-6">
              <ControlLabel>Counter 1 (Numeric)</ControlLabel><br/><br/>
              <ControlLabel>Counter 2 (Alphanumeric)</ControlLabel><br/><br/>
              <ControlLabel>Counter 3 (Float)</ControlLabel>
            </div>
            <div className="col-sm-6">
              <FormControl type="text" bsSize="large" placeholder="Enter size of output" /><br/>
              <FormControl type="text" bsSize="large" placeholder="Enter size of output" /><br/>
              <FormControl type="text" bsSize="large" placeholder="Enter size of output" />
            </div>
          </div>
        </div>
        <br/>
        <div className="Container">
          <div className="row" >
            <div className="col-sm-12">
              <div className="well" style={wellStyles}>
                <Button bsStyle="primary" bsSize="large" block>Generate Report</Button>
              </div>
            </div>
          </div>
        </div>
        <br/>
      <Gallery />
      </div>

    );
  };
};

export default Global;
