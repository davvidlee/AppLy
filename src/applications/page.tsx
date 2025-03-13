import { Application, columns } from "./columns"
import { DataTable } from "./data-table"
import { fetchApplications, addApplication, getUserID } from "../api"; // Import global API function
import { useEffect, useState } from "react";
import { fetchUserAttributes, fetchAuthSession, FetchUserAttributesOutput } from "aws-amplify/auth";


export default function Applications() {
  const [data, setData] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [userSub, setUserSub] = useState<string>("")

  useEffect(() => {
    async function loadUser() {
      try {
        const userAttributes: FetchUserAttributesOutput = await fetchUserAttributes();
        setUserSub(userAttributes["sub"] ?? ""); // ✅ Ensures userSub is always a string
      } catch (error) {
        console.error("Error fetching user attributes:", error);
      }
    }
    async function loadData() {
      const cachedData = localStorage.getItem("applications");
      if (cachedData) {
        setData(JSON.parse(cachedData));
        setLoading(false);
      } else {
        const applications = await fetchApplications();
        localStorage.setItem("applications", JSON.stringify(applications)); // Store data in cache
        setData(applications);
        setLoading(false);
      }
    }
    loadUser()
    loadData();
  }, []);

  const [form, setForm] = useState({
    applicationID: `app-${Date.now()}`,
    company: "",
    date: new Date().toISOString(),
    desc: "",
    pos: "",
    salary: "",
    status: "No Update",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await addApplication(userSub, form);
      console.log(result);

      const updatedApplications = await fetchApplications();
      setData(updatedApplications);

      setForm({
        applicationID: `app-${Date.now()}`,
        company: "",
        date: new Date().toISOString(),
        desc: "",
        pos: "",
        salary: "",
        status: "No Update",
      });
    } catch (error) {
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="company" placeholder="Company" onChange={handleChange} required />
      <input type="text" name="desc" placeholder="Description" onChange={handleChange} required />
      <input type="text" name="pos" placeholder="Position" onChange={handleChange} required />
      <input type="number" name="salary" placeholder="Salary" onChange={handleChange} required />
      <button type="submit">Add Application</button>
    </form>
    {/* <form>
      <input type="text" name="company" placeholder="Company" required />
      <input type="text" name="desc" placeholder="Description" required />
      <input type="text" name="pos" placeholder="Position" required />
      <input type="number" name="salary" placeholder="Salary" required />
      <button type="submit">Add Application</button>
    </form> */}
    <div className="container mx-auto py-10">
      {loading ? <p>Loading...</p> : <DataTable columns={columns} data={data} />}
    </div>
    </div>
  )
}
