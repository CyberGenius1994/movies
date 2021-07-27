import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { withRouter } from 'react-router';
import { StyledHeader } from './HeaderComponent.styles';

class HeaderComponent extends Component {
  handleBack = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { location } = this.props;

    return (
      <StyledHeader className="Header">
        <a
          className="Header-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Movies
        </a>
        {location.pathname.startsWith('/film/') && <Button onClick={this.handleBack}>Go back</Button>}
      </StyledHeader>
    );
  }
}

const HeaderComponentWithRouter = withRouter(HeaderComponent);

HeaderComponent.propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
  history: PropTypes.objectOf(PropTypes.any),
};

HeaderComponent.defaultProps = {
  location: {},
  history: {},
};

export default HeaderComponentWithRouter;
