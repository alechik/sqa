import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser, ADMIN_ID, WORKER_ID } from "../../../../infraestructure/api/user.js";
import { useNavigate } from 'react-router-dom';
import './crudUsuarios.css'; // Importa el archivo CSS

export default function CrudUsuarios() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userList = await getUsers();
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
            await deleteUser(userId);
            // Actualizar la lista de usuarios eliminando el usuario con el ID dado
            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Error al eliminar el usuario:', error);
            alert('Error al eliminar el usuario. Por favor, revisa la consola para más detalles.');
        }
    };

    const handleCreateUser = (userType) => {
        // Navega a la página de creación de usuario con el tipo de usuario seleccionado
        navigate(`/admin/add-user/${userType}`);
    };

    // Función para obtener el tipo de usuario basado en el userTypeId
    const getUserType = (userTypeId) => {
        switch (userTypeId) {
            case 1:
                return "Administrador";
            case 2:
                return "Empleado";
            case 3:
                return "Cliente";
            default:
                return "Desconocido";
        }
    };

    return (
        <div className='crud-usuarios'>
            <div className="crud-options">
                <Link to='/admin/add-empleado'>
                <button >
                    Crear Usuario (Administrador/Trabajador)
                </button>
                </Link>
            </div>
            <div className="table-container">
                <table>
                    {/* Encabezados de la tabla */}
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
                    {/* Cuerpo de la tabla */}
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.names}</td>
                                <td>{user.email}</td>
                                <td>{user.ci}</td>
                                <td>{user.gender}</td>
                                <td>{user.userTypeId}</td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
