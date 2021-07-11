import React from 'react';
import {
  Form, Input, Button,
} from 'antd';

const { TextArea } = Input;

function CommentForm() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="comment"
        rules={[
          {
            required: true,
            message: 'Please enter your comment!',
          },
        ]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CommentForm;
