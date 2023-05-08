import "./Profit.scss";

const Profit = ({ title, number, description, specialText = "" }) => {
  return (
    <div className="profit">
      <div className="profit__item">
        <span className="profit__caption">{title}</span>
        <span className="profit__number">
          {number}
          {specialText !== "" ? (
            <span className="profit__number-special-text">{specialText}</span>
          ) : (
            ""
          )}
        </span>
        <span className="profit__desc">{description}</span>
      </div>
      <div className="profit__background" />
    </div>
  );
};

export { Profit };
