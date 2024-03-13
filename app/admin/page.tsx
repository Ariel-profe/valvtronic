import { getUser } from "@/actions/user"
import { NullData } from "../components/ui/NullData";

const AdminPage = async() => {

  const currentUser = await getUser();

  if(!currentUser || currentUser.role !== "ADMIN"){
    return <NullData title={"Ups! Acceso denegado"} />
  };

  return (
    <div>AdminPage</div>
  )
}

export default AdminPage