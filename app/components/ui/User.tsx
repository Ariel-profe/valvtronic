import { getUser } from "@/actions/user";
import { UserMenu } from "./UserMenu";

export const User = async() => {

  const currentUser = await getUser();

  return (
    <UserMenu user={currentUser} />
  )
}
