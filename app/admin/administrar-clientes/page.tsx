import { getUser, getUsers } from "@/actions/user";
import { ManageClients } from "@/app/components/admin/ManageClients"
import { NullData } from "@/app/components/ui/NullData";

const AdminClientsPage = async() => {

  const currentUser = await getUser();
  const users = await getUsers();

  if(!currentUser || currentUser.role !== "ADMIN"){
    return <NullData title={"Ups! Acceso denegado"} />
  };

  return (
    <div className="container mx-auto">
      <ManageClients users={users} />
    </div>
  )
}

export default AdminClientsPage