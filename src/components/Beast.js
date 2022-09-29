function Beast({ title, image_url, description }) {
  return (
    <div className="beast-container">
      <h2 className="beast-title">{title}</h2>
      <img className="beast-img" src={image_url} alt={title} title={title} />
      <p className="beast-description">{description}</p>
    </div>
  );
}

export default Beast;
