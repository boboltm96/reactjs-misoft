import React from 'react'
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 12,
    },
  };

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

const MyForm = () => {
    const onFinish = (values) => {
        console.log(values);
      };
    
      return (
          <div>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={['user', 'name']}
                    label="Name"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    
                    rules={[
                    {
                        required: true,
                        type: 'email',
                    },
                    ]}
                >
                    <Input placeholder="test@gmail.com"/>
                </Form.Item>
                <Form.Item
                    name={['user', 'age']}
                    label="Age"
                    rules={[
                    {
                        type: 'number',
                        min: 0,
                        max: 99,
                    },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="Website">
                    <Input placeholder="www.google.com"/>
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Introduction">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
          </div>
        
      );
}

export default MyForm
