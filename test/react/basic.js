//let assert = require('assert');
//let React = require('react');
//let enzyme = require('enzyme');

import assert from 'assert';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

//import Basic from '../../src/react/components/basic';

describe('Array', function(){
  describe('indexOf()', function(){
    it('should return -1 when the value is not present', ()=>{
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

/*
describe('<Basic />', function(){
  const wrapper = shallow(<Basic />);
  assert.equal(wrapper.find('h1'))
})
*/
