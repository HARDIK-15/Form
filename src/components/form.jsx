import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    hashKey: '',
    name: '',
    phone: '',
    email: '',
    companyId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform validation and submit the form data to the server.
    // For simplicity, we'll just log the data for now.
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-10 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="userId" className="block mb-2 font-semibold">
          User ID
        </label>
        <input
          type="text"
          id="userId"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2 font-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="hashKey" className="block mb-2 font-semibold">
          Hash Key
        </label>
        <input
          type="text"
          id="hashKey"
          name="hashKey"
          value={formData.hashKey}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2 font-semibold">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="companyId" className="block mb-2 font-semibold">
          Company ID Option
        </label>
        <select
          id="companyId"
          name="companyId"
          value={formData.companyId}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        >
          <option value="">-- Select Company ID Option --</option>
          <option value="company1">Company 1</option>
          <option value="company2">Company 2</option>
          {/* Add more company options here */}
        </select>
      </div>
      <button
        type="submit"
        className="w-full p-2 mt-4 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600"
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;
