import axios from "axios";

export default async function Delete(id: any) {
  console.log("foi", id);
  const result = await axios
    .delete(`http://localhost:3000/users/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
}
