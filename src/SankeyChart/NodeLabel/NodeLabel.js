// @flow
// libs
import React from 'react'
import map from 'lodash/map'
import round from 'lodash/round'
import size from 'lodash/size'

// src
import styles from './NodeLabel.less'

function labelSplitter(text, limit) {
  const count = size(text)

  if (text.length > limit) {
    const line1 = text.substring(0, round(count / 2))
    const line2 = text.substring(round(count / 2) + 1, count)
    if (text.charAt(round(count / 2)) === ' ') {
      return [line1, line2]
    }
    const _line1 = text.substring(0, size(line1) + line2.indexOf(' ') + 1)
    const _line2 = text.substring(size(line1) + line2.indexOf(' ') + 2, count)
    return [_line1, _line2]
  }
  return [text]
}

const NodeLabel = ({ nodes, width }: Props) => (
  <g className={styles.root}>
    {map(nodes, node => {
      const { x, dx, y, dy, label } = node
      const lines = labelSplitter(label, width < 950 ? 20 : 25)
      if (lines.length < 2) {
        return (
          <text
            x={round(width) - round(x + dx) > 10 ? x + dx + 6 : x - 6}
            y={(y + y + dy) / 2}
            textAnchor={round(width) - round(x + dx) > 10 ? 'start' : 'end'}
            dy={(y + y + dy) / 2 < 10 ? '0.60em' : '0.35em'}
            className={styles.label}
          >
            {lines[0]}
          </text>
        )
      } else {
        return (
          <text>
            <tspan
              x={round(width) - round(x + dx) > 10 ? x + dx + 6 : x - 6}
              textAnchor={round(width) - round(x + dx) > 10 ? 'start' : 'end'}
              y={(y + y + dy) / 2}
              className={styles.label}
            >
              {`${lines[0]}`}
            </tspan>
            <tspan
              x={round(width) - round(x + dx) > 10 ? x + dx + 6 : x - 10}
              textAnchor={round(width) - round(x + dx) > 10 ? 'start' : 'end'}
              y={(y + y + dy) / 2 + 10}
              className={styles.label}
            >
              {`${lines[1]}`}
            </tspan>
          </text>
        )
      }
    })}
  </g>
)

export default NodeLabel
