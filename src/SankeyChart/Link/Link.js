// @flow
// libs
import React from 'react'
import map from 'lodash/map'
import { sankey as d3Sankey } from '../../Helper/d3Sankey'

// src
import styles from './Link.less'

const Links = ({ links, activeNodeId, onClick }: Props) => (
  <g className={styles.root}>
    {map(links, link => {
      const { id, label, target, source, y0, dy } = link

      return (
        <path
          key={id}
          id={id}
          className={
            dy <= 1
              ? target.id === activeNodeId || source.id === activeNodeId
                ? styles.highlightThinLink
                : styles.thinLink
              : target.id === activeNodeId || source.id === activeNodeId
                ? styles.highlightThickLink
                : styles.thickLink
          }
          d={d3Sankey().link()(link)}
          data-tip={label}
          data-place={y0 - 50 <= 0 ? 'bottom' : 'top'}
          onClick={() => onClick(id)}
        />
      )
    })}
  </g>
)

export default Links
