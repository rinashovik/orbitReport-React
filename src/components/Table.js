

import styling from './styling.css';
import satData from './satData';

const Table = ({ sat }) => { // initial state of the data 

  return (
      <table>
       <thead>
        <tr>
        <th>Name</th>
        <th>Type of Satelite</th>
        <th>Launch date</th>
        <th>Status</th>
        </tr>
        </thead>
        {sat.map((data, id) =>          

        <tbody >
          
        <tr key={id}>
          <td>{data.name}</td>
          <td>{data.type}</td>
          <td>{data.launchDate}</td>
          <td>{data.operational ? "Active": "Inactive"}</td>
        </tr>
        </tbody>)}
      </table>
  );

};

export default Table;