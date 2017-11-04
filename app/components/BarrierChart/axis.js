import React from 'react';
import PropTypes from 'prop-types';
import d3 from 'd3';

export default class Axis extends React.Component {
  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const node = this.axis;
    const axis = d3.svg.axis().orient(this.props.orient).ticks(3).scale(this.props.scale);
    d3.select(node).call(axis);
  }

  render() {
    return (
      <g
        className="axis"
        ref={(x) => { this.axis = x; }}
        transform={this.props.translate}
        tickFormat={(x) => ({ 0: 'IS', 5: 'TS', 10: 'FS' }[x])}
      >
      </g>
    );
  }
}


Axis.propTypes = {
  scale: PropTypes.object,
  translate: PropTypes.string,
  orient: PropTypes.string,
};

Axis.defaultProps = {

};
