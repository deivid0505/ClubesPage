import React from "react";
import "../styles/Section.css";
import logo from './../../Img/logo (1).png';


const ContactSection = () => {
    return (
        <section className="section-container-protagonistas">
            <div className="club-info-header">
                <h2 className="club-info-title">Información de Contacto</h2>
                <img className="logo-protagonistas" src={logo} alt="Logo-protagonistas" />
            </div>
            <div className="section-grid">
                <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input type="email" placeholder="ejemplo@correo.com" />
                </div>
                <div className="form-group">
                    <label>Teléfono</label>
                    <input type="tel" placeholder="(123) 456-7890" />
                </div>
                <div className="form-group">
                    <label>Facebook</label>
                    <input type="text" placeholder="https://facebook.com/tuclub" />
                </div>
                <div className="form-group">
                    <label>Twitter</label>
                    <input type="text" placeholder="https://twitter.com/tuclub" />
                </div>
                <div className="form-group">
                    <label>Instagram</label>
                    <input type="text" placeholder="https://instagram.com/tuclub" />
                </div>
                <div className="form-group">
                    <label>Otro medio</label>
                    <input type="text" placeholder="Canal, grupo, etc." />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
