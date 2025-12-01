import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import "./styles/usuarios.css";
import "./styles/global.css"

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyweb && "display: none;"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 400px) {
    ${(props) => props.onlyweb && "display: none;"}
  }
`;

const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    console.log(item); 
    setOnEdit(item);
  };

const handleDelete = async (idusuarios) => {
  try {
    const { data } = await axios.delete(`http://localhost:8800/usuarios/${idusuarios}`);
    setUsers(users.filter((user) => user.idusuarios !== idusuarios));
    toast.success(data || "Usuário deletado com sucesso!");
    setOnEdit(null);
  } catch (err) {
    toast.error(err.response?.data || "Erro ao excluir usuário");
  }
};


  return (
    <table className="UsuariosTable">
      <thead className="UsuariosThead">
        <tr className="UsuariosTr">
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th onlyweb>Telefone</Th>
          <Th></Th>
          <Th></Th>
        </tr>
      </thead>

      <tbody className="UsuariosTbody">
        {users.map((item, i) => (
          <tr key={i}>
            <Td width="30%">{item.nome}</Td>
            <Td width="30%">{item.email}</Td>
            <Td width="20%" onlyweb>
              {item.telefone}
            </Td>

            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} style={{ cursor: "pointer", color: "#ffffffff" }} />
            </Td>

            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.idusuarios)} style={{ cursor: "pointer", color: "#ffffffff" }} />
            </Td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
