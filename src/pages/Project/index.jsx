import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectPage = (props) => {
  let { number } = useParams();
  return (
    <h1>Project {number}</h1>
  );
};

export { ProjectPage };