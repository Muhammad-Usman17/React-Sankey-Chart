// @flow
// libs
import React from 'react'
import * as d3 from 'd3'
import map from 'lodash/map'

// src
import styles from './Node.less'

type Props = {
  nodes: Array<Object>,
  onNodeHover: Function,
  onNodeUnhover: Function
}

const getColor = d3.scaleOrdinal(d3.schemeCategory10)

const Nodes = ({ nodes, onNodeHover, onNodeUnhover }: Props) => (
  <g className={styles.root}>
    {map(nodes, node => {
      const { x, dx, y, dy, label, id } = node

      return (
        <rect
          key={id}
          className={styles.node}
          x={x}
          y={y}
          height={dy}
          width={dx}
          fill={getColor(label)}
          onMouseEnter={() => onNodeHover(id)}
          onMouseLeave={onNodeUnhover}
        />
      )
    })}
  </g>
)

export default Nodes
