import "./App.css";
import AddressForm from "./tasks/AddressForm/AddressForm";
import Bubble from "./tasks/Bubble/Bubble";
import CardTask1 from "./tasks/CardTask1/CardTask1";
import CardTask2 from "./tasks/CardTask2/CardTask2";
import Chessboard from "./tasks/Chessboard/Chessboard";
import TextUnderline from "./tasks/TextUnderline/TextUnderline";
import Loader from "./tasks/Loader/Loader";
import Rate from "./tasks/Rate/Rate";
import Slider from "./tasks/Slider/Slider";

function App() {
  return (
    <div className="App">
      <TextUnderline />
      <Chessboard />
      <Slider />
      <Loader />
      <Bubble />
      <Rate />
      <CardTask1 />
      <CardTask2 />
      <AddressForm />
    </div>
  );
}

export default App;
