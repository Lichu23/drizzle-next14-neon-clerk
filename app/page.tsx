import { getData } from "@/actions/todoActions";
import { getAllUsers, getUser } from "@/actions/userActions";
import Todos from "@/components/Todos";

export default async function Home() {
  // const users = await getAllUsers();
  // console.log(users);
  // const user = await getUser(users[0].id);
  // const data = await getData(users[0].id);
  // console.log(user);
  //

  return (
    <main className="flex items-center justify-between">
      {/* <Todos todos={data} user={users[0]} />; */}
    </main>
  );
}
