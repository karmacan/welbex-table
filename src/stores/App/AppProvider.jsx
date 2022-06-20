import React from 'react';
import {observer, useLocalObservable} from 'mobx-react-lite';
import {createAppStore} from './AppStore';

export const Context = React.createContext(null);

export const AppProvider = observer((props) => {
    const { children, ...init } = props;
    const store = useLocalObservable(() =>
      createAppStore(init)
    );
    return <Context.Provider value={store}>{children}</Context.Provider>;
  }
);
