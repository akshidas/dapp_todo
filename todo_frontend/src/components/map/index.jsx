const Map = ({ list = [], render = () => null }) => {
  return list?.map(render);
};

export default Map;
