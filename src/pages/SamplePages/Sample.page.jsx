import RoleDropdown from "../../components/RoleDropdown/RoleDropdown";
import SampleBadge from "../sample/Badge.sample";
import ExButton from "../sample/ExButton";
import ExInput from "../sample/ExInput";
import SampleInput from "../sample/SampleInput";

const SamplePage = () => {
  return (
    <>
      <SampleInput />
      <SampleBadge />
      <ExButton />
      <ExInput />
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
