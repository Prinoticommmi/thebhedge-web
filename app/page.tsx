const {
  InverseClient,
  LinearClient,
  InverseFuturesClient,
  SpotClientV3,
  UnifiedMarginClient,
  USDCOptionClient,
  USDCPerpetualClient,
  AccountAssetClient,
  CopyTradingClient,
  RestClientV5,
  ContractClient,
} = require("bybit-api");

//import { ContractClient } from "bybit-api";

export default function Home() {
  const API_KEY = "NmKCSyLpZNECydtgz6"; //process.env.API_KEY_COM;
  const API_SECRET = "hCY0N0X75HqmMyml5c1gp88O0dZfYtXvGWls"; //process.env.API_SECRET_COM;

  const useTestnet = false;
  const client = new RestClientV5(
    {
      key: API_KEY,
      secret: API_SECRET,
      testnet: useTestnet,
    },
    // requestLibraryOptions
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      ciao this is bhedge
    </main>
  );
}
