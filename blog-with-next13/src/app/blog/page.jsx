import Link from 'next/link';
import Style from './blogPage.module.css';
const Blog = () => {
	return (
		<>
			<div className="grid grid-cols-4 gap-5">
				<div className="">
					<h1 className="flex justify-center py-5 border-b-2 border-sky-700 text-2xl tracking-wider text-emerald-900">
						Blog List
					</h1>
					<ul className={Style.blogList}>
						<li className="p-1">
							<Link href="/blog/1">Blog 1</Link>
						</li>
						<li className="p-1">
							<Link href="/blog/2"> Blog 2</Link>
						</li>
						<li className="p-1">
							<Link href="/blog/3">Blog 3</Link>
						</li>
						<li className="p-1">
							<Link href="/blog/4">Blog 4</Link>
						</li>
						<li className="p-1">
							<Link href="/blog/5">Blog 5</Link>
						</li>
					</ul>
				</div>
				<div className="col-span-3 ">
					<h1 className="flex justify-center py-5 border-b-2 border-sky-700 text-2xl tracking-wider text-emerald-900">
						Blog Details
					</h1>
				</div>
			</div>
		</>
	);
};

export default Blog;
