import './App.css';
// eslint-disable-next-line no-unused-vars
import UseStateClass from './components/UseStateClass';
// eslint-disable-next-line no-unused-vars
import UseStateFunction from './components/UseStateFunction';
// eslint-disable-next-line no-unused-vars
import UseStateLazy from './components/UseStateLazy';
// eslint-disable-next-line no-unused-vars
import UsePrevState from './components/UsePrevState';
// eslint-disable-next-line no-unused-vars
import UseStateObject from './components/UseStateObject';
// eslint-disable-next-line no-unused-vars
import UseEffectClass from './components/UseEffectClass';
// eslint-disable-next-line no-unused-vars
import UseEffectFunction from './components/UseEffectFunction';
import TodoList from './components/TodoList/TodoList';

function App() {
    return ( <
        div className = "App" > {
            /* <UsePrevState />
                  <UseStateClass />
                  <UseStateFunction />
                  <UseStateLazy /> */
        } { /* <UseStateObject /> */ } { /* <UseEffectClass /> */ } { /* <UseEffectFunction /> */ } <
        TodoList / >
        <
        /div>
    );
}

export default App;