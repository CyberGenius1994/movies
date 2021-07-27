import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from 'antd';
import { StyledComments } from './FilmsComponent.styles';

const { Paragraph } = Typography;

function CommentList({ comments, updateComments, openModal }) {
  function handleRemove(id) {
    const filmComments = [...comments];
    const newComponents = filmComments.filter((item) => item.id !== id);
    updateComments(newComponents);
  }

  return (
    <StyledComments className="CommentList">
      {comments?.map((item) => (
        <li key={item.id} className="CommentItem">
          <div className="CommentInfo">
            <Paragraph>
              {item.date}
            </Paragraph>
            <Paragraph strong>
              {item.message}
            </Paragraph>
          </div>
          <div className="CommentButtons">
            <Button onClick={() => openModal(item.id)}>
              Edit
            </Button>
            <Button onClick={() => handleRemove(item.id)} danger>
              Remove
            </Button>
          </div>
        </li>
      ))}
    </StyledComments>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  openModal: PropTypes.func,
  updateComments: PropTypes.func,
};

CommentList.defaultProps = {
  comments: [],
  openModal: () => {},
  updateComments: () => {},
};

export default CommentList;
