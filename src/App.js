import React from 'react';
import { Button, Icon, Radio, Row, Col } from 'antd';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      size: 'large'
    }
    this.handleSizeChange = this.handleSizeChange.bind(this);
  }
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };
  render(){
    const { size } =  this.state;
    return (
      <div>
        <Row type="flex" justify="center">
          <Radio.Group value={size} onChange={this.handleSizeChange}>
            <Radio.Button value='large'>Large</Radio.Button>
            <Radio.Button value='default'>Default</Radio.Button>
            <Radio.Button value='small'>Small</Radio.Button>
          </Radio.Group>
        </Row>
        <br />
        <br />
        <Row type="flex" justify="center">
          <Col span={2}>
            <Button type='dashed' size={size}>Dashed</Button>
          </Col>
          <Col span={2}>
            <Button type='dashed' size={size}>Dashed</Button>
          </Col>
          <Col span={2}>
            <Button type='ghost' size={size}>Ghost</Button>
          </Col>
          <Col span={2}>
            <Button type='danger' size={size}>Danger</Button>
          </Col>
          <Col span={2}>
            <Button type='link' size={size}>Link</Button>
          </Col>
        </Row>
        <br />
        <br />
        <Row  type="flex" justify="center">
          <Col span={1}>
            <Button type='primary' icon="download" shape='circle-outline' size={size}/>
          </Col>
          <Col span={1}>
            <Button type='primary' icon="download" shape='circle-outline' size={size}/>
          </Col>
          <Col span={1}>
            <Button type='primary' icon="download" shape='circle-outline' size={size}/>
          </Col>
          <Col span={1}>
            <Button type='primary' icon="download" shape='circle-outline' size={size}/>
          </Col>
        </Row>
        <br />
        <Row type="flex" justify="center">
          <Col span={2}>
            <Button type='primary' icon="download" size={size} shape='round'>Download</Button>
          </Col>
          <Col span={2}>
            <Button type='primary' icon="download" size={size} shape='round'>Download</Button>
          </Col>
        </Row>
        <br />
        <Row type="flex" justify="center">
          <Button.Group size={size}>
            <Button type="primary">
              <Icon type="left"/>
              Back
            </Button>
            <Button type="primary">
              <Icon type="right"/>
              Next
            </Button>
          </Button.Group>
        </Row>
      </div>
    );
  }
}



export default App;




