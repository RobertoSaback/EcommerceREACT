import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Veganas',
          imageUrl: 'https://i.ibb.co/5vsd904/untitled-2425.jpg',
          id: 1,
          linkUrl: 'Veganas'
        },
        {
          title: 'Vegetarianas',
          imageUrl:'https://i.ibb.co/r64PnSt/untitled-8644-copy.jpg',
          id: 3,
          linkUrl: 'Vegetarianas'
        },
        {
          title: 'Carne',
          imageUrl:'https://i.ibb.co/L9dQgx1/untitled-2492-copy.jpg',
          id: 3,
          linkUrl: 'Carne'
        },
        {
          title: 'Doce',
          imageUrl: 'https://i.ibb.co/WvjWJBF/untitled-2515-copy.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'Doce'
        },
        {
          title: 'Combos',
          imageUrl: 'https://i.ibb.co/khj52WB/untitled-8591.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'Combos'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
