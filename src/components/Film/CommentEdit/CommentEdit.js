import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Form, Input,
} from 'antd';

const CommentEdit = ({ visible, onCancel, onEdit }) => {
  const [form] = Form.useForm();

  console.log(visible);

  return (
    <Modal
      visible={visible}
      title="Edit comment"
      okText="Edit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onEdit(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item name="comment">
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

CommentEdit.propTypes = {
  visible: PropTypes.bool,
  onEdit: PropTypes.func,
  onCancel: PropTypes.func,
};

CommentEdit.defaultProps = {
  visible: false,
  onEdit: () => {},
  onCancel: () => {},
};

export default CommentEdit;
