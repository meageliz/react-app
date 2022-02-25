import "./styles.css";
import Search from "./Search";
import CoderCred from "./CoderCred";

export default function App() {
  return (
    <div className="App">
      <Search weather="{weather}" city="{city}" />
      <CoderCred />
    </div>
  );
}
