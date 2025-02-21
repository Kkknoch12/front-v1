import React, { useState } from 'react';
import axios from 'axios';
import logo from './kankun.png'; // Importa el logo
import backgroundImage from './playare.avif'; // Importa la imagen de fondo

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/auth/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Registration successful:', response.data);
      setSuccessMessage('¡Registro exitoso! Ya puedes iniciar sesión.');
      setErrorMessage('');
      setShowPopup(true);
    } catch (error) {
      setSuccessMessage('');
      if (error.response?.data?.error?.includes("email already registered")) {
        setErrorMessage('Este correo electrónico ya está registrado.');
      } else {
        setErrorMessage(error.response?.data?.error || 'Error en el registro');
      }
      console.error('Registration error:', error);
    }
  };

  // Validación de texto solo para los campos de nombre y apellido
  const validateTextInput = (value) => {
    const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/; // Acepta solo letras y espacios
    return regex.test(value);
  };

  return (
    <div className="w-full h-screen flex">
      {/* Formulario */}
      <div className="w-full lg:w-1/2 p-8 sm:p-12 bg-white shadow-lg rounded-lg bg-gradient-to-r from-[#F5F4F1] to-[#F5F4F1]">
        <div className="w-full max-w-sm mx-auto">
          {/* Logo en la esquina superior derecha */}
          <div className="absolute top-6 right-6">
            <img src={logo} alt="Logo" className="w-24 h-24" />
          </div>
          <h1 className="text-3xl font-semibold text-[#56443D] mb-6 text-center">¡Regístrate!</h1>
          <p className="text-[#56443D] text-center mb-6">Reserva sin estrés, con KANKUN vas a tener el mejor hostal a tus pies.</p>
          
          {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-[#56443D] font-semibold mb-2" htmlFor="firstName">Nombre</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => {
                  if (validateTextInput(e.target.value)) {
                    handleInputChange(e);
                  }
                }}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#56443D] font-semibold mb-2" htmlFor="lastName">Apellido</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => {
                  if (validateTextInput(e.target.value)) {
                    handleInputChange(e);
                  }
                }}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Ingresa tu apellido"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#56443D] font-semibold mb-2" htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Ingresa tu correo electrónico"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#56443D] font-semibold mb-2" htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Ingresa tu contraseña"
              />
            </div>

            <button type="submit" className="w-full bg-[#56443D] text-white py-3 rounded-lg hover:bg-[#3e352a] transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500">
              Crear cuenta
            </button>
          </form>
        </div>
      </div>

      {/* Imagen en el lado derecho con border-radius */}
      <div className="w-full lg:w-1/2 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      {/* Popup de éxito con color personalizado y tamaño rectangular */}
      {showPopup && (
        <div className="fixed top-4 right-4 bg-[#EDD267] p-4 rounded-lg text-center shadow-lg w-64 h-32 z-50">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-black"
            aria-label="Cerrar popup"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
          <h2 className="text-lg font-semibold mb-2">¡Registro Exitoso!</h2>
          <p className="mb-2">¡Se te ha enviado un link de verificación por medio de correo electrónico!</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
