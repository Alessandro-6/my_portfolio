/* eslint-disable react/prop-types */
function Tecnology({ tecnology, experience, img }) {
  return (
    <div className="timeline-wrapper">
      <div className="timeline-yr">
        <span>
          <img
            className="img-fluid"
            src={`tecnologies/${img}.svg`}
            alt={tecnology}
          />
        </span>
      </div>
      <div className="timeline-info">
        <h3>
          <span>{tecnology}</span>
          <small>{experience}</small>
        </h3>
      </div>
    </div>
  );
}

export default Tecnology;
