// import Form from "./components/Form"
import CustomContactFormMain from '@/components/forms/CustomContactFormMain';

const page = () => {
    return (
        <div>
            <h2 className="text-center my-8 text-white font-medium text-xl md:text-2xl bg-primary max-w-3xl py-8 mx-auto">Please Fill this form if you or your sponsor is living outside Canada. </h2>
        <CustomContactFormMain formType="TNC Outside" />
        </div>
    );
}

export default page;