'use client';
import { builder, Builder } from '@builder.io/react';
import Counter from './components/Counter/Counter';
import Card from './components/Card/Card';
import Announcement from './components/Header/Announcement';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: 'Counter',
  inputs: [
    {
      name: 'initialCount',
      type: 'number'
    }
  ]
});

Builder.registerComponent(Card, {
  name: 'Card',
  inputs: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'description',
      type: 'string'
    },
    {
      name: 'buttonText',
      type: 'string',
      defaultValue: 'Buy Now'
    },
    {
      name: 'imageURL',
      type: 'string'
    }
  ]
});

Builder.registerComponent(Announcement, {
  name: 'Announcement',
  inputs: [
    {
      name: 'leftSideMessage',
      type: 'string'
    }
  ]
});
