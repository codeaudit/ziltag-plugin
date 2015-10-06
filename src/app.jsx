import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as app_actions from './action';
import ZiltagMap from './component/ziltag-map';
import ZiltagReader from './component/ziltag-reader';


class ZiltagApp extends Component {
  render() {
    const {
      ziltag_map,
      ziltag_preview,
      ziltag_reader,
      dispatch
    } = this.props;

    const actions = bindActionCreators(app_actions, dispatch);

    return (
      <div>
        <ZiltagMap
          actions={actions}
          map_id={ziltag_map.map_id}
          x={ziltag_map.x}
          y={ziltag_map.y}
          width={ziltag_map.width}
          height={ziltag_map.height}
          ziltags={ziltag_map.ziltags}
          ziltag_preview={ziltag_preview}
        />
        <ZiltagReader
          actions={actions}
          map_id={ziltag_reader.map_id}
          ziltag_id={ziltag_reader.ziltag_id}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { ziltag_map, ziltag_preview, ziltag_reader } = state;
  return {
    ziltag_map,
    ziltag_preview,
    ziltag_reader
  };
}

export default connect(mapStateToProps)(ZiltagApp);
