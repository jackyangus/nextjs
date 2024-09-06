declare module '*.svg' {
    import React from 'react';
    
    const SVGComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    
    export default SVGComponent;
  }