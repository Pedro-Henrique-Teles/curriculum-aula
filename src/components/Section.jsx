export const Section = ({ title, children }) => (
    <div className="my-4">
      <h4 className="border-success border-bottom border-2 pb-1">{title}</h4>
      {children}
    </div>
  );
  