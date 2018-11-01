// @flow
// libs
import React from 'react'
import ReactTooltip from 'react-tooltip'

//  src
import Node from './Node'
import Link from './Link'
import NodeLabel from './NodeLabel'
import styles from './SankeyChart.less'

const SankeyChartInner = ({
  sankeyNodes,
  sankeyLinks,
  width,
  height,
  onNodeHover,
  onNodeUnhover,
  activeNodeId,
  onClick,
}: Props) => (
  <div>
    <ReactTooltip
      border
      multiline
      type="light"
      globalEventOff="click"
      className={styles.tooltip}
    />
    <svg width={width} height={height + 15} className={styles.root}>
      <g className={styles.g}>
        <Link
          links={sankeyLinks}
          activeNodeId={activeNodeId}
          onClick={onClick}
        />
        <Node
          nodes={sankeyNodes}
          onNodeHover={onNodeHover}
          onNodeUnhover={onNodeUnhover}
        />
        <NodeLabel nodes={sankeyNodes} width={width} />
      </g>
    </svg>
  </div>
)

export default SankeyChartInner
