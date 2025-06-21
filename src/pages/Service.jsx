import { useParams } from "react-router-dom";
import { services } from "../data/services";
import LegalAreas from "../components/practiceareas/legalareas";

const Service = () => {
  const { serviceSlug } = useParams();
  const service = services.find((s) => s.path === serviceSlug);

  if (!service) return <h2>Service Not Found</h2>;

  return (
      <>    
        <LegalAreas service={service} />
      </>
  );
};

export default Service;
