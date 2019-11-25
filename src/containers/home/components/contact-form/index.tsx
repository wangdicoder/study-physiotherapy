import React from 'react';
import { Form, Row, Col, Button, Input } from 'antd';

const {Item} = Form;
const {TextArea} = Input;

const ContactForm = () => (
  <Form style={{maxWidth: 500, margin: '0 auto'}}>
    <Item>
      <Row type="flex" justify="space-between">
        <Col span={12} style={{width: '48%'}}>
          <Input placeholder="First Name"/>
        </Col>
        <Col span={12}>
          <Input placeholder="Last Name"/>
        </Col>
      </Row>
    </Item>
    <Item>
      <Input placeholder="Subject"/>
    </Item>
    <Item>
      <TextArea rows={4} placeholder="Messages..."/>
    </Item>
    <Button block type="primary" size="large">
      Submit
    </Button>
  </Form>
);

export default ContactForm;
