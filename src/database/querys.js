export const queries = {
  getAllCompany: "SELECT * FROM Company",
  createNewCompany:
    "INSERT INTO Company (Id, Name, Description, Code) VALUES (?, ?, ?, ?)",
  getCompanyById: "SELECT * FROM Company WHERE Id = ?",
  deleteCompany: "DELETE FROM Company WHERE Id = ?",
  updateCompany:
    "UPDATE Company SET Name = ?, Description = ?, Code = ? WHERE Id = ?",
  getAllEmployeesByCompany:
    "SELECT * FROM Employee WHERE CompanyId = ?",
  getAllEmployee: "SELECT * FROM Employee",
  createNewEmployee:
    "INSERT INTO Employee (Id, CompanyId, Name, LastName, Age, Code, Description, DNI, Placa) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
  getEmployeeById: "SELECT * FROM Employee WHERE Id = ?",
  updateEmployee:
    "UPDATE Employee SET Name = ?, LastName = ?, Age = ?, Code = ?, Description = ?, DNI = ?, Placa = ? WHERE Id = ?",
  deleteEmployee: "DELETE FROM Employee WHERE Id = ?",
};
