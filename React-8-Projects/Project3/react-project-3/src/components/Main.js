// Data
import { Destinations } from "../data/destinationData";

// Components
import Card from "./Card";

export default function Main() {
  const destinationData = Destinations.map((data) => (
    <Card data={data} key={data.id} />
  ));
  return <div className="main--container">{destinationData}</div>;
}
