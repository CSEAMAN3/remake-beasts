import Beast from "./Beast";

export default function Main({ beastData }) {
  return (
    <main className="main">
      <div className="main-container">
        {beastData.map(function (beastObject) {
          return (
            <Beast
              beastObject={beastObject}
              title={beastObject.title}
              image_url={beastObject.image_url}
              description={beastObject.description}
            />
          );
        })}
      </div>
    </main>
  );
}
