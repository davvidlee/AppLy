import { Application, columns } from "./columns"
import { DataTable } from "./data-table"
import { fetchApplications } from "../api"; // Import global API function
import { useEffect, useState } from "react";


const API_URL = "https://exoilvbze7.execute-api.us-east-2.amazonaws.com/dev/applications"

export default function Applications() {
  const [data, setData] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const applications = await fetchApplications();
      setData(applications);
      setLoading(false);
    }
    loadData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      {loading ? <p>Loading...</p> : <DataTable columns={columns} data={data} />}
    </div>
  )
}
