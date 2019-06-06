import React from 'react';
import { ReactLiquid } from 'react-liquid';
import marked from 'marked';
import template from '../../../../_includes/research.html';

export const Preview = props => {
  const data = {
    research: marked(props.value)
  }
  return (
    <div>
      <ReactLiquid template={template} data={data} html />
    </div>
  );
};
