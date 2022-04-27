const employee = { name: 'Maria', salary: 1058.99, office: 'Assistente' }
const promotion = { ...employee, salary: 2500.00, office: 'Gerente' }

console.log(promotion)