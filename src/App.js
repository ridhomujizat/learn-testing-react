import "./App.css";
import SampleCompRTL from "./materi-testing/SampleCompRTL";
import SimpleShowHide from "./materi-testing/SimpleShowHide";
import CompRole from "./materi-testing/CompRole";
import CompVariant from "./materi-testing/CompVariant";
import CompUserEvent from "./materi-testing/CompUserEvent";
import CompAxiosCall from "./materi-testing/CompAxiosCall";

function App() {
  return (
    <div className="App">
      <SampleCompRTL />
      <SimpleShowHide />
      <CompRole />
      <CompVariant />
      <CompUserEvent />
      <CompAxiosCall />
    </div>
  );
}

export default App;
