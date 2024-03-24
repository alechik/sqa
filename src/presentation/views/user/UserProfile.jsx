import React from 'react'

export default function UserProfile(){
    return <div className='user-profile-container'>
        <div className="user-cont">
            <div className="user-image-cont">
                <div className="user-image-div">
                    <img src='src/presentation/assets/user-profile.png' alt='perfil' className='user-img'/>
                </div>
                <div className="below-info">
                    <span className='user-info-name'>Adrian Herrero</span>
                    <span className='user-info-email'>adrian@gmail.com </span>
                     </div>
                {/*<div className="btn-profile">
                    <button className='img-edit'> Editar foto de perfil</button>
                </div>*/}
            </div>

            <div className="user-info">
                <div className="user-info-div">
                    <div className="stat">
                        <h4>Nombre: </h4>
                        <span className='user-info-span'>Adrian</span>
                    </div>
                    <div className="stat">
                        <h4>Apellido: </h4>
                        <span>Herrero </span>
                    </div>
                    <div className="stat">
                        <h4>Fecha de Nacimiento: </h4>
                        <span>25/11/99</span>
                    </div>
                </div>
                <div className="user-info-div">
                    <div className="stat">
                        <h4>Dirección: </h4>
                        <span>Av Piray 6to anillo</span>
                    </div>
                    <div className="stat">
                        <h4>Correo Electronico: </h4>
                        <span>adrian@gmail.com</span>
                    </div>
                    <div className="stat">
                        <h4>Genero: </h4>
                        <span>Masculino</span>
                    </div>
                </div>
                <div className="user-info-div">
                    <div className="stat">
                        <h4>NIT: </h4>
                        <span></span>
                    </div>
                    <div className="stat">
                        <h4>Nro Telefono:</h4>
                        <span>70205020</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}