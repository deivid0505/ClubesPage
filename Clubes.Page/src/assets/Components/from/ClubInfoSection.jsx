import React from "react";
import "../styles/ClubInfoSection.css";
import logo from './../../Img/logo (1).png';

const ClubInfoSection = () => {
    return (
        <section className="club-info-container">
            <div className="club-info-header">
                <h2 className="club-info-title">Información del Club</h2>
                <img className="logo-protagonistas" src={logo} alt="Logo-protagonistas" />
            </div>
            <div className="club-info-grid">
                <div className="form-group">
                    <label>Campo</label>
                    <select>
                        <option>Selecciona...</option>
                        <option>Campo Norte</option>
                        <option>Campo Sur</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Distrito</label>
                    <input type="text" placeholder="Ej. Distrito Central" />
                </div>

                <div className="form-group">
                    <label>Iglesia</label>
                    <input type="text" placeholder="Ej. Iglesia Monte de Sion" />
                </div>

                <div className="form-group">
                    <label>Club</label>
                    <input type="text" placeholder="Ej. Leones del Rey" />
                </div>

                <div className="form-group">
                    <label>Nombre del Club</label>
                    <input type="text" placeholder="Nombre oficial del club" />
                </div>

                <div className="form-group">
                    <label>Fecha de Creación</label>
                    <input type="date" />
                </div>

                <div className="form-group">
                    <label>Ubicación</label>
                    <input type="text" placeholder="Ciudad, Estado" />
                </div>

                <div className="form-group">
                    <label>Tipo de Club</label>
                    <select>
                        <option>Selecciona...</option>
                        <option>Conquistadores</option>
                        <option>Aventureros</option>
                        <option>Guías Mayores</option>
                    </select>
                </div>
            </div>
        </section>
    );
};

export default ClubInfoSection;
