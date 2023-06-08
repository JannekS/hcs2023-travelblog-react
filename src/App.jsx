function App() {
  return (
    <>
      <header className="sticky top-0 z-10 flex flex-row justify-between items-center w-full h-14 px-4 py-2 bg-amber-300">
        <h1 className="text-3xl font-bold font-handwriting text-orange-950">
          in the sand
        </h1>

        <div className="md:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <nav className="hidden md:flex md:flex-row md:space-x-2 list-none">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">New Post</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </nav>
      </header>
      <main className="flex flex-col min-h-screen w-full">
        <section className="flex flex-col justify-center items-center space-y-2 text-amber-50 text-4xl text-center  w-full h-screen max-h-[400px] md:max-h-screen lg:max-h-[800px] bg-[url('/footprints-sand.jpg')] bg-cover md:text-6xl md:space-y-3 2xl:h-[50vh] font-handwriting">
          <h2 className="font-bold">Footprints in the sand</h2>
          <p>are but temporary traces of our yourney</p>
          <p>in direct contact to the ground.</p>
          <p>That is our way to travel!</p>
        </section>

        <div className="flex flex-col lg:flex-row min-h-screen w-full">
          <section className="w-full lg:w-1/2 min-h-screen py-2 px-4 border-r-2 border-slate-300">
            <h2 className="sticky top-14 py-3 text-4xl font-bold font-title text-center text-orange-950 bg-white">
              Blog Post Previews
            </h2>
            <p className="font-opensans">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa non
              exercitationem fugiat unde ullam voluptatum dolorem omnis aliquam
              aperiam expedita adipisci, recusandae nesciunt quaerat impedit
              ipsum laborum, fugit voluptates cumque! Doloremque eligendi harum
              at odit possimus quod veritatis ipsam temporibus, fuga sapiente ab
              praesentium commodi eius, illum illo error quae delectus
              perspiciatis doloribus ratione debitis nesciunt. Ratione, aut.
              Saepe, eos? Possimus aspernatur, ut ratione, beatae, veritatis
              temporibus minus iste quidem iusto cum vitae? Facere cumque
              perferendis sint eligendi, odit dolorum omnis ea repellendus, quam
              ullam, perspiciatis animi eius quasi odio. Maxime consectetur quos
              laudantium quaerat, saepe sint beatae architecto fuga perferendis
              dolores deleniti ad consequatur iure placeat fugiat optio
              assumenda expedita, aliquid ex pariatur quisquam nobis qui? Rerum,
              non sint? Nesciunt harum et vel autem laboriosam illum quisquam
              saepe minus quasi at labore provident eligendi eos temporibus, aut
              id dignissimos, impedit maxime. Autem enim repellendus id
              perspiciatis perferendis est nam.
            </p>
          </section>
          <section className="sticky top-14 w-full lg:w-1/2 h-96 p-2 mb-4 overflow-hidden">
            <img
              src="/maps.jpg"
              alt=""
              className="object-cover w-full h-full"
            />
          </section>
        </div>
      </main>
      <footer className="flex flex-col md:flex-row items-center justify-center w-full px-4 py-3 bg-amber-200">
        <ul className="flex flex-row space-x-4 list-none">
          <li>Contact</li>
          <li>Credits</li>
          <li>Github</li>
          <li>another item</li>
        </ul>
      </footer>
    </>
  );
}

export default App;
