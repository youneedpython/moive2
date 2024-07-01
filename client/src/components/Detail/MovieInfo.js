import { Descriptions } from 'antd';
import React from 'react';

const MovieInfo = (props) => {
  //console.log(props)
  const { movie } = props;

  const items = [
    { key: '1', label: 'Title', children: `${movie.title}` },
    { key: '2', label: 'Release Date', children: `${movie.release_date}` },
    { key: '3', label: 'Revenue', children: `${movie.revenue}` },
    { key: '4', label: 'Runtime', children: `${movie.runtime}` },
    { key: '5', label: 'Vote Average', children: `${movie.vote_average}` },
    { key: '6', label: 'Vote Count', children: `${movie.vote_count}` },
    { key: '7', label: 'Status', children: `${movie.status}` },
    { key: '8', label: 'Popularity', children: `${movie.popularity}` },
    { key: '9', label: 'Budget', children: `${movie.budget}` },
  ];

  return (
    <Descriptions title="Movie Info" bordered items={items} />
  )
}

export default MovieInfo