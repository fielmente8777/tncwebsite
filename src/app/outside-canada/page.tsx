import Form from "./components/Form"

const page = () => {
    return (
        <div>
            <h2 className="text-center my-8 text-white font-medium text-xl md:text-2xl bg-primary max-w-3xl py-8 mx-auto">Please Fill this form if you or your sponsor is living outside Canada. </h2>
           <Form />
        </div>
    );
}

export default page;