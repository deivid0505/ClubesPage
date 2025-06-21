import React from "react";
import "../styles/Section.css";
import logo from './../../Img/logo (1).png';


const MiembrosSection = () => {
    return (
        <section className="section-container-protagonistas">
            <div className="club-info-header">
                <h2 className="club-info-title">Miembros del Club</h2>
                <img className="logo-protagonistas" src={logo} alt="Logo-protagonistas" />
            </div>
            <div className="section-grid">
                <div className="form-group">
                    <label>Nombre Completo</label>
                    <input type="text" placeholder="Nombre y Apellidos" />
                </div>
                <div className="form-group">
                    <label>CURP</label>
                    <input type="text" placeholder="CURP" />
                </div>
                <div className="form-group">
                    <label>Tipo de Sangre</label>
                    <input type="text" placeholder="Ej. AB-" />
                </div>
                <div className="form-group">
                    <label>Género</label>
                    <select>
                        <option>Selecciona...</option>
                        <option>Masculino</option>
                        <option>Femenino</option>
                        <option>Otro</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Fecha de Nacimiento</label>
                    <input type="date" />
                </div>
                <div className="form-group">
                    <label>Clase</label>
                    <input type="text" placeholder="Ej. Compañero, Amigo, etc." />
                </div>
                <div className="form-group">
                    <label>Teléfono del Tutor</label>
                    <input type="tel" placeholder="Número del responsable" />
                </div>
                <div className="form-group checkbox-group">
                    <label><input type="checkbox" /> Adventista</label>
                    <label><input type="checkbox" /> Bautizado</label>
                    <label><input type="checkbox" /> Asistirá al Camporee</label>
                </div>
            </div>
        </section>
    );
};

export default MiembrosSection;
