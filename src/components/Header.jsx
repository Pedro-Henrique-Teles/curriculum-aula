const Header = ({ name, linkedin, phone, email }) => (
    <div className="ms-4">
      <h2 className="text-danger fw-bold">{name}</h2>
      <a href="https://www.linkedin.com/feed/" className="text-decoration-none" target="_blank"><p>{linkedin}</p></a>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
  
  export default Header;
  