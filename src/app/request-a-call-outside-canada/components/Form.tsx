"use client";

const Form = () => {
  

  return (
    <iframe
      id="JotFormIFrame-251675181584464"
        title="TNC Main Inside"
        onLoad={() => window.parent.scrollTo(0, 0)}
        src="/tnc-outside.html"
        className="md:h-[900px] h-[1000px]"
        style={{
          minWidth: '100%',
          maxWidth: '100%',
          border: 'none',
        }}
      />
  );
};

export default Form;