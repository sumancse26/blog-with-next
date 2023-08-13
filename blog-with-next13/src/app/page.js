// import Image from 'next/image'
import Link from 'next/link';
export default function Home() {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content text-center">
				<div className="max-w-xl text-tomato-700">
					<h1 className="text-5xl font-bold">Welcome to my blog site</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
						quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
					<Link href="/blog">
						<button className="btn btn-secondary tracking-widest">Go Blog Page</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
