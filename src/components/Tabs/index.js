import clsx from 'clsx'
import React from 'react'
import './style.scss'

export default function Tabs({ tabs, onChange, value }) {
  const handleClick = (e, index) => {
    if (typeof onChange === 'function') {
      onChange(e, index)
    }
  }

  return (
    <div className="tabs">
      {tabs.map(
        ({ element: Comp = 'div', value: tabValue, ...rest }, index) => {
          return (
            <Comp
              key={index}
              className={clsx('tabs__item', value === index && 'active')}
              {...rest}
              onClick={e => handleClick(e, index)}
            >
              {tabValue}
            </Comp>
          )
        }
      )}
    </div>
  )
}
