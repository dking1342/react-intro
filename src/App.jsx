import './App.css';
import CallbackTutorial from './hooks/UseCallback/CallbackTutorial';
import ContextTutorial from './hooks/UseContext/ContextTutorial';
import EffectTutorial from './hooks/UseEffect/EffectTutorial';
import ImparativeHandle from './hooks/UseImperativeHandle/ImparativeHandle';
import LayoutEffectTutorial from './hooks/UseLayoutEffect/LayoutEffectTutorial';
import MemoTutorial from './hooks/UseMemo/MemoTutorial';
import ReducerTutorial from './hooks/UseReducer/ReducerTutorial';
import RefTutorial from './hooks/UseRef/RefTutorial';
import Counter from './hooks/UseState/Counter';
import StateTutorial from './hooks/UseState/StateTutorial';

function App() {
  return (
    <div className="App">
      <CallbackTutorial />      
    </div>
  );
}

export default App;
