import React, { PropTypes } from 'react';

export default (ComposedComponent) => {
  const LocalizeConnected = (props, context) => <ComposedComponent
    {...props}
    localize={context.localize}
  />;

  LocalizeConnected.displayName = `LocalizeConnected(${ComposedComponent.name})`;
  LocalizeConnected.contextTypes = {
    localize: PropTypes.func
  };

  return LocalizeConnected;
};
