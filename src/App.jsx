import React from 'react';
import UserForm from './components/form';

function App() {
  return (
    <div className='bg-gradient-to-b from-red-600 to-blue-600'>
      <div className="container mx-auto p-6 h-screen">
        <h1 className="text-4xl text-center text-white font-bold mb-4">Form</h1>
        <UserForm />
      </div>
    </div>
  );
}

export default App;
