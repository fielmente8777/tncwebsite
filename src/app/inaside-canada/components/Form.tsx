"use client";

const Form = () => {
  

  return (
    <iframe
      id="JotFormIFrame-251675181584464"
        title="TNC Main Inside"
        onLoad={() => window.parent.scrollTo(0, 0)}
        src="/inside.html"
        style={{
          minWidth: '100%',
          maxWidth: '100%',
          height: '1200px',
          border: 'none',
        }}
      />
  );
};

export default Form;