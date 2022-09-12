import { useLoaderData, json } from "remix";

export const loader = async ({ params }: any) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  return json(await response.json());
};

const Home = () => {
  const response = useLoaderData();
  return (
    <div>
      {response &&
        response?.map((item: any, index: number) => (
          <div className="p-6 border m-6">
            <h3 className="font-bold">{item.title}</h3>
            <p>{item?.body}</p>
          </div>
        ))}
    </div>
  );
};

export default Home;
