// @flow
// libs
import React from 'react'
import ReactTooltip from 'react-tooltip'

//  src
import Nodes from './Node'
import Links from './Link'
import NodesLabel from './NodeLabel'
import styles from './SankeyChart.less'

type Props = {
  sankeyNodes: Array<Object>,
  sankeyLinks: Array<Object>,
  width: Number,
  height: Number,
  onNodeHover: Function,
  onNodeUnhover: Function,
  activeNodeId: String,
  onClick: Function
}

const SankeyChartInner = ({
  sankeyNodes,
  sankeyLinks,
  width,
  height,
  onNodeHover,
  onNodeUnhover,
  activeNodeId,
  onClick
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
        <Links
          links={sankeyLinks}
          activeNodeId={activeNodeId}
          onClick={onClick}
        />
        <Nodes
          nodes={sankeyNodes}
          onNodeHover={onNodeHover}
          onNodeUnhover={onNodeUnhover}
        />
        <NodesLabel nodes={sankeyNodes} width={width} />
      </g>
    </svg>
  </div>
)

export default SankeyChartInner
