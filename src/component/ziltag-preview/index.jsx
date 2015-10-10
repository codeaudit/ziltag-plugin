import React from 'react';
import classNames from 'classNames';

require('./index.css');


class ZiltagPreview extends React.Component {
  render() {
    const { direction, content, usr } = this.props;
    const style = { zIndex: MAX_Z_INDEX - 2 };

    if (direction == 'right') {
      var preview_class = 'ziltag-ziltag-preview--right';
      var preview_board_class = 'ziltag-ziltag-preview__board--right';
    } else if (direction == 'left') {
      var preview_class = 'ziltag-ziltag-preview--left';
      var preview_board_class = 'ziltag-ziltag-preview__board--left';
    }

    return  <div style={style} className={classNames('ziltag-ziltag-preview', preview_class)}>
      <div className={
        classNames('ziltag-ziltag-preview__board', preview_board_class)
      }>
        <div className='ziltag-ziltag-preview__board__content'>{content}</div>
        <div style={{ fontSize: 12 }} className='ziltag-ziltag-preview__board__publisher'>by {usr}</div>
      </div>
    </div>;
  }
}

export default ZiltagPreview;
