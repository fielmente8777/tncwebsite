// import Form from "./components/Form";
import CustomContactFormMain from "@/components/forms/CustomContactFormMain";

const page = () => {
  return (
    <div>
      <h2 className="text-center my-8 text-white font-medium text-xl md:text-2xl bg-primary max-w-3xl py-8 mx-auto">
        Please Fill this form if you or your sponsor is living inside
        Canada.{" "}
      </h2>
      {/* <div style={{ height: "100vh", width: "100%" }}>
        <Form />
      </div> */}
      <CustomContactFormMain formType="TNC Inside Main" />
    </div>
  );
};

export default page;
