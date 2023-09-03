import Navbar from "@/components/layouts/Navbar";

type Shell = {
  children: React.ReactNode;
};

const Shell = (props: Shell) => {
  const { children } = props;
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Shell;
