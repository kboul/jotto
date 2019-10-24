import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
    adapter: new Adapter(),
    // disable lifecycle methods during test
    // they will run whenever WE call them
    disableLifecycleMethods: true
});
