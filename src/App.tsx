import React from 'react';
import ProgressCheckbox from './components/ProgressCheckbox/ProgressCheckbox';

const App: React.FC = () => (
  <div>
    Its working 🤓
    <p>
      veri najs
    </p>
    <ProgressCheckbox
      initialChecked
      onChange={(val) => { console.log(val); }}
      label="test"
    />
  </div>
);

export default App;
