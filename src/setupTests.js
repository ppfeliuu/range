/* import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

const configureNewAdapter = () => configure({ adapter: new Adapter() }); */

import Enzyme from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

const configureNewAdapter = () =>
  Enzyme.configure({ adapter: new EnzymeAdapter() });

export default configureNewAdapter;
