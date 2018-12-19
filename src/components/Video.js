import React, { Component } from 'react';

class Video extends Component {

  render() {
    return (
      <div>
        {this.props.trainer.videoUrl.map((video) => {
          return <div key={`id=${video}`}>
            <iframe width="560" title="video" height="315" src={video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> </iframe>
          </div>
        })}
      </div>
    );
  }
}

export default Video;