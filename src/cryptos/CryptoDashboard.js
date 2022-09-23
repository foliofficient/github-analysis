import { useParams } from "@reach/router";
import { EVERYTHING } from "../PathConstants";

const CryptoDashboard = () => {
  const params = useParams();
  console.log("params=", params);
  let { key } = params;
  console.log("key=", key);
  let selectedCrypto = EVERYTHING.find((item) => {
    return item.path === key;
  });
  console.log("selected=", selectedCrypto);

  if (selectedCrypto) {
    return <iframe src={selectedCrypto.embedUrl} />;
  } else {
    return <p>You found your way to nothing!</p>;
  }
};

export default CryptoDashboard;
