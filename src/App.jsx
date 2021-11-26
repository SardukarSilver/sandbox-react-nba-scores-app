import React from 'react';
import { Button } from 'antd';
import { observer } from 'mobx-react';

import { useRootStore } from './store/RootStateContext';

import './App.less';

function App() {
  const store = useRootStore();

  return (
    <div className="App">
      <Button className="buttn" type="primary" onClick={store.getScore}>
        change
      </Button>
    </div>
  );
}

export default observer(App);
