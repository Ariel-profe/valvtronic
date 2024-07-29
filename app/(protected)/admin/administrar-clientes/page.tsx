import { getUsers } from "@/actions/user";
import { ManageClients } from "@/components/admin/ManageClients";


const AdminClientsPage = async() => {

  const users = await getUsers();

  return (
    <div className="container mx-auto">
      <ManageClients users={users} />
    </div>
  )
}

export default AdminClientsPage