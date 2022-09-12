import { LoaderFunction, useParams } from "remix";

const JokesIdloader: LoaderFunction = () => {
  const params = useParams();
  return <div>{params.jokeId}</div>;
};

export default JokesIdloader;
