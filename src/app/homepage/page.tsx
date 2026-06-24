"use client"
export default function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <section className="container-custom section-py flex flex-col items-center justify-center text-center">
        <h1
          className="text-5xl md:text-6xl font-bold my-10 leading-tight max-w-4xl"
          style={{ color: "var(--color-1)" }}
        >
          Transform Ideas Into Reality, Faster
        </h1>
        <p
          className="text-lg mb-8 max-w-2xl leading-relaxed"
          style={{ color: "var(--color-6)" }}
        >
          Streamline your workflow with intelligent automation. Collaborate
          seamlessly with your team and ship products 10x faster than ever
          before.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-8 py-3 text-white rounded-lg font-semibold transition-fast"
            style={{ backgroundColor: "var(--color-5)", cursor: "pointer" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Start Free Trial
          </button>
          <button
            className="px-8 py-3 rounded-lg font-semibold transition-fast border-2"
            style={{
              borderColor: "var(--color-9)",
              color: "var(--color-1)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Watch Demo
          </button>
        </div>
      </section>
    </>
  );
}
