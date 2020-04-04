import React from 'react'
import './style.css'
import '../../global.css'
import logoVinil from '../../assets/vinyl-logo.png'
import discos from '../../assets/discos.png'

export default function Logon() {
    return (
        <div className="container">
            <div className="main">
                <div className="form">
                    <p>Vinyl Manager</p>
                    <img src={logoVinil} alt="logo" />
                    <h1>Faça seu login</h1>

                    <input className="input" placeholder="Seu login" />
                    <button className="button"> Login </button>
                </div>
                <section>
                    <img
                        src={discos} alt="discos" />
                </section>
            </div>
        </div>
    );
}