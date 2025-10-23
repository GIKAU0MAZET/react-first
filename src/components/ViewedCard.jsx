import BootsCard from "../components/BootsCard";

const ViewedCard = ({ bootsData, isLoad }) => {
  return (
    <div className="viewed-card">
      <h2 className="viewed-title">Просмотренные</h2>
      {isLoad ? (
        <div className="loading-title">Загрузка</div>
      ) : (
        <div className="group-card">
          {bootsData.map((boots, index) => (
            <BootsCard
              key={index}
              image={boots.image}
              title={boots.title}
              price={boots.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewedCard;
