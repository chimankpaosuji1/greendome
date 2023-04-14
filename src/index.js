import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

{/* <Form>
                    <label>Faculty</label>
                    <select value={myCar} onChange={handleChange}>
                      <option value="ford">Faculty of Science</option>
                      <option value="volvo">Faculty of Technology</option>
                    </select>
                  </Form>

                  <Dropdown>
                    <Dropdown.Toggle
                      as={CustomToggle}
                      id="dropdown-basic"
                      label="Custom Components"
                      title="Faculties"
                      // variant="success"
                      onChange={handleChanges}
                    >
                      Faculties
                    </Dropdown.Toggle>

                    <Dropdown.Menu as={CustomMenu}>
                      {faculties.myarray.map((data) => (
                        <Dropdown.Item key={data.id}>{data}</Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown> */}