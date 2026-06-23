import { useParams } from "react-router-dom";
import ChapterList from "../UI/ChapterList";

const ChaptersPage = () => {
  const { novelId } = useParams();
  console.log("novelId from params:", novelId);

  return (
    <div>
      <ChapterList novelId={novelId} />
    </div>
  );
};
export default ChaptersPage;
