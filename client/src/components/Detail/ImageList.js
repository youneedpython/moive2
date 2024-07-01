import { Row } from 'antd';
import React from 'react';
import { IMAGE_BASE_URL } from '../Config';
import AntCard from '../commons/AntCard';

const ImageList = (props) => {
  const { targets } = props

  return (
    <Row gutter={[10, 10]}>
      {targets.map((target, index) => {
        return (
          <React.Fragment key={index}>
            {target.profile_path &&
              <AntCard
                path={`${IMAGE_BASE_URL}w400${target.profile_path}`}
                castName={target.name}
              />
            }
          </React.Fragment>
        );
      })}
    </Row>
  )
}

export default ImageList