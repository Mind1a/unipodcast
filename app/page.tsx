import Landing from "@/features/landing/components/Landing";

const page = () => {
  return (
    <div>
      <p>Default Noto ტექსტი</p>
      <p className="font-bold">Noto Bold</p>
      <p className="font-black">Noto Black</p>
      <h1 className="font-display">Bebas Title</h1>
      <Landing />
    </div>
  );
};

export default page;
