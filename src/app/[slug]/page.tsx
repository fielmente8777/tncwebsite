import { TwoColSection } from "@/components";
import CommanBanner from "@/components/banner/CommanBanner";
import { slugPageData } from "@/data/slugData";

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const pageData = slugPageData;
  return pageData.map((data) => ({
    slug: data.slug,
    fallback: false,
  }));
}

export async function generateMetadata({ params }: Params) {
  const slug = (await params).slug;
  const pageData = slugPageData.find((data) => data.slug === slug);
  return {
    title: pageData?.banner.title,
  };
}

const Page = async ({ params }: Params) => {
  const slug = (await params).slug;
  const pageData = slugPageData.find((data) => data.slug === slug);
  return (
    <>
      {pageData?.banner && <CommanBanner title={pageData.banner.title} src={pageData.banner.src} />}
      {pageData?.welcom && (
        <div>
          {pageData.welcom.map((data, index) => (
            <TwoColSection {...data} key={index} index={index} />
          ))}
        </div>
      )}
      {pageData?.htm && <pageData data={pageData} /> }
    </>
  );
};

export default Page;
