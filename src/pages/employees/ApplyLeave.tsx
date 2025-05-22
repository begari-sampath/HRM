import React, { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

interface LeaveFormData {
  leaveType: string;
  leaveDate: string; // format: yyyy-MM-dd
  employeeId: number;
}

const RequestLeaveForm: React.FC = () => {
  const [formData, setFormData] = useState<LeaveFormData>({
    leaveType: 'sick',
    leaveDate: format(new Date(), 'yyyy-MM-dd'),
    employeeId: 1, // TODO: Replace with logged-in user ID
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'employeeId' ? Number(value) : value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:8080/postemployeleaves', formData);
      console.log('Response:', response.data);
      setSuccess(true);
    } catch (err: any) {
      console.error('Failed to submit leave:', err);
      setError('Failed to submit leave. Please try again.');
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Request Leave</h2>

      <div className="mb-4">
        <label htmlFor="leaveType" className="block font-medium text-gray-700 mb-1">
          Leave Type
        </label>
        <select
          id="leaveType"
          name="leaveType"
          value={formData.leaveType}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="sick">Sick</option>
          <option value="vacation">Vacation</option>
          <option value="personal">Personal</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="leaveDate" className="block font-medium text-gray-700 mb-1">
          Leave Date
        </label>
        <input
          type="date"
          id="leaveDate"
          name="leaveDate"
          value={formData.leaveDate}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="employeeId" className="block font-medium text-gray-700 mb-1">
          Employee ID
        </label>
        <input
          type="number"
          id="employeeId"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Submitting...' : 'Submit Request'}
      </button>

      {success && <p className="text-green-600 mt-3">Leave request submitted successfully!</p>}
      {error && <p className="text-red-600 mt-3">{error}</p>}
    </div>
  );
};

export default RequestLeaveForm;
