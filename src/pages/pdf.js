import React, { Component } from 'react';



class Pdf extends Component {
  render() {
    return (
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <object
          data={require('../docs/OpenBootcamp-HojaDeRuta.pdf')}
          type="aplication/pdf"
          widht="100%"
          height="100%"
        >
        </object>
      </div>
    );
  }
}



export default Pdf;
