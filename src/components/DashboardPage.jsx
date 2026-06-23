import Footer from "../UI/Footer";
import Header from "../UI/Header";
import MainBody from "../UI/MainBody";

const DashboardPage = () => {
  return (
    <div>
      <Header logoLink="/dashboard" />
      <MainBody />
      <Footer />
    </div>
  );
};

export default DashboardPage;
