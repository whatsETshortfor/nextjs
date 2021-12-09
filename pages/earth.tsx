import { NextPage } from "next";

const Earth: NextPage = () => {
  return (
    <main>
      <div>
        <img
          src="https://api.nasa.gov/planetary/earth/imagery?api_key=jk68o3jngastjwQ0A8duQ0XO8koK4rkcHafAWIUE&lat=51.433300&lon=-3.176603&dim=0.15&date=2018-01-01"
          width="750"
        />
      </div>
    </main>
  );
};

export default Earth;
