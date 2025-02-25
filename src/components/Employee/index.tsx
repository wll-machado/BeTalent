import axios from "axios";
import { useEffect, useState } from "react";
import { 
  Arrow, 
  CardHeader, 
  CardInfos, 
  Dote, 
  EmployeeCard, 
  EmployeeInfo, 
  EmployeeTable, 
  MainContainer, 
  SearchContainer, 
  Tags, 
  WebTags
} from "./styles";
import ArrowDown from "/down.png";
import searchIcon from "/search.png";
import { formatDate, formatPhone } from "../../utils/Formatted";

type EmployeeProps = {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: number;
  image: string;
};

function Employee() {
  const [employees, setEmployees] = useState<EmployeeProps[]>([]);
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null); 

  useEffect(() => {
    axios
      .get("http://localhost:3000/employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error("Erro ao buscar funcionários:", err));
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id)); 
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.job.toLowerCase().includes(search.toLowerCase()) ||
      employee.phone.toString().includes(search)
  );

  return (
    <MainContainer>
      <SearchContainer>
        <h1>Funcionários</h1>

        <div>
          <input
            type="text"
            placeholder="Pesquisar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img src={searchIcon} alt="Ícone de lupa" />
        </div>
      </SearchContainer>

      <EmployeeTable>
        <div>
          <Tags>
            <span>FOTO</span>
            <span>NOME</span>
          </Tags>
          <Dote />
          <WebTags>
            <span>CARGO</span>
            <span>DATA DE ADMISSÃO</span>
            <span>TELEFONE</span>
          </WebTags>
        </div>

        {filteredEmployees.map((employee) => (
          <EmployeeCard expanded={expandedId === employee.id} key={employee.id}>
            <CardHeader>
              <div>
                <img src={employee.image} alt="Foto de perfil do funcionário" />
                <h3>{employee.name}</h3>
              </div>
              <CardInfos>
                <span>{employee.job}</span>
                <span>{formatDate(employee.admission_date)}</span>
                <span>{formatPhone(employee.phone)}</span>
              </CardInfos>
              <Arrow
                rotated={expandedId === employee.id}
                onClick={() => toggleExpand(employee.id)}
              >
                <img src={ArrowDown} alt="Ícone de seta para expandir o cartão" />
              </Arrow>
            </CardHeader>

            {expandedId === employee.id && (
              <EmployeeInfo>
                <span>
                  <p>Cargo</p>
                  <p>{employee.job}</p>
                </span>
                <span>
                  <p>Data de admissão</p>
                  <p>{formatDate(employee.admission_date)}</p>
                </span>
                <span>
                  <p>Telefone</p>
                  <p>{formatPhone(employee.phone)}</p>
                </span>
              </EmployeeInfo>
            )}
          </EmployeeCard>
        ))}
      </EmployeeTable>
    </MainContainer>
  );
}

export default Employee;
