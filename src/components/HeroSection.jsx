function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center space-y-2 text-amber-50 text-4xl text-center  w-full h-screen max-h-[400px] md:max-h-screen lg:max-h-[800px] bg-[url('/footprints-sand.jpg')] bg-cover md:text-6xl md:space-y-3 2xl:h-[50vh] font-handwriting">
      <h2 className="font-bold">Footprints in the sand</h2>
      <p>are but temporary traces of our yourney</p>
      <p>in direct contact to the ground.</p>
      <p>That is our way to travel!</p>
    </section>
  );
}

export default HeroSection;