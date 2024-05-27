import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers, removeUser } from "../../../../infraestructure/api/user.js";
import { useNavigate } from 'react-router-dom';
import './crudUsuarios.css';

export default function CrudUsuarios() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                let userList = await getUsers();
                setUsers(userList);
            } catch (error) {
                console.error('Error al obtener la lista de usuarios:', error);
                alert('Error al obtener la lista de usuarios. Por favor, revisa la consola para más detalles.');
            }
        };

        fetchUsers();
    }, []);

    const handleDeleteUser = async (userId) => {
        try {
            await removeUser(userId);
            setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Error al eliminar el usuario:', error);
            alert('Error al eliminar el usuario. Por favor, revisa la consola para más detalles.');
        }
    };

    return (
        <div className='crud-usuarios'>
            <div className="crud-options">
                <Link to='/admin/add-empleado'>
                    <button>Crear Usuario (Administrador/Trabajador)</button>
                </Link>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>CI</th>
                            <th>Género</th>
                            <th>Tipo de Usuario</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.names}</td>
                                <td>{user.email}</td>
                                <td>{user.ci}</td>
                                <td>{user.gender}</td>
                                <td>{user.typeName}</td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
