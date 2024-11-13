import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments data from the backend
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/api/appointments');
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="dashboard-page">
      <div className="dashboard-content">
        <h2>Appointments Dashboard</h2>
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
              <th>Wait Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{new Date(appointment.date).toLocaleString()}</td>
                  <td>{appointment.status}</td>
                  <td>
                    {Math.max(0, Math.floor((new Date(appointment.date) - new Date()) / (1000 * 60)))} minutes
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No appointments available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;