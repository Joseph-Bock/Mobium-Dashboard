import './App.css';

import Table from './components/Table/Table';
import Panel from './components/Panel/Panel';
import Counter from './components/Counter/Counter';
import LastRegister from './components/LastRegister/LastRegister';

function App() {
  return (
    <>
      <header>
        <p>MOBIUM<span>.</span></p>
      </header>

      <div id = 'grid'>
        <Panel>
          <Counter
            title = 'Users'
          />
        </Panel>

        <Panel>
          <Counter
            title = 'Products'
          />
        </Panel>

        <Panel>
          <Counter
            title = 'Manufacturers'
          />
        </Panel>

        <Panel>
          <LastRegister
            title = 'Users'
          />
        </Panel>

        <Panel>
          <LastRegister
            title = 'Products'
          />
        </Panel>

        <Panel>
          <LastRegister
            title = 'Manufacturers'
          />
        </Panel>

        <Panel>
            <Table>
            </Table>
        </Panel>

        <div id = 'endSpace'></div>
      </div>
    </>
  );
}

export default App;
