import RoleDropdown from "../../components/RoleDropdown/RoleDropdown";
import SampleBadge from "./Badge.sample";
import ExButton from "./ExButton";
import ExInput from "./ExInput";
import SampleInput from "./SampleInput";

const SamplePage = () => {
  return (
    <>
      <SampleInput />
      <SampleBadge />
      <ExButton />
      <RoleDropdown
        options={[
          { value: "public", label: "Public" },
          { value: "private", label: "Private" },
          { value: "corporate", label: "Corporate" },
        ]}
      />
    </>
  );
};

export default SamplePage;
