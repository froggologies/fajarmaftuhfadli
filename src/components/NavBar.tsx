export default function NavBar() {
  const Li = ({ children }: { children: React.ReactNode }) => (
    <li className="hover:bg-base w-full cursor-pointer p-4 text-center">
      {children}
    </li>
  );

  return (
    <nav className="bg-mantle border-overlay0/50 border-b-[1px]">
      <ul className="text-overlay0 flex w-full text-lg font-semibold">
        {/** TODO: add icon for each item bellow */}
        <Li>Posts</Li>
        <Li>Experience</Li>
        <Li>Projects</Li>
        <Li>Certificates</Li>
      </ul>
    </nav>
  );
}
