import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import Tree from './Tree';
const axios = require('axios').default;

function App() {
  const treeStructure = [
    {
      label: 'Root',
      value: 'root',
      isNested: true,
      nestedValues: [
        {
          label: 'Src',
          value: 'src',
          isNested: true,
          nestedValues: [
            {
              label: 'Src',
              value: 'src',
            },
            {
              label: 'Public',
              value: 'public',
              isNested: true,
              nestedValues: [
                {
                  label: 'Src',
                  value: 'src',
                },
                {
                  label: 'Public',
                  value: 'public',
                },
                {
                  label: 'Node Modules',
                  value: 'nodeModules',
                },
              ],
            },
            {
              label: 'Node Modules',
              value: 'nodeModules',
            },
          ],
        },
        {
          label: 'Public',
          value: 'public',
        },
        {
          label: 'Node Modules',
          value: 'nodeModules',
          nestedValues: [
            {
              label: 'Src',
              value: 'src',
            },
            {
              label: 'Public',
              value: 'public',
            },
            {
              label: 'Node Modules',
              value: 'nodeModules',
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className='App'>
      <Tree data={treeStructure} />
    </div>
  );
}

export default App;
