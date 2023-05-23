import React from 'react';
import { object } from '@storybook/addon-knobs';
import Carousel from './Components/Carousel';
import CarouselItem from './Components/CarouselItem';

const imgUrl = '/static/images';

const mockData = {
  id: 1,
  img: `${imgUrl}/artist1.jpg`,
  name: 'Eefje de Visser',
  description: 'Zonder tegenwind kun je niet gaan vliegen',
};

const mockDataList = [
  {
    id: 1,
    img: `${imgUrl}/artist1.jpg`,
    name: 'Eefje de Visser',
    description: 'Zonder tegenwind kun je niet gaan vliegen',
  },
  {
    id: 2,
    img: `${imgUrl}/artist1.jpg`,
    name: 'Eefje de Visser',
    description: 'Zonder tegenwind kun je niet gaan vliegen',
  },
];

storiesOf('Carousel', module)
  .add('Carousel with item', () => (
    <div style={{ width: '600px', margin: 'auto' }}>
      <Carousel items={mockDataList} title={'Title'} />
    </div>
  ))
  .add('Carousel item', () => {
    const label = 'Props';
    const defaultValue = mockData;
    const props = object(label, defaultValue);
    return <CarouselItem {...props} />;
  });
