const Home = () => {
  const { data, loading, error } = useFetch();
  return (
    <div className="home">
      <div className="container wrapper"></div>
    </div>
  );
};
export default Home;
