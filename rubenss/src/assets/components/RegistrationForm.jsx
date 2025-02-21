<div className="w-full h-screen flex">
  {/* Formulario */}
  <div className="w-full lg:w-1/2 p-8 sm:p-12 bg-white shadow-lg rounded-lg bg-gradient-to-r from-teal-500 to-blue-500">
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-center mb-6">
        <img src="/path/to/your/logo.png" alt="Logo" className="w-24 h-24" />
      </div>
      <h1 className="text-4xl font-semibold text-white mb-6 text-center">¡Regístrate!</h1>

      {/* Frase debajo del encabezado */}
      <p className="text-white text-center mb-6">Reserva sin estrés, con KANKUN vas a tener el mejor hostal a tus pies.</p>
      
      {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2" htmlFor="firstName">Nombre</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2" htmlFor="lastName">Apellido</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2" htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2" htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button type="submit" className="w-full bg-[#4CAF50] text-white py-4 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500">
          Crear cuenta
        </button>
      </form>
    </div>
  </div>

  {/* Imagen en el lado derecho */}
  <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}></div>

  {/* Popup de éxito */}
  {showPopup && (
    <div className="fixed top-4 right-4 bg-white p-6 rounded-lg text-center shadow-lg w-80 z-50">
      <button
        onClick={() => setShowPopup(false)}
        className="absolute top-2 right-2 text-gray-600 hover:text-black"
        aria-label="Cerrar popup"
      >
        <i className="fas fa-times text-xl"></i>
      </button>
      <h2 className="text-lg font-semibold mb-4">¡Registro Exitoso!</h2>
      <p className="mb-4">¡Se te ha enviado un link de verificación por medio de correo electrónico!</p>
    </div>
  )}
</div>
