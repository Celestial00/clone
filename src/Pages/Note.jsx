export default function Note() {
  return (
    <>
      {/* Title text */}

      <div className="">
        <h1 className=" text-5xl lg:text-8xl font-bold mt-20 text-[#181818] mb-2 dark:text-white">
          Ultimate guide to the App Router in Next.js 13
        </h1>
        <p className="lg:text-2xl text-lg text-[#80808080]">
          17th Jul 2023 –– 7 min read
        </p>
      </div>

      <div className=" flex justify-center w-full  mt-20 ">
        <img src="Router.png" alt="" srcset="" className="w-full lg:h-[700px] h-[200px] " />
      </div>

      <div className=" w-full max-w-7xl mx-auto">
        <div className="dark:text-white text-[#181818] lg:text-xl text-sm  my-20">
          <p className="mb-4">
            The App Router in Next.js is responsible for handling client-side
            routing within your application. It provides a declarative and
            intuitive way to define routes, handle navigation, and manage
            dynamic URLs. Here are some key features of the Next.js App Router:
          </p>
          <br />
          <ol className="list-decimal list-inside  pl-6 space-y-4  mb-4">
            <li>
              <strong>File-based Routing:</strong> Next.js uses a file-based
              routing system, where each page of your application is represented
              by a file in the "pages" directory. The name of the file
              determines the corresponding URL path. For example, a file named
              "about.js" in the "pages" directory will be accessible at the
              "/about" URL path.
            </li>

            <li>
              <strong>Dynamic Routes:</strong> Next.js allows you to create
              dynamic routes by using brackets <code>[ ]</code>
              in the file name or directory structure. For example, a file named
              "[id].js" can match routes like "/posts/1" or "/users/john". The
              dynamic segments are accessible as parameters in the page
              component and can be used to fetch data or customize the content.
            </li>
            <li>
              <strong>Link Component:</strong> Next.js includes the{" "}
              <code>{`<Link>`}</code> component, which enables client-side
              navigation between pages. It ensures that the page transition is
              handled gracefully, without full page reloads. You can use the{" "}
              <code>{`<Link>`}</code> component to create anchor tags (
              <code>{`<a>`}</code>) with client-side routing behavior.
            </li>
            <li>
              <strong>Programmatic Navigation:</strong> Next.js also offers
              programmatic navigation through the useRouter hook. It allows you
              to access the router object, which provides methods like{" "}
              <code>push()</code>, <code>replace()</code>, and{" "}
              <code>back()</code> to navigate programmatically within your
              application.
            </li>
            <li>
              <strong>Code Splitting:</strong> Next.js automatically performs
              code splitting, which means that only the JavaScript and CSS
              needed for the current page are loaded. This helps optimize the
              initial page load time and improves performance.
            </li>
          </ol>
          <br />

          <p>
            These are some of the fundamental features and concepts of the App
            Router in Next.js. However, it's important to note that newer
            versions of Next.js may introduce additional enhancements or changes
            to the App Router. To stay updated on the latest features and
            changes, I recommend referring to the official Next.js documentation
            or the Next.js GitHub repository.
          </p>
        </div>
      </div>

      <p className="text-[#80808078] my-10">Last updated: 20/08/2023</p>
    </>
  );
}
