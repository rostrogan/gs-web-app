import React from 'react';

const Image = ({src, className, alt = ''}) => {
    if (!src?.length) return null;

    const imgUrls = Array.isArray(src) ? src : [src];
    const srcSet = imgUrls
        .filter((image, i) => {
            return i !== 0;
        })
        .map((image, i) => {
            return `${image} ${i + 2}x`
        })
        .join(',');

    return (
        <img src={imgUrls[0]} srcSet={srcSet} alt={alt} className={className}/>
    );
};

export default Image;
