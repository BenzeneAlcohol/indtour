import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#hero">Hero</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#Carousal">States</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact us</a>
        </li>
      </ul>
    </div>
  );
}