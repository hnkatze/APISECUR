export const queries = {
  getAllCompany: "SELECT * FROM Company",
  createNewCompany:
    "INSERT INTO Company ( Id, Name, Description, Code) Values ( @Id, @Name, @Description, @Code)",
  getCompanyById: "SELECT * FROM Company Where Id = @Id",
  deleteCompany: "DELETE FROM Company Where Id = @Id",
  updateCompany:
    "UPDATE Company SET Name = @Name, Description = @Description, Code = @Code WHERE Id = @Id",
  getAllEmployeesByCompany:
    "SELECT * FROM Employee WHERE CompanyId = @CompanyId",
    getAllEmployee: "SELECT * FROM Employee",
  createNewEmployee:
    "INSERT INTO Employee (Id, Name, LastName, Age, Code, Description, DNI, Placa, CompanyId) VALUES (@Id, @Name, @LastName, @Age, @Code, @Description, @DNI, @Placa, @CompanyId)",
  getEmployeeById: "SELECT * FROM Employee WHERE id = @Id",
  updateEmployee:
    "UPDATE Employee SET Name = @Name, LastName = @LastName, Age = @Age, Code = @Code, Description = @Description, DNI = @DNI, Placa = @Placa WHERE id = @Id",
  deleteEmployee: "DELETE FROM Employee WHERE id = @Id",
};
