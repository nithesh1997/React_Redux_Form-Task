import React from 'react'
import Cards from './components/Cards'
import ModalInput from './components/Modal'
import { Col, Row } from 'antd';
import ViewCard from './components/ViewCard';

class App extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col s4">         
          <Cards />
        </div>
        <div class="col s6">
          <ViewCard />
        </div>
        <div class="col s2">
        <ModalInput />
        </div>
      </div>
    )
  }
}

export default App