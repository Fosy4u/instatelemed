

import {
  Description,
  NavHeader,
  Section,
  Slider,
  Talents,
} from "./components";

import { customTheme } from "./theme";

import {  Grommet } from "grommet";
import CountDown from "./components/Countdown/Timer";
import SignUP from "./components/SignUP";

function App() {
  return (
    <Grommet theme={customTheme} full>
      <NavHeader />
      <Description />
      <CountDown />
      <Slider />
      <SignUP />
  
    </Grommet>
  );
}

export default App;
