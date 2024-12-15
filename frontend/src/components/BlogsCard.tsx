import Avatar from "./Avatar";

interface BlogsCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogsCard = ({ authorName, title, content, publishedDate }:BlogsCardProps) => {
  return (
    <div className="border-b-[1px] p-4 border-slate-200 pb-4">
      <div className="flex">
        <Avatar size={8} name={authorName}/>
        <div className="font-medium text-sm pl-2 flex justify-center flex-col">{authorName}</div>
        <div className="pl-2 text-slate-600 flex justify-center flex-col">&#x2022;</div>
        <div className="pl-2 text-slate-700 text-sm flex justify-center flex-col">{publishedDate}</div>
      </div>
      <div className="text-xl pt-2 font-semibold">
        {title}
      </div>
      <div className="text-md font-thin">
        {content.substring(0, 100)}...
      </div>
      <div className="text-sm text-slate-400 pt-4 font-thin">
        {`${Math.ceil(content.length / 100)} minute(s) read`}
      </div>
    </div>
  )
}

export default BlogsCard  