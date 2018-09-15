import React from 'react';
import {
  ButtonToolbar, DropdownButton, MenuItem,
} from 'react-bootstrap';

function Example() {
  const styling = {
    // TODO: Hover options
    position: 'absolute',
    width: 75,
    height: 25,
    bottom: 5,
    left: 10,
  };
  return (
    <ButtonToolbar style={styling}>
      <DropdownButton
        bsStyle="default"
        title="Example"
        noCaret
        id="dropdown-no-caret"
      >
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3">Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </DropdownButton>
    </ButtonToolbar>

  );
}

export default Example;
