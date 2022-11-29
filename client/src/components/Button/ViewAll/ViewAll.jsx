import "./viewall.scss";

const ButtonViewAll = ({ onClick }) => {
  return (
    <div>
      <p className="btn-viewall" onClick={onClick}>
        VIEW ALL
      </p>
    </div>
  );
};

export default ButtonViewAll;
