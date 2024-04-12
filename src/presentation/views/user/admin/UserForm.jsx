import React, { useState, useEffect } from "react";
import './userform.css'; // Importa el archivo de estilos CSS para el formulario
import { getUserTypes } from "../../../../infraestructure/api/user_type";

const UserForm = ({ onCreateUser }) => {
    const [user, setUser] = useState({
        address: "",
        birthday_date: "",
        ci: "",
        email: "",
        gender: "",
        lastnames: "",
        names: "",
        user_type_id: "",
        picture: ""
    });

    const [userTypes, setUserTypes] = useState([]);

    useEffect(() => {
        // Cargar los tipos de usuario cuando el componente se monta
        const fetchUserTypes = async () => {
            try {
                const types = await getUserTypes();
                setUserTypes(types);
            } catch (error) {
                console.error('Error al obtener los tipos de usuario:', error);
                // Manejar el error de acuerdo a tus necesidades
            }
        };
        fetchUserTypes();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateUser(user);
    };

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <label>
                Nombres:
                <input type="text" name="names" value={user.names} onChange={handleChange} />
            </label>
            <label>
                Apellidos:
                <input type="text" name="lastnames" value={user.lastnames} onChange={handleChange} />
            </label>
            <label>
                Correo Electrónico:
                <input type="email" name="email" value={user.email} onChange={handleChange} />
            </label>
            <label>
                CI:
                <input type="text" name="ci" value={user.ci} onChange={handleChange} />
            </label>
            <label>
                Dirección:
                <input type="text" name="address" value={user.address} onChange={handleChange} />
            </label>
            <label>
                Fecha de Nacimiento:
                <input type="date" name="birthday_date" value={user.birthday_date} onChange={handleChange} />
            </label>
            <label>
                Género:
                <select name="gender" value={user.gender} onChange={handleChange}>
                    <option value="">Seleccionar</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select>
            </label>
            <label>
                Tipo de Usuario:
                <select name="user_type_id" value={user.user_type_id} onChange={handleChange}>
                    <option value="">Seleccionar Tipo</option>
                    {userTypes.map((type) => (
                        <option key={type.id} value={type.id}>
                            {type.name}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Imagen:
                <input type="file" name="picture" onChange={handleChange} />
            </label>
            <button type="submit">Crear Usuario</button>
        </form>
    );
};

export default UserForm;
