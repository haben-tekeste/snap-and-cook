import Reactotron, { networking } from "reactotron-react-native";

const reactotron = Reactotron.configure({ name: "Snap and Cook" }) // we can use plugins here -- more on this later
  .use(networking())
  .connect(); // let's connect!

export default reactotron;
