import data from '@/data/blogData.json';
import Link from 'next/link';
import Style from './blogDetails.module.css';
const Page = ({ params }) => {
	const postDetails = data.find((post) => Number(post.id) == Number(params.post)); // fetching data from blogData.json file

	return (
		<>
			<h3 className="flex justify-center text-violet-700 text-xl tracking-wider pt-4">Blog Details</h3>
			<div className="flex flex-col items-center">
				<div className={Style.blogDetails}>
					<h1 className={Style.detailContent}>
						<span>Title: </span>
						{postDetails.title}
					</h1>
					<p className={Style.detailContent}>
						<span>Content: </span>
						{postDetails.content}
					</p>
					<p className={Style.detailContent}>
						<span>Date: </span>
						{postDetails.date}
					</p>
				</div>
				<div className="w-full h-full">
					<Link href="/blog">
						<button className="absolute btn btn-outline btn-secondary  bottom-2 right-2">
							Back to Blog List
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Page;
