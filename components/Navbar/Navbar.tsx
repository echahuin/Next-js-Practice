import React from 'react'
import Link from 'next/link';
import { Menu, Icon } from 'semantic-ui-react';


export default function Navbar() {
  return (
    <nav>
      <Menu pointing secondary>
        <Link href="/">
          <Menu.Item
            name='Home'
          //active={activeItem === 'home'}
          //  onClick={this.handleItemClick}
          />
        </Link>
        <Link href="/about">
          <Menu.Item
            position='right'
            name='L'
          //active={activeItem === 'home'}
          //  onClick={this.handleItemClick}
          >
            <Icon name='shop' />
          </Menu.Item>
        </Link>

      </Menu>
    </nav >
  )
}
