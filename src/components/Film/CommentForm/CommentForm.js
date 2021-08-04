import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {
  Form, Input, Button,
} from 'antd';
import CommentList from '../CommentList/CommentList';
import CommentEdit from '../CommentEdit/CommentEdit';

const { TextArea } = Input;

function CommentForm(props) {
  const [form] = Form.useForm();
  const { filmId, visible, setVisible } = props;
  const { localStorage } = window;
  const [comments, setComments] = useState(JSON.parse(localStorage.getItem(filmId)) || []);
  const [editId, setEditId] = useState(null);

  const updateComments = (newComments) => {
    localStorage.setItem(filmId, JSON.stringify(newComments));
    setComments(newComments);
  };

  const onFinish = (values) => {
    const filmComments = [...comments];
    const currDate = new Date();
    filmComments.push({
      id: uuidv4(),
      date: currDate.toTimeString(),
      message: values.comment,
    });
    updateComments(filmComments);
    form.resetFields();
  };

  const onEdit = (newMessage) => {
    const newComments = comments.map((item) => {
      const newItem = { ...item };
      if (item.id === editId) {
        newItem.message = newMessage.comment;
      }
      return newItem;
    });
    updateComments(newComments);
    setVisible(false);
  };

  const openModal = (id) => {
    setEditId(id);
    setVisible(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  return (
    <>
      <Form
        form={form}
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
          <TextArea rows={4} on />
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
      <CommentList
        openModal={openModal}
        updateComments={updateComments}
        comments={comments}
      />
      <CommentEdit
        visible={visible}
        onCreate={onCreate}
        onEdit={onEdit}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </>
  );
}

CommentForm.propTypes = {
  filmId: PropTypes.string,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
};

CommentForm.defaultProps = {
  filmId: '',
  visible: false,
  setVisible: () => {},
};

export default CommentForm;
