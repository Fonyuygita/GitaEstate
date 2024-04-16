import React, { useState } from 'react';
import './doctor.scss'
const doctors = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Cardiologist',
    hospital: 'ABC Hospital',
    image: '/doc1.png'
  },
  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Cardiologist',
    hospital: 'ABC Hospital',
    image: '/doc2.png'
  },
  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Cardiologist',
    hospital: 'ABC Hospital',
    image: '/doc3.png'
  },
  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Cardiologist',
    hospital: 'ABC Hospital',
    image: '/doc4.png'
  },

  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Cardiologist',
    hospital: 'ABC Hospital',
    image: '/doc5.png'
  },

  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Cardiologist',
    hospital: 'ABC Hospital',
    image: '/doc6.png'
  },

  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Cardiologist',
    hospital: 'ABC Hospital',
    image: '/doc8.png'
  },

  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Cardiologist',
    hospital: 'ABC Hospital',
    image: '/doc.png'
  },


  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Cardiologist',
    hospital: 'ABC Hospital',
    image: '/doc.png'
  },

  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Cardiologist',
    hospital: 'ABC Hospital',
    image: '/doc.png'
  },
  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Cardiologist',
    hospital: 'ABC Hospital',
    image: '/doc.png'
  },
  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Cardiologist',
    hospital: 'ABC Hospital',
    image: '/doc.png'
  },
  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Cardiologist',
    hospital: 'ABC Hospital',
    image: '/doc.png'
  },

  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Cardiologist',
    hospital: 'ABC Hospital',
    image: '/doc.png'
  },

  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Cardiologist',
    hospital: 'ABC Hospital',
    image: '/doc.png'
  },

  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Cardiologist',
    hospital: 'ABC Hospital',
    image: '/doc1.png'
  },

  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Cardiologist',
    hospital: 'ABC Hospital',
    image: '/doc2.png'
  },


  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Cardiologist',
    hospital: 'ABC Hospital',
    image: '/doc3.png'
  },
  // Add more doctors here
];

const DoctorPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="doctor-page">
      <header>
        <h1>Find a Doctor</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for a doctor"
        />
      </header>

      <div className="doctors-container">
        {filteredDoctors.map((doctor) => (
          <div className="doctor-card" key={doctor.id}>
            <img src={doctor.image} alt={doctor.name} />
            <div className="doctor-info">
              <h2>{doctor.name}</h2>
              <p>{doctor.specialist}</p>
              <p>{doctor.hospital}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorPage;