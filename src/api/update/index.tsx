import axios from "axios";


export default async function Update(id: any, data: any) {
  const result = await axios
    .patch(`http://localhost:3000/users/${id}`, data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
}
