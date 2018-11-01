// libs
import React from 'react'
import { sankey as d3Sankey } from '../Helper/d3Sankey'

//  src
import SankeyChartInner from './SankeyChartInner'

function sankeyConfiguration(width, height, nodes, links) {
  const sankey = d3Sankey()
    .size([width, height])
    .nodeWidth(20)
    .nodePadding(20)
    .nodes(nodes)
    .links(links)
    .layout(32)
  return { sankeyNodes: sankey.nodes(), sankeyLinks: sankey.links() }
}

export default class SankeyChart extends React.Component<Props, State> {
  state = {
    activeNodeId: '',
    windowWidth: window.innerWidth - 70,
    windowHeight:
      (this.props.height - window.innerHeight <= 150 &&
        this.props.height - window.innerHeight >= 0) ||
      (window.innerHeight - this.props.height <= 150 &&
        window.innerHeight - this.props.height >= 0) ||
      this.props.height < window.innerHeight
        ? window.innerHeight - 50
        : this.props.height,
  }

  componentDidMount() {
    window.addEventListener('resize', this.calculateWidth, true)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateWidth)
  }

  calculateWidth = () => {
    const { height } = this.props
    const windowWidth = window.innerWidth < 550 ? 550 : window.innerWidth - 70
    const windowHeight =
      (height - window.innerHeight <= 150 &&
        height - window.innerHeight >= 0) ||
      (window.innerHeight - height <= 150 &&
        window.innerHeight - height >= 0) ||
      height < window.innerHeight
        ? window.innerHeight - 50
        : height
    this.setState(() => ({ windowWidth, windowHeight }))
  }
  handleNodeMouseEnter = nodeId => {
    this.setState(() => ({
      activeNodeId: nodeId,
    }))
  }

  handleNodeMouseLeave = () => {
    this.setState(() => ({ activeNodeId: '' }))
  }

  render() {
    const { nodes, links, onClick, height } = this.props
    const { windowWidth, windowHeight } = this.state
    const { activeNodeId } = this.state
    const { sankeyNodes, sankeyLinks } = sankeyConfiguration(
      windowWidth,
      windowHeight,
      nodes,
      links,
    )

    return (
      <SankeyChartInner
        sankeyNodes={sankeyNodes}
        sankeyLinks={sankeyLinks}
        onNodeHover={this.handleNodeMouseEnter}
        onNodeUnhover={this.handleNodeMouseLeave}
        height={windowHeight}
        width={windowWidth}
        activeNodeId={activeNodeId}
        onClick={onClick}
      />
    )
  }
}
