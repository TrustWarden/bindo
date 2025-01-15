import useWallet from "../hooks/useWallet";

interface Props {
  className?: string;
}

function DisableMessage({ className }: Props) {
  const { cacheAddress } = useWallet();

  return (
    <>
      {cacheAddress ? (
        <div className="relative">
          <div
            className={`absolute bg-neutral-900/50 text-white rounded w-full lg:w-1/4 h-24 m-auto left-0 right-0 content-center text-center inset-y-72 z-10 ${
              className ? className : ""
            }`}
          >
            <span className="text-red-300">Notice: </span>
            This Feature is temporary deactive due to maintainance and upgrading
            contract. Please visit later.
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default DisableMessage;
