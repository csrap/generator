import React, { useRef } from 'react';
import ReactDOM, { render } from 'react-dom';
import { useReactToPrint } from 'react-to-print';

import './css/estilos.css';
import App from './pages/App';
import Pdf from './pages/pdf';
import RoutesApp from './routes/Routes';

// Using a class component, everything works without issue
export class ComponentToPrint extends React.Component {
  render() {
    return (
      <div >
        <div className="Perfil" >
          <p>Jill Morgan</p>
          <p>Sales Representative</p>
        </div>
        <div>
          <p>Result-oriented sales representative for over 5 years with 2 years of experience </p>
        </div>
        <div>
          <table>
            <thead>
              <th> Personal Info </th>
              <th> Experience</th>
            </thead>
            <tbody>
              <tr>
                <th>Phone</th>
                <th>2018</th>
              </tr>
              <tr>
                <th>Phone</th>
              </tr>
              <tr>
                <th>Skills</th>
              </tr>
              <tr>
                <th>Load </th>
              </tr>
            </tbody>
          </table>
        </div>


      </div>
    );
  }
}

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Generar PDF</button>
    </div>
  );
};

render(<Example />, document.getElementById('root'));



