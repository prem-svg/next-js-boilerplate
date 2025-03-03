'use client';


export default function ErrorPage({
	error,
}: {
	error: Error & { digest?: string };
}) {

	return (
		<div className='min-h-screen flex flex-col items-center justify-center gap-8 p-4 bg-background'>
			<p className='text-h6 font-mont'>Something went wrong!</p>
			<p className='text-body1 font-mont'>
				We apologize for the inconvenience. Our team has been notified and is
				working on the issue.
			</p>
			<pre className='font-mono text-sm text-left whitespace-pre-wrap break-words text-foreground/90'>
				{error.message}
			</pre>
		</div>
	);
}
