interface Props {
  children: string;
}

function Button({ children }: Props) {
  return (
    <button className="bg-zinc-900 py-3 px-6 rounded-full text-neutral-50 font-bold hover:shadow-lg hover:scale-105 hover:transition-transform">
      {children}
    </button>
  );
}

export default Button;
