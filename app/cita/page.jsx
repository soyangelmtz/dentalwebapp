"use client";
import React, { useState } from "react";
import Doctors from "../components/scheduler/Doctors";

function Page() {
  const [selectedDoctor, setSelectedDoctor] = useState(null); // Estado para el doctor seleccionado

  const handleDoctorSelection = (doctor) => {
    setSelectedDoctor(doctor); // Actualiza el doctor seleccionado
  };

  return (
    <main className="border w-full h-screen flex">
      <div className="m-auto border border-slate-100/10 bg-slate-950/50 h-[70vh] w-[70vw] rounded-3xl">
        {/* Encabezado */}
        <div className="w-full h-[15vh] flex">
          <div className="w-1/2">
            <h1 className="pl-10 pt-10 text-3xl h-1/2 font-bold">Agenda tu cita</h1>
            <p className="pl-5 pt-4 text-slate-400 italic">
              Selecciona al Doctor de tu preferencia para ver la disponibilidad de horario
            </p>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="h-[55vh]">
          <div className="py-2 pl-10">
            {/* Componente de Doctores */}
            <Doctors onDoctorChange={handleDoctorSelection} />
          </div>

          {/* Calendario del doctor seleccionado */}
          <div className="mt-5 p-5 h-[40vh] overflow-y-auto bg-slate-900/70 rounded-lg text-white">
            {selectedDoctor ? (
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Disponibilidad de {selectedDoctor.name}
                </h2>
                <ul>
                  {Object.entries(selectedDoctor.calendar).map(([day, hours]) => (
                    <li key={day} className="mb-2">
                      <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong>{" "}
                      {hours.length > 0 ? hours.join(", ") : "Sin disponibilidad"}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-slate-300 italic">Selecciona un doctor para ver su disponibilidad.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;