import React from 'react'

const ResponsiveImage = ({ src, width, paddingBottom, containerClass, imgClass }) => (
    <div className={containerClass} style={{width}} >
    <div style={{ paddingBottom: paddingBottom + '%' }} />
      <img
        src={src}
        className={imgClass}
      />
    </div>
);

export default ResponsiveImage;