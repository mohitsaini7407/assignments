import React from 'react';
import PackingList from './PackingList';

function App() {
  return (
    <div style={styles.app}>
      <h1>Packing List App 🧳</h1>
      <PackingList />
    </div>
  );
}

const styles = {
  app: {
    fontFamily: 'Arial',
    textAlign: 'center',
    marginTop: '50px',
  }
};

export default App;
