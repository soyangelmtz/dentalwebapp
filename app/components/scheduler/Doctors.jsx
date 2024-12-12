"use client";
import React, { useState } from "react";

function DoctorsAgenda() {
  const doctorsInfo = {
    juanperez: {
      name: "Juan Pérez",
      profileImage: "/juan-perez.jpg",
      calendar: {
        lunes: [9, 10, 11, 14, 15, 16, 17],
        martes: [9, 10, 11, 14, 15, 16],
        miercoles: [10, 14, 15, 16, 17],
        jueves: [9, 10, 11, 15, 17],
        viernes: [10, 11, 12, 16],
        sabado: [9, 11, 14],
        domingo: [],
      },
    },
    emiliavazquez: {
      name: "Emilia Vázquez",
      profileImage: "/emilia-vazquez.jpg",
      calendar: {
        lunes: [7, 8, 10, 14, 16, 17],
        martes: [9, 10, 15, 16],
        miercoles: [],
        jueves: [9, 10, 15, 17],
        viernes: [7, 8, 9, 10, 15, 16, 17],
        sabado: [9],
        domingo: [],
      },
    },
    juliolopez: {
      name: "Julio López",
      profileImage: "/julio-lopez.jpg",
      calendar: {
        lunes: [7, 8, 9, 10, 11, 12, 14, 15, 16, 17],
        martes: [7, 8, 9, 10, 11, 12, 14, 15, 16, 17],
        miercoles: [7, 8, 9, 10, 11, 12, 14, 15, 16, 17],
        jueves: [7, 8, 9, 10, 11, 12, 14, 15, 16, 17],
        viernes: [7, 8, 9, 10, 11, 12, 14, 15, 16, 17],
        sabado: [7, 8, 9, 10, 11, 12, 14, 15, 16, 17],
        domingo: [7, 8, 9, 10, 11, 12],
      },
    },
  };

  const [selectedDoctor, setSelectedDoctor] = useState("juanperez");
  const [modalData, setModalData] = useState(null);

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const handleOpenModal = (day, hour) => {
    setModalData({ day, hour });
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  const handleConfirmAppointment = () => {
    alert(`Cita confirmada con ${doctorsInfo[selectedDoctor].name} el ${modalData.day} a las ${modalData.hour}:00.`);
    setModalData(null);
  };

  const doctor = doctorsInfo[selectedDoctor];

  const days = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
  const hours = Array.from({ length: 12 }, (_, i) => 7 + i); // Horas de 7 a 18

  return (
    <div className="p-5">
      <div className="mb-5">
        <select
          className="p-2 border rounded text-black"
          value={selectedDoctor}
          onChange={handleDoctorChange}
        >
          <option value="juanperez">Juan Pérez</option>
          <option value="emiliavazquez">Emilia Vázquez</option>
          <option value="juliolopez">Julio López</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-slate-500 w-full text-center">
          <thead>
            <tr>
              <th className="border border-slate-600 p-2">Horas</th>
              {days.map((day) => (
                <th key={day} className="border border-slate-600 p-2 capitalize">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map((hour) => (
              <tr key={hour}>
                <td className="border border-slate-600 p-2">{hour}:00</td>
                {days.map((day) => (
                  <td
                    key={day}
                    className={`border border-slate-600 p-2 ${
                      doctor.calendar[day]?.includes(hour)
                        ? "bg-green-500 text-white cursor-pointer"
                        : "bg-gray-300"
                    }`}
                    onClick={
                      doctor.calendar[day]?.includes(hour)
                        ? () => handleOpenModal(day, hour)
                        : null
                    }
                  >
                    {doctor.calendar[day]?.includes(hour) ? "Disponible" : "No disponible"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalData && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80">
          <div className="bg-white p-5 rounded text-slate-700 shadow-lg">
            <h2 className="text-xl font-bold mb-4 ">Confirmar Cita</h2>
            <p className="">
              Doctor: {doctor.name}
              <br />
              Día: {modalData.day.charAt(0).toUpperCase() + modalData.day.slice(1)}
              <br />
              Hora: {modalData.hour}:00
            </p>
            <div className="mt-4 flex gap-4">
              <button
                className="px-4 py-2 bg-green-500 text-white font-bold rounded"
                onClick={handleConfirmAppointment}
              >
                Confirmar
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={handleCloseModal}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DoctorsAgenda;