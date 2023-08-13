import data from '@/data/blogData.json';
import Image from 'next/image';
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
						{data.map((item, index) => (
							<li key={item.id} className="p-1">
								<Link href={`/blog/${item.id}`}>
									{index + 1}. {item.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="col-span-3 h-full w-full object-cover">
					<Image src="/4380.jpg" width={1000} height={1000} alt="Image" className="object-cover" />
				</div>
			</div>
		</>
	);
};

export default Blog;
