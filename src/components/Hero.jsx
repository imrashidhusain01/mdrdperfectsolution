
function Hero() {
  return (
    <section
      id="home"
      className="w-full overflow-hidden bg-white"
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1600px]
          grid-cols-1
          items-start
          gap-0
          p-0
          lg:grid-cols-2
        "
      >
        {/* LEFT IMAGE - TEXT BANNER */}
        <div className="w-full min-w-0 overflow-hidden">
          <img
            src="/images/hero/upper-banner.png"
            alt="MDRD Perfect Solution - Services"
            loading="eager"
            fetchPriority="high"
            className="
              block
              h-auto
              w-full
              max-w-full
              object-contain
            "
          />
        </div>

        {/* RIGHT IMAGE - SERVICE COLLAGE */}
        <div className="w-full min-w-0 overflow-hidden">
          <img
            src="/images/hero/lower-banner.png"
            alt="AC Repair, Home Appliances and Interior Work"
            loading="eager"
            className="
              block
              h-auto
              w-full
              max-w-full
              object-contain
            "
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
