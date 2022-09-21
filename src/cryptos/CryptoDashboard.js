import { useParams } from "@reach/router";
import { ALL_CRYPTO } from "../PathConstants";

const CryptoDashboard = () => {
  const params = useParams();
  console.log("params=", params);
  let { key } = params;
  console.log("key=", key);
  let selectedCrypto = ALL_CRYPTO.find((item) => {
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
