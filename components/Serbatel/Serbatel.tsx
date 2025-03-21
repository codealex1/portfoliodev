import React from 'react'

const Serbatel = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-start px-6 py-12">
      {/* Titre et description */}
      <div className="text-left max-w-2xl mt-16 ml-12">
        <h1 className="text-6xl font-bold flex items-center gap-2">
          <span className="text-orange-500">🐯</span> Serbatel
        </h1>
        <p className="text-gray-400 mt-4 ml-6 text-6xs">
        The ultimate platform for sharing and discovering eco-friendly journeys. A space where travelers and drivers collaborate to reduce their carbon footprint.
        </p>
      </div>

      {/* Boutons */}
      <div className="mt-6 flex gap-4 ml-16 mt-16">
        <button className="bg-orange-400 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-orange-600 transition">
          View porject ↗
        </button>
        <button className="border border-gray-600 px-6 py-2 rounded-lg text-lg font-medium hover:bg-gray-800 transition text-orange-400">
          <a href="https://github.com/codealex1/Ecoride/tree/dev">Source code</a>
        </button>
      </div>

      {/* Cartes d'information */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full p-12">
        {/* Carte 1 */}
        <div className="bg-gray-950  rounded-lg w-full p-6 border border-gray-800 hover:border-orange-500 transition">
          <h1 className='text-2xl'>🔍</h1>
          <h3 className="text-xl font-bold flex items-center gap-2">
          Find a route
          </h3>
          <p className="text-gray-400 mt-2 text-xl">
          Browse a collection of eco-friendly routes and find the ideal carpool according to your criteria.
          </p>
        </div>

        {/* Carte 2 */}
        <div className="bg-gray-950 p-2 rounded-lg w-full p-6 border border-gray-800 hover:border-orange-500 transition">
          <h1 className='text-2xl'>✍️</h1>
          <h3 className="text-xl font-bold flex items-center gap-2">
             Share your trip
          </h3>
          <p className="text-gray-400 mt-2 text-xl">
          Publish your trips and allow other users to join your journey.
          </p>
        </div>

        {/* Carte 3 */}
        <div className="bg-gray-950 p-2 rounded-lg w-full p-6 border border-gray-800 hover:border-orange-500 transition">
          <h1 className='text-2xl'> 👤</h1>
          <h3 className="text-xl font-bold flex items-center gap-2">
          User profiles
          </h3>
          <p className="text-gray-400 mt-2 text-xl">
          Create your profile, track your trips and connect with other drivers and passengers.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Serbatel