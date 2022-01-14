function ProjectCards({ project }) {
  return (
    <div className="card">
      <div className="card__body">
        <img
          src={require("../assets/project_images/" + project.image + ".png")}
          alt={project.title}
        />
        <h2 className="card__title"> {project.name} </h2>
        <p className="card__description"> {project.desc} </p>
      </div>

      <div class="flex">
        <button className="card__btn__code"> Code </button>
        <button className="card__btn__demo"> Demo  > </button>
      </div>
    </div>
  );
}

export default ProjectCards;
