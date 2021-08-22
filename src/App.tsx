import React from 'react';
import ProgressCheckbox from './components/ProgressCheckbox/ProgressCheckbox';

const App: React.FC = () => (
  <div>
    Its working 🤓
    <div>
      {
      ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
        <ProgressCheckbox
          key={day}
          onChange={(val) => { console.log(`${day} ${val}`); }}
          label={day}
        />
      ))
    }
    </div>

  </div>
);

export default App;
