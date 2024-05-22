import { ReactNode } from "react";
import { Metadata } from "next";

import { Navbar } from "@/app/components/admin/ui/Navbar";
import { auth } from "@/auth";
import { NullData } from "@/app/components/ui/NullData";

export const metadata: Metadata = {
    title: 'Valvtronic Admin',
    description: 'Valvtronic Panel de administrador'
};

const AdminLayout = async({children}:{children:ReactNode}) => {

  const session = await auth();
  
  if (!session) return <NullData title={"Usted no está autenticado"} />;
  if (session.user.role !== "ADMIN") return <NullData title={"Usted no tiene permiso para estar aquí"} />;

  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default AdminLayout