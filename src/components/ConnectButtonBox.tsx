import useWallet from "../hooks/useWallet";

interface Props {
  connectedTitle: string;
}

export default function ConnectButtonBox({ connectedTitle }: Props) {
  const { open, isConnected } = useWallet();

  return (
    <>
      {isConnected ? (
        <button className="w-full min-h-14 text-lg text-gray-200 bg-gray-500 rounded-lg">
          {connectedTitle}
        </button>
      ) : (
        <button
          onClick={() => open()}
          className="w-full min-h-14 text-lg text-gray-200 bg-sky-500 rounded-lg"
        >
          Connect wallet
        </button>
      )}
    </>
  );
}
