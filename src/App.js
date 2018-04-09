import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// React Table Dependencies
import ReactTable from 'react-table';
import 'react-table/react-table.css';

function retrieveInfo(words) {

}

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
    this.renderEditable = this.renderEditable.bind(this);
  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }  

  render() {
    const { data } = this.state;
  
    const columns = [{
      Header: 'Word',
      accessor: 'word',
      Cell : this.renderEditable, 
    }, {
      Header: 'Furigana',
      accessor: 'furigana',
      Cell: this.renderEditable,
    }, {
      Header: 'Definition',
      accessor: 'def',
      Cell: this.renderEditable,
    }]
  
    return (
      <div className="Page">
      <div className="Title">
        Japanese Flash Card Maker
      </div>
      <div className="Table">
      <ReactTable
        data={data}
        columns={columns}
        />
      </div>
      <div className="Buttons"> BUTTONS </div>
      <div className="Info"> INFO </div>
      </div>
    );
  }
}

export default App;
