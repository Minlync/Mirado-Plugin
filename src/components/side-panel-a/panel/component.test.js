import expect from 'expect';
import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';

import CustomSidePanel from '../panel/component';

describe('Component', () => {
  let node;

  beforeEach(() => {
    node = document.createElement('div');
  })

  afterEach(() => {
    unmountComponentAtNode(node);
  })

  it('renders panel with correct title', () => {
    render(<CustomSidePanel/>, node, () => {
        const panelTitle = node.getByTitle("Custom SidePanel Plugin A");
        expect(panelTitle).toBe('Custom SidePanel Plugin A');
    })
  })
})
