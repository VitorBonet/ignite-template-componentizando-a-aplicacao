interface ISideBarProps {
  children: React.ReactNode;
}

export function SideBar({ children }: ISideBarProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {children}
      </div>

    </nav>
  );
}