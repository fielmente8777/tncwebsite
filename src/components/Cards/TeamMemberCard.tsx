import Image from "next/image";

interface Props {
  name: string;
  src: string;
  post?: string;
}
const TeamMemberCard: React.FC<Props> = ({ name, src, post }) => {
  return (
    <div className="w-full relative aspect-[4/5]">
      <Image src={src} alt={name} fill className="object-cover" />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-end ">
        <h3 className="md:text-2xl font-bold text-white">{name}</h3>
        {post && <p className="text-white max-md:text-sm">{post}</p>}
      </div>
    </div>
  );
};

export default TeamMemberCard;
