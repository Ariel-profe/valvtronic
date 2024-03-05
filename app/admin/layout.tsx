import { ReactNode } from "react";
import { Metadata } from "next";

import { Navbar } from "../components/admin/ui/Navbar";
// import { getUser } from "@/actions/user";
import { NullData } from "@/app/components/ui/NullData";

export const metadata: Metadata = {
    title: 'Valvtronic Admin',
    description: 'Valvtronic Admin Dashboard'
};

const AdminLayout = async({children}:{children:ReactNode}) => {


    // const user = await getUser();
  
    // if(!user || user.role !== 'ADMIN'){
    //   return <NullData title="Opps! Access Denied" />
    // };

  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default AdminLayout