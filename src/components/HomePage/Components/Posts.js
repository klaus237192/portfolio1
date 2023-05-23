import React from 'react';
import Carousel from 'UI/Carousel'; // eslint-disable-line
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { H2 } from 'UI/Text'; // eslint-disable-line

const Posts = ({ postType, posts }) => (
  <div>
    <Row>
      <Col md={11} mdOffset={1}>
        <H2>{postType}</H2>
      </Col>
    </Row>
    <Carousel items={posts} />
  </div>
);

Posts.propTypes = {
  postType: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
};

export default Posts;
