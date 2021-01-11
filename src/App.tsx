import { FC } from "react";
import "./App.css";
import AppBarDense from "./views/components/AppBarDense";
import SimpleCard from "./views/components/SimpleCard";

const App: FC = () => {
  return (
    <div className="App">
      <AppBarDense title="ポートフォリオ"></AppBarDense>
      <SimpleCard></SimpleCard>
    </div>
  );
}

export default App;
