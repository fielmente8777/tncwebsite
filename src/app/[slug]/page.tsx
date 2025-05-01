import { TwoColSection } from "@/components";
import CommanBanner from "@/components/banner/CommanBanner";
import { slugPageData } from "@/data/slugData";
import PageData from "./components/PgaeData";
import Map from "@/components/maps/Map";

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
    title: pageData?.meta?.title,
    description: pageData?.meta?.desc,
    alternate: {
      languages: {
        en: `https://tncimmigration.com/${slug}`,
        fr: `https://tncimmigration.com/${slug}`,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: pageData?.meta?.title,
      description: pageData?.meta?.desc,
      images: [
        {
          url: `https://tncimmigration.com/${pageData?.slug}/og-image.jpg`,
          width: 800,
          height: 600,
          alt: pageData?.meta?.title,
        },
      ],
    },
    openGraph: {
      title: pageData?.meta?.title,
      description: pageData?.meta?.desc,
      type: "website",
      locale: "en_IN",
      siteName: "TNC Immigration",
      images: [
        {
          url: `https://tncimmigration.com/${pageData?.slug}/og-image.jpg`,
          width: 800,
          height: 600,
          alt: pageData?.meta?.title,
        },
      ],
    },
  };
}

const Page = async ({ params }: Params) => {
  const slug = (await params).slug;
  const pageData = slugPageData.find((data) => data.slug === slug);

  return (
    <>
      {pageData?.banner && (
        <CommanBanner title={pageData.banner.title} src={pageData.banner.src} />
      )}
      {pageData?.welcom && (
        <div>
          {pageData.welcom.map((data, index) => (
            <TwoColSection {...data} key={index} index={index} aspect={data.aspect} />
          ))}
        </div>
      )}
      {(pageData?.pageData1 || pageData?.pageData2) && (
        <PageData pageData={pageData} />
      )}
      {pageData?.mapsrc && <Map src={pageData.mapsrc} />}
    </>
  );
};

export default Page;
