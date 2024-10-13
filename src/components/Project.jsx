const Project = (props) => {
  return (
    <div
      key={props.id}
      className="project"
      onClick={() => openModal(props.Project)}
    >
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Project;
