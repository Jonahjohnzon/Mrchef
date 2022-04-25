import React from 'react';



function secondpage({image,Instructions,videolinks,name,classN}) {
  return (
      <div className={classN}>
        <div>
   
    <div style={{backgroundImage:`url(${image})`}} className='foodimage'></div>
    
    </div>
    <div className='wordbox'>
    <h2 className='title'>{name}</h2>
    <h4  className="recipe">{Instructions} </h4>
    <a href={videolinks}  className='youtubelink'><img src='/images/youtube.png' width="50"/></a>
    </div>
      </div>)
}

export default secondpage;
