
export function getEmployeeData() {
  const employees = [
    {
      id: 1234,
      username: "wipawadee",
      password: "1234",
      name: "Wipawadee Monkut",
      role: "Developer",
      avatar: require("../assets/taeyong.jpg")
    },
    {
      id: 1235,
      username: "chittaphon",
      password: "1235",
      name: "Chittaphon Leechaiyapornkul",
      role: "Project Manager",
      avatar: require("../assets/ten.jpg")

    },
  ];
  return employees
}