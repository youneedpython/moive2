import React from 'react'
import { Col, Card } from 'antd'
import { Link } from 'react-router-dom';

const AntCard = (props) => {
  const { Meta } = Card;

  if (props.landingPage) {
    //// [LandingPage] 처리 ===========================
    return (
      <Col lg={4} md={6} sm={12} xs={24}>
        <div>
          {/* <a href={`/movie/detail/${props.movieId}`}> */}
          <Link to={`/detail/${props.movieId}`}>
            <Card
              hoverable
              style={{ width: '100%' }}
              cover={
                <img
                  src={props.path}
                  alt={props.title}
                />}
            >
              <Meta title={props.title} />
            </Card>
          </Link>
        </div>
      </Col>
    )
  } else {
    //// [Detail] 처리 ===========================
    return (
      <Col lg={4} md={6} sm={12} xs={24}>
        <div>
          <Card
            hoverable
            style={{ width: '100%' }}
            cover={
              <img
                src={props.path}
                alt={props.castName}
              />}
          >
            <Meta title={props.castName} />
          </Card>
        </div>
      </Col>
    )
  }
}

export default AntCard