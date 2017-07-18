// // Code YouTubeDebugger Component Here
// import React from 'react'
//
// export default class YouTubeDebugger extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       errors: [],
//       user: null,
//       settings: {
//         bitrate: 8,
//         video: {
//           resolution: '1080p'
//         }
//       }
//     }
//   }
//
//   handleClick = (event) => {
//     debugger
//     if (event.target.parentElement.className === 'bitrate') {
//       this.setState({
//         settings: {
//           ...this.state.settings,
//           bitrate: 12
//         }
//       })
//     } else if (event.target.parentElement.className === 'resolution') {
//       this.setState({
//         settings: {
//           ...this.state.settings,
//           video: {
//             ...this.stat.settings.video,
//             resolution: '720p'
//           }
//         }
//       })
//     }
//   }
//
//   render() {
//     return <div onClick={this.handleClick}>
//       <button className='bitrate'>
//         <label>Bitrate: {this.state.settings.bitrate}</label>
//       </button>
//       <button className='resolution'>
//         <label>Resolution: {this.state.settings.video.resolution}</label>
//       </button>
//     </div>
//   }
// }


import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  handleChangeBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }

  handleChangeResolution = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      }),
    });

    /*
      Or this can be defined as
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
          }
        },
      });
    */
  }

  render() {
    return (
      <div>
        <button
          className="bitrate"
          onClick={this.handleChangeBitrate}
        >
          Change bitrate
        </button>
        <button
          className="resolution"
          onClick={this.handleChangeResolution}
        >
          Change resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
